# Dark-Mode Audit

## Reproduction

Dark mode was enabled through the application control and inspected in the browser on the overview and vocabulary routes.

| Route | Confirmed working | Remaining risk to normalize |
|---|---|---|
| `/` | Global background, sidebar, hero, roadmap cards, action controls, and learning panel are readable. | Decorative floating surfaces and progress micro-surfaces still use page-specific literals. |
| `/vocabulary` | Page background, word cards, search controls, tags, audio controls, and topic filters render with readable dark surfaces. | IPA guide, select styling, transcript popover, and fallback browser form colours require a unified semantic rule. |
| `/practice` | Lesson card, answer choices, navigation tabs, and reading area are readable in dark mode. | Route-specific selectors should remain below the semantic dark surface layer. |
| `/games` | Game board and matching columns are readable. | The unselected game-mode cards were restored to white because `.game-selector button` had higher specificity than the generic `:where()` dark selector. |
| `/diagnostic` | Question cards, options, badge, listening control, and long-form layout are readable in dark mode. | Result screen and settings dialog inherit the same semantic surface layer for subsequent interaction states. |
| `/learn` | Flashcard, progress meter, instructional micro-steps, and audio action are readable in dark mode. | The revealed/review state uses the same flashcard semantic surface. |
| `/modes` | All four mode cards, the stage, audio action, answer input, and confirmation action are readable. | Public practice interactions keep their accent states without reintroducing a light surface. |
| `/daily-plan` | Hero, plan cards, action links, and fallback-plan copy are readable. | The bottom progress note initially retained a light background; it is now mapped to the raised dark surface and rechecked. |
| `/mock-test` | The signed-out gate uses a consistent dark card, readable heading, supporting copy, and protected-flow CTA in the shared shell. | Authenticated timer/question/result surfaces inherit the same mock-test semantic selectors. |

## Root Cause

The project has two overlapping dark-mode stylesheets plus several route-specific literal light surfaces. Coverage depends on long selector lists, so newly added or nested components can fall through to light backgrounds or muted text. In the games route, a generic `:where()` selector also had lower specificity than the page stylesheet.

## Correction Direction

Define semantic dark surface, raised surface, soft surface, text, border, and form-control tokens at the root. Apply a controlled fallback for cards, inputs, selects, details, dialogs, and tables, then keep only route-specific accent overrides.

## Applied Correction

The generic dark surface groups now use `:is()` rather than `:where()` so that they override page-local selectors with literal light backgrounds. The games mode cards were rechecked after the change and no longer fall back to white.

## Responsive Regression

The principal routes were captured at 375×812: dashboard, vocabulary, SRS, practice, games, learning modes, daily plan, mock test, profile, and diagnostic. Their light-mode layouts remain intact after the new dark layer. Dark-mode-specific responsive rules are limited to navigation and retain the shared semantic surfaces; no mobile selector resets cards to a light background.

The mock-test mobile capture showed its existing short initial loading message. The browser dark-mode inspection subsequently reached the signed-out gate normally, so this capture does not indicate a dark-mode styling failure.

## Final Visual Matrix

| Mode and viewport | Routes verified | Outcome |
| --- | --- | --- |
| Dark desktop | Home, vocabulary, practice, games, diagnostic, SRS, learning modes, daily plan, mock test, profile | The dark root token is active; cards, controls, progress widgets, guest gates, and navigation retain readable foregrounds and dark surfaces. |
| Light mobile (375×812) | Home, vocabulary, SRS, practice, games, learning modes, daily plan, mock test, profile, diagnostic | Layout remains responsive and the unified layer does not change light surfaces. |
| Dark mobile (375×812) | Home, vocabulary, SRS, practice, games, learning modes, daily plan, mock test, profile, diagnostic | Semantic dark surfaces are preserved across cards, options, controls, guest gates, and long-form content; no white-card regressions were found. |

For deterministic review, `?theme=dark` and `?theme=light` temporarily render the requested theme without overwriting the learner's saved choice. The authenticated analytics/chart states still require an OAuth session and were not impersonated; the signed-out profile and mock-test gates were checked instead.
