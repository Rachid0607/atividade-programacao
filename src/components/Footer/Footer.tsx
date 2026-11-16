import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../data/navigation';
import { advisors, author } from '../../data/autor';
import Logo from '../Logo/Logo';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './Footer.module.css';

/** Coluna do rodapé: título + lista de itens. */
function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className={styles.heading}>{title}</h4>
      <ul className={styles.list}>{children}</ul>
    </div>
  );
}

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

        <FooterColumn title="Navegação">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Projeto">
          <li>PFC – Sistemas de Informação</li>
          <li>Universidade de Mogi das Cruzes</li>
          {advisors.map((advisor) => (
            <li key={advisor.name}>
              {advisor.role}: {advisor.name}
            </li>
          ))}
        </FooterColumn>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} <strong className={styles.author}>{author.name}</strong>
        </p>
        <SocialLinks links={author.links} variant="dark" />
      </div>
    </footer>
  );
}
