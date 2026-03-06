import { Link } from 'react-router-dom';
import './AnimatedCard.css';

/**
 * AnimatedCard — Tarjeta moderna con animación de entrada controlada por el grid padre.
 */
export default function AnimatedCard({ img, alt, title, desc, link, linkText = 'Ver más →', badge }) {
    return (
        <div className="acard stagger-item">
            {img && (
                <div className="acard__img-wrapper">
                    <img src={img} alt={alt || title} loading="lazy" className="acard__img" />
                    {badge && <span className="acard__badge">{badge}</span>}
                    <div className="acard__img-overlay" />
                </div>
            )}
            <div className="acard__body">
                <h3 className="acard__title">{title}</h3>
                <p className="acard__desc">{desc}</p>
                {link && (
                    <div className="acard__link-wrapper" style={{ transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                        <Link to={link} className="acard__link">{linkText}</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
