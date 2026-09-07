# FENICON React website

React + Vite version of the FENICON multi-page site.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The generated production website is written to `dist/`.

## GitHub Pages

This repository includes:

`.github/workflows/deploy-pages.yml`

Every push to `main` automatically:
1. installs dependencies
2. runs the Vite build
3. publishes the `dist/` folder to GitHub Pages

In GitHub, open:

Settings → Pages → Build and deployment → Source → GitHub Actions

## Routes

- `/`
- `/services/`
- `/copilot/`
- `/microsoft-365/`
- `/power-platform/`
- `/automation/`
- `/about/`
- `/insights/`
- `/contact/`
