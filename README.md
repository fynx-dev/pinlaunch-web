# PinLaunch landing page

This directory is a dependency-free static landing page for GitHub Pages. It contains no package manager, build step, analytics, web font, remote asset, or translation service. PinLaunch is a proprietary product; this repository contains its public landing page only.

## Preview locally

From this website repository on Windows:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish with GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` deploys this repository root on pushes to `main`, and can also be run manually.

Before the first deployment, open the repository's **Settings → Pages** and set **Source** to **GitHub Actions**. The workflow uses no secrets and requests only `contents: read`, `pages: write`, and `id-token: write` permissions.

## Localization

English is the no-JavaScript default. On a first visit with JavaScript enabled, the site automatically uses Simplified Chinese when the browser language preferences include `zh`; otherwise it stays in English. The language selector lets visitors override that choice, which is stored only in the browser's local storage. No language information is transmitted.

## Screenshots

Place supplied PNG screenshots at these paths; the page will use them automatically without HTML changes:

- `assets/screenshots/taskbar-menu.png`
- `assets/screenshots/appearance-settings.png`
- `assets/screenshots/app-list-settings.png`

The checked-in PNGs are visual placeholders generated from local SVG source artwork. Replace each PNG in place when the real screenshot is ready; no HTML or layout change is required.

## Before public release

- Replace the disabled Microsoft Store button only after the Store listing has a public URL.
- Keep the privacy statement aligned with the application. It currently states the shipped local-only behavior: no telemetry, analytics, advertising, account sign-in, cloud sync, update checking, or personal-information transmission.
