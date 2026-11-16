import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  /** Rota interna → renderiza um <Link> do React Router. */
  to?: string;
  /** URL externa → renderiza um <a> que abre em nova aba. */
  href?: string;
  /** Sem `to`/`href` → renderiza um <button>. */
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  /** Lado em que o ícone aparece. */
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export default function Button({
  children,
  to,
  href,
  type = 'button',
  onClick,
  disabled,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  fullWidth,
}: ButtonProps) {
  const className = cn(
    styles.button,
    styles[variant],
    styles[size],
    iconPosition === 'left' && styles.iconLeft,
    fullWidth && styles.full,
  );

  const icon = Icon && <Icon className={styles.icon} size={18} aria-hidden="true" />;

  const content = (
    <>
      {iconPosition === 'left' && icon}
      <span>{children}</span>
      {iconPosition === 'right' && icon}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
