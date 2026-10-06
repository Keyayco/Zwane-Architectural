---
name: GitHub push authentication
description: Safe handling of GitHub credentials when pushing from this workspace.
---

Keep GitHub push credentials in Replit Secrets and never print command output from a Git operation that receives a credential-bearing URL. Git may include malformed remote arguments in its error text. Do not save a credential-bearing URL in `.git/config`; construct it only for the push and suppress or safely redact output.

**Why:** A malformed secret value was echoed by Git during a failed push.

**How to apply:** Validate the secret's expected format without displaying it, then push with output suppressed and verify the remote commit separately.
