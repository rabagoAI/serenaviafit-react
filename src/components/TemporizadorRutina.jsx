import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TemporizadorRutina({ ejercicios }) {
  const [indiceActual, setIndiceActual] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(0);
  const [activo, setActivo] = useState(false);
  const [pausado, setPausado] = useState(false);
  const [finalizado, setFinalizado] = useState(false);
  const beepRef = useRef(new Audio(process.env.PUBLIC_URL + '/audio/beep.mp3'));

  useEffect(() => {
    let timer;
    if (activo && !pausado && !finalizado) {
      if (tiempoRestante > 0) {
        timer = setTimeout(() => setTiempoRestante(t => t - 1), 1000);
      } else {
        if (indiceActual < ejercicios.length - 1) {
          const siguiente = ejercicios[indiceActual + 1];
          const duracion = typeof siguiente === 'object' ? siguiente.duracion : 40;
          beepRef.current.play().catch(() => { });
          setIndiceActual(i => i + 1);
          setTiempoRestante(duracion);
        } else {
          beepRef.current.play().catch(() => { });
          setFinalizado(true);
        }
      }
    }
    return () => clearTimeout(timer);
  }, [activo, pausado, tiempoRestante, indiceActual, ejercicios, finalizado]);

  const iniciar = () => {
    const primer = ejercicios[0];
    const duracion = typeof primer === 'object' ? primer.duracion : 40;
    setActivo(true);
    setPausado(false);
    setFinalizado(false);
    setIndiceActual(0);
    setTiempoRestante(duracion);
  };

  const togglePausa = () => setPausado(p => !p);

  const reiniciar = () => {
    setActivo(false);
    setPausado(false);
    setFinalizado(false);
    setIndiceActual(0);
    setTiempoRestante(0);
  };

  const ejercicioActual = ejercicios[indiceActual];
  const nombre = typeof ejercicioActual === 'object' ? ejercicioActual.nombre : ejercicioActual;
  const duracionActual = typeof ejercicioActual === 'object' ? ejercicioActual.duracion : 40;
  const progreso = activo ? ((duracionActual - tiempoRestante) / duracionActual) * 100 : 0;

  return (
    <div className="temporizador">
      <AnimatePresence mode="wait">
        {!activo && !finalizado && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <motion.button
              onClick={iniciar}
              aria-label="Iniciar rutina guiada"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🕒 Iniciar rutina guiada
            </motion.button>
          </motion.div>
        )}

        {activo && !finalizado && (
          <motion.div
            key="active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3>Ejercicio {indiceActual + 1} de {ejercicios.length}</h3>
            <AnimatePresence mode="wait">
              <motion.p
                key={nombre}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <strong>{nombre}</strong>
              </motion.p>
            </AnimatePresence>

            {/* Contador animado */}
            <AnimatePresence mode="wait">
              <motion.div
                key={tiempoRestante}
                className="temporizador-contador"
                initial={{ scale: 1.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {tiempoRestante}s
              </motion.div>
            </AnimatePresence>

            <div className="temporizador-controles">
              <motion.button
                onClick={togglePausa}
                aria-label={pausado ? 'Reanudar ejercicio' : 'Pausar ejercicio'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {pausado ? '▶ Reanudar' : '⏸ Pausar'}
              </motion.button>
              <motion.button
                onClick={reiniciar}
                aria-label="Reiniciar rutina"
                className="btn-reiniciar"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🔄 Reiniciar
              </motion.button>
            </div>
          </motion.div>
        )}

        {finalizado && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <h3>🎉 ¡Rutina completada!</h3>
            <motion.button
              onClick={reiniciar}
              aria-label="Volver a empezar la rutina"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔄 Volver a empezar
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Barra de progreso animada */}
      <div
        className="barra-contenedor"
        role="progressbar"
        aria-valuenow={duracionActual - tiempoRestante}
        aria-valuemax={duracionActual}
      >
        <motion.div
          className="barra-progreso"
          animate={{ width: `${progreso}%` }}
          transition={{ duration: 1, ease: 'linear' }}
        />
      </div>
    </div>
  );
}
