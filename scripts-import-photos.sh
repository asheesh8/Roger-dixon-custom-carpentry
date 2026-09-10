#!/bin/bash
# Drop originals into reference/from-roger/, then run: bash scripts-import-photos.sh
# Converts everything there into optimised WebP in public/images/ and lists the names.
set -e
cd "$(dirname "$0")"
shopt -s nullglob nocaseglob
i=0
for f in reference/from-roger/*.{jpg,jpeg,png,heic,webp}; do
  base=$(basename "${f%.*}" | tr '[:upper:] ' '[:lower:]-')
  out="public/images/${base}.webp"
  magick "$f" -auto-orient -resize '1400x1900>' -quality 82 "$out"
  echo "  $f  ->  $out  ($(identify -format '%wx%h' "$out"))"
  i=$((i+1))
done
echo "converted $i file(s)"
