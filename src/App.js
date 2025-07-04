import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nutricion from './pages/Nutricion';
import Deporte from './pages/Deporte';
import Salud from './pages/Salud';
import Footer from './assets/Footer';
import Header from './assets/Header';
import './assets/Header.css';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Rutina from './pages/Rutina';

import RecetaBatido from './pages/RecetaBatido';
import RecetaAvena from './pages/RecetaAvena';
import RecetaAguacate from './pages/RecetaAguacate';
import RecetaEnsalada from './pages/RecetaEnsalada';
import BlogHidratacion from './pages/BlogHidratacion';
import BlogMascarilla from './pages/BlogMascarilla';

function App() {
  return (
    <Router>
      <Header />  {/* USA el componente Header */}

      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutricion" element={<Nutricion />} />
          <Route path="/deporte" element={<Deporte />} />
          <Route path="/salud" element={<Salud />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/rutina/:id" element={<Rutina />} />

          <Route path="/receta/batido-verde-detox" element={<RecetaBatido />} />
          <Route path="/receta/avena" element={<RecetaAvena />} />
          <Route path="/receta/aguacate" element={<RecetaAguacate />} />
          <Route path="/receta/ensalada" element={<RecetaEnsalada />} />
          <Route path="/blog/hidratacion" element={<BlogHidratacion />} />
          <Route path="/blog/mascarilla-avena" element={<BlogMascarilla />} />

        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;