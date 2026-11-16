import type { Highlight } from '../../types';
import styles from './StatCard.module.css';

interface StatCardProps {
  highlight: Highlight;
}

/** Card de número/destaque usado sobre fundo escuro. */
export default function StatCard({ highlight }: StatCardProps) {
  return (
    <li className={styles.stat}>
      <strong className={styles.value}>{highlight.value}</strong>
      <span className={styles.label}>{highlight.label}</span>
      <p className={styles.description}>{highlight.description}</p>
    </li>
  );
}
