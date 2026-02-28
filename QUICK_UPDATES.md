# Quick Reference - Common Updates

This guide shows how to make common updates to the website.

---

## 🎨 Change Colors

Edit `css/style.css`, modify the `:root` variables at the top:

```css
:root {
    --nlp-primary: #0d6efd;      /* Change this to new color */
    --nlp-dark: #212529;         /* Header/footer color */
    --nlp-light: #f8f9fa;        /* Light backgrounds */
    --nlp-gray: #6c757d;         /* Text */
}
```

**Get color hex codes from**: [Color-Hex.com](https://www.color-hex.com/)

---

## 👥 Update Team Members

Edit `pages/team.html`:

### Add a new chair:
Replace in the "Workshop Chairs" section:
```html
<!-- OLD -->
<h5 class="card-title mb-1">Chair 1</h5>
<p class="text-muted small mb-3">University/Organization</p>

<!-- NEW -->
<h5 class="card-title mb-1">Dr. Jane Smith</h5>
<p class="text-muted small mb-3">University of Sydney</p>
```

### Add committee members:
In the "Program Committee" section, find:
```html
<li class="list-group-item ps-0">• Committee Member 1</li>
```

And update to:
```html
<li class="list-group-item ps-0">• Dr. John Doe (MIT)</li>
<li class="list-group-item ps-0">• Prof. Sarah Brown (Stanford)</li>
```

---

## 📅 Update Important Dates

Edit `index.html`, find the "Important Dates" section:

```html
<p class="display-6 text-primary fw-bold">Jan 20-26</p>
```

Change the dates as needed. Also update in `pages/cfp.html`:

```html
<tr>
    <td class="fw-bold">Paper Submission Deadline</td>
    <td>January 20-26, 2026</td>  <!-- Update this -->
</tr>
```

---

## 🎤 Add Keynote Speaker Info

Edit `pages/keynote.html`, replace:

```html
<!-- Current (TBA) -->
<div class="alert alert-info" role="alert">
    <h4 class="alert-heading">Speaker Announcement Coming Soon</h4>
    <p class="mb-0">...</p>
</div>

<!-- With this when speaker is known -->
<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Keynote Speaker</h4>
    <h5>Dr. Jane Smith</h5>
    <p>Distinguished Professor, University Name</p>
    <p class="mb-0">
        Dr. Smith will speak on: "The Future of NLP in Knowledge Graph Construction"
    </p>
</div>
```

---

## 📊 Update Programme Schedule

Edit `pages/programme.html` in the timeline section.

Change times:
```html
<!-- Current -->
<h5 class="fw-bold">13:30 - 13:40</h5>

<!-- To new time -->
<h5 class="fw-bold">14:00 - 14:10</h5>
```

Update session names:
```html
<!-- Current -->
<h4 class="mb-2">Opening Remarks</h4>

<!-- To new name -->
<h4 class="mb-2">Welcome & Keynote</h4>
```

---

## 📝 Update Call for Papers

Edit `pages/cfp.html`:

### Change submission deadline:
```html
<tr>
    <td class="fw-bold">Paper Submission Deadline</td>
    <td>January 20-26, 2026</td>  <!-- Change dates here -->
</tr>
```

### Add topics:
```html
<li>Entity Recognition and Linking from Text</li>
<li>Your New Topic Here</li>  <!-- Add your topic -->
```

### Update review criteria:
```html
<li>Technical soundness and novelty</li>
<li>Your new criteria</li>  <!-- Add your criterion -->
```

---

## 🔗 Add External Links

All links in HTML look like:
```html
<a href="https://example.com" target="_blank">Link Text</a>
```

- `href`: The URL to link to
- `target="_blank"`: Opens in new tab
- `Link Text`: What users see and click

Example - Update EasyChair link:
```html
<!-- Current -->
<a href="https://easychair.org/" target="_blank">Go to EasyChair →</a>

<!-- Update to your conference's EasyChair page -->
<a href="https://easychair.org/conferences/?conf=nlp4kgc2026" target="_blank">
    Submit to EasyChair →
</a>
```

---

## 🖼️ Add Images

### Create image folder:
1. Create folder `images/` in website root
2. Add image files (PNG, JPG, WebP)

### Add team photo:
```html
<div class="avatar-placeholder bg-primary mx-auto mb-3" 
     style="width: 80px; height: 80px; border-radius: 50%;"></div>

<!-- Replace with -->
<img src="../images/team/jane-smith.jpg" 
     class="rounded-circle mx-auto mb-3" 
     style="width: 80px; height: 80px; object-fit: cover;"
     alt="Dr. Jane Smith">
```

### Optimize images:
Keep images under 200KB each for fast loading.

---

## ℹ️ Update Footer Info

Edit any HTML file, find the footer:

```html
<footer class="bg-dark text-light py-4 mt-5">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mb-4 mb-md-0">
                <h5>4th NLP4KGC Workshop</h5>
                <p class="text-muted">Your workshop description</p>
                <p class="text-muted small">April 28, 2026 • ICC Sydney • Room C4.10</p>
            </div>
```

Update dates, location, and description as needed.

---

## 🔗 Update Navigation Links

All pages have a navbar at the top:
```html
<li class="nav-item"><a class="nav-link" href="../index.html">Home</a></li>
<li class="nav-item"><a class="nav-link" href="cfp.html">Call for Papers</a></li>
```

Change link text or URLs as needed.

---

## 🎨 Change Hero Gradient

Edit `css/style.css`, find `.hero-section`:

```css
.hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* 
       #667eea = purple-blue
       #764ba2 = darker purple
       Change these hex codes to your colors
    */
}
```

---

## 📱 Adjust Mobile Breakpoints

Edit `css/style.css` at the bottom for responsive adjustments:

```css
@media (max-width: 768px) {
    .hero-section h1 {
        font-size: 2rem;  /* Change size for mobile */
    }
}
```

---

## ✏️ Edit Page Text

### Find text in HTML:
```html
<p>This is the text I want to change</p>
```

### Update to:
```html
<p>This is my new text</p>
```

**Tip**: Use Ctrl+F to search and replace quickly in your editor.

---

## 🔍 Add Google Analytics

To track website traffic, add to `<head>` of each page:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your Google Analytics ID.

---

## 📝 Add Page Content Within Existing Structure

The website has a standard structure:
```html
<header>Navigation</header>
<main>
    <h1>Page Title</h1>
    <section>Content sections here</section>
</main>
<footer>Footer</footer>
```

Add content within `<main>` using these common elements:

```html
<!-- Heading -->
<h2>Section Title</h2>

<!-- Paragraph -->
<p>Your text here</p>

<!-- List -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<!-- Card -->
<div class="card mb-3">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Card content</p>
    </div>
</div>

<!-- Button -->
<a href="link" class="btn btn-primary">Button Text</a>
```

---

## 🚀 Publish Changes

After editing files:

```bash
# View changes locally
# Open the HTML file in browser to preview

# Commit and push to GitHub
git add .
git commit -m "Update team member details"
git push

# Site updates live in 2-5 minutes!
```

---

## 🐛 Common Issues

### Links not working?
- Check relative paths: `pages/cfp.html` (if in root) vs `../pages/cfp.html` (if in a folder)
- Use `/` for subfolders, NOT backslashes

### Styling looks wrong?
- Clear browser cache: Ctrl+Shift+R
- Check CSS file is linked: `<link rel="stylesheet" href="css/style.css">`

### Mobile menu not working?
- Check Bootstrap JS is loaded: `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>`

### Want to undo a change?
- Use Git: `git revert COMMIT_ID`
- Or manually revert the change you made

---

## 📖 More Resources

- **HTML Basics**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS Basics**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **Bootstrap Components**: [Bootstrap Docs](https://getbootstrap.com/docs/5.0/components/)
- **Color Picker**: [Color-Hex.com](https://www.color-hex.com/)

---

## ✅ Before Publishing

Checklist before pushing changes live:

- [ ] Preview in browser (open HTML file)
- [ ] Check all links work
- [ ] Test on mobile (browser dev tools)
- [ ] Spell-check content
- [ ] Test form submissions (if any)
- [ ] Verify footer info is current
- [ ] Commit to Git: `git add . && git commit -m "description"`
- [ ] Push to GitHub: `git push`

---

**Last Updated**: February 28, 2026
