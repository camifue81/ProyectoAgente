const features = [
  {
    icon: "🧠",
    title: "Fundamentos de agentes",
    text: "Aprende cómo piensan, planean y usan herramientas los agentes de IA modernos.",
  },
  {
    icon: "🛠️",
    title: "Proyectos reales",
    text: "Construye agentes que automatizan tareas, consultan datos y se integran con APIs.",
  },
  {
    icon: "🎓",
    title: "Certificación oficial",
    text: "Valida tus habilidades con un examen práctico y un certificado verificable.",
  },
];

const steps = [
  { n: "01", title: "Inscríbete", text: "Crea tu cuenta y elige tu ruta de aprendizaje." },
  { n: "02", title: "Practica", text: "Completa módulos cortos y retos guiados cada semana." },
  { n: "03", title: "Certifícate", text: "Presenta tu proyecto final y obtén tu certificado." },
];

const plans = [
  {
    name: "Básico",
    price: "Gratis",
    items: ["Módulos introductorios", "Comunidad de estudiantes", "Retos semanales"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29 / mes",
    items: ["Todos los módulos", "Mentorías en vivo", "Examen de certificación"],
    highlight: true,
  },
  {
    name: "Equipos",
    price: "A medida",
    items: ["Licencias para tu equipo", "Panel de progreso", "Soporte prioritario"],
    highlight: false,
  },
];

export default function Home() {
  return (
    <div className="flex-1 bg-slate-950 text-slate-100">
      {/* Navegación */}
      <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold tracking-tight">
            Certi<span className="text-violet-400">Agentes</span>
          </a>
          <div className="hidden gap-8 text-sm text-slate-300 sm:flex">
            <a href="#beneficios" className="hover:text-white">Beneficios</a>
            <a href="#como-funciona" className="hover:text-white">Cómo funciona</a>
            <a href="#planes" className="hover:text-white">Planes</a>
          </div>
          <a
            href="#planes"
            className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-400"
          >
            Empezar
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.35),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
          <span className="inline-block rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-1 text-sm text-violet-300">
            Nueva cohorte · Inscripciones abiertas
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Conviértete en experto en{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              agentes de IA
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            CertiAgentes es la plataforma para aprender a diseñar, construir y desplegar agentes
            inteligentes, y certificar lo que sabes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#planes"
              className="w-full rounded-full bg-violet-500 px-8 py-3 font-semibold text-white hover:bg-violet-400 sm:w-auto"
            >
              Quiero certificarme
            </a>
            <a
              href="#como-funciona"
              className="w-full rounded-full border border-white/20 px-8 py-3 font-semibold hover:bg-white/10 sm:w-auto"
            >
              Ver cómo funciona
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold">+2.000</p>
              <p className="text-sm text-slate-400">Estudiantes</p>
            </div>
            <div>
              <p className="text-3xl font-bold">40</p>
              <p className="text-sm text-slate-400">Módulos</p>
            </div>
            <div>
              <p className="text-3xl font-bold">95%</p>
              <p className="text-sm text-slate-400">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">¿Por qué CertiAgentes?</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-violet-400/50"
            >
              <div className="text-4xl">{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-400">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Cómo funciona</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n}>
                <p className="text-5xl font-extrabold text-violet-400/60">{s.n}</p>
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-slate-400">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Elige tu plan</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                p.highlight
                  ? "border-violet-400 bg-violet-500/10 shadow-lg shadow-violet-500/20"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-3xl font-bold">{p.price}</p>
              <ul className="mt-6 flex-1 space-y-3 text-slate-300">
                {p.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 rounded-full px-6 py-3 text-center font-semibold ${
                  p.highlight
                    ? "bg-violet-500 text-white hover:bg-violet-400"
                    : "border border-white/20 hover:bg-white/10"
                }`}
              >
                Elegir {p.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Llamado final */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-500 p-10 text-center sm:p-14">
          <h2 className="text-3xl font-bold text-white">¿Listo para crear tu primer agente?</h2>
          <p className="mt-3 text-white/90">Únete hoy y empieza gratis. Sin tarjeta de crédito.</p>
          <a
            href="#planes"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-violet-700 hover:bg-slate-100"
          >
            Empezar ahora
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © 2026 CertiAgentes · Hecho con Next.js y Firebase
      </footer>
    </div>
  );
}
