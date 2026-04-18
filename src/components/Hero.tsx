'use client';

const stats = [
  { num: '5+', label: 'Años de experiencia' },
  { num: '200+', label: 'Propiedades gestionadas' },
  { num: '99%', label: 'Clientes satisfechos' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[640px] flex flex-col text-white overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(13,70,53,0.55) 0%, rgba(13,70,53,0.75) 100%), url(https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1800&q=80) center/cover no-repeat',
        }}
      />

      {/* Main content — crece para empujar el stats bar al fondo */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-container mx-auto px-6 md:px-10 py-24">
          <span className="eyebrow on-dark">Inmobiliaria de confianza</span>
          <h1
            className="mt-5 max-w-[16ch] leading-[1.05]"
            style={{
              fontSize: 'clamp(38px, 6vw, 68px)',
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            Tu propiedad ideal,{' '}
            <em className="not-italic" style={{ color: 'var(--gold)', fontWeight: 300 }}>
              nuestra misión
            </em>
          </h1>
          <p
            className="mt-5 mb-9"
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '17px',
              maxWidth: '52ch',
              lineHeight: 1.6,
            }}
          >
            Especialistas en compra, venta y alquiler de propiedades en Lima y el Perú.
            Respaldando las decisiones más importantes de nuestros clientes.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#propiedades"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded text-white transition-colors duration-200"
              style={{ background: 'var(--green)' }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver propiedades
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded border transition-all duration-200"
              style={{ borderColor: 'rgba(255,255,255,0.7)', color: 'white' }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'white';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--green)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = 'white';
              }}
            >
              Hablar con un asesor
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar — siempre al fondo, fuera del flex-1 */}
      <div
        className="relative border-t"
        style={{
          borderColor: 'rgba(255,255,255,0.18)',
          background: 'linear-gradient(180deg, rgba(13,70,53,0) 0%, rgba(10,55,40,0.35) 100%)',
        }}
      >
        <div className="max-w-container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-3">
            {stats.map((s, i) => (
              <div
                key={i}
                className="py-5 flex flex-col gap-1 border-l px-3 sm:px-6 first:border-l-0 first:pl-0"
                style={{ borderColor: 'rgba(255,255,255,0.12)' }}
              >
                <span
                  className="font-light"
                  style={{ fontSize: 'clamp(20px, 4vw, 28px)', letterSpacing: '-0.02em' }}
                >
                  {s.num}
                </span>
                <span
                  className="uppercase tracking-wider leading-tight"
                  style={{ fontSize: 'clamp(9px, 1.8vw, 12px)', color: 'rgba(255,255,255,0.7)' }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
