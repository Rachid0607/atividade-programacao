import type { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';
import styles from './IconBox.module.css';

export type IconBoxTone = 'blue' | 'accent' | 'brand' | 'success' | 'dark' | 'glass';
type IconBoxSize = 'sm' | 'md' | 'lg' | 'xl';

interface IconBoxProps {
  icon: LucideIcon;
  /** Combinação de cor de fundo + cor do ícone. */
  tone?: IconBoxTone;
  size?: IconBoxSize;
  /** Formato circular em vez de quadrado arredondado. */
  round?: boolean;
  /** Classe extra para ajustes do componente pai (ex.: efeito de hover). */
  className?: string;
}

/** Tamanho do ícone (em px) para cada tamanho de caixa. */
const iconSizes: Record<IconBoxSize, number> = { sm: 18, md: 24, lg: 28, xl: 40 };

/** Ícone dentro de uma caixa colorida. Usado em cards, passos, diagrama e mensagens. */
export default function IconBox({ icon: Icon, tone = 'blue', size = 'md', round = false, className }: IconBoxProps) {
  return (
    <span className={cn(styles.box, styles[tone], styles[size], round && styles.round, className)}>
      <Icon size={iconSizes[size]} aria-hidden="true" />
    </span>
  );
}
