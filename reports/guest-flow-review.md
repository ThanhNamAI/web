# Guest-Flow Review

The desktop and mobile visual review covered `/`, `/vocabulary`, `/modes`, `/daily-plan`, `/mock-test`, and `/profile`.

| Route | Guest model | Verified desktop/mobile behavior |
|---|---|---|
| `/` | Public discovery page. Authentication is optional. | The learning dashboard, route navigation, and 15-minute-plan entry remain visible; no username/password form is present. |
| `/vocabulary` | Public library. Authentication is optional for browsing. | Search, topic filters, examples, transcript, and 0.5×/0.75×/1× rate selection remain usable without an account. |
| `/modes` | Public practice room. Authentication is optional; result persistence is conditional. | Four learning modes are interactive for a guest; activity completion only records server progress after OAuth authentication. |
| `/daily-plan` | Public fallback plan with optional personalization. | A 15-minute fallback plan is shown without a session, every block routes to a real activity, and the note explicitly asks the learner to sign in only to save/personalize progress. |
| `/mock-test` | Protected result-persistence flow with a guest gate. | The 200-question blueprint, 120-minute timer, seven-Part distribution, dark-mode-safe gate, and shared OAuth sign-in CTA render responsively. Starting/saving requires OAuth. |
| `/profile` | Protected profile with an explicit guest gate. | The page presents an OAuth sign-in CTA. In an authenticated preview with no attempts, the progress chart shows a safe empty state instead of invented results. |

Mobile verification used the same six routes at 375×812. The responsive shell exposes navigation through the existing mobile controls; no guest route introduces local account registration, password entry, reset, or storage.

No local username/password form, password-reset route, or password storage path was introduced. OAuth remains the only account-entry flow.
