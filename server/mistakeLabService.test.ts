import { describe, expect, it, vi } from "vitest";
import { checkMistakeAnswerWithStore } from "./mistakeLabService";

const ownerItem = { id: 91, userId: 7, status: "active", correctIndex: 1, timesCorrect: 0, timesSeen: 1, explanation: "Use the plural form." };

describe("Mistake Lab answer service", () => {
  it("rejects a cross-user item even if a repository returns it, without saving", async () => {
    const saveReview = vi.fn();
    const store = { findItem: vi.fn().mockResolvedValue(ownerItem), saveReview };

    await expect(checkMistakeAnswerWithStore(store, { userId: 8, mistakeId: 91, selected: 1 })).rejects.toThrow("unavailable");
    expect(store.findItem).toHaveBeenCalledWith({ userId: 8, mistakeId: 91 });
    expect(saveReview).not.toHaveBeenCalled();
  });

  it("updates only the owner item after a valid answer", async () => {
    const saveReview = vi.fn().mockResolvedValue(undefined);
    const store = { findItem: vi.fn().mockResolvedValue(ownerItem), saveReview };
    const now = new Date("2026-08-23T00:00:00.000Z");

    await expect(checkMistakeAnswerWithStore(store, { userId: 7, mistakeId: 91, selected: 1 }, now)).resolves.toMatchObject({ correct: true, mastered: false, remainingRepairs: 1 });
    expect(saveReview).toHaveBeenCalledWith(expect.objectContaining({ item: ownerItem, selected: 1, timesSeen: 2, timesCorrect: 1, status: "active" }));
  });
});
