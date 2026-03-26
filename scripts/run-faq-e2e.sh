#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
PORT="${PORT:-3010}"
npm run build --silent
npx next start -p "$PORT" &
PID=$!
trap 'kill "$PID" 2>/dev/null || true' EXIT
for _ in $(seq 1 45); do
  if curl -sf "http://127.0.0.1:$PORT/" >/dev/null; then
    break
  fi
  sleep 1
done
BASE_URL="http://127.0.0.1:$PORT" node scripts/faq-click-smoke.mjs
