export function calculateYears() {
  const start = 2009;
  const now = new Date().getFullYear();

  const years = now - start;
  return years;
}
