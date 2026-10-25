# CertiAgentes — Landing page (SDD)

Landing page de **CertiAgentes**, una plataforma (proyecto académico) para aprender y certificarse en agentes
de IA. Está hecha con **Next.js 16 + React 19 + TypeScript + Tailwind CSS 4**, se exporta como sitio estático
y se publica en **Firebase Hosting** con GitHub Actions.

El proyecto se desarrolló con **Spec-Driven Development (SDD)**: primero se escribe qué debe hacer el producto,
luego cómo se construye, después las tareas, y al final se verifica cada criterio con evidencia.

## Qué hace

Una sola página con: barra de navegación fija, hero con CTAs y cifras, beneficios, "Cómo funciona" en 3 pasos,
3 planes (Básico, Pro destacado, Equipos), llamado final y pie de página. Es responsive desde 360 px.

## Cómo correrlo

Requiere Node.js 20 o superior.

```bash
cd y
npm install
npm run dev        # http://localhost:3000
npm run lint       # ESLint
npm run build      # export estático en y/out/
```

Despliegue manual (opcional, normalmente lo hace GitHub Actions al hacer merge a `main`):

```bash
firebase deploy --only hosting
```

## Estructura SDD

```
CLAUDE.md                 # Constitución: reglas que aplican a todo el proyecto
specs/landing/
├── spec.md               # QUÉ: requisitos RQ-01 a RQ-12 con criterios de aceptación
├── plan.md               # CÓMO: stack, arquitectura, decisiones y riesgos
├── tasks.md              # Tareas T-01 a T-15 trazadas a los requisitos
└── verification.md       # Estado y evidencia de cada criterio
y/                        # Código de la app Next.js
```

| Documento | Responde a | Contenido |
|---|---|---|
| `CLAUDE.md` | ¿Qué reglas no se rompen? | Idioma, límites del stack, calidad, flujo de commits/PR, cambios que requieren aprobación. |
| `spec.md` | ¿Qué hace el producto? | Contexto, objetivos, fuera de alcance, usuarios, 12 requisitos y 44 criterios. |
| `plan.md` | ¿Cómo se construye? | Stack, arquitectura, estructura, decisiones D-01 a D-05, riesgos, estrategia de verificación. |
| `tasks.md` | ¿En qué orden? | 15 tareas con requisitos cubiertos, dependencias y estado. |
| `verification.md` | ¿Se cumplió? | Una fila por criterio con estado y evidencia, hallazgos y pendientes. |

## Cómo se aplicó SDD

Nivel **spec-anchored**: la spec sigue viva después de implementar y cualquier cambio visible la actualiza en el
mismo commit que el código.

1. **Constitución** (`CLAUDE.md`): reglas generales.
2. **Spec**: requisitos con IDs y criterios verificables.
3. **Plan**: decisiones técnicas que respetan la constitución (por ejemplo, export estático, D-01).
4. **Tareas**: cada una cita los requisitos que cubre.
5. **Implementación**: una tarea por commit.
6. **Verificación**: cada criterio se revisó con build, inspección del HTML generado y pruebas en navegador a
   360/1024/1920 px.

La verificación encontró **huecos** que se corrigieron en el orden SDD (primero la spec, luego el código):

- **H-01:** la fuente Geist no se aplicaba (el CSS forzaba Arial) → se precisó RQ-09.3 y se corrigió en T-15.
- **H-02:** no estaba definido qué hacen los botones "Elegir plan" → RQ-06.7 + pendiente P-01.
- **H-03:** faltaba la página 404 en la spec → RQ-11.3.
