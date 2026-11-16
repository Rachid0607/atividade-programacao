import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';
import IconBox from '../IconBox/IconBox';
import styles from './Card.module.css';

interface CardProps {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  /** Etiquetas exibidas no rodapé do card (ex.: perfis de acesso). */
  tags?: string[];
  /** Conteúdo extra (listas, parágrafos...). */
  children?: ReactNode;
  /** "highlight" deixa o card com fundo azul-escuro. */
  variant?: 'default' | 'highlight';
}

export default function Card({
  icon,
  title,
  description,
  tags,
  children,
  variant = 'default',
}: CardProps) {
  const isHighlight = variant === 'highlight';

  return (
    <article className={cn(styles.card, isHighlight && styles.highlight)}>
      {icon && <IconBox icon={icon} tone={isHighlight ? 'glass' : 'blue'} className={styles.icon} />}

      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}

      {children && <div className={styles.body}>{children}</div>}

      {tags && tags.length > 0 && (
        <ul className={styles.tags} aria-label="Perfis">
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
