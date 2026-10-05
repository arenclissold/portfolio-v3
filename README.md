# Aren Clissold

A text-only portfolio built with HTML, CSS, and vanilla JavaScript. No framework, package dependencies, or build step. All website files live directly in `dist/`, ready to serve. The only JavaScript updates the footer year; the page works without JavaScript.

The monochrome design follows the system’s light/dark preference and uses a self-hosted JetBrains Mono Nerd Font. Its Open Font License is included in `dist/assets/fonts/OFL.txt`.

## Local preview

Open `dist/index.html` directly in your browser, or serve `dist/` with any static web server. No install step is needed.

## Cloudflare Pages

Connect this repository to a Cloudflare Pages project using:

- Framework preset: **None**
- Build command: **exit 0** (no build; deploy the existing files)
- Build output directory: **dist**
- Root directory: the repository root

Alternatively, upload the contents of `dist/` using Pages Direct Upload.

See Cloudflare’s [static HTML deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) for the dashboard steps.

No server runtime, functions, environment variables, or SPA fallback are required. The entire `dist/` directory can also be served by any other static host.

## Editing

- Update text and links in `dist/index.html`.
- Update layout and colours in `dist/styles.css`.
- Update JavaScript in `dist/script.js`.
- Replace `dist/public/aren_clissold_resume.pdf` to update the résumé.

Edit files in `dist/` directly, then refresh the browser. Commit that folder to deploy your changes.
