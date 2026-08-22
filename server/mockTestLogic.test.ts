import { describe, expect, it } from "vitest";
import { getMockScore } from "./mockTestLogic";

describe("getMockScore", () => {
  it("keeps results scoped to the seven TOEIC parts", () => {
    const result = getMockScore([{ part: 1, correct: true }, { part: 1, correct: false }, { part: 7, correct: true }], 923);
    expect(result).toMatchObject({ rawScore: 67, correct: 2, total: 3, elapsedSeconds: 923 });
    expect(result.partStats).toHaveLength(7);
    expect(result.partStats[0]).toMatchObject({ part: 1, correct: 1, total: 2, accuracy: 50 });
    expect(result.partStats[6]).toMatchObject({ part: 7, accuracy: 100 });
    expect(result).toMatchObject({ focusPart: 1 });
  });
});
