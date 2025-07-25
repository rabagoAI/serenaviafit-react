import './Nutricion.css';

import ensaladaImg from '../assets/ensalada-mediterranea.png';
import aguacateImg from '../assets/aguacate.png';
import avenaImg from '../assets/avena.png';
import batidoImg from '../assets/batido-verde.png';
import hummusImg from '../assets/hummus-casero.png';
import salmonImg from '../assets/salmon.png'
import sopaCalabazaImg from '../assets/sopa-calabaza.png'
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


        <div className="card">
          <img src={hummusImg} alt="Hummus Casero" />
          <h3>Hummus Casero</h3>
          <p>Crema suave y saludable de garbanzos ideal como snack o entrante.</p>
          <Link to="/receta/hummus" className="btn-receta">
            Ver receta →
          </Link>
        </div>

        <div className="card">
          <img src={salmonImg} alt="Salmón al horno" />
          <h3>Salmón al horno con verduras</h3>
          <p>Salmón al horno rico en Omega 3.</p>
          <Link to="/receta/salmon" className="btn-receta">
            Ver receta →
          </Link>
        </div>

        <div className="card">
          <img src={sopaCalabazaImg} alt="Sopa calabaza" />
          <h3>Sopa de calabaza y jengibre</h3>
          <p>Sopa ideal para el control de tu peso.</p>
          <Link to="/receta/sopaCalabaza" className="btn-receta">
            Ver receta →
          </Link>
        </div>







      </div>
    </div>
  );
}
