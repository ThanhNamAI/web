type StoredMistake = {
  userId: number;
  status: string;
  dueAt: Date;
  correctIndex: number;
  optionsJson: string;
};

export function buildMistakeLabDashboard<T extends StoredMistake>(allItems: T[], userId: number, now = new Date()) {
  const ownItems = allItems.filter(item => item.userId === userId);
  const active = ownItems.filter(item => item.status === "active");
  const due = active.filter(item => item.dueAt <= now);
  return {
    items: due.map(({ correctIndex: _correctIndex, optionsJson, ...item }) => ({ ...item, options: JSON.parse(optionsJson) as string[] })),
    summary: {
      active: active.length,
      due: due.length,
      mastered: ownItems.filter(item => item.status === "mastered").length,
    },
  };
}
