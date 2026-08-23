import { describe, expect, it } from "vitest";
import { getMissingSeedLessons } from "./lessonSeedLogic";

describe("lesson seed selection", () => {
  it("returns only slugs that are absent from the database snapshot", () => {
    const lessons = [{ slug: "part-2-a" }, { slug: "part-3-b" }, { slug: "part-7-c" }];
    expect(getMissingSeedLessons(lessons, ["part-2-a", "part-7-c"])).toEqual([{ slug: "part-3-b" }]);
  });

  it("returns no writes when all starter lessons are already present", () => {
    const lessons = [{ slug: "a" }, { slug: "b" }];
    expect(getMissingSeedLessons(lessons, ["a", "b"])).toEqual([]);
  });
});
