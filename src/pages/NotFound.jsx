import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './NotFound.css';

export default function NotFound() {
    return (
        <div className="notfound-container">
            <Helmet>
                <title>Página no encontrada | SerenaViaFit</title>
            </Helmet>
            <div className="notfound-content">
                <span className="notfound-emoji">🌿</span>
                <h1 className="notfound-code">404</h1>
                <h2 className="notfound-title">¡Ups! Página no encontrada</h2>
                <p className="notfound-desc">
                    Parece que esta página no existe o ha sido movida. No te preocupes, sigue explorando SerenaViaFit.
                </p>
                <Link to="/" className="notfound-btn">← Volver al inicio</Link>
            </div>
        </div>
    );
}
