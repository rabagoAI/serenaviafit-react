import { useState, useEffect } from 'react';

export default function TemporizadorRutina({ ejercicios, duracion = 40 }) {
  const [indiceActual, setIndiceActual] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(duracion);
  const [activo, setActivo] = useState(false);
  const [finalizado, setFinalizado] = useState(false);

  useEffect(() => {
    let timer;
    if (activo && !finalizado) {
      if (tiempoRestante > 0) {
        timer = setTimeout(() => {
          setTiempoRestante(tiempoRestante - 1);
        }, 1000);
      } else {
        if (indiceActual < ejercicios.length - 1) {
          setIndiceActual(indiceActual + 1);
          setTiempoRestante(duracion);
        } else {
          setFinalizado(true);
        }
      }
    }
    return () => clearTimeout(timer);
  }, [activo, tiempoRestante, indiceActual, ejercicios, duracion, finalizado]);

  const iniciar = () => {
    setActivo(true);
    setFinalizado(false);
    setIndiceActual(0);
    setTiempoRestante(duracion);
  };

  return (
    <div className="temporizador">
      {!activo && !finalizado && (
        <button onClick={iniciar}>🕒 Iniciar rutina guiada</button>
      )}

      {activo && !finalizado && (
        <>
          <h3>Ejercicio {indiceActual + 1} de {ejercicios.length}</h3>
          <p><strong>{ejercicios[indiceActual]}</strong></p>
          <p>⏱ Tiempo restante: {tiempoRestante}s</p>
        </>
      )}

      {finalizado && (
        <h3>🎉 ¡Rutina completada!</h3>
      )}
    </div>
  );
}
