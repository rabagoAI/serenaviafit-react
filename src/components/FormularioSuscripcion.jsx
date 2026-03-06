import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function FormularioSuscripcion() {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);

  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (!email || !EMAIL_REGEX.test(email)) {
      setMensaje('Por favor, introduce un correo electrónico válido.');
      return;
    }

    setEnviando(true);
    try {
      await addDoc(collection(db, 'suscripciones'), {
        email: email.trim().toLowerCase(),
        fecha: Timestamp.now(),
      });
      setMensaje('¡Gracias por suscribirte a SerenaViaFit! 🌿');
      setEmail('');
    } catch (error) {
      console.error('Error al guardar la suscripción:', error);
      setMensaje('Hubo un error. Inténtalo de nuevo más tarde.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="formulario-suscripcion">
      <h3>Suscríbete a SerenaViaFit</h3>
      <p className="formulario-desc">Recibe recetas, consejos y rutinas directamente en tu correo.</p>
      <form onSubmit={manejarEnvio} noValidate>
        <input
          type="email"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Correo electrónico para suscripción"
          required
          disabled={enviando}
        />
        <button type="submit" aria-label="Suscribirse a SerenaViaFit" disabled={enviando}>
          {enviando ? 'Enviando...' : 'Suscribirme'}
        </button>
      </form>
      {mensaje && <p className="formulario-mensaje" role="alert">{mensaje}</p>}
    </div>
  );
}
