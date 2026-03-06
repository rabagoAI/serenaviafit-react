import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './assets/Header';
import Footer from './assets/Footer';
import SmoothScroll from './components/SmoothScroll';
import './assets/Header.css';
import './styles/global.css';

// Lazy loading para code splitting
const Home = lazy(() => import('./pages/Home'));
const Nutricion = lazy(() => import('./pages/Nutricion'));
const Deporte = lazy(() => import('./pages/Deporte'));
const Blog = lazy(() => import('./pages/Blog'));
const Post = lazy(() => import('./pages/Post'));
const Rutina = lazy(() => import('./pages/Rutina'));
const RecetaDetallePage = lazy(() => import('./pages/RecetaDetallePage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <SmoothScroll>
        <Router>
          <Header />
          <main className="main-content" style={{ padding: "0" }}>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nutricion" element={<Nutricion />} />
                <Route path="/deporte" element={<Deporte />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<Post />} />
                <Route path="/rutina/:id" element={<Rutina />} />
                <Route path="/receta/:slug" element={<RecetaDetallePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </Router>
      </SmoothScroll>
    </HelmetProvider>
  );
}

export default App;