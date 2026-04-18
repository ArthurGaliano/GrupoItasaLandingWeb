const celdas = [
  {
    num: '01',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3v6c0 4.5-3.5 8.4-8 9-4.5-.6-8-4.5-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    titulo: 'Confianza y Transparencia',
    desc: 'Cada operación respaldada por contratos claros, documentación verificada y comunicación honesta en todo momento.',
  },
  {
    num: '02',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    titulo: 'Experiencia en el Mercado',
    desc: 'Más de 5 años y un profundo conocimiento del mercado limeño y nacional, con red de contactos consolidada.',
  },
  {
    num: '03',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
      </svg>
    ),
    titulo: 'Agilidad en Procesos',
    desc: 'Optimizamos tiempos sin sacrificar rigurosidad, cerrando operaciones en el menor plazo posible.',
  },
  {
    num: '04',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3h8l4 4v14H7z" /><path d="M15 3v4h4" /><path d="M10 12h6M10 16h6M10 8h3" />
      </svg>
    ),
    titulo: 'Respaldo Jurídico',
    desc: 'Equipo de abogados especializados que garantiza la seguridad legal de cada transacción hasta la firma final.',
  },
];

export default function PorQueElegirnos() {
  return (
    <section id="diferencial" className="py-24" style={{ background: 'var(--cream)' }}>
      <div className="max-w-container mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 md:gap-10 items-end mb-14">
          <div>
            <span className="eyebrow reveal">Nuestro diferencial</span>
            <h2 className="mt-3.5 reveal d1" style={{ fontSize: 'clamp(30px,4vw,46px)', lineHeight: 1.1 }}>
              ¿Por qué elegir Grupo Itasa?
            </h2>
          </div>
          <p className="reveal d2" style={{ color: 'var(--ink-2)', fontSize: '16px', maxWidth: '48ch' }}>
            Nos distingue la combinación de experiencia humana, rigor profesional y compromiso
            genuino con cada cliente.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-md overflow-hidden"
          style={{ background: 'var(--line)', border: '1px solid var(--line)' }}
        >
          {celdas.map((c, i) => (
            <div
              key={i}
              className="reveal flex flex-col gap-3.5 p-7 min-h-[240px]"
              style={{ background: 'var(--white)', transitionDelay: `${i * 0.06}s` }}
            >
              <span
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: 'var(--gold)' }}
              >
                {c.num}
              </span>
              <span style={{ color: 'var(--green)' }}>{c.icon}</span>
              <h3 style={{ fontSize: '18px', fontWeight: 500, letterSpacing: '-0.01em' }}>
                {c.titulo}
              </h3>
              <p className="m-0 text-sm" style={{ color: 'var(--ink-2)' }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
