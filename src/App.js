import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Nutricion from './pages/Nutricion';
import Deporte from './pages/Deporte';
import Salud from './pages/Salud';

function App() {
  return (
    <Router>
      <header>
        <h1>SerenaViaFit</h1>
        <nav>
          <Link to="/">Inicio</Link> |{" "}
          <Link to="/nutricion">Nutrición</Link> |{" "}
          <Link to="/deporte">Deporte</Link> |{" "}
          <Link to="/salud">Salud y Belleza</Link>
        </nav>
      </header>

      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutricion" element={<Nutricion />} />
          <Route path="/deporte" element={<Deporte />} />
          <Route path="/salud" element={<Salud />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
