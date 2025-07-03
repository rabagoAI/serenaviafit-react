import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

        </Routes>
      </main>

      <Footer />
    </Router>
  );
  
}

export default App;
