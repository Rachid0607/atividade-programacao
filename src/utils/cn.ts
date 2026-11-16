/**
 * Junta classes CSS ignorando valores "falsos".
 * Ex.: cn(styles.link, isActive && styles.active) → "link active"
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
