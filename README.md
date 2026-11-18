# What If Machine

Step-by-step plans for real-life emergencies, styled as a classified contingency terminal.
Works offline and can be added to your phone's home screen.

- App: https://easydoe8836.github.io/scp-incident/
- About page: https://easydoe8836.github.io/scp-incident/about/

## What's here

- `src/artifact.html` — the app source. `sh build-site.sh` builds `index.html` from it.
- `sw.js` — offline cache. Bump `VERSION` after changing the app.
- `about/` — the landing page.
- `scripts/fetch-alerts.mjs` and `.github/workflows/alerts.yml` — copy Met Office
  warnings into `alerts/weather.json` every 30 minutes, because the Met Office feed
  can't be read from a browser directly.
- `manifest.webmanifest`, `icon-*.png` — home screen install.

## Features

- 22 scenario files, tailored to your country, nation, budget and household.
- Live alerts: Met Office warnings for your region and Environment Agency flood alerts
  (England) raise the threat level of matching files. Only your postcode district
  (for example `SW1A`) is sent to postcodes.io to find your location.
- Builder: write your own flowcharts, export them as `.wim.json` files, and import
  files from others. Custom files stay in your browser.

See [CONTRIBUTING.md](CONTRIBUTING.md) to add your country or a scenario.

## Attribution

Contains public sector information licensed under the Open Government Licence v3.0.
Weather warnings © Crown copyright, Met Office. Flood data © Environment Agency.

General guidance only, not legal, financial, or medical advice. If anyone is in danger,
call your local emergency number.
