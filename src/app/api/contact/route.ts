import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact Form API Route
 * 
 * POST /api/contact
 * 
 * Request body:
 * {
 *   name: string,
 *   email: string,
 *   message: string
 * }
 * 
 * Example usage:
 * const response = await fetch('/api/contact', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({
 *     name: 'John Doe',
 *     email: 'john@example.com',
 *     message: 'Hello Aman!'
 *   })
 * });
 */

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

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

    // TODO: Send email using your preferred service
    // Examples:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - AWS SES
    
    console.log('Contact form submission:', { name, email, message });

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
