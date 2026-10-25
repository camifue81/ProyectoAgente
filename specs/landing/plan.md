# Plan técnico — Landing page de CertiAgentes

> Describe **cómo** se construye lo que pide `spec.md`. Respeta los límites de `CLAUDE.md`.

## 1. Stack

| Capa | Elección | Motivo |
|---|---|---|
| Framework | Next.js 16.4 (App Router) | Componentes React, optimización de fuentes e imágenes, export estático. |
| UI | React 19.3 + TypeScript 5 | Tipado y componentes declarativos. |
| Estilos | Tailwind CSS 4 (plugin `@tailwindcss/turbopack`) | Utilidades responsive (`sm:`, `md:`) que cubren RQ-10 sin CSS propio. |
| Fuentes | `next/font/google` (Geist, Geist Mono) | Se descargan en build y se sirven desde el propio dominio (RQ-09.3, RQ-11.2). |
| Calidad | ESLint 9 + `eslint-config-next` | Reglas de React/Next y accesibilidad básica. |
| Hosting | Firebase Hosting | CDN gratuita, *preview channels* por PR. |
| CI/CD | GitHub Actions + `FirebaseExtended/action-hosting-deploy@v0` | Cubre RQ-12. |

## 2. Arquitectura

```
Navegador ──HTTPS──▶ Firebase Hosting (CDN) ──▶ y/out/index.html + _next/static/*
                         ▲
GitHub (PR / main) ──▶ GitHub Actions: npm ci → next build (export) → deploy
```

- **Sin servidor:** `next.config.ts` define `output: "export"`; `next build` genera `y/out/` (RQ-11.1).
- `firebase.json` publica `y/out` y ejecuta `npm --prefix y run build` como *predeploy* para despliegues manuales.
- `.firebaserc` fija el proyecto por defecto `proyectoagente-6116d`.

## 3. Estructura de archivos

```
Firebase/
├── CLAUDE.md                     # constitución
├── README.md
├── firebase.json / .firebaserc   # configuración de Hosting
├── .github/workflows/
│   ├── firebase-hosting-pull-request.yml   # RQ-12.1
│   └── firebase-hosting-merge.yml          # RQ-12.2
├── specs/landing/                # spec, plan, tasks, verification
└── y/                            # app Next.js
    ├── app/layout.tsx            # <html lang="es">, metadata, fuentes (RQ-01, RQ-09.3)
    ├── app/page.tsx              # toda la landing (RQ-02 a RQ-08)
    ├── app/globals.css           # import de Tailwind y variables de tema
    └── next.config.ts            # output: "export"
```

## 4. Diseño de la página

Una sola ruta `/` renderizada por `app/page.tsx` como **Server Component** (no necesita estado ni `"use client"`).

- **Datos como constantes:** `features`, `steps` y `plans` son arreglos en el mismo archivo. Las secciones
  se generan con `.map()`, así agregar un beneficio o un plan es cambiar datos, no JSX.
  - `plans[i].highlight: boolean` decide el estilo destacado (RQ-06.4, RQ-06.5).
- **Secciones** (en orden): `header` sticky → Hero → `#beneficios` → `#como-funciona` → `#planes` → CTA final → `footer`.
- **Navegación por anclas** (`href="#planes"`, etc.); no se usa router porque es una sola página.
- **Responsive:** contenedores `mx-auto max-w-6xl px-6` (RQ-10.2); grids `md:grid-cols-3` (RQ-04.3, RQ-05.3, RQ-06);
  botones del hero `flex-col sm:flex-row` + `w-full sm:w-auto` (RQ-03.5); enlaces del nav `hidden sm:flex` (RQ-02.4).
- **Alineación de botones de planes:** tarjeta `flex flex-col` + lista `flex-1` (RQ-06.6).
- **Tema:** fondo `bg-slate-950`, acento `violet-400/500`, secundario `cyan-300/500` (RQ-09).

## 5. Decisiones (ADR resumidas)

| ID | Decisión | Alternativas | Por qué |
|---|---|---|---|
| D-01 | Export estático | SSR con Firebase App Hosting | La landing no tiene datos dinámicos; estático es más barato, rápido y no requiere plan Blaze. |
| D-02 | Todo en `page.tsx` | Un componente por sección | Con ~200 líneas la separación no aporta aún; se divide si el archivo supera ~300 líneas o una sección se reutiliza. |
| D-03 | Emojis como íconos | Librería de íconos | Cero dependencias (CLAUDE.md §3). |
| D-04 | Botones "Elegir plan" con `href="#"` | Formulario / enlace externo | Registro fuera de alcance v1 (spec §3). Pendiente P-01. |
| D-05 | Deploy por GitHub Actions | `firebase deploy` manual | Reproducible y con preview por PR (RQ-12). |

## 6. Riesgos

- **Next.js 16 tiene cambios incompatibles** con versiones anteriores: consultar `y/node_modules/next/dist/docs/` antes de usar APIs nuevas (ver `y/AGENTS.md`).
- Las cifras del hero (+2.000, 95%) son de ejemplo; publicarlas como reales requiere aprobación (CLAUDE.md §6).
- El *preview* por PR no corre en forks (el workflow lo limita al mismo repo), por seguridad de los secretos.

## 7. Estrategia de verificación

1. **Automática:** `npm run lint` y `npm run build` (incluye TypeScript) en local y en CI.
2. **Sobre el HTML generado:** buscar en `y/out/index.html` los IDs, textos y metadatos exigidos.
3. **Manual en navegador:** anchos 360, 768 y 1440 px; clic en cada ancla; hover en tarjetas.
4. **Despliegue:** revisar que el PR publique preview y que el merge actualice el canal `live`.
