# 5th NLP4KGC Workshop Website

A modern, responsive website for the 5th Natural Language Processing for Knowledge Graph Construction (NLP4KGC) workshop at ISWC 2026.

## 📋 Overview

The 5th NLP4KGC workshop is scheduled for **October 25-26, 2026** at **The Nicolaus Hotel, Bari, Italy** as part of **ISWC 2026** (25th International Semantic Web Conference).

This repository contains a complete, modern HTML/CSS/JavaScript website built from scratch to replace the legacy Google Sites implementation.

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Fast & Lightweight**: Pure HTML5, CSS3, and vanilla JavaScript—no build process required
- **Accessible**: WCAG 2.1 compliant semantic markup
- **Modern Styling**: Bootstrap 5 CDN + custom CSS with smooth animations
- **Easy Maintenance**: Simple file structure, human-readable code
- **GitHub Pages Ready**: Automated deployment workflow included

## 📁 Project Structure

```
nlp4kgc-website/
├── index.html                 # Homepage
├── pages/
│   ├── cfp.html              # Call for Papers
│   ├── programme.html        # Workshop Schedule
│   ├── keynote.html          # Keynote Speaker Details
│   ├── team.html             # Organizers & Committee
│   └── previous.html         # Previous Workshop Editions
├── css/
│   └── style.css             # Custom styles
├── js/
│   └── main.js               # Vanilla JavaScript enhancements
├── .github/
│   └── workflows/
│       └── pages.yml         # GitHub Pages deployment
├── .gitignore
└── README.md                 # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nlp4kgc-website.git
   cd nlp4kgc-website
   ```

2. **Open in browser**
   - Double-click `index.html` or
   - Use any local server: `python -m http.server 8000`
   - Then visit `http://localhost:8000`

### No Build Process Needed
This is a static website—no npm, no webpack, no build steps. Just open the HTML files!

## 📄 Pages

| Page | Path | Purpose |
|------|------|---------|
| **Home** | `index.html` | Main landing page with overview and key dates |
| **Call for Papers** | `pages/cfp.html` | Submission guidelines, important dates, review process |
| **Programme** | `pages/programme.html` | Workshop schedule, timeline, venue information |
| **Keynote** | `pages/keynote.html` | Featured keynote speaker details (TBA) |
| **Team** | `pages/team.html` | Workshop chairs, program committee, advisory board |
| **Previous** | `pages/previous.html` | Links to 2nd and 3rd NLP4KGC editions |

## 🎨 Customization

### Update Content
All content is in HTML files. Simply edit:
- Text content: within `<h1>`, `<p>`, `<li>` tags, etc.
- Links: modify `href` attributes
- Images: add `<img>` tags (create an `images/` folder)

### Update Styling
Modify `css/style.css`:
- Root colors defined in `:root` variables
- Component-specific styles below
- Mobile responsive breakpoints at bottom

### Update JavaScript
Enhance interactivity in `js/main.js`:
- Currently handles navigation, smooth scroll, animations, mobile menu
- No dependencies—just vanilla JavaScript

## 🚢 Deployment

### Option 1: GitHub Pages (Recommended)

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch and `/root` folder
4. GitHub Actions will automatically deploy!

The included `.github/workflows/pages.yml` handles deployment automatically.

### Option 2: Other Hosting

Works with any static host:
- Netlify, Vercel, CloudFlare Pages
- AWS S3 + CloudFront
- Any web server

Just upload the files to the host's root directory.

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px  
- **Desktop**: > 768px

All layouts tested and optimized for these sizes.

## ♿ Accessibility

- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels where appropriate
- Color contrast meets WCAG AA standards
- Keyboard navigation throughout
- Mobile touch-friendly buttons (min 44x44px)

## 🔍 SEO

- Semantic markup for search engines
- Open Graph meta tags for social sharing
- Descriptive page titles and meta descriptions
- Mobile-friendly responsive design

## 📦 Dependencies

**Zero external dependencies** (except CDN):
- **Bootstrap 5 CSS**: From jsDelivr CDN
- **Bootstrap JS**: From jsDelivr CDN (for components)
- All other code is custom or included

## 🔒 Security

- No external scripts (except Bootstrap)
- No tracking or analytics code
- No form submissions to external services
- Static content only

## 🐛 Known Issues / TODO

- [ ] Add team member details to `pages/team.html`
- [ ] Update keynote speaker info when available
- [ ] Add CfP submission deadline alerts if still active
- [ ] Add speaker photos/bios (create `images/team/` folder)
- [ ] Integrate with actual EasyChair CfP system

## 📞 Contact & Support

For questions about:
- **Website**: See organizer contact info on `/pages/team.html`
- **Workshop**: See footer on any page
- **Submissions**: Visit [EasyChair](https://easychair.org/)

## 📄 License

This website is provided for the NLP4KGC Workshop. If you use parts of this design for your own workshop/conference, please provide attribution.

## 🔗 Related Links

- [3rd NLP4KGC (2024)](https://sites.google.com/view/3rdnlp4kgc/home)
- [2nd NLP4KGC (2023)](https://sites.google.com/view/2nd-nlp4kgc/home)
- [EasyChair](https://easychair.org/)
- [ICC Sydney](https://www.icc.com.au/)

---

**Last Updated**: March 1, 2026  
**Build Status**: ✅ Updated for ISWC 2026 • Ready for Deployment
