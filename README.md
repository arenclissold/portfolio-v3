# Aren Clissold

Live at [arenclissold.com](https://arenclissold.com/).

A text-only portfolio built with HTML, CSS, and vanilla JavaScript. No framework, package dependencies, or build step. All website files live directly in `dist/`, ready to serve. JavaScript chooses the browser's primary language on the root page, remembers manual language choices, and updates the footer year. Each language page and its links work without JavaScript; the root falls back to English without JavaScript.

The monochrome design follows the system’s light/dark preference and uses a self-hosted JetBrains Mono Nerd Font. Its Open Font License is included in `dist/assets/fonts/OFL.txt`.

## Local preview

Open `dist/index.html` directly in your browser, or serve `dist/` with any static web server. No install step is needed.

## Language content

- Edit English content in `dist/en/index.html` and Japanese content in `dist/ja/index.html` independently. The Japanese version starts as a translation and can be adapted for Japanese recruiting.
- After English changes, refresh the root English fallback with `scripts/sync_root.py`. This preserves automatic language selection on `/`. The root's canonical points to `/en/`.
- Shared styles and behavior live in `dist/styles.css` and `dist/script.js`. `dist/language-detection.js` runs only on `/`, before the body renders. Manual choices use localStorage key `portfolio-language` and take precedence on later root visits.
- Explicit `/en/` and `/ja/` links always show that language regardless of stored/browser preference. The top-of-page language links preserve the current section when JavaScript is enabled. Missing/blocked storage does not prevent switching.
- Maintain matching career facts, contact links and section IDs; wording and emphasis may differ. Each page has its own title, description, canonical and language alternatives.
- The Japanese page currently offers the English résumé, labelled 英文レジュメ. Private 履歴書 and 職務経歴書 drafts remain in the job-search workspace; do not publish personal details or unreviewed drafts.

## Site assets

The “AC” favicons use the bundled font and match the light and dark page colours. `favicon.ico` is the fallback for browsers, and `apple-touch-icon.png` is used for saved home-screen shortcuts.

`robots.txt` and `sitemap.xml` point crawlers to the live domain. `404.html` supplies the Cloudflare Pages not-found page, and `_redirects` preserves the original résumé URL.
