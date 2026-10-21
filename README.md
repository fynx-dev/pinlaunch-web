# PinLaunch landing page

This directory is a dependency-free static landing page for GitHub Pages. It contains no package manager, build step, analytics, web font, or remote asset.

## Preview locally

From this website repository on Windows:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish with GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` deploys this repository root on pushes to `main`, and can also be run manually.

Before the first deployment, open the repository's **Settings → Pages** and set **Source** to **GitHub Actions**. The workflow uses no secrets and requests only `contents: read`, `pages: write`, and `id-token: write` permissions.

## Before public release

- Replace the disabled Microsoft Store button only after the Store listing has a public URL.
- Add the public repository/issue-tracker URL in the support section once one exists.
- Keep the privacy statement aligned with the application. It currently states the shipped local-only behavior: no telemetry, analytics, advertising, account sign-in, cloud sync, update checking, or personal-information transmission.
