export function getMissingSeedLessons<T extends { slug: string }>(allLessons: readonly T[], existingSlugs: Iterable<string>) {
  const existing = new Set(existingSlugs);
  return allLessons.filter(lesson => !existing.has(lesson.slug));
}
