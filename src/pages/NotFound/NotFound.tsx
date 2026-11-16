import { ArrowLeft, SearchX } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import IconBox from '../../components/IconBox/IconBox';
import Section from '../../components/Section/Section';
import { usePageTitle } from '../../hooks/usePageTitle';
import styles from './NotFound.module.css';

export default function NotFound() {
  usePageTitle('Página não encontrada');
  const { pathname } = useLocation();

  return (
    <Section variant="soft">
      <div className={styles.wrapper}>
        <IconBox icon={SearchX} size="xl" />
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Página não encontrada</h1>
        <p className={styles.text}>
          O endereço <code>{pathname}</code> não existe ou foi removido.
        </p>
        <Button to="/" variant="secondary" size="lg" icon={ArrowLeft} iconPosition="left">
          Voltar para o início
        </Button>
      </div>
    </Section>
  );
}
