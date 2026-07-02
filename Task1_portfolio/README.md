# Handoff: Samkit Jain — Personal Portfolio

## Overview
A three-page personal portfolio site for **Samkit Jain**, produced as the deliverable for the DecodeLabs Industrial Training Kit · Project 01 (Static Webpage Design). The design demonstrates semantic HTML structure and disciplined CSS layout in a minimal, editorial, black-and-white style. The three pages are **Home**, **About**, and **Contact**, linked via a shared sticky header nav.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior. They are *not* meant to be shipped as-is to production. The task is to **recreate these HTML designs in the target codebase's existing environment** (React, Vue, Astro, Next.js, SwiftUI, Flutter, etc.) using its established patterns, component library, and routing.

If no target environment exists yet, the recommendation for this specific project is **Astro** or plain **Next.js (App Router, static export)** — both preserve the semantic-first, JS-free nature of the design and make the pages fast and portable. However, since the design is already pure HTML + CSS with no JavaScript, it can equally ship as-is (with minor cleanup and asset optimization) for a small personal site.

## Fidelity
**High-fidelity (hifi).** All colors, typography, spacing, and layout values in the design files are final. Recreate the UI pixel-accurately — exact hex values, exact font stacks (Fraunces + Inter via Google Fonts), exact spacing scale, exact hairline rules. Hover/focus states are already implemented in `style.css` and should be preserved.

---

## Screens / Views

### 1. Home — `index.html`

**Purpose:** First impression. Introduces Samkit, shows selected work, and lists skills.

**Layout (top → bottom):**
1. **Sticky header** — full-width, `1px` bottom hairline, backdrop-blur, background `rgba(250,250,247,0.92)`. Height ≈ 60 px.
2. **Hero section** — 2-column grid at ≥ 900 px (`1.3fr 1fr`), stacks on mobile. Top padding `clamp(72px, 12vw, 140px)`; bottom `clamp(48px, 8vw, 96px)`.
   - Left column: eyebrow label, huge display headline, lede paragraph, meta `<dl>` (Based in / Focus / Status) separated by a hairline.
   - Right column: 4:5 aspect-ratio hero image, grayscale filter, small figcaption pinned to bottom-left of image on a paper-colored chip.
3. **Selected Work section** — hairline top border, padding `clamp(64px, 10vw, 120px)` block. Section header uses a 2-column head layout (200px eyebrow / rest headline). Below: 2-column grid of 4 project cards (`repeat(2, 1fr)` at ≥ 720 px).
   - Each card: cover image (5:4, grayscale), Roman-numeral index badge overlaid top-left with `mix-blend-mode: difference`, project title, description, tag pill list.
   - Hover: image scales to 1.03 and desaturates to `grayscale(60%)`.
4. **Skills section** — 3-column grid at ≥ 720 px. Each group has an italic serif heading with hairline underline and a definition-style skill list with dotted-leader dots between name and level.
5. **Footer** — hairline top, 3-column grid (mark + copyright / centered program label / right-aligned links).

**Key components on this page:**

| Component | Details |
|---|---|
| **Brand mark** (`.brand`) | 10 px black circle + "Samkit Jain" in Fraunces 20 px / 500. |
| **Nav links** (`.nav-links`) | Inter 14 px, gap 32 px. Active link has 1 px underline offset 3 px below, muted color on inactive (`--ink-soft`), full ink on hover/current. |
| **Eyebrow label** (`.eyebrow`) | Inter 12 px / 500, tracking 0.18em, uppercase, muted color, preceded by a 24×1 px muted rule. Variant `.eyebrow--num` uses italic Fraunces 14 px for section numbers. |
| **Hero title** (`.hero-title`) | Fraunces `clamp(56px, 10vw, 128px)`, line-height 0.95, tracking -0.035em. Italic word ("Jain,") uses `font-weight: 300`. |
| **Hero meta `<dl>`** | Flex-wrap, gap 32 px, `1px` top hairline. `<dt>` = 11 px uppercase muted / 0.18em tracking. `<dd>` = 14 px ink. |
| **Project card** (`.project`) | Vertical flex, gap 16 px. Cover uses `overflow: hidden` on the figure so the image scale-hover is contained. |
| **Tag pill** (`.project-tags li`) | 11 px / 0.14em tracking / uppercase / `--muted`, 1 px `--rule` border, `border-radius: 999px`, padding `4px 10px`. |
| **Skill list row** | Justify-between flex row with a **dotted leader** effect: an absolutely positioned `::before` draws a dotted border across the row, and each `<span>` sits on top of paper-colored padding so the dots visually terminate at the text. |

---

### 2. About — `about.html`

**Purpose:** Personal narrative and formal education history.

**Layout:**
1. Same sticky header (active state now on "About").
2. **Page title band** — eyebrow (§ About) then italic-heavy `h1` "A short note about the person behind these pages." Padding `clamp(64px, 10vw, 120px)` top / 48 px bottom.
3. **About prose + portrait** — 2-column grid (`1fr 1.4fr` at ≥ 900 px, gap 112 px). Left column: 3:4 grayscale portrait figure with a caption "Fig. 02 — Notes & margins, 2026". Right column: prose with a serif drop-cap on the first paragraph.
4. **Education timeline** — semantic `<ol>` where each `<li>` is a 3-column grid at ≥ 720 px (`140px 1fr 1fr`), separated by hairlines top and bottom of the list.
5. Standard footer.

**Key components:**

| Component | Details |
|---|---|
| **Drop cap** (`.about-prose .drop::first-letter`) | Fraunces, `5em`, `float: left`, line-height 0.85, padding right 10 px / top 6 px. |
| **Timeline row** | Grid: year column (Fraunces italic 20 px) / title block (Fraunces 22 px title + muted 14 px sub-label) / detail column (`--ink-soft` 15 px + `<small>` muted 13 px). |
| **Portrait figure** (`.about-figure`) | 3:4 aspect ratio, grayscale + contrast 1.02 filter. Caption below in muted 12 px / 0.14em tracking / uppercase. |

---

### 3. Contact — `contact.html`

**Purpose:** Message form + secondary contact channels.

**Layout:**
1. Sticky header (active on "Contact").
2. **Page title band** — same rhythm as About. Headline: "Say hello — I read every message."
3. **Contact grid** — 2-column (`1.4fr 1fr` at ≥ 900 px, gap 112 px).
   - **Left**: `<form>` with 4 fields (name, email, subject select, message textarea) and a submit button. Fields use an underlined-input pattern — no borders top/left/right, only a 1 px black bottom border. Focus state thickens the border to 2 px and shifts color to `--muted`, adjusting padding to prevent layout shift.
   - **Right**: aside with 4 info blocks (Email, Location, Response time, Elsewhere / socials list). Info block headings are 11 px muted labels, values are Fraunces 20 px, links get a 1 px underline that softens to muted on hover.
4. Standard footer.

**Key components:**

| Component | Details |
|---|---|
| **Form field** (`.field`) | Vertical flex, gap 4 px. Label = 11 px / 0.18em / uppercase / muted. Input = Fraunces 20 px, transparent bg, `border-bottom: 1px solid var(--ink)`. Placeholder in italic muted at 70% opacity. |
| **Primary button** (`.btn`) | Filled ink block, paper text, padding `14px 28px`, tracking 0.18em, uppercase, includes a trailing `→` glyph. Hover inverts to transparent bg + ink text (border stays). Transition 200 ms ease. |
| **Info block link** (`.info-block a`) | Fraunces 20 px, 1 px ink underline offset 2 px. Hover: color and border → `--muted`. |

---

## Interactions & Behavior

### Navigation
- Standard `<a href>` navigation between the three pages. No client-side routing.
- Active page indicated via `aria-current="page"` and CSS `::after` underline.
- Header stays sticky at top with backdrop blur.

### Hover / Focus states (all defined in `style.css`)
| Element | State | Change |
|---|---|---|
| Nav link | hover | Color `--ink-soft` → `--ink` (160 ms ease) |
| Project card image | hover on card | `transform: scale(1.03)` + `filter: grayscale(60%)` (500 ms / 400 ms ease) |
| Form input | focus | Border color → `--muted`, border-width 1 → 2 px, padding-bottom -1 px to preserve height |
| Primary button | hover | Background → transparent, text → `--ink` (200 ms ease) |
| Info block link | hover | Color + border → `--muted` (160 ms ease) |
| Footer link | hover | Bottom border becomes visible |

### Form behavior
- HTML-only. `action="#"`, `method="post"`. `required` on name / email / message.
- No client-side JS validation beyond native HTML5 (`type="email"`, `required`).
- Developer should wire this to their backend or a form-relay service (Formspree, Basin, Resend, etc.).

### Responsive behavior
Two breakpoints matter:
- **≥ 720 px** — projects grid → 2 columns; skills → 3 columns; section header becomes a 2-column layout; timeline rows become 3-column.
- **≥ 900 px** — hero, about, and contact grids switch to their 2-column form.

Below 720 px everything stacks. Container padding is fluid: `clamp(20px, 4vw, 40px)`.

### Motion
- Smooth scroll (`html { scroll-behavior: smooth; }`).
- All transitions are simple `ease` / `ease` interpolations, 160–500 ms. No JS-driven motion.

---

## State Management

Genuinely stateless. The site is three static HTML documents. No local storage, no client-side state, no data fetching.

**If the developer wires the form to a backend**, minimal state needed:
- `formStatus`: `idle | submitting | success | error`
- Field values (React controlled inputs / equivalent) if not using an uncontrolled form.
- Error messages per field.

---

## Design Tokens

Defined as CSS custom properties on `:root` in `style.css`. Port these verbatim to the target codebase's token system.

### Colors
| Token | Value | Usage |
|---|---|---|
| `--ink` | `#14110f` | Primary text, buttons, hairline emphasis |
| `--ink-soft` | `#2a2622` | Secondary text, prose |
| `--muted` | `#6b6660` | Labels, captions, meta text |
| `--rule` | `#d9d4cc` | Hairlines, borders, dividers |
| `--paper` | `#fafaf7` | Page background |
| `--paper-alt` | `#f2eee6` | Project cover placeholder background |

### Typography
| Token | Value |
|---|---|
| `--font-serif` | `"Fraunces", "Times New Roman", Georgia, serif` |
| `--font-sans` | `"Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif` |
| Base body | Inter 17 px / 1.65 / 400 |
| `h1` | Fraunces `clamp(48px, 8vw, 96px)` / 1.05 / -0.02em |
| Hero title | Fraunces `clamp(56px, 10vw, 128px)` / 0.95 / -0.035em |
| `h2` | Fraunces `clamp(36px, 5vw, 56px)` |
| `h3` | Fraunces `clamp(22px, 2.4vw, 28px)` |
| `h4` | Fraunces 20 px |
| Eyebrow | Inter 12 px / 500 / uppercase / 0.18em tracking |
| Small caps | 11 px / 0.14em – 0.18em tracking / uppercase |

Google Fonts URL used:
```
https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600&display=swap
```

### Spacing scale (8 px base)
| Token | Value |
|---|---|
| `--s-1` | 4 px |
| `--s-2` | 8 px |
| `--s-3` | 16 px |
| `--s-4` | 24 px |
| `--s-5` | 32 px |
| `--s-6` | 48 px |
| `--s-7` | 72 px |
| `--s-8` | 112 px |
| `--s-9` | 160 px |
| Section block padding | `clamp(64px, 10vw, 120px)` |
| Hero block padding | `clamp(72px, 12vw, 140px)` top |
| Container gutter | `clamp(20px, 4vw, 40px)` |
| Max content width | `1120 px` |

### Border-radius
- Only used on the brand-mark dot (`50%`) and the tag pills (`999px`). Everything else is deliberately square/hairlined.

### Shadows
None. The design uses hairlines (`1px solid var(--rule)`) instead of shadows for depth.

### Filters
- `filter: grayscale(100%) contrast(1.02)` on portrait / hero images.
- `filter: grayscale(100%)` → hover `filter: grayscale(60%)` on project covers.

### Selection color
`::selection { background: var(--ink); color: var(--paper); }`

---

## Assets

All images are CC / public-domain-licensed stock photos returned via the design tool's licensed image search. They are grayscale-filtered in CSS, so the source files themselves are color and can be swapped for real photos of Samkit's actual work later without editing markup.

Files (in `design_files/assets/`):
| File | Purpose | Alt text |
|---|---|---|
| `hero-desk.jpg` | Home hero figure | "Minimalist workspace with a laptop, monochrome tones." |
| `about-notebook.jpg` | About page portrait stand-in + Home project #4 cover | "A minimalist notebook and phone on a warm white surface — a stand-in portrait." |
| `project-code.jpg` | Home project #1 cover (Ledger) | "Screenshot of a minimal code editor with syntax-highlighted source." |
| `project-mobile.jpg` | Home project #2 cover (Pocket) | "A collection of minimalist mobile app UI mockups." |
| `project-dashboard.jpg` | Home project #3 cover (Atlas) | "Minimal data dashboard interface with charts and metrics." |

**Note for the developer:** These are placeholders. Samkit intends to replace them with photos of real project work; keep the same aspect ratios (`4/5` for hero, `3/4` for about portrait, `5/4` for project covers) so the layout doesn't reflow.

---

## Content / Copy

All copy is final and should be preserved verbatim unless Samkit provides an update. Notable strings:

- **Hero headline:** "Samkit *Jain,* Frontend Developer." (italic on "Jain,")
- **Hero lede:** "Building clean, semantic, and readable interfaces for the web — with a soft spot for typography, careful spacing, and the CSS box model."
- **Contact placeholder email:** `samkit.jain@example.com` — **replace before shipping.**
- **Social links** in Contact page (GitHub / LinkedIn / Read.cv / Twitter) currently href `#` — **replace with real URLs.**
- **Education dates** in About page are illustrative — verify with Samkit before ship.

---

## Files

Everything in `design_handoff_samkit_portfolio/design_files/`:

```
design_files/
├── index.html          — Home page
├── about.html          — About page
├── contact.html        — Contact page
├── style.css           — Shared stylesheet (all tokens + components)
└── assets/
    ├── hero-desk.jpg
    ├── about-notebook.jpg
    ├── project-code.jpg
    ├── project-mobile.jpg
    └── project-dashboard.jpg
```

`style.css` is organized into 14 numbered sections (Reset → Tokens → Base → Layout Primitives → Header → Hero → Projects → Skills → About → Timeline → Contact → Footer → Utilities → Selection). Sections are labeled with comment banners — a developer porting this to a component library can lift each section into its own module.

---

## Implementation notes for the developer

1. **Preserve semantic HTML.** The whole point of this project (per DecodeLabs Project 01) is semantic integrity. If porting to React/Vue, keep `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<ol>`, `<dl>`, `<dt>`, `<dd>` — do **not** collapse everything into `<div>` soup.
2. **Load Google Fonts once.** Move the `<link>` into your app's root `<head>` (e.g. Next.js `app/layout.tsx`, Astro `Layout.astro`, or `index.html`) rather than repeating on every page.
3. **Extract components** roughly along the CSS section boundaries: `SiteHeader`, `SiteFooter`, `Eyebrow`, `SectionHead`, `ProjectCard`, `SkillGroup`, `TimelineItem`, `Field`, `Button`, `InfoBlock`.
4. **The dotted-leader pattern** on skill list rows (section 8 of `style.css`) is a bit clever — it uses a full-row `::before` and paper-colored span backgrounds to fake the effect. If your target framework's CSS-in-JS strips selectors weirdly, keep this as static CSS.
5. **Zero JavaScript is intentional.** Don't add hydration, don't add framer-motion, don't add smooth-scroll libraries — the design gets its calm from the fact that nothing moves except on hover.
6. **The Tweaks/design-system controls seen in the preview canvas are the design tool's chrome**, not part of the site. Ignore them.
