import { ArrowLeft, SearchX } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';
import { usePageTitle } from '../../hooks/usePageTitle';
import styles from './NotFound.module.css';

export default function NotFound() {
  usePageTitle('Página não encontrada');
  const { pathname } = useLocation();

  return (
    <Section variant="soft">
      <div className={styles.wrapper}>
        <span className={styles.icon}>
          <SearchX size={40} aria-hidden="true" />
        </span>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Página não encontrada</h1>
        <p className={styles.text}>
          O endereço <code>{pathname}</code> não existe ou foi removido.
        </p>
        <Button to="/" variant="secondary" size="lg">
          <ArrowLeft size={18} aria-hidden="true" className={styles.back} />
          Voltar para o início
        </Button>
      </div>
    </Section>
  );
}
