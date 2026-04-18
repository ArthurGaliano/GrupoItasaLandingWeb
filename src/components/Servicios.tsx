'use client';

const servicios = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" />
      </svg>
    ),
    titulo: 'Compra y Venta',
    desc: 'Intermediación profesional en la compra y venta de inmuebles residenciales y comerciales.',
    items: ['Casas y departamentos', 'Locales comerciales', 'Terrenos y lotes', 'Proyectos en preventa'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l4-4 3 2 4-3 4 3 3-1" /><path d="M3 12l4 5h3l2-2 3 2 4-3" /><path d="M14 10l-3 3" />
      </svg>
    ),
    titulo: 'Alquileres',
    desc: 'Gestión completa de alquileres para propietarios e inquilinos, con respaldo legal incluido.',
    items: ['Búsqueda de inquilinos', 'Contratos y garantías', 'Administración mensual', 'Mantenimiento'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3h8l4 4v14H7z" /><path d="M15 3v4h4" /><path d="M10 12h6M10 16h6M10 8h3" />
      </svg>
    ),
    titulo: 'Asesoría Legal',
    desc: 'Soporte jurídico especializado en todas las etapas de la transacción inmobiliaria.',
    items: ['Saneamiento de títulos', 'Contratos de compraventa', 'Due diligence legal', 'Transferencias SUNARP'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
      </svg>
    ),
    titulo: 'Gestión de Inversiones',
    desc: 'Rentabiliza tu patrimonio con nuestra cartera de proyectos de alto rendimiento.',
    items: ['Análisis de rentabilidad', 'Portafolio inmobiliario', 'Proyectos en planos', 'Asesoría financiera'],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24" style={{ background: 'var(--cream)' }}>
      <div className="max-w-container mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 md:gap-10 items-end mb-14">
          <div>
            <span className="eyebrow reveal">Lo que hacemos</span>
            <h2 className="mt-3.5 reveal d1" style={{ fontSize: 'clamp(30px,4vw,46px)', lineHeight: 1.1 }}>
              Servicios integrales para cada etapa
            </h2>
          </div>
          <p className="reveal d2" style={{ color: 'var(--ink-2)', fontSize: '16px', maxWidth: '48ch' }}>
            Desde la búsqueda hasta el cierre de la operación, te acompañamos con profesionalismo
            y atención personalizada.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-md overflow-hidden"
          style={{ background: 'var(--line)', border: '1px solid var(--line)' }}
        >
          {servicios.map((s, i) => (
            <div
              key={i}
              className="reveal flex flex-col gap-[18px] p-10 min-h-[320px] transition-colors duration-300"
              style={{ background: 'var(--white)', transitionDelay: `${i * 0.06}s` }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = '#fafaf7')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--white)')}
            >
              <span
                className="w-12 h-12 border rounded-md grid place-items-center"
                style={{ borderColor: 'var(--line)', color: 'var(--green)' }}
              >
                {s.icon}
              </span>
              <h3 style={{ fontSize: '24px', fontWeight: 400, letterSpacing: '-0.01em' }}>{s.titulo}</h3>
              <p className="m-0" style={{ color: 'var(--ink-2)' }}>{s.desc}</p>
              <ul className="m-0 p-0 list-none grid gap-2.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm pl-[22px] relative"
                    style={{ color: 'var(--ink)' }}
                  >
                    <span
                      className="absolute left-0 top-[10px] w-2.5 h-px"
                      style={{ background: 'var(--gold)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className="self-start inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--green)', padding: 0, border: 'none', background: 'transparent' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--gold)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--green)')}
              >
                Saber más
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
