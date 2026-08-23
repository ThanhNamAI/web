export function getOwnedActiveMistake<T extends { userId: number; status: string }>(item: T | undefined, userId: number) {
  if (!item || item.userId !== userId || item.status !== "active") return undefined;
  return item;
}
