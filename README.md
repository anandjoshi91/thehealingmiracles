# The Healing Miracles

A beautiful, calming website for Parth Katira's Reiki and energy healing practice.

## Overview

This is a static website designed for GitHub Pages hosting. It features:

- **Modern, responsive design** with a calming color palette
- **7 pages**: Home, About, Services, Testimonials, Resources, FAQ, Contact
- **WhatsApp integration** for easy client communication
- **Daily affirmations** that rotate automatically
- **Smooth animations** and mobile-friendly navigation

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage with hero, services preview, testimonials |
| `about.html` | About Parth Katira, philosophy, qualifications |
| `services.html` | All healing services with descriptions |
| `testimonials.html` | Client success stories |
| `resources.html` | Articles, affirmations, meditation guide |
| `faq.html` | Frequently asked questions |
| `contact.html` | Contact form, WhatsApp integration |

## Local Development

### Quick Start

```bash
# Start local server
./serve.sh

# Or manually with Python
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Name the repository `thehealingmiracles` (or any name you prefer)
3. Make it **Public**
4. Don't initialize with README (we already have one)

### Step 2: Push the Code

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: The Healing Miracles website"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/thehealingmiracles.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/thehealingmiracles/`

### Step 4: Connect Your Domain (thehealingmiracles.com)

1. In GitHub Pages settings, enter `thehealingmiracles.com` as custom domain
2. In GoDaddy DNS settings, add:
   - **A Records** pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME Record** for `www`:
     ```
     www -> YOUR_USERNAME.github.io
     ```

3. Wait for DNS propagation (up to 48 hours)
4. Enable "Enforce HTTPS" in GitHub Pages settings

## Customization

### Colors

Edit `css/styles.css` and modify the CSS variables:

```css
:root {
  --primary: #7C9A92;        /* Sage Green */
  --secondary: #B8A9C9;      /* Soft Lavender */
  --accent: #E8B4BC;         /* Blush Pink */
  --background: #F9F7F4;     /* Warm White */
}
```

### WhatsApp Number

Find and replace `918806912333` with the new number (without + sign).

### Content

Edit the HTML files directly. All content is in plain HTML for easy editing.

## File Structure

```
thehealingmiracles/
├── index.html          # Homepage
├── about.html          # About page
├── services.html       # Services page
├── testimonials.html   # Testimonials page
├── resources.html      # Resources/Blog page
├── faq.html            # FAQ page
├── contact.html        # Contact page
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Image assets
├── serve.sh            # Local development script
└── README.md           # This file
```

## Contact

**Parth Katira**
WhatsApp: +91 88069 12333
Website: https://thehealingmiracles.com

---

Made with 💜 and healing energy
