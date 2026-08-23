import { describe, expect, it } from "vitest";
import { partLessons } from "./partLessons";

describe("Part 2–3–7 lesson expansion", () => {
  it("ships seven Part 2, seven Part 3 and six Part 7 four-step lessons", () => {
    expect(partLessons).toHaveLength(20);
    expect(partLessons.filter(lesson => lesson.level.includes("Part 2"))).toHaveLength(7);
    expect(partLessons.filter(lesson => lesson.level.includes("Part 3"))).toHaveLength(7);
    expect(partLessons.filter(lesson => lesson.level.includes("Part 7"))).toHaveLength(6);
    partLessons.forEach(lesson => {
      expect(lesson.steps).toHaveLength(4);
      const practice = lesson.steps.find(step => step.stepType === "listen" || step.stepType === "quiz");
      expect(practice?.options).toHaveLength(4);
      expect(practice?.answerIndex).toBeGreaterThanOrEqual(0);
      expect(practice?.explanation).toBeTruthy();
    });
  });
});
