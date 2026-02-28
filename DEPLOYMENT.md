# GitHub Pages Deployment Guide

## 🚀 Quick Setup (5 minutes)

This website is ready to deploy to GitHub Pages with zero configuration.

---

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **New** → **New Repository**
3. Name it: `nlp4kgc-website` (or similar)
4. Description: `4th NLP4KGC Workshop Website`
5. Choose **Public** (required for free GitHub Pages)
6. ✅ **Create Repository**

---

## Step 2: Push Code to GitHub

### Using Git Command Line:

```bash
# Navigate to local project
cd c:\nlp4kgc\new

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: NLP4KGC website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/nlp4kgc-website.git

# Push to GitHub (creates main branch)
git branch -M main
git push -u origin main
```

### OR Using GitHub Desktop:

1. Open [GitHub Desktop](https://desktop.github.com)
2. **File** → **Clone Repository**
3. Paste: `https://github.com/YOUR_USERNAME/nlp4kgc-website.git`
4. **Clone**
5. Copy files to the cloned folder
6. **Current Repository** → **Changes** → **Commit to main**
7. **Publish repository**

---

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll left sidebar to **Pages**
4. Under "Build and deployment":
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` 
   - **Folder**: Select `/ (root)`
5. 💾 **Save**

✨ **Your site will deploy automatically!**

---

## Step 4: View Your Site

After 30-60 seconds:

1. Go back to **Settings** → **Pages**
2. Look for: "Your site is live at `https://YOUR_USERNAME.github.io/nlp4kgc-website`"
3. Click the link to view your live site!

---

## Custom Domain (Optional)

Want `nlp4kgc.org` instead of GitHub's domain?

1. **Settings** → **Pages** → **Custom domain**
2. Enter: `nlp4kgc.org`
3. Point DNS records to GitHub (GitHub will show instructions)
4. Wait 24 hours for DNS propagation

---

## Automated Deployment

The `.github/workflows/pages.yml` file in this repo automatically:
- Detects changes pushed to `main` branch
- Builds the static site
- Deploys to GitHub Pages
- Takes ~2-5 minutes

**No manual deploys needed!** Just push → automatic live update.

---

## Updating Content

After deployment, to update the site:

```bash
# Make changes locally in your editor

# Add, commit, and push
git add .
git commit -m "Update team info"
git push
```

Site updates live within 2-5 minutes!

---

## Troubleshooting

### Site Not Live After 10 Minutes?

1. **Check Actions tab**
   - Click **Actions** tab in GitHub
   - Look for failed workflow (red ✗)
   - Click to see error details

2. **Verify Pages Settings**
   - Settings → Pages
   - Confirm branch is `main`
   - Confirm folder is `/ (root)`

3. **Clear Browser Cache**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### CNAME Errors (Custom Domain)?

If using custom domain:
1. Go to **Settings** → **Pages**
2. Remove custom domain
3. Re-add it (this regenerates the CNAME file)
4. Wait 24 hours for DNS

---

## Advanced: Automatic Builds

This repo includes **GitHub Actions** workflow that:
- Runs on every push to `main`
- Automatically builds and deploys
- Sends notifications if deployment fails

View status anytime:
1. Click **Actions** tab in your GitHub repo
2. See all deployment runs and status

---

## Performance Tips

### Optimize Images (If Added)
```bash
# Using ImageMagick
magick convert image.png -resize 1200x800 optimized.png
```

### Test Locally Before Pushing
```bash
# Start local server (Python 3)
python -m http.server 8000

# Open browser to http://localhost:8000
```

### Monitor Build Times
- Average build: **20-30 seconds**
- If takes > 5 minutes: check GitHub status page

---

## Rollback to Previous Version

If something breaks, revert to previous commit:

```bash
# View commit history
git log --oneline

# Revert to specific commit
git revert COMMIT_HASH

# Push changes
git push
```

---

## Monitoring & Analytics

### GitHub Insights
- **Insights** tab shows traffic & referrers
- See which pages are most visited

### Add Analytics (Premium)
To add Google Analytics or similar:
1. Create Google Analytics account
2. Add tracking code to `<head>` in each HTML file
3. Deploy

---

## Security Checklist

- ✅ No sensitive data in code
- ✅ No API keys exposed
- ✅ Repository is public (appropriate for static site)
- ✅ No user submissions to analyze
- ✅ HTTPS automatic (GitHub provides SSL)

---

## Support

**Need help?**

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/)

---

## Next Steps

1. ✅ Deploy to GitHub Pages (this guide)
2. 👉 Add team member details to `pages/team.html`
3. 👉 Update keynote speaker when available
4. 👉 Customize colors in `css/style.css`
5. 👉 Add logo/images (create `images/` folder)
6. 👉 Link real EasyChair submission system in cfp.html

---

**Deployment Status**: 🟢 Ready to Deploy  
**Last Updated**: February 28, 2026
