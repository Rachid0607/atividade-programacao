import type { Step } from '../../types';
import styles from './StepCard.module.css';

interface StepCardProps {
  step: Step;
}

export default function StepCard({ step }: StepCardProps) {
  const { number, icon: Icon, title, description } = step;

  return (
    <li className={styles.step}>
      <div className={styles.marker}>
        <span className={styles.number}>
          <span className="sr-only">Passo </span>
          {String(number).padStart(2, '0')}
        </span>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>
          <Icon size={26} aria-hidden="true" />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
}
