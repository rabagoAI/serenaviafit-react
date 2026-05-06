import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * FadeInSection — Wrapper que anima sus hijos con fade+slide al entrar en viewport
 * Ahora potenciado por GSAP.
 */
export default function FadeInSection({ children, delay = 0, direction = 'up', className = '' }) {
    const yVal = direction === 'up' ? 30 : 0;
    const xVal = direction === 'left' ? -30 : direction === 'right' ? 30 : 0;

    const ref = useScrollReveal({ 
      y: yVal, 
      x: xVal, 
      delay, 
      duration: 0.8 
    });

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
