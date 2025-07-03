import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje('¡Gracias por suscribirte! 😊');
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Suscríbete a SerenaViaFit</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
          />
          <button type="submit">Suscribirme</button>
        </form>
        {mensaje && <p className="mensaje-exito">{mensaje}</p>}
        <p className="copyright">© 2025 SerenaViaFit · Salud con propósito</p>
      </div>
    </footer>
  );
}
