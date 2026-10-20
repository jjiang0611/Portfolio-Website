# J. Jiang — Data Analyst Portfolio

Personal portfolio site: skills, projects, experience, and education, written for recruiters and hiring managers.

Plain HTML, CSS, and a little JavaScript. No build step.

## Structure

```
index.html                     Home page (hero, about, skills, projects, experience, education, contact)
projects/congestion-pricing.html   Case study: NYC congestion pricing analysis
projects/pos-system.html           Case study: point-of-sale system
assets/css/style.css           All styles
assets/js/main.js              Mobile menu, active nav link, resume-button check
assets/img/                    Charts, diagram, favicon, link-preview image
```

## Adding your resume

Save your resume as **`assets/resume.pdf`** and commit it. The "Download resume" buttons
stay hidden until that file exists, so visitors never see a broken link.

## Publishing on GitHub Pages

1. Merge this branch into `main`.
2. In the repo on GitHub: **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**, Branch: **`main`**, folder **`/ (root)`**, then **Save**.
4. After a minute the site is live at <https://jjiang0611.github.io/Portfolio-Website/>.

## Preview locally

```
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
