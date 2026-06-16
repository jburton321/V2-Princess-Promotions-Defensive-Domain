#!/bin/bash
# Princess Promotions Reviews — GitHub Repo Setup
# Run this in the root of your repo after adding all 17 files

echo "Setting up project structure..."

# Create directories
mkdir -p docs
mkdir -p public/logos
mkdir -p public/seals
mkdir -p public/favicons
mkdir -p src

# Move strategy docs
mv defensive-domain-strategy-v3.docx docs/ 2>/dev/null
mv pp-research-brief.docx docs/ 2>/dev/null
mv pp-reviews-copy-v6.docx docs/ 2>/dev/null
mv BRAND-SYSTEM.md docs/ 2>/dev/null

# Move logos
mv logo-header-with-tagline.svg public/logos/ 2>/dev/null
mv logo-horizontal-light.svg public/logos/ 2>/dev/null
mv logo-horizontal-dark.svg public/logos/ 2>/dev/null
mv logo-stacked-light.svg public/logos/ 2>/dev/null
mv logo-stacked-dark.svg public/logos/ 2>/dev/null

# Move seals
mv seal-circle-blue.svg public/seals/ 2>/dev/null
mv seal-framed-lockup.svg public/seals/ 2>/dev/null
mv seal-gold-circle.svg public/seals/ 2>/dev/null

# Move favicons
mv favicon-light.svg public/favicons/ 2>/dev/null
mv favicon-dark.svg public/favicons/ 2>/dev/null

# Move source HTML to src
mv princesspromtionsreviews-v9.html src/ 2>/dev/null

# CURSOR-PROMPT stays at root
# README stays at root

echo ""
echo "Done. Repo structure:"
echo ""
find . -not -path './.git/*' -not -path './node_modules/*' -not -name '.git' -not -name 'node_modules' | sort | head -40
echo ""
echo "Next steps:"
echo "  1. git add -A && git commit -m 'Initial project files' && git push"
echo "  2. Open repo in Cursor"
echo "  3. Paste CURSOR-PROMPT.md contents as your first prompt"
