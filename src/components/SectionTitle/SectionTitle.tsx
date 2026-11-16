import { cn } from '../../utils/cn';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  /** Texto pequeno acima do título. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  /** Use `true` quando o título estiver sobre fundo escuro. */
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  return (
    <header className={cn(styles.wrapper, styles[align], light && styles.light)}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
