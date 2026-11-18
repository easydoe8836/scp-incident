#!/bin/sh
# Rebuilds index.html (the GitHub Pages page) from src/artifact.html (the source page).
# Edit scenarios in src/artifact.html, run `sh build-site.sh`, and bump VERSION in sw.js.
set -e
cd "$(dirname "$0")"
{
  printf '%s\n' '<!doctype html>' '<html lang="en">' '<head>' '<meta charset="utf-8">' \
    '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">' \
    '<meta name="theme-color" content="#13110d">' '<meta name="description" content="Step-by-step plans for real-life emergencies.">' \
    '<link rel="manifest" href="manifest.webmanifest">' '<link rel="apple-touch-icon" href="icon-192.png">' \
    '<meta name="apple-mobile-web-app-capable" content="yes">' '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">' \
    '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}</style>' \
    '</head>' '<body>'
  cat src/artifact.html
  printf '%s\n' '</body>' '</html>'
} > index.html
echo "Built index.html"
