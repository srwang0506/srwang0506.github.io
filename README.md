#  🎓 Academic Homepage

A modern, responsive, and feature-rich academic personal homepage built with Vite, JavaScript, and CSS3.

##  ✨ Features

-  **Modern Design**  480px fixed sidebar with scroll-spy navigation
-  **Dark Mode**  Theme toggle with localStorage persistence
-  **Responsive**  Adapts to mobile, tablet, and desktop
-  **Publication Management**  Images, author symbols (, *), venue badges, links
-  **Customizable**  CSS variables for easy styling
-  **Fast Build**  Vite + ES Modules

##  📋 Sections

- About & Research Interests
- News & Announcements
- Publications with Thumbnails
- Honors & Awards
- Education & Experience
- Miscellaneous

##  🚀 Quick Start

### Prerequisites
- Node.js v14+ and npm v6+

### Installation
```bash
cd srwang0506.github.io
npm install
npm run dev
```

Development server runs at http://localhost:5174/

### Build
```bash
npm run build
```

Output: dist/ directory (ready to deploy)

##  🌐 Deployment Options

### 1 GitHub Pages
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push origin main
```
Then enable Pages in repository settings.

### 2 Netlify
- Connect repo  Set build: npm run build, publish: dist  Deploy

### 3 Vercel
- Connect repo  Set build: npm run build, output: dist  Deploy

### 4 Self-Hosted
- Build and upload dist/ folder to your server
- Configure web server to serve index.html for all routes

##  ⚙️ Customization

### Update Profile
Edit data/homepage.js:
```javascript
{
  name: "Your Name",
  title: "Your Title",
  about: ["Bio paragraph..."],
  interests: ["Research interest..."],
  links: [{ text: "Email", url: "mailto:...", icon: "fa-envelope" }]
}
```

### Add Content
- **News**  data/news.js
- **Publications**  data/publications.js (with images)
- **Education**  data/educations.js
- **Experience**  data/experience.js
- **Honors**  data/honors.js
- **Misc**  data/misc.js

### Publication Images
Place images in img/publications/ and add to publication data:
```javascript
{ image: "img/publications/1.jpg" }
```

### Avatar
Replace icon/icon.jpg (200200 px recommended)

### Colors
Edit CSS variables in style.css:
```css
--primary: #3b82f6;
--accent: #8b5cf6;
--text-main: #1e293b;
```

##  📁 Project Structure

```
.
 index.html
 main.js
 style.css
 data/
    homepage.js
    news.js
    publications.js
    educations.js
    experience.js
    honors.js
    misc.js
 icon/icon.jpg
 img/publications/
 package.json
```

##  Tech Stack

| | |
|---|---|
| **Frontend** | HTML5, CSS3, JavaScript (ES Modules) |
| **Build Tool** | Vite |
| **Fonts** | Google Fonts (Outfit, Inter, JetBrains Mono) |
| **Icons** | Font Awesome 6.4 |
| **Styling** | CSS Variables, Flexbox, Grid |

##  🌍 Browser Support

 Chrome/Edge 90+
 Firefox 88+
 Safari 14+
 Mobile browsers

##  💡 Tips

- Use 180120px images for publication thumbnails
- Follow existing data structure for consistent rendering
- Update footer date in index.html
- Test in both light and dark modes
- Test responsiveness on mobile

##  📄 License

Open for personal and educational use.
