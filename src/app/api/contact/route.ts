import { NextRequest, NextResponse } from 'next/server';

const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

declare global {
  var __contactRateLimiter: Map<string, number[]> | undefined;
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
  if (!globalThis.__contactRateLimiter) {
    globalThis.__contactRateLimiter = new Map<string, number[]>();
  }

  const now = Date.now();
  const attempts = globalThis.__contactRateLimiter.get(ip) ?? [];
  const recentAttempts = attempts.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (recentAttempts.length >= RATE_LIMIT_MAX_REQUESTS) {
    globalThis.__contactRateLimiter.set(ip, recentAttempts);
    return true;
  }

  recentAttempts.push(now);
  globalThis.__contactRateLimiter.set(ip, recentAttempts);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.toLowerCase().includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 415 }
      );
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body: unknown = await request.json();
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const {
      name: rawName,
      email: rawEmail,
      message: rawMessage,
    } = body as { name?: unknown; email?: unknown; message?: unknown };

    const name = typeof rawName === 'string' ? rawName.trim() : '';
    const email = typeof rawEmail === 'string' ? rawEmail.trim() : '';
    const message = typeof rawMessage === 'string' ? rawMessage.trim() : '';

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (
      name.length > MAX_NAME_LENGTH ||
      email.length > MAX_EMAIL_LENGTH ||
      message.length > MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json(
        { error: 'Input exceeds allowed length limits' },
        { status: 400 }
      );
    }

    // TODO: Send email using your preferred service
    // Examples:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - AWS SES
    
    console.log('Contact form submission received', {
      nameLength: name.length,
      emailDomain: email.split('@')[1] || 'unknown',
      messageLength: message.length,
    });

    // For now, just log and return success
    // In production, you'd integrate with an email service
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out! I will get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact - Health check
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Contact API is working',
  });
}
