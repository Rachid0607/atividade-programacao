import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';
import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: ReactNode;
  /** Versão para fundos escuros (texto âmbar). */
  light?: boolean;
  icon?: LucideIcon;
}

/** Etiqueta pequena em formato de pílula exibida acima de títulos. */
export default function Eyebrow({ children, light = false, icon: Icon }: EyebrowProps) {
  return (
    <span className={cn(styles.eyebrow, light && styles.light)}>
      {Icon && <Icon size={15} aria-hidden="true" />}
      {children}
    </span>
  );
}
