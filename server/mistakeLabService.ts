import { getOwnedActiveMistake } from "./mistakeLabAccess";
import { getMistakeReviewUpdate } from "./mistakeLabLogic";

export type MistakeAnswerItem = {
  id: number;
  userId: number;
  status: string;
  correctIndex: number;
  timesCorrect: number;
  timesSeen: number;
  explanation: string;
};

export type MistakeAnswerStore = {
  findItem: (input: { userId: number; mistakeId: number }) => Promise<MistakeAnswerItem | undefined>;
  saveReview: (input: { item: MistakeAnswerItem; selected: number; status: "active" | "mastered"; timesSeen: number; timesCorrect: number; dueAt: Date; attemptedAt: Date }) => Promise<void>;
};

export async function checkMistakeAnswerWithStore(
  store: MistakeAnswerStore,
  input: { userId: number; mistakeId: number; selected: number },
  now = new Date(),
) {
  const candidate = await store.findItem({ userId: input.userId, mistakeId: input.mistakeId });
  const item = getOwnedActiveMistake(candidate, input.userId);
  if (!item) throw new Error("Mistake item is unavailable");

  const correct = item.correctIndex === input.selected;
  const review = getMistakeReviewUpdate({ correct, previousCorrect: item.timesCorrect, now });
  await store.saveReview({
    item,
    selected: input.selected,
    status: review.status,
    timesSeen: item.timesSeen + 1,
    timesCorrect: review.timesCorrect,
    dueAt: review.dueAt,
    attemptedAt: now,
  });
  return { correct, mastered: review.mastered, explanation: item.explanation, remainingRepairs: Math.max(0, 2 - review.timesCorrect) };
}
