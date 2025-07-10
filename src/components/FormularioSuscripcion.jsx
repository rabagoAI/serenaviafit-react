import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import './FormularioSuscripcion.css';

export default function FormularioSuscripcion() {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);
  const [suscripcionExitosa, setSuscripcionExitosa] = useState(false);

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setCargando(true);
    setMensaje('');
    setSuscripcionExitosa(false);

    // Validación del email
    if (!email || !validarEmail(email)) {
      setMensaje('Por favor, introduce un correo válido.');
      setCargando(false);
      return;
    }

    try {
      // Verificar que db esté inicializado
      if (!db) {
        throw new Error('Base de datos no inicializada');
      }

      console.log('🔄 Intentando guardar:', email);

      const docRef = await addDoc(collection(db, 'suscripciones'), {
        email: email.trim().toLowerCase(),
        fecha: Timestamp.now(),
        activo: true
      });

      console.log('✅ Documento guardado exitosamente con ID:', docRef.id);
      console.log('📧 Email guardado:', email);
      console.log('🕐 Fecha:', new Date().toLocaleString());

      setMensaje(`¡Gracias por suscribirte a SerenaViaFit! 
                  Tu email ${email} ha sido registrado correctamente.`);
      setSuscripcionExitosa(true);
      setEmail('');
      
    } catch (error) {
      console.error("❌ Error completo:", error);
      console.error("🔴 Código de error:", error.code);
      console.error("📝 Mensaje de error:", error.message);
      
      // Mensajes de error más específicos
      if (error.code === 'permission-denied') {
        setMensaje('❌ Error de permisos. Verifica las reglas de Firestore.');
      } else if (error.code === 'unavailable') {
        setMensaje('❌ Servicio no disponible. Inténtalo más tarde.');
      } else {
        setMensaje(`❌ Error: ${error.message}`);
      }
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="formulario-suscripcion">
      <h3>Suscríbete a SerenaViaFit</h3>
      
      {!suscripcionExitosa ? (
        <form onSubmit={manejarEnvio}>
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={cargando}
          />
          <button type="submit" disabled={cargando}>
            {cargando ? '⏳ Enviando...' : '📧 Suscribirse'}
          </button>
        </form>
      ) : (
        <div className="suscripcion-exitosa">
          <div className="checkmark">✅</div>
          <p>¡Suscripción completada!</p>
          <button 
            onClick={() => {
              setSuscripcionExitosa(false);
              setMensaje('');
            }}
            className="btn-secundario"
          >
            Suscribir otro email
          </button>
        </div>
      )}
      
      {mensaje && (
        <p className={mensaje.includes('Error') || mensaje.includes('❌') ? 'error' : 'success'}>
          {mensaje}
        </p>
      )}
    </div>
  );
}
