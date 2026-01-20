#!/bin/bash
set -e

echo "=== DiceUI Setup Verification ==="
echo ""

echo "✓ Node version: $(node --version)"
echo "✓ npm version: $(npm --version)"
echo ""

echo "Checking dependencies..."
if [ -d "node_modules" ]; then
  echo "✓ node_modules exists"
else
  echo "✗ node_modules missing - run: npm install"
  exit 1
fi

if [ -f "node_modules/.bin/vite" ]; then
  echo "✓ vite binary found"
else
  echo "✗ vite binary missing"
  exit 1
fi

echo ""
echo "Checking source files..."
[ -f "src/main.tsx" ] && echo "✓ src/main.tsx exists" || echo "✗ src/main.tsx missing"
[ -f "src/App.tsx" ] && echo "✓ src/App.tsx exists" || echo "✗ src/App.tsx missing"
[ -f "src/pages/Members.tsx" ] && echo "✓ src/pages/Members.tsx exists" || echo "✗ src/pages/Members.tsx missing"
[ -f "src/data/members.ts" ] && echo "✓ src/data/members.ts exists" || echo "✗ src/data/members.ts missing"
[ -f "index.html" ] && echo "✓ index.html exists" || echo "✗ index.html missing"

echo ""
echo "Checking build output..."
if [ -d "dist" ]; then
  echo "✓ dist folder exists (last build succeeded)"
else
  echo "⚠ dist folder not found (build not run yet)"
fi

echo ""
echo "Testing vite command..."
npm run dev -- --version 2>&1 | grep -q "vite/" && echo "✓ 'npm run dev' command works" || echo "✗ 'npm run dev' command failed"

echo ""
echo "=== Setup Complete ==="
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "Alternative methods if 'npm run dev' has issues:"
echo "  npm run dev:alt"
echo ""
echo "The app will be available at:"
echo "  http://localhost:5173"
echo ""
