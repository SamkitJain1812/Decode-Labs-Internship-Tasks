# ☕ Task 2 — Brew & Bean: Responsive Coffee Shop Website

> **DecodeLabs Industrial Training Kit · Project 02 · Batch 2026**

A single-page responsive marketing website for a neighborhood coffee shop — **Brew & Bean**. Built to satisfy the requirements of DecodeLabs Frontend Project 2 (Responsive Web Layout), demonstrating mastery of CSS media queries, fluid layouts, responsive hamburger navigation, dark mode, and CSS Grid / Flexbox layout techniques.

---

## 📸 Preview

| Desktop — Light | Desktop — Dark | Mobile |
|---|---|---|
| Full layout with 2-col grids | Dark-mode token swap | Stacked layout + hamburger nav |

---

## 📁 Project Structure

```
Task2_brewandbean/
│
└── index.html      ← Complete site (HTML + CSS + JS in one file)
```

> **Single-file project.** All styles, markup, and scripts live in `index.html` — no build step, no dependencies, no frameworks.

---

## ✅ Features

- ✅ Fully responsive — single `768px` breakpoint; mobile-first stacking
- ✅ Hamburger navigation — slides in/out on mobile with smooth animation
- ✅ Dark mode toggle — persists user preference via `localStorage`
- ✅ Sticky navbar with scroll-triggered shadow and backdrop blur
- ✅ Smooth scrolling via `html { scroll-behavior: smooth }`
- ✅ CSS Grid for all section layouts (hero, about, features, pricing, contact, footer)
- ✅ Flexbox for micro component alignment (nav, buttons, stats, info rows)
- ✅ Fluid typography using `clamp()` — scales between viewport sizes
- ✅ Hover animations on cards, buttons, and hero image
- ✅ Semantic HTML5 — `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<form>`
- ✅ Accessible — `aria-expanded`, `aria-label`, `aria-controls` on interactive elements
- ✅ `prefers-reduced-motion` respected — all animations disabled when user prefers it
- ✅ Contact form with submit feedback (demo mode)

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic page structure and markup |
| CSS3 | Grid, Flexbox, custom properties, `clamp()`, media queries |
| Vanilla JavaScript | Hamburger menu, dark mode toggle, scroll behavior, form submit |
| System font stack | No web font dependency — loads instantly |

> **Zero frameworks. Zero npm. Zero build tools.** Open and it works.

---

## 📄 Page Sections

| # | Section | Purpose |
|---|---|---|
| 1 | **Sticky Navbar** | Brand mark, nav links, dark mode toggle, hamburger (mobile) |
| 2 | **Hero** | Headline, CTA buttons, 3 key stats, hero image |
| 3 | **About** | Café story, numbered feature list, barista image |
| 4 | **Features / Services** | 6-card grid — roasts, space, service, pastries, loyalty, events |
| 5 | **Pricing** | 3-tier cards — Espresso · Signature · Premium |
| 6 | **Contact** | Form (name, email, subject, message) + contact info sidebar |
| 7 | **Footer** | Links, socials, address, copyright |

---

## 🚀 How to Run Locally

### Option 1 — Just open the file (quickest)

1. Download or clone the repository (see below)
2. Open the `Task2_brewandbean/` folder
3. **Double-click `index.html`** — opens directly in your browser

No server, no terminal, no setup required.

---

### Option 2 — VS Code Live Server (recommended for development)

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension
   - Extensions (`Ctrl + Shift + X`) → search **"Live Server"** → Install
3. Open the `Task2_brewandbean/` folder in VS Code
4. Right-click `index.html` → **"Open with Live Server"**
5. Opens at `http://127.0.0.1:5500` — auto-refreshes on every save

---

### Option 3 — Python local server (no extensions needed)

Open terminal in the project folder and run:

```bash
# Python 3
python -m http.server 8080
```

Visit **`http://localhost:8080`** in your browser.

---

## 📥 How to Download / Clone

### Clone via Git

```bash
git clone https://github.com/SamkitJain1812/Decode-Labs-Internship-Tasks.git
```

Navigate to this project:

```bash
cd Decode-Labs-Internship-Tasks/Task2_brewandbean
```

### Download as ZIP (no Git required)

1. Go to the repository on GitHub
2. Click the green **`<> Code`** button
3. Select **"Download ZIP"**
4. Extract the ZIP
5. Open `Task2_brewandbean/` folder
6. Double-click `index.html`

---

## 🌗 Dark Mode

Click the **sun / moon icon** in the top-right of the navbar to toggle dark mode.

- Preference is saved in `localStorage` — persists across page refreshes
- Falls back to the OS setting (`prefers-color-scheme: dark`) on first visit
- All colors swap via CSS custom property overrides on `[data-theme="dark"]`

---

## 📱 Responsive Behavior

| Viewport | Layout |
|---|---|
| **> 768px** (Desktop) | 2-column hero and about grids, 3-column features and pricing |
| **≤ 768px** (Mobile) | Everything stacks to 1 column, hamburger menu appears |

The **featured pricing card** moves to the top on mobile via `order: -1` so the most important tier is always seen first.

---

## 🖼️ Images Used

| Image | Source | Used In |
|---|---|---|
| Latte with heart-shaped foam art | Unsplash (free licence) | Hero section |
| Barista pouring espresso | Unsplash (free licence) | About section |

> Images are loaded from Unsplash CDN. For production, self-host these and add `srcset` for responsive image sizes.

---

## ⚡ Interactions & Animations

| Element | Interaction | Duration |
|---|---|---|
| Primary button | `translateY(-2px)` + deeper bg | `0.2s` |
| Ghost button | `translateY(-2px)` + surface fill | `0.2s` |
| Feature card | `translateY(-4px)` + shadow + accent border | `0.3s` |
| Pricing card | `translateY(-4px)` + shadow | `0.3s` |
| Hero image | `scale(1.03)` on hover | `0.8s` |
| Mobile menu | Slides in from top via `translateY` | `0.35s` |
| Theme change | Color + background swap | `0.3s` |

All animations use `cubic-bezier(.2, .7, .2, 1)` easing and are **disabled** when `prefers-reduced-motion: reduce` is detected.

---

## 📋 DecodeLabs Project 02 — Requirements Checklist

- ✅ Responsive layout with CSS media queries
- ✅ Hamburger menu that works on mobile
- ✅ CSS Grid and Flexbox used correctly
- ✅ Fluid typography with `clamp()`
- ✅ Semantic HTML structure
- ✅ Accessible navigation (`aria-expanded`, `aria-label`)
- ✅ Dark mode implementation
- ✅ Hover states and smooth transitions
- ✅ Contact form with client-side interaction

---

## 🏫 Internship Context

| Detail | Info |
|---|---|
| **Organisation** | DecodeLabs |
| **Programme** | Industrial Training Kit |
| **Batch** | 2026 |
| **Project** | 02 — Responsive Web Layout |
| **Student** | Samkit Jain |
| **Institution** | Delhi Technical Campus, Greater Noida |
| **Degree** | B.Tech Computer Science & Engineering |

---

## 👤 Author

**Samkit Jain**

- GitHub: [@SamkitJain1812](https://github.com/SamkitJain1812)

---

*Built as part of DecodeLabs Industrial Training Kit — Project 02: Responsive Web Layout*
