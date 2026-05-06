import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import rutinaHiit from '../rutinas/rutina-hiit';
import rutinaYoga from '../rutinas/rutina-yoga';
import TemporizadorRutina from '../components/TemporizadorRutina';
import rutinaFuerza from '../rutinas/rutina-fuerza';
import rutinaEstiramientos from '../rutinas/rutina-estiramientos';
import './Rutina.css';

const rutinas = [rutinaHiit, rutinaYoga, rutinaFuerza, rutinaEstiramientos];

export default function Rutina() {
  const { id } = useParams();
  const rutina = rutinas.find((r) => r.id === id);

  if (!rutina) {
    return (
      <div className="page-container" style={{ textAlign: 'center', paddingTop: '3rem' }}>
        <h2>Rutina no encontrada</h2>
        <p>La rutina que buscas no existe.</p>
        <Link to="/deporte" className="btn-ver-todas">← Ver todos los entrenamientos</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Helmet>
        <title>{rutina.titulo} | SerenaViaFit</title>
        <meta name="description" content={rutina.descripcion} />
      </Helmet>

      <h1>{rutina.titulo}</h1>
      <p><strong>Duración:</strong> {rutina.duracion}</p>
      <p>{rutina.descripcion}</p>
      <h2>Ejercicios:</h2>
      <ul>
        {rutina.ejercicios.map((ej, i) => (
          <li key={i}>{ej}</li>
        ))}
      </ul>

      <TemporizadorRutina ejercicios={rutina.ejercicios} duracion={40} />
    </div>
  );
}
