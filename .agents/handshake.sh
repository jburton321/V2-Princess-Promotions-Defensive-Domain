#!/bin/bash
# Handshake for agents sharing this repo. File-level claims + an append-only log.
#
#   .agents/handshake.sh hello   <agent>                 announce yourself
#   .agents/handshake.sh claim   <agent> <path>          take a file (fails if held)
#   .agents/handshake.sh release <agent> <path>          give it back
#   .agents/handshake.sh say     <agent> "<message>"     leave a note for the others
#   .agents/handshake.sh status                          who holds what, recent log
#
# A claim is <path>.lock beside the file. Claims older than 45 min are reported
# as STALE and may be taken over — say so in the log when you do.
set -u
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOG="$ROOT/.agents/log.md"
STALE_MIN=45
now() { date '+%Y-%m-%d %H:%M:%S'; }
# macOS date first, GNU date second, so the stale calc works on both
epoch_of() { date -j -f '%Y-%m-%d %H:%M:%S' "$1" +%s 2>/dev/null || date -d "$1" +%s 2>/dev/null || echo 0; }
lock_for() { echo "$ROOT/.agents/locks/$(echo "$1" | tr '/' '_').lock"; }
log() { mkdir -p "$(dirname "$LOG")"; printf '%s  %-12s %s\n' "$(now)" "$1" "$2" >> "$LOG"; }

mkdir -p "$ROOT/.agents/locks"
cmd="${1:-status}"; agent="${2:-unknown}"

case "$cmd" in
  hello)
    log "$agent" "joined"
    echo "hello logged. current state:"; "$0" status ;;
  claim)
    path="${3:?path required}"; lf="$(lock_for "$path")"
    if [ -f "$lf" ]; then
      holder="$(head -1 "$lf")"; when="$(sed -n 2p "$lf")"
      age=$(( ( $(date +%s) - $(epoch_of "$when") ) / 60 ))
      if [ "$holder" = "$agent" ]; then echo "already yours: $path"; exit 0; fi
      if [ "$age" -ge "$STALE_MIN" ]; then
        echo "STALE: $path held by $holder since $when (${age}m). Take it over only if you must, and say so."; exit 2
      fi
      echo "HELD: $path by $holder since $when (${age}m). Do not edit it."; exit 1
    fi
    printf '%s\n%s\n%s\n' "$agent" "$(now)" "$path" > "$lf"
    log "$agent" "claimed  $path"; echo "claimed $path" ;;
  release)
    path="${3:?path required}"; lf="$(lock_for "$path")"
    [ -f "$lf" ] && rm -f "$lf"
    log "$agent" "released $path"; echo "released $path" ;;
  say)
    log "$agent" "${3:?message required}"; echo "logged" ;;
  status)
    echo "— claims —"
    shopt -s nullglob; found=0
    for lf in "$ROOT"/.agents/locks/*.lock; do
      found=1
      printf '  %-46s %s  since %s\n' "$(sed -n 3p "$lf")" "$(head -1 "$lf")" "$(sed -n 2p "$lf")"
    done
    [ "$found" = 0 ] && echo "  (none)"
    echo "— last 12 log lines —"
    [ -f "$LOG" ] && tail -12 "$LOG" | sed 's/^/  /' || echo "  (empty)" ;;
  *) echo "unknown command: $cmd"; exit 64 ;;
esac
