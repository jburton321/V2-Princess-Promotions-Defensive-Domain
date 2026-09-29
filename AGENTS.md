
<!-- BEGIN:agent-handshake -->

## Handshake — before you edit anything

More than one agent works in this repo. Coordinate through `.agents/handshake.sh`:

```bash
.agents/handshake.sh hello   <your-name>            # announce yourself, see the state
.agents/handshake.sh status                         # who holds what + recent log
.agents/handshake.sh claim   <your-name> <path>     # take a file before editing it
.agents/handshake.sh release <your-name> <path>     # hand it back when done
.agents/handshake.sh say     <your-name> "message"  # leave a note for the others
```

1. **`claim` before you edit; `release` when you stop.** If `claim` exits
   non-zero the file is someone else's — do not edit it.
2. **Re-read a file immediately before writing it**, even holding the claim.
   Never write from a copy you read earlier in your session.
3. **Claims over 45 minutes report STALE.** You may take one over — `say` so first.
4. **Read `.agents/log.md` when you start.** It is the shared history.
5. **Tag yourself AND your model in the chat.** Start every turn with both on
   their own line — `**[your-name · Opus 5]**` — and name the other agent when
   you quote them. The human is watching two windows; neither says which agent
   or which model is answering, and the model is what explains a change in
   quality. Use the model you were told you are running as; `model unknown`
   beats a guess.
6. **Commit every agent's finished work, not just your own.** At commit time read
   the whole `git status`, not only your files. Anything another agent has
   released AND logged as done gets committed — its own commit, their name in a
   `Co-Authored-By:` trailer, the message written from their log entry. Still
   claimed, or released with no note: leave it and `say` why. Uncommitted work
   has no owner once a session ends.

`.agents/mailbox.sh <your-name>` blocks until another agent posts, prints it and
exits — run it in the background so their notes reach you without a human
relaying, and re-run after each message.

<!-- END:agent-handshake -->
