# CLAUDE.md — AI Readiness Presentation

## Project Overview

This is an interactive slide-deck web app built with React + TypeScript + Vite. It presents a 45-minute executive talk titled **"Getting Your Teams AI-Ready"**, delivered at the Tech Hub Pulse Conference. The app renders slides from a single data file and supports keyboard navigation and togglable speaker notes.

---

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| React | ^19.2.0 | UI rendering |
| TypeScript | ~5.9.3 | Type checking (strict mode) |
| Vite | ^8.0.0-beta.13 | Dev server + build |
| ESLint | ^9.39.1 | Linting (flat config, TS + React hooks) |

No testing framework is configured.

---

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (Vite HMR)
npm run build        # Type-check then build → outputs to /docs
npm run lint         # Run ESLint
npm run preview      # Preview the production build locally
```

---

## Directory Structure

```
/
├── src/
│   ├── main.tsx              # React entry point
│   ├── App.tsx               # Root component — navigation state, keyboard events
│   ├── App.css               # Layout, header, footer, progress bar, notes panel
│   ├── index.css             # Global CSS variables (design tokens) and resets
│   ├── components/
│   │   ├── Slide.jsx         # Slide renderer — type-dispatched JSX
│   │   └── Slide.css         # Slide-specific styles (cards, tables, maturity list, etc.)
│   ├── data/
│   │   └── slides.js         # All slide content as a plain JS array (the single source of truth)
│   └── assets/
│       └── react.svg
├── docs/                     # Production build output (for GitHub Pages)
├── public/
│   └── vite.svg
├── index.html                # HTML entry point
├── vite.config.ts            # Vite config — sets outDir to "docs"
├── tsconfig.json             # Root TS config
├── tsconfig.app.json         # App TS config (strict mode, ES2022, allowJs: true)
├── tsconfig.node.json        # Node/Vite TS config
├── eslint.config.js          # ESLint flat config (TS + react-hooks + react-refresh)
└── package.json
```

---

## Architecture

### Data → Render Flow

All slide content lives in `src/data/slides.js` as an exported array of plain objects. Each slide object has a `type` field that determines how it is rendered.

`App.tsx` holds the current slide index in React state and passes the active slide object as a prop to `<Slide />`.

`src/components/Slide.jsx` is a single component with a chain of `if (s.type === "...")` guards. Each branch returns a distinct JSX layout. There is no routing — everything is a single page.

### Slide Types

| `type` | Shape keys | Layout |
|--------|-----------|--------|
| `title` | `title`, `subtitle`, `meta`, `timing`, `speaker` | Hero title card |
| `framing` | `title`, `heading`, `points[]` (`bold`, `rest`), `timing`, `speaker` | Numbered point cards |
| `framework` | `title`, `heading`, `dimensions[]` (`icon`, `label`, `desc`), `timing`, `speaker` | 2-column icon cards |
| `teams` | `title`, `heading`, `functions[]` (`team`, `use`, `tool`), `timing`, `speaker` | HTML table |
| `change` | `title`, `heading`, `points[]` (`bold`, `rest`), `timing`, `speaker` | Dot-bullet cards |
| `governance` | `title`, `heading`, `pillars[]` (`icon`, `title`, `body`), `timing`, `speaker` | 2-column icon cards |
| `maturity` | `title`, `heading`, `levels[]` (`level`, `label`, `desc`, `color`), `timing`, `speaker` | Colored numbered rows |
| `action` | `title`, `heading`, `phases[]` (`phase`, `label`, `color`, `items[]`), `timing`, `speaker` | 3-phase grid with colored accents |
| `closing` | `title`, `quote`, `callToAction`, `timing`, `speaker` | Centered blockquote |

Every slide object must include a `timing` string (e.g., `"10–18 min"`) and a `speaker` string for the speaker notes panel.

### Navigation

- **Keyboard**: `ArrowRight` / `ArrowLeft` (bound in `useEffect` inside `App.tsx`)
- **Buttons**: Previous / Next in the footer
- **Dots**: Clickable dot indicators, one per slide
- **Progress bar**: Top of page, width driven by `(current + 1) / total * 100`

---

## Key Conventions

### Adding or Editing Slides

1. Edit `src/data/slides.js` only — this is the single source of truth for all content.
2. Give each slide a unique `id` (integer, sequential).
3. Choose an existing `type` or add a new one (see below).
4. Always include `timing` and `speaker` fields.

### Adding a New Slide Type

1. Add the slide object to `slides.js` with a new `type` string.
2. Add a corresponding `if (s.type === "yourtype")` branch in `Slide.jsx` before the final `return null`.
3. Add any new CSS classes to `Slide.css`.

### TypeScript Notes

- `allowJs: true` is set, which is why `Slide.jsx` and `slides.js` can coexist with `.tsx` files without type errors.
- TypeScript strict mode is on. Avoid `any` where possible; the one existing `any` annotation (in `App.tsx` dot-map) is inherited from the JS data file.
- `noUnusedLocals` and `noUnusedParameters` are enforced — do not leave dead variables.

### CSS / Styling

- Design tokens (colors, spacing) are defined as CSS custom properties in `src/index.css`. Always use the existing variables (`--indigo`, `--purple`, `--bg`, `--border`, `--text-dim`, etc.) rather than hardcoding values.
- Layout is pure CSS Flexbox with `height: 100vh` — the app does not scroll at the top level; only the `main` area overflows.
- Dynamic colors in slide types like `maturity` and `action` are set inline via `style` props, using values from the data file.

### Linting

ESLint uses flat config (`eslint.config.js`) with:
- `@eslint/js` recommended rules
- `typescript-eslint` recommended rules
- `eslint-plugin-react-hooks` (hooks rules)
- `eslint-plugin-react-refresh` (Vite HMR safety)

Linting only covers `**/*.{ts,tsx}` — `.jsx` and `.js` files are not linted. If you convert source files to TypeScript, linting will apply automatically.

---

## Build & Deployment

- `npm run build` runs `tsc -b && vite build`
- Output directory is `docs/` (configured in `vite.config.ts`)
- The `docs/` folder is committed to the repo and served via **GitHub Pages** (pointing to `/docs` on `main`)
- After any content or code change that should go live: run `npm run build`, then commit and push both source and `docs/`

---

## Git Workflow

- Active development branch: `claude/add-claude-documentation-n1kQc`
- Main branch: `main` / `master`
- Branch names starting with `claude/` are used for AI-assisted development sessions
- Commit messages should be descriptive and present-tense (e.g., `Add governance slide`, `Fix keyboard nav on last slide`)
- Always push with: `git push -u origin <branch-name>`

---

## No Testing Framework

There are no unit or integration tests. Manual browser testing is the only test path. If adding tests, Vitest integrates naturally with Vite projects.
