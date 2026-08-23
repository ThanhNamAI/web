import { describe, expect, it } from "vitest";
import { getOwnedActiveMistake } from "./mistakeLabAccess";

describe("Mistake Lab ownership guard", () => {
  const activeItem = { userId: 41, status: "active", id: 8 };

  it("returns an active item only to its OAuth owner", () => {
    expect(getOwnedActiveMistake(activeItem, 41)).toEqual(activeItem);
    expect(getOwnedActiveMistake(activeItem, 42)).toBeUndefined();
  });

  it("does not return completed or missing items", () => {
    expect(getOwnedActiveMistake({ ...activeItem, status: "mastered" }, 41)).toBeUndefined();
    expect(getOwnedActiveMistake(undefined, 41)).toBeUndefined();
  });
});
