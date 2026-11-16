import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Features from './pages/Features/Features';
import Technologies from './pages/Technologies/Technologies';
import Author from './pages/Author/Author';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

export default function App() {
  return (
    <Routes>
      {/* Rota "pai": o Layout (Navbar + Footer) envolve todas as páginas */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="funcionalidades" element={<Features />} />
        <Route path="tecnologias" element={<Technologies />} />
        <Route path="autor" element={<Author />} />
        <Route path="contato" element={<Contact />} />
        {/* Qualquer rota não listada acima cai na página 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
