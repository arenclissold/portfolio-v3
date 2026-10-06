# Aren Clissold

Live at [arenclissold.com](https://arenclissold.com/).

A text-only portfolio built with HTML, CSS, and vanilla JavaScript. No framework, package dependencies, or build step. All website files live directly in `dist/`, ready to serve. The only JavaScript updates the footer year; the page works without JavaScript.

The monochrome design follows the system’s light/dark preference and uses a self-hosted JetBrains Mono Nerd Font. Its Open Font License is included in `dist/assets/fonts/OFL.txt`.

## Local preview

Open `dist/index.html` directly in your browser, or serve `dist/` with any static web server. No install step is needed.

## Site assets

The “AC” favicons use the bundled font and match the light and dark page colours. `favicon.ico` is the fallback for browsers, and `apple-touch-icon.png` is used for saved home-screen shortcuts.

`robots.txt` and `sitemap.xml` point crawlers to the live domain. `404.html` supplies the Cloudflare Pages not-found page, and `_redirects` preserves the original résumé URL.
