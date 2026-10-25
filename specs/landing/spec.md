# Spec — Landing page de CertiAgentes

> **Estado:** Aprobada · **Versión:** 1.1 · **Última actualización:** 2026-10-25
> Este documento describe **qué** hace el producto, no **cómo** se construye (eso está en `plan.md`).

## 1. Contexto y problema

CertiAgentes es una plataforma (ficticia, proyecto académico) para aprender a diseñar, construir y desplegar
agentes de IA y obtener una certificación. Hoy no existe un punto de entrada público que explique la oferta.
Se necesita una **landing page** de una sola página que presente la propuesta de valor, explique el proceso,
muestre los planes y lleve al visitante a una acción ("empezar").

## 2. Objetivos

- O1. Que un visitante entienda en menos de 10 segundos qué es CertiAgentes.
- O2. Que pueda comparar los planes sin salir de la página.
- O3. Que siempre tenga a la vista una llamada a la acción (CTA).
- O4. Que el sitio esté publicado en una URL pública y se actualice solo al hacer merge a `main`.

## 3. Fuera de alcance (v1)

- Registro, inicio de sesión o cualquier cuenta de usuario.
- Pagos reales o pasarela de pago.
- Contenido de los cursos, panel del estudiante o emisión de certificados.
- Multi-idioma, blog, analítica y formularios de contacto.

## 4. Usuarios

| Persona | Necesidad |
|---|---|
| Estudiante/profesional curioso | Saber qué aprenderá y si vale la pena. |
| Persona decidida a comprar | Ver precios y elegir un plan rápido. |
| Líder de equipo | Saber si hay opción para varias personas. |

## 5. Requisitos y criterios de aceptación

### RQ-01 — Metadatos e idioma
- RQ-01.1 El documento HTML declara `lang="es"`.
- RQ-01.2 El título de la pestaña es exactamente **"CertiAgentes"**.
- RQ-01.3 La meta descripción es **"Aprende y certifícate en agentes de IA"**.

### RQ-02 — Barra de navegación
- RQ-02.1 Hay una barra superior fija (*sticky*) que permanece visible al hacer scroll.
- RQ-02.2 Muestra el logotipo de texto "Certi**Agentes**", con "Agentes" resaltado en violeta.
- RQ-02.3 En pantallas ≥ 640 px muestra los enlaces **Beneficios**, **Cómo funciona** y **Planes**, que
  llevan a `#beneficios`, `#como-funciona` y `#planes`.
- RQ-02.4 En pantallas < 640 px los enlaces de sección se ocultan, pero el botón **Empezar** sigue visible.
- RQ-02.5 El botón **Empezar** lleva a `#planes`.
- RQ-02.6 La barra tiene fondo semitransparente con desenfoque (*backdrop blur*) para que el contenido no se mezcle con el texto.

### RQ-03 — Hero (sección principal)
- RQ-03.1 Muestra la etiqueta "Nueva cohorte · Inscripciones abiertas".
- RQ-03.2 Hay un único `<h1>`: "Conviértete en experto en **agentes de IA**", con "agentes de IA" en degradado violeta→cian.
- RQ-03.3 Muestra un párrafo que explica qué es CertiAgentes.
- RQ-03.4 Tiene dos botones: **Quiero certificarme** (→ `#planes`) y **Ver cómo funciona** (→ `#como-funciona`).
- RQ-03.5 En móvil los dos botones se apilan y ocupan todo el ancho; en ≥ 640 px quedan en fila.
- RQ-03.6 Muestra tres cifras: **+2.000** Estudiantes, **40** Módulos, **95%** Satisfacción.

### RQ-04 — Beneficios
- RQ-04.1 La sección tiene `id="beneficios"` y el título "¿Por qué CertiAgentes?".
- RQ-04.2 Muestra exactamente 3 tarjetas, cada una con ícono, título y texto:
  Fundamentos de agentes 🧠, Proyectos reales 🛠️, Certificación oficial 🎓.
- RQ-04.3 Las tarjetas se ven en 1 columna en móvil y en 3 columnas desde 768 px.
- RQ-04.4 Al pasar el mouse sobre una tarjeta, su borde cambia a violeta.

### RQ-05 — Cómo funciona
- RQ-05.1 La sección tiene `id="como-funciona"` y el título "Cómo funciona".
- RQ-05.2 Muestra 3 pasos numerados **01 Inscríbete**, **02 Practica**, **03 Certifícate**, en ese orden.
- RQ-05.3 Los pasos se ven en 1 columna en móvil y en 3 columnas desde 768 px.

### RQ-06 — Planes
- RQ-06.1 La sección tiene `id="planes"` y el título "Elige tu plan".
- RQ-06.2 Muestra 3 planes en este orden: **Básico — Gratis**, **Pro — $29 / mes**, **Equipos — A medida**.
- RQ-06.3 Cada plan lista exactamente 3 beneficios, cada uno precedido de "✓".
- RQ-06.4 El plan **Pro** está destacado (borde violeta, fondo violeta tenue y sombra); los otros dos no.
- RQ-06.5 Cada plan tiene un botón **Elegir {nombre del plan}**; el del plan destacado es sólido violeta.
- RQ-06.6 Los botones de los tres planes quedan alineados abajo aunque las listas tengan distinto largo.
- RQ-06.7 Mientras no exista el registro (fuera de alcance), los botones **Elegir …** no navegan fuera de la página.
  *(Comportamiento provisional: ver nota de pendiente P-01 en `verification.md`).*

### RQ-07 — Llamado final (CTA)
- RQ-07.1 Muestra un bloque con degradado violeta→cian y el título "¿Listo para crear tu primer agente?".
- RQ-07.2 Muestra el texto "Únete hoy y empieza gratis. Sin tarjeta de crédito.".
- RQ-07.3 Tiene un botón **Empezar ahora** que lleva a `#planes`.

### RQ-08 — Pie de página
- RQ-08.1 Muestra "© 2026 CertiAgentes · Hecho con Next.js y Firebase".

### RQ-09 — Estilo visual
- RQ-09.1 El fondo general es oscuro (slate-950) y el texto principal claro.
- RQ-09.2 El color de acento es violeta y el secundario cian, usados de forma consistente en CTAs y resaltados.
- RQ-09.3 La tipografía de todo el texto es Geist (sans) cargada con `next/font`; Arial solo se usa como respaldo si Geist no carga.

### RQ-10 — Responsive
- RQ-10.1 La página no tiene scroll horizontal en ningún ancho entre 360 px y 1920 px.
- RQ-10.2 El contenido se limita a un ancho máximo y queda centrado en pantallas grandes.

### RQ-11 — Rendimiento y entrega
- RQ-11.1 La página se genera como HTML estático (sin servidor) en `y/out/`.
- RQ-11.2 La página no carga scripts ni estilos de terceros, aparte de las fuentes servidas por `next/font`.
- RQ-11.3 Una ruta inexistente muestra la página 404 generada por Next.js.

### RQ-12 — Despliegue continuo
- RQ-12.1 Cada Pull Request a `main` desde el mismo repositorio construye el sitio y publica un *preview channel* de Firebase.
- RQ-12.2 Cada push/merge a `main` construye el sitio y lo despliega al canal `live` del proyecto `proyectoagente-6116d`.
- RQ-12.3 Si `npm run build` falla, no se despliega nada.

## 6. Glosario

- **CTA:** *Call to action*, botón o enlace que invita a una acción.
- **Preview channel:** URL temporal de Firebase Hosting para revisar un PR antes del merge.
- **Ancla:** enlace `#id` que desplaza la página hasta una sección.

## 7. Historial de cambios

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0 | 2026-10-25 | Spec inicial (RQ-01 a RQ-12). |
| 1.1 | 2026-10-25 | Tras la verificación: se agregó RQ-06.7 (comportamiento provisional de "Elegir plan") y RQ-11.3 (404); se precisó RQ-09.3 porque la verificación mostró que el texto salía en Arial. |
