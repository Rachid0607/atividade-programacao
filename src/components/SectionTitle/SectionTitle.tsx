import { cn } from '../../utils/cn';
import Eyebrow from '../Eyebrow/Eyebrow';
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
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
