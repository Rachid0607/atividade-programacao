import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import styles from './Logo.module.css';

interface LogoProps {
  /** Versão clara para fundos escuros (Footer). */
  light?: boolean;
  onClick?: () => void;
}

export default function Logo({ light = false, onClick }: LogoProps) {
  return (
    <Link to="/" className={cn(styles.logo, light && styles.light)} onClick={onClick}>
      <span className={styles.mark}>
        <GraduationCap size={22} aria-hidden="true" />
      </span>
      <span className={styles.text}>
        <strong>SGEA</strong>
        <small>Eventos Acadêmicos</small>
      </span>
    </Link>
  );
}
