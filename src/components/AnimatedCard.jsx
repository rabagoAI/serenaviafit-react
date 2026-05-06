import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AnimatedCard.css';

export default function AnimatedCard({ img, alt, title, desc, link, linkText = 'Ver más →', badge, slug, esFavorito, onToggleFavorito }) {
    return (
        <div className="acard stagger-item">
            {img && (
                <div className="acard__img-wrapper">
                    <img src={img} alt={alt || title} loading="lazy" className="acard__img" />
                    {badge && <span className="acard__badge">{badge}</span>}
                    {onToggleFavorito && (
                        <button
                            className={`acard__fav${esFavorito ? ' acard__fav--active' : ''}`}
                            onClick={(e) => { e.preventDefault(); onToggleFavorito(slug); }}
                            aria-label={esFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={esFavorito ? 'lleno' : 'vacio'}
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.5, opacity: 0 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    {esFavorito ? '♥' : '♡'}
                                </motion.span>
                            </AnimatePresence>
                        </button>
                    )}
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
