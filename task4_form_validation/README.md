# 🔐 Task 4 — Form Design & Validation: Architecture of Trust

> **DecodeLabs Industrial Training Kit · Project 04 · Batch 2026**

A user registration form with a paired **Validation Engine Inspector** panel — demonstrating the full IPO (Input → Process → Output) pipeline through semantic HTML, client-side validation, regex logic gates, and ARIA accessibility feedback. Built with pure HTML, CSS, and Vanilla JavaScript.

---

## 📸 Preview

| Form — Idle | Form — Validated | Inspector Panel |
|---|---|---|
| All fields neutral, hints visible | Green / red state per field | Live regex gates, JSON payload, ARIA mirror |

---

## 📁 Project Structure

```
Task4_formvalidation/
│
├── index.html      ← Complete site (HTML + CSS + JS in one file)
```

> **Single-file project.** All styles, markup, validation logic, and scripts live in `index.html`.

---

## ✅ Features

- ✅ Semantic `<form>`, `<label>`, `<input>` — zero `<div>` soup
- ✅ `event.preventDefault()` blocks default browser GET refresh on submit
- ✅ Real-time validation on every `input` event AND on `blur`
- ✅ 5 regex logic gates — name, email, password length, password complexity, confirm match
- ✅ Password strength ribbon — 5-segment colour indicator (coral → amber → sage → emerald)
- ✅ ARIA accessibility — `aria-invalid`, `aria-describedby`, `aria-live="polite"` live region
- ✅ Live Inspector panel — regex gate states, JSON payload preview, ARIA mirror
- ✅ JSON payload output — `validated`, `submittedAt`, password always redacted
- ✅ Success and error banners with auto-announced messages
- ✅ Reset flow — clears all state, touched flags, banners, and ARIA region
- ✅ Focus management — keyboard focus moves to first failing field on submit error
- ✅ Fully responsive — stacks to single column below `960px`
- ✅ All decorative elements are `aria-hidden="true"`

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic form structure — `<form>`, `<label>`, `<input>`, `<button>` |
| CSS3 | Custom properties, Grid, Flexbox, transitions, keyframe animations |
| Vanilla JavaScript | Validation logic, DOM updates, ARIA management, localStorage |
| Google Fonts | Fraunces (display) · Instrument Sans (body) · JetBrains Mono (code/hints) |

> **Zero frameworks. Zero npm. Zero build tools.**

---

## 📄 Page Sections

| # | Section | Purpose |
|---|---|---|
| — | **Masthead** | DecodeLabs brand mark + batch / project crumbs |
| — | **Title Block** | Project headline, lede, meta card (course / track / skills) |
| — | **Phase Strip** | 4-card IPO progress indicator — Structure · Shield · Scan · Communicate |
| — | **Form Card** | Registration form — name, email, password, confirm password |
| — | **Inspector Card** | Live regex gates, JSON payload, ARIA live region mirror |
| — | **Footnote** | "You are not just coding a form. You are architecting trust." |

---

## 🚀 How to Run Locally

### Option 1 — Just open the file (quickest)

1. Download or clone the repository (see below)
2. Open the `Task4_formvalidation/` folder
3. **Double-click `index.html`** — opens directly in your browser

No server, no terminal, no setup required.

---

### Option 2 — VS Code Live Server (recommended for development)

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension
   - Extensions (`Ctrl + Shift + X`) → search **"Live Server"** → Install
3. Open the `Task4_formvalidation/` folder in VS Code
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
cd Decode-Labs-Internship-Tasks/Task4_formvalidation
```

### Download as ZIP (no Git required)

1. Go to the repository on GitHub
2. Click the green **`<> Code`** button
3. Select **"Download ZIP"**
4. Extract the ZIP
5. Open `Task4_formvalidation/` folder
6. Double-click `index.html`

---

## 🧠 The IPO Pipeline

This project is built around the **Input → Process → Output** model taught in the DecodeLabs curriculum:

| Phase | What happens |
|---|---|
| **Structure** | Semantic HTML skeleton — real `<form>`, `<label>`, `<input>` elements |
| **Shield** | `event.preventDefault()` stops the browser's default GET refresh on submit |
| **Scan** | A battery of regex logic gates validates each field in real time |
| **Communicate** | ARIA feedback (`aria-invalid`, `aria-describedby`, `aria-live`) announces results |

---

## ✔️ Validation Rules

### Regex Constants

```js
const REGEX = {
  name:     /^[A-Za-zÀ-ÿ' -]{2,}$/,
  email:    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  pwLen:    /.{8,}/,
  pwUpper:  /[A-Z]/,
  pwLower:  /[a-z]/,
  pwDigit:  /\d/,
  pwSymbol: /[^A-Za-z0-9]/,
};
```

### Per-Field Rules

| Field | Rule | Error | Success |
|---|---|---|---|
| **Full Name** | ≥ 2 chars after trim · letters & spaces only | "Name must be at least 2 characters" | "Name looks good." |
| **Email** | Must match RFC 5322 syntax regex | "Enter a valid email address" | "Syntax OK — the ruler is happy." |
| **Password** | 8+ chars · uppercase · lowercase · digit · symbol (all 4 must pass) | "Add `<missing requirements>`" | "All four complexity scanners passed." |
| **Confirm** | Must match password character-for-character | "Passwords do not match" | "Match confirmed." |

### Password Strength Ribbon

The 5-segment ribbon scores one point per passing scanner:

| Score | Segments lit | Colour | Label |
|---|---|---|---|
| 0 | None | Grey `#e2e6da` | — |
| 1 | 1 | Coral `#e08a7a` | Weak |
| 2 | 2 | Amber `#e6c274` | Fair |
| 3 | 3 | Light sage `#a8c98a` | Good |
| 4 | 4 | Emerald `#2e8b57` | Strong |
| 5 | All 5 | Emerald `#2e8b57` | Excellent |

---

## 📤 JSON Payload Output

On successful validation, the Inspector panel displays the outbound payload:

```json
{
  "name": "Ada Lovelace",
  "email": "ada@decodelabs.tech",
  "password": "[redacted · 12 chars]",
  "validated": true,
  "submittedAt": "2026-07-13T10:45:00.000Z"
}
```

> The password is **never** shown in plain text — always replaced with `[redacted · N chars]`.

---

## 🔎 Inspector Panel

The right-hand panel is a **live developer console view** — a teaching device showing what the validation engine is doing at every keystroke.

| Sub-panel | What it shows |
|---|---|
| **Regex Logic Gates** | State of all 5 gates — `idle` / `pass` / `fail` with regex pattern visible |
| **Outbound Payload** | JSON output, syntax-highlighted — status: `DRAFTING` / `APPROVED` / `REJECTED` |
| **ARIA Live Region Mirror** | Mirrors what the `aria-live="polite"` region is announcing to screen readers |

> The Inspector is `aria-hidden="true"` — it is a visual aid for sighted developers. The real accessibility announcements happen in the SR-only live region.

---

## ♿ Accessibility

| Feature | Implementation |
|---|---|
| Labels | Every input has a real `<label for="…">` — no placeholder-as-label |
| `aria-invalid` | Toggles `"true"` / `"false"` in sync with visual state |
| `aria-describedby` | Points each input at its message element (`{id}-msg`) |
| `aria-live` region | Single `role="status" aria-live="polite" aria-atomic="true"` for submit announcements |
| Focus management | On submit failure, focus moves to the first failing field |
| Reduced motion | All transitions disabled when `prefers-reduced-motion: reduce` is set |
| Decorative elements | Botanical SVGs and blobs are `aria-hidden="true"` |

---

## 🎬 Interactions & Animations

| Interaction | Trigger | Effect |
|---|---|---|
| Live validation | `input` event on any field | Validate field, update state, message, ARIA, Inspector |
| Re-validate confirm | Editing password | Also re-runs confirm validator if confirm has a value |
| Submit (valid) | Click Submit | Show success banner, update payload, change button to "Resubmit" |
| Submit (invalid) | Click Submit | Show error banner, focus first failing field, push ARIA announcement |
| Reset | Click Reset | Clear values, touched flags, banners, ARIA region, restore default messages |
| Field icon entry | State changes to valid/invalid | `tickBump` animation — scale `0.6 → 1.15 → 1`, `280ms ease` |
| Banner reveal | Submit | `opacity 0→1`, `translateY -4px→0`, `250ms ease` |
| Primary button hover | Hover | `translateY(-1px)`, `120ms ease` |
| Strength ribbon | Each password keystroke | Segment background updates, `200ms` transition |

---

## 🏫 Internship Context

| Detail | Info |
|---|---|
| **Organisation** | DecodeLabs |
| **Programme** | Industrial Training Kit |
| **Batch** | 2026 |
| **Project** | 04 — Form Design & Validation (Optional Mastery Phase) |
| **Student** | Samkit Jain |
| **Institution** | Delhi Technical Campus, Greater Noida |
| **Degree** | B.Tech Computer Science & Engineering |

---

## 👤 Author

**Samkit Jain**
---

*Built as part of DecodeLabs Industrial Training Kit — Project 04: Form Design & Validation*
