import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import styles from './Section.module.css';

interface SectionProps {
  children: ReactNode;
  /** Cor de fundo da seção. */
  variant?: 'default' | 'soft' | 'dark';
  id?: string;
}

/** Envolve o conteúdo em <section> + .container com o espaçamento padrão. */
export default function Section({ children, variant = 'default', id }: SectionProps) {
  return (
    <section id={id} className={cn(styles.section, styles[variant])}>
      <div className="container">{children}</div>
    </section>
  );
}
