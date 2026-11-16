import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { cn } from '../../utils/cn';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={cn('container', styles.nav)} aria-label="Navegação principal">
        <Logo onClick={closeMenu} />

        <button
          type="button"
          className={styles.toggle}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <ul id="menu-principal" className={cn(styles.menu, isOpen && styles.open)}>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                onClick={closeMenu}
                className={({ isActive }) => cn(styles.link, isActive && styles.active)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
