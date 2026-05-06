# SerenaViaFit — Contexto del proyecto

## Stack técnico
- **React 19** con Create React App (`react-scripts`)
- **React Router v7** con `HashRouter` (compatible GitHub Pages)
- **Framer Motion 12** — transiciones y animaciones de componentes
- **GSAP 3 + ScrollTrigger + @gsap/react** — animaciones de scroll
- **Lenis** — scroll suave global
- **Firebase Firestore** — formulario de suscripción
- **react-helmet-async** — SEO dinámico
- **CSS puro** con custom properties (sin Tailwind)
- Deploy en **Vercel** (también configurado para GitHub Pages)

---

## Estructura clave

```
src/
├── App.js                        # Router + AnimatedRoutes + ScrollToTop
├── pages/
│   ├── Home.jsx / Home.css
│   ├── Nutricion.jsx / .css      # Recetas con filtros, buscador, favoritos
│   ├── Deporte.jsx / .css
│   ├── Blog.jsx / .css
│   ├── Post.jsx
│   ├── Rutina.jsx / .css
│   ├── RecetaDetallePage.jsx     # Pasa props a RecetaDetalle
│   └── NotFound.jsx
├── components/
│   ├── AnimatedCard.jsx / .css   # Card con corazón favorito opt-in
│   ├── RecetaDetalle.jsx / .css  # Detalle rediseñado (hero + stats + timeline)
│   ├── PageTransition.jsx        # Wrapper motion para transiciones entre rutas
│   ├── ScrollHero.jsx            # Hero parallax de la home
│   ├── TextReveal.jsx            # Texto palabra a palabra con GSAP
│   ├── FadeInSection.jsx         # Wrapper fade+slide al hacer scroll
│   ├── TemporizadorRutina.jsx    # Temporizador con Framer Motion
│   ├── FormularioSuscripcion.jsx # Firebase Firestore
│   └── SmoothScroll.jsx          # Lenis wrapper
├── data/
│   └── recetas.js                # 12 recetas con slug, categoria, imagen .webp, nutricion, etc.
├── hooks/
│   ├── useScrollReveal.js        # useScrollReveal + useScrollStagger (GSAP)
│   ├── useFavoritos.js           # LocalStorage favoritos (svf_favoritos)
│   ├── useParallax.js
│   ├── usePinnedSection.js       # Pendiente de usar en recetas
│   └── useStackedCards.js        # Pendiente de usar en recetas
├── posts/                        # 7 posts del blog (hardcodeados)
├── rutinas/                      # 4 rutinas (HIIT, yoga, fuerza, estiramientos)
├── assets/                       # Imágenes WebP de recetas + PNG resto
└── styles/global.css             # Variables CSS, grid, cards base
```

---

## Rutas de la aplicación

| Ruta | Página |
|------|--------|
| `/` | Home |
| `/nutricion` | Recetas con filtros + buscador |
| `/deporte` | Entrenamientos |
| `/blog` | Blog con filtros por categoría |
| `/blog/:id` | Post individual |
| `/rutina/:id` | Detalle rutina con temporizador |
| `/receta/:slug` | Detalle receta (hero + stats + pasos) |
| `*` | 404 |

---

## Categorías de recetas (`recetas.js`)

| Categoría | Recetas |
|-----------|---------|
| Desayuno | Batido Verde, Avena, Aguacate, Yogur |
| Almuerzo | Ensalada Mediterránea, Buddha Bowl |
| Cena | Salmón, Sopa Calabaza, Sopa Lentejas, Pollo Salteado |
| Snack | Hummus, Bolas de Energía |

Todos los campos de cada receta: `slug`, `titulo`, `categoria`, `imagen` (.webp), `descripcion`, `nutricion` (calorias/carbohidratos/fibra/proteinas/grasas), `beneficios[]`, `ingredientes[]`, `pasos[]`

---

## Imágenes

- **Recetas**: todas en `src/assets/*.webp` (generadas con IA, ratio 4:3, ~1200×900px)
- **Entrenamientos**: `hiit-casa.png`, `yoga-principiantes.png`, `fuerza-sin-pesas.png`, `estiramientos.png` — siguen en PNG
- **Blog/posts**: `alimentacionPost.jpeg`, `ejercicio-regular.jpg`, `portada-fit.jpg`, `vida-saludable.jpg`, etc. — siguen en PNG/JPG
- **Hero**: `hero-fit.png` (11.4 MB — pendiente optimizar a WebP)
- **Logo**: `logo.png` (1.5 MB — pendiente optimizar)

---

## Mejoras ya implementadas

- [x] **Imágenes WebP** — 12 recetas generadas con IA y actualizados todos los imports
- [x] **Filtros animados en Nutrición** — pill con `layoutId` + `AnimatePresence popLayout`
- [x] **Transiciones entre páginas** — `PageTransition` + `AnimatedRoutes` + `ScrollToTop`
- [x] **Detalle de receta rediseñado** — hero full-width, badge categoría, stats nutricionales en colores, grid ingredientes/beneficios, timeline de pasos numerados
- [x] **Countup nutricional** — números cuentan desde 0 con GSAP ScrollTrigger al entrar en viewport
- [x] **Buscador de recetas** — filtra por título y descripción, combinable con filtros de categoría, con botón limpiar y contador de resultados animado
- [x] **Favoritos con LocalStorage** — hook `useFavoritos`, corazón animado en cards, persiste entre sesiones

---

## Mejoras pendientes (ordenadas por impacto)

### Alta prioridad
- [ ] **Optimizar hero-fit.png → WebP** — pesa 11.4 MB, es crítico para Lighthouse/CWV
- [ ] **Optimizar logo.png → WebP** — pesa 1.5 MB innecesariamente

### Media prioridad
- [ ] **Paleta de colores modernizada** — propuesta: verde salvia `#7c9e7a`, crema `#f5f0e8`, terracota `#c4704a`. Fuente: `Playfair Display` (títulos) + `Inter` (cuerpo)
- [ ] **Filtros animados en Blog** — igual que Nutrición: `AnimatePresence` al cambiar categoría (actualmente recarga sin animación)
- [ ] **Meta tags Open Graph por receta** — ya hay `react-helmet-async`, solo añadir `og:image`, `og:title`, `og:description` en `RecetaDetallePage`
- [ ] **Hooks sin usar en recetas** — `usePinnedSection` y `useStackedCards` están creados pero no se usan; podrían aplicarse al detalle de receta para scroll sticky de ingredientes

### Baja prioridad
- [ ] **Cursor personalizado** — círculo que escala en hover de cards (efecto premium wellness)
- [ ] **Sección "Receta del día" en Home** — receta aleatoria determinista por fecha con animación especial
- [ ] **Botón "Compartir receta"** — Web Share API en móvil, copiar URL en desktop
- [ ] **Página de Favoritos** — ruta `/favoritos` que muestra las recetas guardadas con corazón
- [ ] **Imágenes WebP para entrenamientos y blog** — mismo proceso que recetas

---

## Notas técnicas importantes

- El worktree actual es `optimistic-ramanujan-1028c8`. Los cambios deben mergearse a `master`.
- El preview tool (`mcp__Claude_Preview`) es **inestable** en este worktree — usar `CI=true npm run build` para verificar que compila, y `npx serve -s build -l 3001` para servir el build de producción.
- `AnimatedCard` acepta props opcionales `slug`, `esFavorito`, `onToggleFavorito` para el botón corazón — solo activarlos en recetas (Nutricion.jsx y Home.jsx si se quiere).
- Los hooks `usePinnedSection` y `useStackedCards` en `src/hooks/` están listos pero sin uso actual.
- `RecetaDetalle` ahora requiere los props `descripcion` y `categoria` (además de los originales).
- Variables CSS de Nutrición: `--nutricion-fondo: #0d1a0e`, `--nutricion-glow: #1a3d1b`, `--nutricion-verde-claro: #7bc67e`
