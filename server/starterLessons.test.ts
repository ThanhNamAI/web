import { describe, expect, it } from "vitest";
import { starterLessons } from "./starterLessons";
import { partLessons } from "./partLessons";

describe("starter lessons", () => {
  it("provides thirty unique, published lessons with a guided learning arc", () => {
    const lessons = [...starterLessons, ...partLessons];
    expect(starterLessons).toHaveLength(10);
    expect(partLessons).toHaveLength(20);
    expect(new Set(lessons.map(lesson => lesson.slug)).size).toBe(30);
    lessons.forEach(lesson => {
      expect(lesson.status).toBe("published");
      expect(lesson.steps).toHaveLength(4);
      expect(lesson.steps[0]?.stepType).toBe("warmup");
      expect(lesson.steps.at(-1)?.stepType).toBe("recap");
      const practice = lesson.steps.find(step => step.stepType === "quiz" || step.stepType === "listen");
      expect(practice?.options).toHaveLength(4);
      expect(practice?.answerIndex).toBeGreaterThanOrEqual(0);
    });
  });
});
