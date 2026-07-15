# Rushil Sharma — Portfolio Website

Personal resume / portfolio site (black + soft purple). Static HTML/CSS/JS — ready for **GitHub Pages**.

**No marks or scores** are shown on the site (by design).

---

## Folder map (easy to edit)

```
RESUME/
├── index.html              ← Homepage structure (sections)
├── data/
│   └── content.js          ← ★ EDIT ALL TEXT HERE (name, bio, skills, projects…)
├── css/
│   └── styles.css          ← Colors, layout, theme tokens at the top
├── js/
│   ├── main.js             ← Renders homepage from content.js
│   └── project.js          ← Renders project detail pages
├── assets/
│   ├── portrait.svg        ← Hero graphic (swap for your photo if you want)
│   ├── favicon.svg
│   └── projects/           ← Project thumbnails (SVG)
├── projects/
│   ├── fuzzy-safety-margin.html
│   ├── nids.html
│   ├── guest-house.html
│   └── medical-hackathon.html
├── .nojekyll               ← Needed so GitHub Pages serves files as-is
└── README.md
```

---

## How to edit content later

### 1. Bio, skills, experience, achievements
Open **`data/content.js`** and change the `SITE` object.

Examples:
- Change name / email / links at the top
- Add a skill under `skills`
- Add an internship under `experience`
- Add a bullet under `achievements`

### 2. Add a new project
1. In **`data/content.js`**, add an object to `projects` with a new `id` (e.g. `"my-app"`).
2. Add a thumbnail SVG (or PNG) under `assets/projects/`.
3. Copy any file in `projects/` (e.g. `nids.html`) to `projects/my-app.html`.
4. Change only: `data-project="my-app"` and the `<title>` / meta description.
5. Set `page: "projects/my-app.html"` and `thumbnail: "assets/projects/...."` in content.js.

### 3. Replace the hero graphic with your photo
1. Put a photo at `assets/portrait.jpg` (or `.png`).
2. In `index.html`, change the hero `<img src="assets/portrait.svg" ...>` to your file.
3. Optional: crop to a tall portrait (about 4:5) so the frame looks good.

### 4. Theme colors
Open **`css/styles.css`** and edit the `:root { ... }` variables (`--bg`, `--purple`, etc.).

---

## Preview locally

From this folder:

```bash
# Python
python -m http.server 5500

# or Node (if you have npx)
npx --yes serve .
```

Then open: http://localhost:5500

> Opening `index.html` via double-click (file://) usually works for this site, but a local server is safer.

---

## Deploy on GitHub Pages

1. Create a repo (e.g. `portfolio` or `RushilRJ.github.io`).
2. Push this folder to the `main` branch:

```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/RushilRJ/YOUR-REPO-NAME.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Source**: Deploy from branch **`main`** / folder **`/` (root)**.
4. Site URL will be:
   - User site: `https://RushilRJ.github.io/` (if repo is `RushilRJ.github.io`)
   - Project site: `https://RushilRJ.github.io/YOUR-REPO-NAME/`

Paths are **relative**, so both options work without changing code.

---

## What’s on the site

| Section | Source |
|--------|--------|
| About + hero graphic | `content.js` → about, identity; `assets/portrait.svg` |
| Education | `content.js` → education *(no marks)* |
| Skills | `content.js` → skills |
| Research | `content.js` → research |
| Internships | `content.js` → experience |
| Leadership | `content.js` → leadership |
| Achievements | `content.js` → achievements |
| Projects + detail pages | `content.js` → projects + `projects/*.html` |
| Contact | email / GitHub / LinkedIn from `content.js` |

---

## Phone / private info

Phone is in `content.js` for your convenience but **not shown** on the homepage UI by default (email + socials are). Add it in the hero meta in `js/main.js` if you want it public.
