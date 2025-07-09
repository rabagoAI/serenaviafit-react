import { useParams } from 'react-router-dom';
import rutinaHiit from '../rutinas/rutina-hiit';
import rutinaYoga from '../rutinas/rutina-yoga';
import rutinaFuerza from '../rutinas/rutina-fuerza';
import rutinaEstiramientos from '../rutinas/rutina-estiramientos';
import TemporizadorRutina from '../components/TemporizadorRutina';
import './Rutina.css';

const rutinas = [rutinaHiit, rutinaYoga, rutinaFuerza, rutinaEstiramientos];

export default function Rutina() {
  const { id } = useParams();
  const rutina = rutinas.find((r) => r.id === id);

  if (!rutina) return <p>Rutina no encontrada.</p>;

  return (
    <div className="page-container">
      <h2>{rutina.titulo}</h2>
      <p><strong>Duración:</strong> {rutina.duracion}</p>
      <p>{rutina.descripcion}</p>
      <h3>Ejercicios:</h3>
      <ul>
        {rutina.ejercicios.map((ej, i) => (
          <li key={i}>{ej}</li>
        ))}
      </ul>

      <TemporizadorRutina ejercicios={rutina.ejercicios} duracion={40} />
    </div>
  );
}
