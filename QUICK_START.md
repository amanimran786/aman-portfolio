# Quick Start Guide

## 🎯 TL;DR - Deploy in 3 Steps

### Step 1: Push to GitHub
```bash
cd /Users/truthseeker/aman-portfolio
git remote add origin https://github.com/YOUR_USERNAME/aman-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project" → Select `aman-portfolio` → Click "Deploy"

### Step 3: Done! 🎉
Your site is live at the URL Vercel gives you!

---

## 📝 Making Changes

After deployment, to make changes:

```bash
# Make your edits in VS Code
# Then:
git add .
git commit -m "Update portfolio"
git push origin main

# Vercel automatically rebuilds and deploys!
```

---

## 📚 Documentation Files

- **README.md** - Project overview
- **DEPLOYMENT.md** - Full deployment guide
- **.github/copilot-instructions.md** - Copilot setup notes

---

## 🔧 Common Tasks

### Update Projects List
Edit: `src/app/projects/page.tsx`

### Update Skills
Edit: `src/app/skills/page.tsx`

### Update About Info
Edit: `src/app/about/page.tsx`

### Update Social Links
Edit: `src/components/Footer.tsx`

### Test Locally
```bash
npm run dev
# Visit http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

---

## ✨ Features You Have

✅ Dark mode support  
✅ Mobile responsive  
✅ Fast performance  
✅ SEO optimized  
✅ API routes ready  
✅ Contact form endpoint  
✅ Automatic deployments  

---

## 🚀 What's Next?

1. **Deploy to Vercel** (this guide)
2. **Add custom domain** (optional)
3. **Integrate email service** for contact form
4. **Add Google Analytics** (optional)
5. **Create blog section** (future feature)

---

## 💡 Pro Tips

- **Preview Changes:** Use `npm run dev` before pushing
- **Check Build:** Run `npm run build` to catch errors early
- **Fast Deployments:** Vercel deploys in ~1-2 minutes
- **Auto-scale:** Vercel handles traffic automatically (free tier included!)

---

## 🆘 Need Help?

- **Vercel Support:** https://vercel.com/support
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Help:** https://github.com/support

---

**You're all set! Your portfolio is production-ready! 🚀**
