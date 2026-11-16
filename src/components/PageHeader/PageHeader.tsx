import Eyebrow from '../Eyebrow/Eyebrow';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

/** Faixa com gradiente usada no topo de todas as páginas internas. */
export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className={styles.header}>
      <div className={`container ${styles.content}`}>
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}
