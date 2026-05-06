import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Header from './assets/Header';
import Footer from './assets/Footer';
import SmoothScroll from './components/SmoothScroll';
import PageTransition from './components/PageTransition';
import './assets/Header.css';
import './styles/global.css';

const Home              = lazy(() => import('./pages/Home'));
const Nutricion         = lazy(() => import('./pages/Nutricion'));
const Deporte           = lazy(() => import('./pages/Deporte'));
const Blog              = lazy(() => import('./pages/Blog'));
const Post              = lazy(() => import('./pages/Post'));
const Rutina            = lazy(() => import('./pages/Rutina'));
const RecetaDetallePage = lazy(() => import('./pages/RecetaDetallePage'));
const NotFound          = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"           element={<PageTransition><Home /></PageTransition>} />
        <Route path="/nutricion"  element={<PageTransition><Nutricion /></PageTransition>} />
        <Route path="/deporte"    element={<PageTransition><Deporte /></PageTransition>} />
        <Route path="/blog"       element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:id"   element={<PageTransition><Post /></PageTransition>} />
        <Route path="/rutina/:id" element={<PageTransition><Rutina /></PageTransition>} />
        <Route path="/receta/:slug" element={<PageTransition><RecetaDetallePage /></PageTransition>} />
        <Route path="*"           element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <SmoothScroll>
        <Router>
          <ScrollToTop />
          <Header />
          <main className="main-content" style={{ padding: '0' }}>
            <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
              <AnimatedRoutes />
            </Suspense>
          </main>
          <Footer />
        </Router>
      </SmoothScroll>
    </HelmetProvider>
  );
}

export default App;
