# Copilot Instructions for Portfolio Project

## Project Overview
This is a **Create React App (CRA)** portfolio project using React 19.2 with modern testing tools (React Testing Library, Jest). The project is a boilerplate with minimal customization—ready for portfolio content implementation.

## Project Structure & Key Files
- **`src/App.js`** - Root React component (currently shows default CRA template)
- **`src/index.js`** - React app entry point with React 19 strict mode
- **`public/index.html`** - HTML template with `<div id="root">` mount point
- **`public/manifest.json`** - PWA manifest configuration
- **`package.json`** - Dependencies and build scripts

## Critical Developer Workflows

### Development
```bash
npm start          # Runs dev server on http://localhost:3000 (hot reload enabled)
npm run build      # Production build with optimizations (output: build/ folder)
npm test           # Jest test runner in watch mode (uses React Testing Library)
npm run eject      # ⚠️ One-way operation - exposes webpack config (avoid unless necessary)
```

## Architecture & Patterns

### React Component Structure
- **Functional components only** - Modern React with hooks (no class components)
- **CSS Modules Pattern** - `App.js` imports `App.css` directly; co-locate styles with components
- **Entry Point** - `index.js` uses React 19's `createRoot()` API with `StrictMode` enabled

### Testing Approach
- **Test Framework** - Jest (via CRA) with React Testing Library
- **Test Files** - Placed alongside source files with `.test.js` suffix (e.g., `App.test.js`)
- **No custom test config** - All testing inherited from CRA defaults

## Build & Deployment
- **Bundle Output** - `build/` folder after running `npm run build`
- **Supported Browsers** - Production: >0.2%, not dead; Development: latest versions of Chrome, Firefox, Safari
- **Static Export Ready** - Can be deployed to any static host (Vercel, GitHub Pages, Netlify, etc.)

## ESLint & Code Quality
- **Config** - Extends `react-app` and `react-app/jest` (no custom overrides)
- **Linting** - Automatic via `react-scripts`; lint errors shown in dev console
- **No TypeScript** - JavaScript only (.js files)

## External Dependencies & Performance
- **Web Vitals Integration** - `reportWebVitals()` in index.js (for analytics; currently unused)
- **Minimal Dependencies** - Only React essentials; avoid adding heavy packages without justification

## Common Patterns to Follow
1. **Keep components simple** - Edit `App.js` directly or create new components in `src/`
2. **Style components** - Import CSS files per component (e.g., `import './ComponentName.css'`)
3. **Test new features** - Add `.test.js` files using React Testing Library patterns
4. **Don't eject** - Preserve CRA's build simplicity; customize via environment variables or CRA's built-in configs if needed

## Typical Development Loop
1. Edit `src/App.js` or create new components in `src/`
2. Dev server auto-reloads at http://localhost:3000
3. Run `npm test` to validate changes
4. Run `npm run build` before deployment
