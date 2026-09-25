# Ehsan Mahnomaye Aghdam — Developer Resume

A single-page developer resume site with a dark, terminal-inspired design. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

**Live preview:** _add your GitHub Pages / hosting link here once deployed_

## Features

- Terminal-window UI with a tabbed layout (about, skills, experience, projects, contact)
- Responsive, mobile-friendly layout
- Profile photo slot with an initials fallback
- No dependencies beyond a Google Font (JetBrains Mono)

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript (no frameworks)

## Project Structure

```
resume-site/
├── index.html   # Page markup and content
├── style.css    # All styling
├── script.js    # Tab-switching logic
└── README.md
```

## Getting Started

No build tools or installation required.

1. Clone the repository:
   ```bash
   git clone https://github.com/EhsanMNA/resume-site.git
   cd resume-site
   ```
2. Open `index.html` directly in a browser, or serve it locally:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

## Customizing

- **Content:** edit the text directly inside `index.html` (name, role, about, skills, experience, projects, contact).
- **Profile photo:** replace the `<span class="initials">EM</span>` element inside the `.avatar` div with:
  ```html
  <img src="your-photo.jpg" alt="Ehsan Mahnomaye Aghdam">
  ```
- **Styling:** colors, fonts, and spacing are controlled by CSS custom properties at the top of `style.css` (`:root { ... }`).
- **Sections:** each resume section is a `<section class="panel">` block; add or remove a matching `<button class="tab">` in the nav to add/remove sections.

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)` folder.
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/`.

## Contact

- Email: [ehsanmahnoma84@gmail.com](mailto:ehsanmahnoma84@gmail.com)
- GitHub: [github.com/EhsanMNA](https://github.com/EhsanMNA)
- Phone: +98 993 449 7835

## License

Feel free to fork and adapt this template for your own resume.
