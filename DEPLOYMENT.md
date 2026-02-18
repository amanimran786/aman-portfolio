# 🚀 Deployment Guide

This guide walks you through deploying your portfolio to Vercel for free.

## Prerequisites

- GitHub account
- Vercel account (free)
- Git installed locally

## Step 1: Push to GitHub

### Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **New repository**
3. Name it `aman-portfolio`
4. Add description: "My personal portfolio website"
5. Choose **Public** (so it's visible to everyone)
6. Click **Create repository**

### Push Your Code

```bash
# Navigate to your project
cd /Users/truthseeker/aman-portfolio

# Add GitHub remote
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/aman-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push code
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** → **Continue with GitHub**
3. Authorize Vercel to access your GitHub
4. Click **New Project**
5. Select your `aman-portfolio` repository
6. Click **Deploy**

**Your site will be live in ~1-2 minutes!** 🎉

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd /Users/truthseeker/aman-portfolio

# Deploy
vercel

# Follow the prompts and confirm deployment
```

## Step 3: View Your Live Site

After deployment, Vercel will provide you with:
- **Default URL:** `https://aman-portfolio-xxx.vercel.app`
- You can visit this immediately in your browser

## Step 4: Add Custom Domain (Optional)

### Using a Domain You Own

1. Go to your Vercel project dashboard
2. Click **Settings** → **Domains**
3. Click **Add Domain**
4. Enter your custom domain (e.g., `aman-portfolio.com`)
5. Update your domain's DNS settings:
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the DNS records shown in Vercel
   - Wait 24-48 hours for DNS propagation

## Step 5: Automatic Deployment

From now on, **every time you push to GitHub:**

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Vercel will **automatically rebuild and deploy** your changes! ✨

## Environment Variables (If Needed)

To add API keys or sensitive data:

1. Go to your Vercel project
2. Click **Settings** → **Environment Variables**
3. Add your variables
4. Redeploy your project

## Troubleshooting

### Build Fails

```bash
# Check build locally
npm run build

# If it fails, fix the error and try again
npm run dev
```

### Site Not Updating

1. Hard refresh your browser (`Cmd + Shift + R` on Mac)
2. Check deployment status in Vercel dashboard
3. Clear Vercel cache: Project Settings → Redeploy

### Custom Domain Not Working

1. Wait 24-48 hours for DNS propagation
2. Verify DNS records in your domain registrar
3. Check Vercel domain settings

## Adding Email Functionality

To handle contact form submissions, integrate an email service:

### Option 1: Resend (Recommended for Next.js)

```bash
npm install resend
```

Then update `src/app/api/contact/route.ts` with:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In your POST handler:
await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: 'aman.imran@sjsu.edu',
  subject: `New message from ${name}`,
  html: `<p>${message}</p><p>From: ${email}</p>`,
});
```

### Option 2: SendGrid

```bash
npm install @sendgrid/mail
```

### Option 3: Nodemailer (Self-hosted)

```bash
npm install nodemailer
```

## Monitoring & Analytics

### Enable Vercel Analytics

1. Go to your Vercel project
2. Click **Analytics**
3. Click **Enable**

This tracks:
- Page views
- Performance metrics
- Error tracking

## Next Steps

- ✅ Update your GitHub profile link in `src/components/Footer.tsx`
- ✅ Add actual project links
- ✅ Integrate email service for contact form
- ✅ Set up Google Analytics (optional)
- ✅ Add a custom domain

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Pages Alternative:** https://pages.github.com

---

**Your portfolio is now live! 🎉**

Share your portfolio link and start getting noticed!
