import { describe, expect, it } from "vitest";
import { buildMistakeLabDashboard } from "./mistakeLabProjection";

describe("Mistake Lab dashboard projection", () => {
  const now = new Date("2026-08-23T00:00:00.000Z");
  const items = [
    { id: 1, userId: 10, status: "active", dueAt: new Date("2026-08-22T00:00:00.000Z"), correctIndex: 1, optionsJson: '["a","b"]', prompt: "owner due" },
    { id: 2, userId: 10, status: "active", dueAt: new Date("2026-08-24T00:00:00.000Z"), correctIndex: 0, optionsJson: '["a","b"]', prompt: "owner later" },
    { id: 3, userId: 20, status: "active", dueAt: new Date("2026-08-22T00:00:00.000Z"), correctIndex: 0, optionsJson: '["x","y"]', prompt: "other user" },
    { id: 4, userId: 10, status: "mastered", dueAt: now, correctIndex: 0, optionsJson: '["a","b"]', prompt: "owner mastered" },
  ];

  it("returns only due items that belong to the requesting user and omits answer keys", () => {
    const dashboard = buildMistakeLabDashboard(items, 10, now);
    expect(dashboard.items).toHaveLength(1);
    expect(dashboard.items[0]).toMatchObject({ id: 1, userId: 10, prompt: "owner due", options: ["a", "b"] });
    expect(dashboard.items[0]).not.toHaveProperty("correctIndex");
    expect(dashboard.summary).toEqual({ active: 2, due: 1, mastered: 1 });
  });

  it("does not surface another user’s due item", () => {
    const dashboard = buildMistakeLabDashboard(items, 20, now);
    expect(dashboard.items.map(item => item.id)).toEqual([3]);
    expect(dashboard.summary).toEqual({ active: 1, due: 1, mastered: 0 });
  });
});
