import { useState, useEffect } from 'react';

export default function TemporizadorRutina({ ejercicios }) {
  const [indiceActual, setIndiceActual] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(0);
  const [activo, setActivo] = useState(false);
  const [finalizado, setFinalizado] = useState(false);
  const beep = new Audio(process.env.PUBLIC_URL + '/audio/beep.mp3');
  


  useEffect(() => {
    let timer;
    if (activo && !finalizado) {
      if (tiempoRestante > 0) {
        timer = setTimeout(() => {
          setTiempoRestante(t => t - 1);
        }, 1000);
      } else {
        if (indiceActual < ejercicios.length - 1) {
          const siguiente = ejercicios[indiceActual + 1];
          const duracion = typeof siguiente === 'object' ? siguiente.duracion : 40;
          beep.play(); // 🔊 sonido al cambiar
          setIndiceActual(i => i + 1);
          setTiempoRestante(duracion);

        } else {
          beep.play(); // sonido final también
        setFinalizado(true);
        }
      }
    }
    return () => clearTimeout(timer);
  }, [activo, tiempoRestante, indiceActual, ejercicios, finalizado]);

  const iniciar = () => {
    const primer = ejercicios[0];
    const duracion = typeof primer === 'object' ? primer.duracion : 40;
    setActivo(true);
    setFinalizado(false);
    setIndiceActual(0);
    setTiempoRestante(duracion);
  };

  const ejercicioActual = ejercicios[indiceActual];
  const nombre = typeof ejercicioActual === 'object' ? ejercicioActual.nombre : ejercicioActual;

  return (
    <div className="temporizador">
      {!activo && !finalizado && (
        <button onClick={iniciar}>🕒 Iniciar rutina guiada</button>
      )}

      {activo && !finalizado && (
        <>
          <h3>Ejercicio {indiceActual + 1} de {ejercicios.length}</h3>
          <p><strong>{nombre}</strong></p>
          <p>⏱ Tiempo restante: {tiempoRestante}s</p>
        </>
      )}

      <div className="barra-contenedor">
        <div
        className="barra-progreso"
        style={{
        width: `${100 - (tiempoRestante / (typeof ejercicioActual === 'object' ? ejercicioActual.duracion : 40)) * 100}%`
        }}
        />
      </div>


      {finalizado && (
        <h3>🎉 ¡Rutina completada!</h3>
      )}
    </div>
  );
}
