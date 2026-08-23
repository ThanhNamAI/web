# Mock-Test Dark Mode Issue

## Reproduction

1. Open `/mock-test` without an authenticated session.
2. Activate the theme toggle.
3. Observe the mock-test sign-in gate.

## Root Cause

The page background changes to dark mode, but the mock-test gate keeps a light surface while inheriting light-on-dark text tokens. Heading and descriptive text become nearly invisible, failing the required contrast level.

## Required Fix

Use semantic dark surface and foreground tokens for the gate, timed session cards, question cards, answer states, timer, results, and recommendation panel. Do not rely on the global background override alone.

## Verification

After applying dark foreground and surface rules to the mock-test gate, the heading and supporting copy remain readable against the dark card surface. The full session components use the same scoped dark tokens for subsequent authenticated states.
