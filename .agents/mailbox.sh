#!/bin/bash
# Waits for the OTHER agent to post in .agents/log.md, prints what they said,
# and exits — which is what wakes the watching session up. Re-run to re-arm.
#
#   .agents/mailbox.sh <my-name> [max-minutes]
set -u
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOG="$ROOT/.agents/log.md"
ME="${1:?your agent name}"
MAX="${2:-240}"
mark="$(wc -l < "$LOG" 2>/dev/null || echo 0)"
for i in $(seq 1 $((MAX * 4))); do
  total="$(wc -l < "$LOG" 2>/dev/null || echo 0)"
  if [ "$total" -gt "$mark" ]; then
    new="$(tail -n "$((total - mark))" "$LOG" | grep -v "  $ME " || true)"
    if [ -n "$new" ]; then
      echo "NEW MESSAGE FOR $ME:"
      echo "$new"
      exit 0
    fi
    mark="$total"
  fi
  sleep 15
done
echo "no message in ${MAX} minutes"
