# 🖥️ Task 1 — Personal Portfolio Website

> **DecodeLabs Industrial Training Kit · Project 01 · Batch 2026**

A three-page personal portfolio site built with pure **HTML** and **CSS** — no frameworks, no JavaScript, no dependencies. This project demonstrates semantic HTML structure, disciplined CSS layout, and accessibility best practices as required by the DecodeLabs Project 01 brief.

---

## 📸 Preview

| Home | About | Contact |
|------|-------|---------|
| Hero section with name, intro, selected work, and skills | Personal narrative with education timeline | Contact form with info sidebar |

---

## 📁 Project Structure

```
Task1_portfolio/
│
├── index.html          ← Home page (hero, selected work, skills)
├── about.html          ← About page (bio, portrait, education timeline)
├── contact.html        ← Contact page (form + contact info)
├── style.css           ← Shared stylesheet (all tokens + components)
│
└── assets/
    ├── hero-desk.jpg           ← Home hero image
    ├── about-notebook.jpg      ← About page portrait
    ├── project-code.jpg        ← Project card #1 cover
    ├── project-mobile.jpg      ← Project card #2 cover
    └── project-dashboard.jpg   ← Project card #3 cover
```

---

## ✅ Features

- ✅ Semantic HTML5 — `<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<figure>`, `<dl>`
- ✅ One `<h1>` per page with proper heading hierarchy (no skipped levels)
- ✅ External CSS only — no inline styles, no `<style>` tags in HTML
- ✅ CSS Grid for macro page layout (2-column hero, 3-column skills)
- ✅ Flexbox for micro component alignment (nav, cards, meta rows)
- ✅ All images have `alt` text, explicit `width`, and `height` attributes (prevents CLS)
- ✅ Accessible — `aria-current="page"` on active nav link, `aria-label` where needed
- ✅ Three linked pages with a shared sticky header navigation
- ✅ Responsive layout — stacks on mobile, multi-column on ≥ 720 px
- ✅ W3C valid — zero errors

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | All styling — Grid, Flexbox, custom properties |
| Google Fonts | Fraunces (serif display) + Inter (sans-serif body) |

> **Zero JavaScript.** Zero frameworks. Zero build tools.

---

## 🚀 How to Run Locally

### Option 1 — Just open the file (quickest)

1. **Download or clone** the repository (see below)
2. Open the `Task1_portfolio/` folder on your computer
3. **Double-click `index.html`** — it opens directly in your browser

That's it. No server, no terminal needed.

---

### Option 2 — Use VS Code Live Server (recommended for development)

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension
   - Open VS Code → Extensions (`Ctrl + Shift + X`) → search **"Live Server"** → Install
3. Open the `Task1_portfolio/` folder in VS Code
4. Right-click `index.html` → **"Open with Live Server"**
5. The site opens at `http://127.0.0.1:5500` and auto-refreshes on save

---

### Option 3 — Python local server (no extensions needed)

Open your terminal in the `Task1_portfolio/` folder and run:

```bash
# Python 3
python -m http.server 8080
```

Then visit **`http://localhost:8080`** in your browser.

---

## 📥 How to Download / Clone

### Clone via Git

```bash
git clone https://github.com/SamkitJain1812/Decode-Labs-Internship-Tasks.git
```

Then navigate to the project:

```bash
cd Decode-Labs-Internship-Tasks/Task1_portfolio
```

---

### Download as ZIP (no Git required)

1. Go to the repository on GitHub
2. Click the green **`<> Code`** button
3. Select **"Download ZIP"**
4. Extract the ZIP file
5. Open the `Task1_portfolio/` folder
6. Double-click `index.html` to run

---

## 📄 Pages

| File | URL | Description |
|---|---|---|
| `index.html` | `/` | Home — hero, selected projects, skills section |
| `about.html` | `/about.html` | About — personal bio, portrait, education timeline |
| `contact.html` | `/contact.html` | Contact — message form, email, social links |

---

## 🎨 Design Tokens (from `style.css`)

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#14110f` | Primary text, buttons |
| `--ink-soft` | `#2a2622` | Secondary / prose text |
| `--muted` | `#6b6660` | Labels, captions, meta |
| `--rule` | `#d9d4cc` | Hairline borders, dividers |
| `--paper` | `#fafaf7` | Page background |
| `--font-serif` | Fraunces | Display headings |
| `--font-sans` | Inter | Body text, labels |

---

## 🏫 Internship Context

| Detail | Info |
|---|---|
| **Organisation** | DecodeLabs |
| **Programme** | Industrial Training Kit |
| **Batch** | 2026 |
| **Project** | 01 — Static Webpage Design |
| **Student** | Samkit Jain |
| **Institution** | Delhi Technical Campus, Greater Noida |
| **Degree** | B.Tech Computer Science & Engineering |

---

## 👤 Author

**Samkit Jain**
- GitHub: [@SamkitJain1812](https://github.com/SamkitJain1812)

---

*Built as part of DecodeLabs Industrial Training Kit — Project 01: Static Webpage Design*
