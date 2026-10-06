"""Refresh the root English fallback after independently editing /en/."""
from pathlib import Path

DIST = Path(__file__).resolve().parents[1] / 'dist'
content = (DIST / 'en' / 'index.html').read_text()
needle = '    <script src="/script.js" defer></script>'
assert content.count(needle) == 1
content = content.replace(needle, '    <script src="/language-detection.js"></script>\n' + needle)
(DIST / 'index.html').write_text(content)
print('Root English fallback refreshed; automatic language selection preserved')
