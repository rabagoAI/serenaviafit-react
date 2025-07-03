import './Deporte.css';
import EjercicioCard from '../components/EjercicioCard';


import hiitImg from '../assets/hiit-casa.png';
import yogaImg from '../assets/yoga-principiantes.png';
import fuerzaImg from '../assets/fuerza-sin-pesas.png';
import estiramientoImg from '../assets/estiramientos.png';



export default function Deporte() {
  return (
    <div className="page-container">
      <h2 className="page-title">Entrenamientos Funcionales</h2>

      <div className="card-grid">
        <EjercicioCard
          img={hiitImg}
          title="Rutina HIIT en casa"
          desc="Entrenamiento de alta intensidad en solo 20 minutos. Sin equipamiento."
          link="/rutina/hiit-en-casa"
          />
        <EjercicioCard
          img={yogaImg}
          title="Yoga para Principiantes"
          desc="Estira, relaja y fortalece tu cuerpo y mente. Ideal para empezar el día."
          link="/rutina/yoga-principiantes"
          />

        <EjercicioCard
          img={fuerzaImg}
          title="Entrenamiento de fuerza sin pesas"
          desc="Flexiones, sentadillas, planchas y más usando solo tu cuerpo."
          link="/rutina/fuerza-sin-pesas"
        />

        <EjercicioCard
          img={estiramientoImg}
          title="Estiramientos diarios"
          desc="Cuida tus músculos y previene lesiones con una rutina de estiramientos."
          link="/rutina/estiramientos-diarios"
        />
        
      </div>
    </div>
  );
}
