import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import './AdminSuscripciones.css';

export default function AdminSuscripciones() {
  const [suscripciones, setSuscripciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    cargarSuscripciones();
  }, []);

  const cargarSuscripciones = async () => {
    try {
      setCargando(true);
      setError('');
      
      const q = query(
        collection(db, 'suscripciones'), 
        orderBy('fecha', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const suscripcionesList = [];
      
      querySnapshot.forEach((doc) => {
        suscripcionesList.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      setSuscripciones(suscripcionesList);
      console.log('📊 Suscripciones cargadas:', suscripcionesList.length);
      
    } catch (error) {
      console.error('Error al cargar suscripciones:', error);
      setError('Error al cargar las suscripciones: ' + error.message);
    } finally {
      setCargando(false);
    }
  };

  const formatearFecha = (timestamp) => {
    if (!timestamp) return 'Fecha no disponible';
    
    try {
      const fecha = timestamp.toDate();
      return fecha.toLocaleString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return 'Fecha inválida';
    }
  };

  if (cargando) {
    return (
      <div className="admin-container">
        <h2>⏳ Cargando suscripciones...</h2>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>📧 Suscripciones a SerenaViaFit</h2>
        <button onClick={cargarSuscripciones} className="btn-actualizar">
          🔄 Actualizar
        </button>
      </div>

      {error && (
        <div className="error-message">
          ❌ {error}
        </div>
      )}

      <div className="stats">
        <div className="stat-card">
          <h3>{suscripciones.length}</h3>
          <p>Total de suscripciones</p>
        </div>
        <div className="stat-card">
          <h3>{suscripciones.filter(s => s.activo).length}</h3>
          <p>Suscripciones activas</p>
        </div>
      </div>

      {suscripciones.length === 0 ? (
        <div className="no-suscripciones">
          <p>📭 No hay suscripciones todavía</p>
        </div>
      ) : (
        <div className="suscripciones-tabla">
          <table>
            <thead>
              <tr>
                <th>📧 Email</th>
                <th>📅 Fecha</th>
                <th>✅ Estado</th>
                <th>🆔 ID</th>
              </tr>
            </thead>
            <tbody>
              {suscripciones.map((suscripcion) => (
                <tr key={suscripcion.id}>
                  <td className="email">{suscripcion.email}</td>
                  <td>{formatearFecha(suscripcion.fecha)}</td>
                  <td>
                    <span className={`estado ${suscripcion.activo ? 'activo' : 'inactivo'}`}>
                      {suscripcion.activo ? '✅ Activo' : '❌ Inactivo'}
                    </span>
                  </td>
                  <td className="id">{suscripcion.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}