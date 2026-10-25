# Constitución del proyecto — CertiAgentes

Reglas que aplican a todo el proyecto y a cualquier persona o agente de IA que trabaje en él.
Si una tarea entra en conflicto con estas reglas, gana la constitución.

## 1. Fuente de verdad

- La especificación vive en `specs/landing/`. El orden es: **spec → plan → tasks → código → verificación**.
- Ningún cambio de comportamiento visible (texto, secciones, enlaces, estilos clave, despliegue) se hace sin
  actualizar primero `spec.md`. Spec y código cambian **en el mismo commit**.
- Cada requisito tiene un ID estable (`RQ-XX`) y cada criterio de aceptación uno propio (`RQ-XX.Y`).
  Los IDs no se reutilizan: si un requisito se elimina, se marca como *Retirado*.

## 2. Idioma

- Todo el contenido visible para el usuario está en **español** (`<html lang="es">`).
- La documentación (`specs/`, `README.md`, commits) se escribe en español.
- Los identificadores de código (variables, componentes) pueden ir en inglés.

## 3. Límites del stack

- Frontend: **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4**, dentro de la carpeta `y/`.
- La app se exporta como **sitio estático** (`output: "export"`). Prohibido usar funciones que requieran
  servidor (API Routes, Server Actions, SSR dinámico, `cookies()`, `headers()`).
- Hosting: **Firebase Hosting** (proyecto `proyectoagente-6116d`), sirviendo `y/out`.
- No se agregan dependencias de producción nuevas sin aprobación (ver §6).
- No hay backend, base de datos ni llamadas de red propias en esta versión.

## 4. Calidad

- Antes de cada commit deben pasar: `npm run lint` y `npm run build` (incluye chequeo de TypeScript).
- Cada criterio de aceptación debe tener evidencia en `verification.md` (automática, build o manual).
- Accesibilidad mínima: textos con contraste legible sobre fondo oscuro, un solo `<h1>`, jerarquía de
  encabezados `h1 → h2 → h3`, enlaces con texto descriptivo.
- Diseño *mobile first*: todo debe verse bien desde 360 px de ancho, sin scroll horizontal.

## 5. Flujo de trabajo

- Una tarea de `tasks.md` = un commit (o un PR pequeño). El mensaje del commit cita la tarea: `T-03: ...`.
- Todo cambio entra por Pull Request a `main`. El PR genera un *preview channel* de Firebase; el merge a
  `main` despliega a producción (`live`) automáticamente con GitHub Actions.
- No se edita a mano el contenido de `y/out/` ni de `.firebase/`.

## 6. Cambios que requieren aprobación del equipo

- Cambiar precios, nombres de planes o promesas comerciales (cifras del hero, "Sin tarjeta de crédito").
- Agregar dependencias de producción, servicios de Firebase (Auth, Firestore, Analytics) o scripts de terceros.
- Cambiar el proyecto de Firebase, los workflows de `.github/workflows/` o los secretos.
- Eliminar o renombrar un requisito de la spec.
