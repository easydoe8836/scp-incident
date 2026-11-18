# What If Machine

Step-by-step plans for real-life emergencies, styled as a classified contingency terminal.
Works offline and can be added to your phone's home screen.

- `index.html` — the whole app, built from `src/artifact.html` by `sh build-site.sh`.
- `sw.js` — offline cache. Bump `VERSION` after changing the app.
- `manifest.webmanifest`, `icon-*.png` — home screen install.

Scenario data lives in the `SCENARIOS` list near the top of `index.html`, with
country numbers in `COUNTRIES`, `UK_REGIONS` and `LINKS` below it.

General guidance only, not legal, financial, or medical advice. If anyone is in danger, call your local emergency number.
