import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

export default function Layout() {
  const { pathname } = useLocation();

  // Ao trocar de página, volta para o topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        {/* <Outlet /> é onde a página da rota atual é renderizada */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
