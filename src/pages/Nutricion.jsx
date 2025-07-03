import './Nutricion.css';

import ensaladaImg from '../assets/ensalada-mediterranea.png';
import aguacateImg from '../assets/aguacate.png';
import avenaImg from '../assets/avena.png';
import batidoImg from '../assets/batido-verde.png';
import { Link } from 'react-router-dom';

export default function Nutricion() {
  return (
    <div className="page-container">
      <h2 className="page-title">Recetas Saludables</h2>

      <div className="card-grid">
        <div className="card">
          <img
            src={batidoImg}
            alt="Batido verde detox"
          />
          <h3>Batido Verde Detox</h3>
          <p>Espinaca, plátano, manzana y jengibre para un desayuno energético.</p>
          <Link to="/receta/batido-verde-detox" className="ver-receta-link">
          Ver receta completa →
          </Link>
        </div>

        <div className="card">
          <img src={ensaladaImg} alt="Ensalada mediterránea" />

          <h3>Ensalada Mediterránea</h3>
          <p>Garbanzos, pepino, tomate cherry, y aceite de oliva virgen extra.</p>
          <Link to="/receta/ensalada" className="ver-receta-link">
            Ver receta completa →
          </Link>

        </div>

        <div className="card">
          <img src={aguacateImg} alt="Tostada de aguacate" />

          <h3>Tostada de Aguacate</h3>
          <p>Pan integral con aguacate, huevo poché y semillas de sésamo.</p>
          <Link to="/receta/aguacate" className="ver-receta-link">
            Ver receta completa →
          </Link>
        </div>

        <div className="card">
          <img src={avenaImg} alt="Bowl de avena" />

          <h3>Bowl de Avena</h3>
          <p>Avena con bebida vegetal, frutas rojas y semillas de chía.</p>
          <Link to="/receta/avena" className="ver-receta-link">
            Ver receta completa →
          </Link>
        </div>
      </div>
    </div>
  );
}
