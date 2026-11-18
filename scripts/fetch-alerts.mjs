// Fetches Met Office weather warning RSS feeds and saves them as alerts/weather.json.
// Runs in GitHub Actions (see .github/workflows/alerts.yml), because the Met Office feeds
// don't allow browsers on other sites to read them directly.
import { writeFile } from "node:fs/promises";

const REGIONS = ["uk", "os", "he", "gr", "st", "ta", "dg", "ni", "wl", "nw", "ne", "yh", "wm", "em", "ee", "sw", "se"];
const base = "https://www.metoffice.gov.uk/public/data/PWSCache/WarningsRSS/Region/";
const pick = (xml, tag) => { const m = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`)); return m ? m[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim() : ""; };
const decode = s => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

const out = { source: "Met Office weather warnings (Crown copyright)", regions: {} };
for (const r of REGIONS) {
  try {
    const res = await fetch(base + r, { headers: { "User-Agent": "what-if-machine-alerts" } });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const xml = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m => ({
      title: decode(pick(m[1], "title")),
      description: decode(pick(m[1], "description")).slice(0, 600),
      link: decode(pick(m[1], "link")),
      published: decode(pick(m[1], "pubDate"))
    }));
    out.regions[r] = items;
  } catch (e) {
    console.error(r, e.message);
  }
}
const json = JSON.stringify(out, null, 1);
await writeFile("alerts/weather.json", json + "\n");
console.log("Saved", Object.values(out.regions).reduce((n, a) => n + a.length, 0), "warnings");
