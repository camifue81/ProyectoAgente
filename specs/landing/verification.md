# Verificación — Landing page de CertiAgentes

> Estado y evidencia de cada criterio de `spec.md` (v1.1). Fecha de la verificación: 2026-10-25.

## Cómo se verificó

| Tipo | Qué es | Cómo reproducirlo |
|---|---|---|
| **Build** | `npm run lint` sin errores y `npm run build` exitoso (incluye TypeScript); genera `y/out/` con `/` y `/_not-found` estáticos. | `cd y && npm run lint && npm run build` |
| **HTML** | Búsqueda de IDs, textos y clases en `y/out/index.html`. | `grep -o 'id="planes"' y/out/index.html` |
| **Navegador** | `y/out` servido en `localhost:4173` y revisado con JavaScript en el navegador a 360, 1024 y 1920 px. | `python -m http.server 4173 --directory y/out` |
| **Manual** | Revisión visual o en Firebase/GitHub que no se automatizó. | Pasos descritos en la fila. |

Leyenda: ✅ cumple · ⚠️ cumple con observación · ❌ no cumple · ⏳ pendiente de verificar.

## Resultados

| Criterio | Estado | Tipo | Evidencia |
|---|---|---|---|
| RQ-01.1 | ✅ | Navegador | `document.documentElement.lang === "es"` |
| RQ-01.2 | ✅ | Navegador | `document.title === "CertiAgentes"` |
| RQ-01.3 | ✅ | Navegador | `meta[name=description]` = "Aprende y certifícate en agentes de IA" |
| RQ-02.1 | ✅ | Navegador | `getComputedStyle(header).position === "sticky"` |
| RQ-02.2 | ✅ | HTML | `Certi<span class="text-violet-400">Agentes</span>` |
| RQ-02.3 | ✅ | Navegador | A 1024 px el contenedor de enlaces tiene `display: flex`; `href` a `#beneficios`, `#como-funciona`, `#planes` presentes |
| RQ-02.4 | ✅ | Navegador | A 360 px enlaces con `display: none` y botón "Empezar" visible |
| RQ-02.5 | ✅ | HTML | Botón "Empezar" con `href="#planes"` |
| RQ-02.6 | ✅ | HTML | Clases `bg-slate-950/80 backdrop-blur` en `<header>` |
| RQ-03.1 | ✅ | HTML | Texto "Nueva cohorte · Inscripciones abiertas" |
| RQ-03.2 | ✅ | Navegador + HTML | 1 solo `<h1>`; `span` con `bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text` |
| RQ-03.3 | ✅ | HTML | Párrafo "CertiAgentes es la plataforma…" |
| RQ-03.4 | ✅ | HTML | "Quiero certificarme" → `#planes`; "Ver cómo funciona" → `#como-funciona` |
| RQ-03.5 | ✅ | Navegador | A 360 px ambos botones miden 312 px (ancho completo del contenedor) |
| RQ-03.6 | ✅ | HTML | "+2.000", "40", "95%" con sus etiquetas |
| RQ-04.1 | ✅ | HTML | `id="beneficios"` y "¿Por qué CertiAgentes?" |
| RQ-04.2 | ✅ | HTML | Las 3 tarjetas con ícono, título y texto |
| RQ-04.3 | ✅ | Navegador | Grid de 1 columna (312px) a 360 px; 3 columnas (352px ×3) a 1920 px |
| RQ-04.4 | ⚠️ | HTML | Clase `hover:border-violet-400/50` presente; el cambio visual al pasar el mouse se revisó solo a ojo |
| RQ-05.1 | ✅ | HTML | `id="como-funciona"` y "Cómo funciona" |
| RQ-05.2 | ✅ | HTML | 01 Inscríbete, 02 Practica, 03 Certifícate, en orden |
| RQ-05.3 | ✅ | HTML | Grid `md:grid-cols-3` (mismo patrón que RQ-04.3) |
| RQ-06.1 | ✅ | HTML | `id="planes"` y "Elige tu plan" |
| RQ-06.2 | ✅ | HTML | Básico/Gratis, Pro/$29 / mes, Equipos/A medida |
| RQ-06.3 | ✅ | HTML | 9 ítems con "✓" (3 por plan) |
| RQ-06.4 | ✅ | HTML | Solo la tarjeta Pro tiene `border-violet-400 bg-violet-500/10 shadow-violet-500/20` |
| RQ-06.5 | ✅ | Navegador | Botones "Elegir Básico", "Elegir Pro", "Elegir Equipos"; Pro con `bg-violet-500` |
| RQ-06.6 | ✅ | Navegador | A 1920 px el borde inferior de los 3 botones está en la misma coordenada (2278 px) |
| RQ-06.7 | ⚠️ | HTML | Los botones usan `href="#"`: no salen de la página, pero suben al inicio. **Pendiente P-01** |
| RQ-07.1 | ✅ | HTML | Bloque `from-violet-600 to-cyan-500` con el título indicado |
| RQ-07.2 | ✅ | HTML | Texto "Únete hoy y empieza gratis. Sin tarjeta de crédito." |
| RQ-07.3 | ✅ | HTML | "Empezar ahora" → `#planes` |
| RQ-08.1 | ✅ | HTML | "© 2026 CertiAgentes · Hecho con Next.js y Firebase" |
| RQ-09.1 | ✅ | Navegador | Fondo del contenedor `slate-950` (casi negro), texto `slate-100` |
| RQ-09.2 | ✅ | HTML | CTAs en `violet-500`, resaltados en `violet-400` y `cyan` |
| RQ-09.3 | ✅ | Navegador | **Falló en la 1.ª pasada** (`h1` en Arial). Tras T-15: `font-family: Geist, "Geist Fallback", Arial…` y `document.fonts` muestra Geist cargada |
| RQ-10.1 | ✅ | Navegador | `scrollWidth > innerWidth` es `false` a 360, 1024 y 1920 px |
| RQ-10.2 | ✅ | Navegador | A 1920 px `#beneficios` mide 1152 px y empieza en x=377 (centrado) |
| RQ-11.1 | ✅ | Build | Salida "○ (Static) prerendered as static content"; existe `y/out/index.html` |
| RQ-11.2 | ✅ | Navegador + HTML | 0 `<script>` de otro origen; 0 `<link>` a `http(s)://` externos |
| RQ-11.3 | ⚠️ | Build | Se genera `y/out/404.html`. Que Firebase lo sirva en rutas inexistentes es su comportamiento por defecto; falta comprobarlo en la URL publicada |
| RQ-12.1 | ⏳ | Manual | Abrir un PR y confirmar el comentario del bot con la URL de preview |
| RQ-12.2 | ⏳ | Manual | Tras merge, revisar el job "Deploy to Firebase Hosting on merge" y la URL `proyectoagente-6116d.web.app` |
| RQ-12.3 | ✅ | Revisión | En ambos workflows el deploy es un paso posterior a `npm run build`; si el build falla, el job se detiene |

**Resumen:** 44 criterios · 39 ✅ · 3 ⚠️ · 0 ❌ · 2 ⏳ (RQ-12.3 se verificó revisando la configuración de los workflows).

## Hallazgos y cómo se resolvieron

| ID | Hallazgo | Resolución |
|---|---|---|
| H-01 | El texto se veía en Arial: `globals.css` fijaba `font-family: Arial` en `body`, encima de la variable de Geist. | Se precisó RQ-09.3 en la spec y se corrigió en **T-15** (`font-family: var(--font-geist-sans), Arial, …`). Verificado de nuevo en el navegador. |
| H-02 | La spec no decía qué hacen los botones "Elegir plan" (apuntan a `#`). | Se agregó **RQ-06.7** como comportamiento provisional y la pendiente **P-01**. |
| H-03 | La spec no mencionaba la página 404 que genera Next.js. | Se agregó **RQ-11.3**. |

## Pendientes

- **P-01:** los botones "Elegir plan" deben llevar a un registro real → T-14, requiere spec nueva y aprobación (CLAUDE.md §6).
- Verificar RQ-11.3, RQ-12.1 y RQ-12.2 en GitHub y en la URL publicada.
- Agregar pruebas automáticas de UI (por ejemplo Playwright) que repitan las comprobaciones del navegador de esta tabla.
