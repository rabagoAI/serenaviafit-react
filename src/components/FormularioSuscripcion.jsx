import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function FormularioSuscripcion() {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (!email) {
      setMensaje('Por favor, introduce un correo válido.');
      return;
    }

    try {
      await addDoc(collection(db, 'suscripciones'), {
        email: email.trim(),
        fecha: Timestamp.now()
      });

      setMensaje('¡Gracias por suscribirte a SerenaViaFit!');
      setEmail('');
    } catch (error) {
      console.error("Error al guardar la suscripción:", error);
      setMensaje('Hubo un error. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="formulario-suscripcion">
      <h3>Suscríbete a SerenaViaFit</h3>
      <form onSubmit={manejarEnvio}>
        <input
          type="email"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Suscribirse</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}
