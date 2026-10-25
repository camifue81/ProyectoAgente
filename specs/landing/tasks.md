# Tareas — Landing page de CertiAgentes

> Cada tarea es pequeña, se cierra con un commit `T-XX: ...` y está trazada a los requisitos de `spec.md`.
> Definición de *hecho* (DoD) para todas: `npm run lint` y `npm run build` pasan, y `verification.md` está actualizado.

| ID | Tarea | Cubre | Depende de | Estado |
|---|---|---|---|---|
| T-01 | Crear app Next.js en `y/` con TypeScript, Tailwind 4 y ESLint | RQ-09.3 | — | ✅ Hecha |
| T-02 | Configurar `output: "export"` y verificar que `next build` genera `y/out/` | RQ-11.1 | T-01 | ✅ Hecha |
| T-03 | `layout.tsx`: `lang="es"`, título, descripción y fuentes Geist | RQ-01, RQ-09.3 | T-01 | ✅ Hecha |
| T-04 | Barra de navegación sticky con logo, enlaces de sección y botón Empezar | RQ-02 | T-03 | ✅ Hecha |
| T-05 | Hero con etiqueta, h1 con degradado, párrafo, 2 CTAs y cifras | RQ-03 | T-04 | ✅ Hecha |
| T-06 | Sección Beneficios a partir del arreglo `features` | RQ-04 | T-05 | ✅ Hecha |
| T-07 | Sección Cómo funciona a partir del arreglo `steps` | RQ-05 | T-05 | ✅ Hecha |
| T-08 | Sección Planes a partir de `plans` con plan destacado y botones alineados | RQ-06.1–RQ-06.6 | T-05 | ✅ Hecha |
| T-09 | Llamado final y pie de página | RQ-07, RQ-08 | T-05 | ✅ Hecha |
| T-10 | Revisión responsive y de tema oscuro (360 / 768 / 1440 px) | RQ-09, RQ-10 | T-04…T-09 | ✅ Hecha |
| T-11 | Firebase Hosting: `firebase.json`, `.firebaserc`, predeploy | RQ-11, RQ-12.3 | T-02 | ✅ Hecha |
| T-12 | Workflows de GitHub Actions para preview por PR y deploy en `main` | RQ-12.1, RQ-12.2 | T-11 | ✅ Hecha |
| T-13 | Documentar comportamiento provisional de "Elegir plan" y página 404 (salieron de la verificación) | RQ-06.7, RQ-11.3 | T-08, T-11 | ✅ Hecha (solo spec) |
| T-14 | Conectar los botones "Elegir plan" a un flujo real de registro | P-01 | spec v2 | ⏳ Pendiente (fuera de alcance v1) |
| T-15 | Corregir `globals.css`: el `body` forzaba Arial y la fuente Geist no se aplicaba (hallazgo H-01) | RQ-09.3 | T-03 | ✅ Hecha |

## Detalle de las tareas

### T-04 — Barra de navegación
- `<header className="sticky top-0 ...">` con `backdrop-blur` y fondo `bg-slate-950/80`.
- Enlaces de sección dentro de `div.hidden sm:flex`.
- **Criterios a verificar:** RQ-02.1 a RQ-02.6.

### T-08 — Planes
- Arreglo `plans` con `name`, `price`, `items[3]`, `highlight`.
- Estilos condicionales según `highlight`.
- Tarjeta `flex flex-col`, lista `flex-1` para alinear el botón.
- **Criterios a verificar:** RQ-06.1 a RQ-06.6.

### T-12 — CI/CD
- `firebase-hosting-pull-request.yml`: `on: pull_request`, solo si el PR viene del mismo repo.
- `firebase-hosting-merge.yml`: `on: push` a `main`, `channelId: live`.
- Ambos: `npm ci --prefix y && npm run build --prefix y` antes de desplegar.
- Secreto: `FIREBASE_SERVICE_ACCOUNT_PROYECTOAGENTE_6116D`.
- **Criterios a verificar:** RQ-12.1 a RQ-12.3.

### T-14 — Registro real (pendiente)
- Requiere una spec nueva (`specs/registro/`) y aprobación para agregar Firebase Auth (CLAUDE.md §6).
