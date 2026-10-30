/** Mes y año de inicio en consultoría (febrero de 2009). */
const START_YEAR = 2009;
const START_MONTH = 1; // 0 = enero

/** Años completos en consultoría a la fecha indicada (por defecto, la fecha de compilación). */
export function calculateYears(now: Date = new Date()): number {
  const months = (now.getFullYear() - START_YEAR) * 12 + (now.getMonth() - START_MONTH);
  return Math.floor(months / 12);
}
