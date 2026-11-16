import { Link } from 'react-router-dom';
import { navItems } from '../../data/navigation';
import { advisor, author } from '../../data/people';
import Logo from '../Logo/Logo';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo light />
          <p>
            Plataforma web para gestão de eventos acadêmicos que trata o evento como parte do
            processo educacional.
          </p>
        </div>

        <div>
          <h4 className={styles.heading}>Navegação</h4>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Projeto</h4>
          <ul className={styles.list}>
            <li>PFC – Sistemas de Informação</li>
            <li>Universidade de Mogi das Cruzes</li>
            <li>Orientador: {advisor.name}</li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {author.name}. Todos os direitos reservados.
        </p>
        <SocialLinks links={author.links} variant="dark" />
      </div>
    </footer>
  );
}
