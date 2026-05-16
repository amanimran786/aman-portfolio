# Aman Imran's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Mode Support** - Built-in theme switching capability
- **Fast Performance** - Optimized with Next.js and Turbopack
- **SEO Friendly** - Proper metadata and semantic HTML
- **Multiple Pages** - Home, About, Projects, and Skills sections

## 📋 Pages

- **Home** - Hero section with featured projects
- **About** - Personal background and focus areas
- **Projects** - Showcase of featured and other projects
- **Skills** - Technical skills organized by category

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm
- **Linting:** ESLint

## 📦 Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/amanimran786/aman-portfolio.git
cd aman-portfolio

# Install dependencies
npm install

# Configure GitHub sync (optional token recommended)
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

## 🔐 Environment Variables

Create `.env.local` and configure:

```bash
# Optional: defaults to amanimran786
GITHUB_USERNAME=amanimran786

# Optional but recommended for higher API rate limits
GITHUB_TOKEN=your_github_personal_access_token
```

- Without `GITHUB_TOKEN`: public GitHub API limits are lower and can trigger temporary fallback mode.
- With `GITHUB_TOKEN`: higher rate limit and more stable live sync.
- Fallback behavior: if GitHub is temporarily unavailable, the app serves the last successful cached snapshot when possible.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── projects/page.tsx     # Projects page (live GitHub data)
│   ├── skills/page.tsx       # Skills page
│   ├── api/contact/route.ts  # Contact API route (validation + rate limiting)
│   ├── layout.tsx            # Root layout + metadata
│   └── globals.css           # Global styles & theme
├── components/               # Navigation, Footer, ThemeProvider, ParticleField, etc.
├── lib/
│   ├── github.ts             # GitHub API sync + fallback
│   └── links.ts              # Shared contact/profile links
└── types/github.ts           # GitHub & portfolio types
```

## 🚢 Deployment to Vercel (Free & Recommended)

### Step 1: Create GitHub Repository

```bash
# Initialize GitHub repo (if not already done)
git remote add origin https://github.com/amanimran786/aman-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Select your `aman-portfolio` repository
5. Click "Deploy"

**Your site will be live in minutes!** 🎉

### Step 3: Add Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 📝 Customization

### Update Your Information

- **Contact email / LinkedIn / GitHub / resume:** Edit the shared constants in `src/lib/links.ts`
- **Featured projects:** Projects sync live from GitHub — choose which repos to feature via `FEATURED_REPO_NAMES` in `src/lib/github.ts`
- **Skills:** Update skills in `src/app/skills/page.tsx`

## 🎨 Styling

The portfolio uses Tailwind CSS v4 (CSS-first configuration). To customize:

1. Edit the CSS variables and `@theme` block in `src/app/globals.css` for colors and fonts
2. Modify component files for styling changes
3. Use standard Tailwind utilities throughout

## 🌐 MCP Server Integration (Optional)

To add backend functionality, you can integrate a Model Context Protocol (MCP) server for:
- Dynamic project data
- Contact form submissions
- Blog functionality
- Analytics

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

- **Email:** abdullahimran234@gmail.com
- **LinkedIn:** [amanimran](https://www.linkedin.com/in/amanimran/)
- **GitHub:** [amanimran786](https://github.com/amanimran786)

---

Built with ❤️ by Aman Imran
