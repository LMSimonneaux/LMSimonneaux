#!/usr/bin/env bash
# Régénère le CV FR en PDF à partir de cv-src/cv-fr.html (Chrome headless).
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SRC_DIR="$(cd "$(dirname "$0")" && pwd)"
OUT="$SRC_DIR/../public/Louis-Marie-Simonneaux-CV-FR.pdf"

"$CHROME" \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --virtual-time-budget=10000 \
  --print-to-pdf="$OUT" \
  "file://$SRC_DIR/cv-fr.html"

echo "PDF écrit : $OUT"
