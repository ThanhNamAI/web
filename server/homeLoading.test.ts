import { describe, expect, it } from "vitest";
import { shouldShowHomeSkeleton } from "../shared/homeLoading";

describe("home OAuth loading skeleton", () => {
  it("keeps the homepage skeleton visible while identity is resolving", () => {
    expect(shouldShowHomeSkeleton(true, false, false)).toBe(true);
  });

  it("keeps the skeleton visible while an authenticated learner's dashboard loads", () => {
    expect(shouldShowHomeSkeleton(false, true, true)).toBe(true);
  });

  it("does not block the intentional guest state or settled learner dashboard", () => {
    expect(shouldShowHomeSkeleton(false, false, false)).toBe(false);
    expect(shouldShowHomeSkeleton(false, true, false)).toBe(false);
  });
});
