# ⚡ Task 3 — Interactive Web Elements: DOM Manipulation

> **DecodeLabs Industrial Training Kit · Project 03 · Batch 2026**

A single-page site that demonstrates **DOM manipulation and real-time user interaction** using pure JavaScript — no frameworks, no libraries. Seven interactive modules are packaged inside a minimal black-and-white design system with full dark mode support.

---

## 📸 Preview

| Light Mode | Dark Mode |
|---|---|
| White surface, black accent | Dark surface, light text, same interactions |

---

## 📁 Project Structure

```
Task3_interactive/
│
├── index.html      ← Page structure and semantic markup
├── styles.css      ← Design system, layouts, component styles
└── script.js       ← All interactions — 7 modules, fully commented
```

---

## ✅ Features

- ✅ **Dark mode toggle** — persists via `localStorage`, respects OS preference
- ✅ **Live clock** — real-time `HH:MM:SS` display using `setInterval`
- ✅ **Click counter** — increment, decrement, reset; state saved to `localStorage`
- ✅ **Live text mirror** — real-time input reflection with character counter
- ✅ **Accordion** — animated expand/collapse via `max-height` CSS transition
- ✅ **Color picker** — 6 swatches update a live preview box
- ✅ **To-do list** — add, complete, remove tasks; filter by All / Active / Done; persisted
- ✅ **Image gallery** — filterable by category (Nature / City / Abstract)
- ✅ **Lightbox** — click any gallery tile to view full size; close via button, backdrop, or `Esc`
- ✅ **Form validation** — real-time inline error messages; success banner on submit
- ✅ Semantic HTML5 — `<header>`, `<main>`, `<section>`, `<footer>`, `<form>`
- ✅ Accessible — `aria-expanded` on accordion, `aria-label` on icon buttons
- ✅ `prefers-reduced-motion` respected — all transitions disabled when set
- ✅ Fully responsive — single `640px` breakpoint

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic page structure and markup |
| CSS3 | Grid, Flexbox, custom properties, transitions, keyframes |
| Vanilla JavaScript | All interactivity — DOM manipulation, events, localStorage, timers |

> **Zero frameworks. Zero npm. Zero build tools.** Open `index.html` and it works.

---

## 📄 Page Sections

| # | Section | What it demonstrates |
|---|---|---|
| — | **Sticky Header** | Branding, anchor nav, dark mode toggle |
| — | **Hero** | Project intro, live clock, eyebrow label |
| 01 | **Counter** | Click events, state, localStorage persistence |
| 02 | **Live Text** | `input` event, real-time DOM update, char counter |
| 03 | **Accordion** | Toggle classes, `max-height` CSS animation |
| 04 | **Color Picker** | Swatch click → live CSS style update |
| 05 | **To-Do List** | CRUD operations, filter state, localStorage |
| 06 | **Dynamic Gallery** | Category filtering, lightbox modal, keyboard events |
| 07 | **Form Validation** | Real-time validation, error messages, success state |

---

## 🚀 How to Run Locally

### Option 1 — Just open the file (quickest)

1. Download or clone the repository (see below)
2. Open the `Task3_interactive/` folder
3. **Double-click `index.html`** — opens directly in your browser

No server, no terminal, no setup required.

---

### Option 2 — VS Code Live Server (recommended for development)

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension
   - Extensions (`Ctrl + Shift + X`) → search **"Live Server"** → Install
3. Open the `Task3_interactive/` folder in VS Code
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
cd Decode-Labs-Internship-Tasks/Task3_interactive
```

### Download as ZIP (no Git required)

1. Go to the repository on GitHub
2. Click the green **`<> Code`** button
3. Select **"Download ZIP"**
4. Extract the ZIP
5. Open `Task3_interactive/` folder
6. Double-click `index.html`

---

## 🌗 Dark Mode

Click the **toggle pill** in the top-right of the header to switch themes.

- Preference saved in `localStorage` under `"theme"` — persists across refreshes
- Falls back to OS setting (`prefers-color-scheme: dark`) on first visit
- All color tokens swap via CSS custom properties on `[data-theme="dark"]`

---

## 💾 localStorage Persistence

Three pieces of state survive page refreshes:

| Key | Value | Used by |
|---|---|---|
| `"theme"` | `"light"` or `"dark"` | Dark mode toggle |
| `"count"` | Number | Click counter |
| `"todos"` | JSON array of `{id, text, done}` | To-do list |

---

## 🎮 Interactions Reference

| Module | Trigger | Effect |
|---|---|---|
| Theme toggle | Click pill | Flip `data-theme` on `<html>`, swap icon, save to `localStorage` |
| Live clock | Every 1 second | Update display to current `HH:MM:SS` |
| Counter `+` / `−` | Click | Increment / decrement value, re-render, persist |
| Counter reset | Click | Set to `0`, re-render, persist |
| Live text | `input` event | Mirror value into output block; update character count |
| Accordion | Click heading | Toggle `.open`, animate body via `max-height` |
| Color swatch | Click | Update preview box background; mark swatch `.active` |
| Todo add | Form submit | Push new task, clear input, save, re-render |
| Todo complete | Click checkbox | Toggle `done`, save, re-render |
| Todo remove | Click `×` | Remove by `id`, save, re-render |
| Todo filter | Click pill | Set active filter (`All` / `Active` / `Done`), re-render |
| Gallery filter | Click pill | Show tiles matching category |
| Gallery tile | Click | Open lightbox with full image |
| Lightbox close | Button / backdrop / `Esc` | Hide lightbox, clear image src |
| Form field | `input` event | Live-validate, show/hide inline error |
| Form submit | Submit | Validate all fields; show success banner; reset form after 4s |

---

## ✔️ Form Validation Rules

| Field | Rule | Error Message |
|---|---|---|
| Name | `.trim().length >= 2` | "Name must be at least 2 characters" |
| Email | Must match email regex | "Enter a valid email address" |
| Message | `.trim().length >= 10` | "Message must be at least 10 characters" |

---

## 📱 Responsive Behavior

| Viewport | Behavior |
|---|---|
| **> 640px** (Desktop) | Full header nav + toggle label visible; 3-column feature grid |
| **≤ 640px** (Mobile) | Nav links hidden; toggle shows icon only; all grids stack to 1 column |

---

## 🎨 Design Tokens

### Colors

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--bg` | `#ffffff` | `#0e0e0e` | Page background |
| `--surface` | `#fafafa` | `#171717` | Panels, inputs, cards |
| `--border` | `#e5e5e5` | `#2a2a2a` | Hairlines, card borders |
| `--text` | `#111111` | `#f5f5f5` | Primary text |
| `--muted` | `#6b6b6b` | `#9a9a9a` | Labels, captions |
| `--accent` | `#111111` | `#f5f5f5` | CTA buttons, active states |
| `--success` | `#059669` | `#059669` | Form success banner |
| `--danger` | `#dc2626` | `#dc2626` | Validation errors |

### Typography

| Role | Size | Weight |
|---|---|---|
| Hero headline | `clamp(40px, 6vw, 72px)` | 700 |
| Section heading | `28px` | 600 |
| Body text | `14–15px` | 400 |
| Eyebrow / labels | `12–13px` uppercase / `0.15em` tracking | 500 |
| Counter value | `32px` monospace | 700 |

### Radii

| Usage | Value |
|---|---|
| Panels, lightbox image | `10px` |
| Inputs, buttons, tiles | `6px` |
| Pills, circular controls | `999px` |

---

## ⚡ Animations & Motion

| Element | Effect | Duration |
|---|---|---|
| Theme switch | `background` + `color` swap | `0.2s ease` |
| Buttons / pills | `background`, `color`, `transform` | `0.15s` |
| Accordion body | `max-height` + `padding` | `0.25s ease` |
| Gallery image | `scale(1.05)` on hover | `0.3s ease` |
| Lightbox | Fade in via `@keyframes fadeIn` | `0.2s ease` |

> All animations are **disabled** when `prefers-reduced-motion: reduce` is detected.

---

## 🖼️ Gallery Images

Images are loaded from **Unsplash CDN** (`images.unsplash.com`) — free to use.

| Category | Count |
|---|---|
| Nature | 3 photos |
| City | 3 photos |
| Abstract | 2 photos |

> For production, self-host images and add `srcset` for responsive sizes.

---

## 📋 DecodeLabs Project 03 — Requirements Checklist

- ✅ Buttons and toggles
- ✅ Basic user interaction with event listeners
- ✅ Dynamic content updates via DOM manipulation
- ✅ JavaScript basics — variables, functions, arrays, objects
- ✅ **Bonus:** Dark mode toggle
- ✅ **Bonus:** Dynamic image gallery with lightbox
- ✅ localStorage persistence across sessions

---

## 🏫 Internship Context

| Detail | Info |
|---|---|
| **Organisation** | DecodeLabs |
| **Programme** | Industrial Training Kit |
| **Batch** | 2026 |
| **Project** | 03 — Interactive Web Elements / DOM Manipulation |
| **Student** | Samkit Jain |
| **Institution** | Delhi Technical Campus, Greater Noida |
| **Degree** | B.Tech Computer Science & Engineering |

---

## 👤 Author

**Samkit Jain**

- GitHub: [@SamkitJain1812](https://github.com/SamkitJain1812)

---

*Built as part of DecodeLabs Industrial Training Kit — Project 03: Interactive Web Elements*