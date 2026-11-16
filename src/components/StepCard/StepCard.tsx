import type { Step } from '../../types';
import IconBox from '../IconBox/IconBox';
import styles from './StepCard.module.css';

interface StepCardProps {
  step: Step;
}

/** Um passo numerado da seção "Como funciona". Deve ser usado dentro de uma <ol>. */
export default function StepCard({ step }: StepCardProps) {
  const { number, icon, title, description, badge } = step;

  return (
    <li className={styles.step}>
      <span className={styles.number}>
        <span className="sr-only">Passo </span>
        {String(number).padStart(2, '0')}
      </span>

      <div className={styles.card}>
        <IconBox icon={icon} tone="accent" />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
    </li>
  );
}
