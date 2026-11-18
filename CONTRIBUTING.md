# Contributing

Thanks for helping. The app is one HTML page with no build tools. The source is
`src/artifact.html`; `sh build-site.sh` turns it into `index.html` for the site.

## Add your country

Every number in the app comes from one table, so adding a country is a data change.

1. Open `src/artifact.html` and find `const COUNTRIES = {`.
2. Copy the `IE` entry and give it your country's two-letter code (ISO 3166, for example `NZ`).
   The country picker in the profile is built from this table, so it appears automatically.
3. Fill in every field. Each one is a short phrase that drops into a sentence:

   | Field | What it holds |
   |---|---|
   | `name` | Country name |
   | `emergency` | Emergency number(s) |
   | `crisis` | A free 24/7 suicide or crisis line |
   | `textCrisis` | A crisis text line, ending with a full stop |
   | `medAdvice` | Non-emergency medical advice line |
   | `mhCrisis` | Urgent mental health route |
   | `debtHelp`, `housingHelp` | Free debt and housing advice |
   | `jobHelp` | One or two sentences on claiming unemployment support |
   | `powerCut` | How to report a power cut |
   | `abuse` | Domestic abuse helpline |
   | `weather` | Where official weather and flood warnings are published |
   | `grief` | Bereavement support |
   | `fraud`, `bankScam`, `scamText` | Where to report fraud and scams |
   | `vetHelp` | Low-cost vet care |

   If a service doesn't exist, write the most useful general route rather than leaving it blank.
4. Add official links for the same keys under `const LINKS = {`, using your country code.
   Links appear next to the text, so only use official or well-known charity sites.
5. Regions with different services (like Scotland in the UK) go in `UK_REGIONS` and `LINKS`
   by region key. Only list the fields that differ.
6. Set `CHECKED` to the date you verified the numbers.

**Sources.** Check every number against the service's own website or a government page.
Put the source links in your pull request description. Please don't copy numbers from
other apps or lists.

## Add or change a scenario

Scenarios live in `const SCENARIOS = [` near the top of the page. The comment above it
describes each field. You can also draft one in the app's **Builder**, export it as a
`.wim.json` file, and attach that file to an issue.

Write in your own words, in plain short sentences. General guidance only: no legal,
medical, or financial advice beyond pointing people to the right service.

## Test before you send

1. Run `sh build-site.sh`, then bump `VERSION` in `sw.js`.
2. Serve the folder (`python3 -m http.server`) and open `http://localhost:8000`.
3. Set your new country in the profile and open a few files (Lost job, Power cut,
   Scam call). Check every number reads correctly in its sentence.
4. Check the browser console has no errors.

## Live alerts

`scripts/fetch-alerts.mjs` runs every 30 minutes from `.github/workflows/alerts.yml` and
writes Met Office warnings to `alerts/weather.json`. Flood alerts come straight from the
Environment Agency in the browser (England only). Alerts for other countries need a feed
that allows browser access or can be copied by the same job.
