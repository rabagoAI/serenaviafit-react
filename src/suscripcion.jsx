import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function Suscripcion() {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'suscriptores'), {
        email,
        fecha: Timestamp.now(),
      });
      setMensaje('¡Gracias por suscribirte! Revisa tu correo.');
      setEmail('');
    } catch (error) {
      console.error('Error al suscribirse:', error);
      setMensaje('Hubo un error. Intenta de nuevo.');
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Suscribirse</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}
