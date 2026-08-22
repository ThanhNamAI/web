# Security & Authorization Review — Upgrade

## Scope

The review covers user-owned study progress, SRS updates, achievement issuance, learning analytics and profile settings. The application follows the existing tRPC architecture and does not add third-party authentication, external storage, payment handling or client-provided identity fields in this upgrade.

| Control | Evidence reviewed | Result |
|---|---|---|
| Authorization | Learning dashboard, review, activity recording and settings are all `protectedProcedure` routes; the server derives `userId` from `ctx.user`, not from request input. | Pass |
| Input validation | `recordActivity` uses a strict skill enum, bounded score/duration and bounded activity type. SRS quality is bounded 0–3. Settings are bounded with Zod. | Pass |
| Data isolation | Every progress, session and achievement query filters by authenticated `userId`; achievement rows also have a composite unique constraint on `(userId, code)`. | Pass |
| Integrity | Badge awards are calculated server-side after a recorded session. The client cannot submit an achievement code or XP amount. | Pass |
| Secrets | The upgrade does not add browser-visible API secrets, custom credentials or logging of user learning data. | Pass |

## Impact

The new achievement table uses a foreign key with cascade deletion from the user record and a unique constraint to prevent duplicate badges. The new analytics function is read-only and derives results from existing study sessions. Existing routes and schema contracts remain intact. No destructive migration was introduced.

## Follow-up

For a future public launch, add rate limiting at the gateway and a privacy retention policy for learning-event history. These are operational hardening measures, not blockers for the current authenticated application.
