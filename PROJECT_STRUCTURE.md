# 📁 Portfolio Project Structure

```
aman-portfolio/
├── 📄 DEPLOYMENT.md              # Full deployment guide
├── 📄 QUICK_START.md             # 3-step quick deploy
├── 📄 PORTFOLIO_READY.md         # Completion summary
├── 📄 README.md                  # Project overview
├── 📄 PROJECT_STRUCTURE.txt      # This file
├── 📄 package.json               # Dependencies & scripts
├── 📄 tsconfig.json              # TypeScript config
├── 📄 tailwind.config.ts         # Tailwind CSS config
├── 📄 next.config.ts             # Next.js config
├── 📄 postcss.config.mjs         # PostCSS config
├── 📄 eslint.config.mjs          # ESLint config
├── 📄 vercel.json                # Vercel deployment config
│
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📄 page.tsx           # Home page (/)
│   │   ├── 📄 layout.tsx         # Root layout with Navigation & Footer
│   │   ├── 📄 globals.css        # Global styles
│   │   │
│   │   ├── 📂 about/
│   │   │   └── 📄 page.tsx       # About page (/about)
│   │   │
│   │   ├── 📂 projects/
│   │   │   └── 📄 page.tsx       # Projects page (/projects)
│   │   │
│   │   ├── 📂 skills/
│   │   │   └── 📄 page.tsx       # Skills page (/skills)
│   │   │
│   │   └── 📂 api/
│   │       └── 📂 contact/
│   │           └── 📄 route.ts   # Contact form API (/api/contact)
│   │
│   └── 📂 components/
│       ├── 📄 Navigation.tsx     # Header navigation
│       └── 📄 Footer.tsx         # Footer with social links
│
├── 📂 mcp-server/                # Optional MCP backend
│   └── 📄 README.md              # MCP integration guide
│
├── 📂 public/
│   ├── 📄 favicon.ico
│   └── ...
│
└── 📂 node_modules/              # Dependencies (not committed)
```

## 📊 File Summary

### Pages (4 Total)
| File | Route | Purpose |
|------|-------|---------|
| `src/app/page.tsx` | `/` | Home page with hero & featured projects |
| `src/app/about/page.tsx` | `/about` | About section with background |
| `src/app/projects/page.tsx` | `/projects` | Project showcase |
| `src/app/skills/page.tsx` | `/skills` | Technical skills |

### Components (2 Total)
| File | Purpose |
|------|---------|
| `src/components/Navigation.tsx` | Header with navigation menu |
| `src/components/Footer.tsx` | Footer with social links |

### API Routes (1 Total)
| Route | Method | Purpose |
|-------|--------|---------|
| `/api/contact` | POST | Contact form submissions |

### Configuration Files
| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Tailwind CSS customization |
| `tsconfig.json` | TypeScript configuration |
| `next.config.ts` | Next.js settings |
| `postcss.config.mjs` | CSS processing |
| `eslint.config.mjs` | Code linting rules |
| `vercel.json` | Vercel deployment settings |

### Documentation Files
| File | Purpose |
|------|---------|
| `README.md` | Project overview & features |
| `QUICK_START.md` | 3-step deployment guide |
| `DEPLOYMENT.md` | Complete deployment instructions |
| `PORTFOLIO_READY.md` | Completion summary |

## 🎯 Key Directories

### `src/app/`
App Router structure - each folder becomes a route:
- `page.tsx` = route page
- `layout.tsx` = shared layout
- `route.ts` = API route

### `src/components/`
Reusable React components used across pages

### `src/mcp-server/`
Optional backend infrastructure for:
- Dynamic project data
- Contact form handling
- Blog functionality
- Analytics

## 📦 Node Modules

Created by `npm install`:
- **next** - React framework
- **react** - UI library
- **react-dom** - DOM rendering
- **tailwindcss** - Utility CSS
- **typescript** - Type safety
- **eslint** - Code quality
- And 355+ other packages

---

**Total Size:** ~500MB (with node_modules)  
**Committed Size:** ~50KB (git doesn't commit node_modules)  
**Production Size:** ~100KB (optimized bundle)
