'use client';

const empresa = [
  { label: 'Nosotros', href: '#' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Propiedades', href: '#propiedades' },
  { label: 'Blog', href: '#' },
];

const serviciosLinks = [
  { label: 'Compra y Venta', href: '#servicios' },
  { label: 'Alquileres', href: '#servicios' },
  { label: 'Asesoría Legal', href: '#servicios' },
  { label: 'Inversiones', href: '#servicios' },
];

const contactoLinks = [
  { label: '+51 983 579 443', href: 'tel:+51942900207' },
  { label: 'contacto@grupoitasa.pe', href: 'mailto:contacto@grupoitasa.pe' },
  { label: 'San Isidro, Lima — Perú', href: '#' },
];

export default function Footer() {
  const scroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="pt-20 pb-8" style={{ background: 'var(--green)', color: 'rgba(255,255,255,0.85)' }}>
      <div className="max-w-container mx-auto px-6 md:px-10">
        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-12 pb-12 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.12)' }}
        >
          {/* Brand column */}
          <div>
            <a href="#inicio" onClick={scroll('#inicio')} className="flex items-center gap-2.5">
              <span
                className="w-8 h-8 rounded grid place-items-center text-sm font-semibold"
                style={{ background: 'var(--gold)', color: 'var(--green)' }}
              >
                GI
              </span>
              <span className="text-base font-medium tracking-tight text-white">
                Grupo Itasa
                <em className="not-italic font-light" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {' '}· Inmobiliaria
                </em>
              </span>
            </a>
            <p className="mt-[18px] text-sm max-w-[36ch]" style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Más de 12 años conectando personas con las propiedades que merecen, con transparencia
              y compromiso en cada paso.
            </p>
            {/* Social */}
            <div className="flex gap-2.5 mt-4">
              {[
                {
                  label: 'Instagram',
                  href: '#',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="4" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  label: 'Facebook',
                  href: '#',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.9 2-1.9h2V2.1C16.7 2 15.6 2 14.4 2 11.9 2 10 3.5 10 6.3V10H7v4h3v8z" />
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href: '#',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.8h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.06 1.39-2.06 2.83V21H9z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full grid place-items-center transition-all duration-200 text-white"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--gold)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--green)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-white mb-[18px]">
              Empresa
            </h4>
            <ul className="list-none m-0 p-0 grid gap-3">
              {empresa.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={l.href.startsWith('#') ? scroll(l.href) : undefined}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-white mb-[18px]">
              Servicios
            </h4>
            <ul className="list-none m-0 p-0 grid gap-3">
              {serviciosLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={scroll(l.href)}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-white mb-[18px]">
              Contacto
            </h4>
            <ul className="list-none m-0 p-0 grid gap-3">
              {contactoLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-wrap justify-between gap-3 pt-6 text-[13px]"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          <span>© {new Date().getFullYear()} Grupo Itasa. Todos los derechos reservados.</span>
          <div className="flex gap-5">
            <a
              href="#"
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)')}
            >
              Privacidad
            </a>
            <a
              href="#"
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)')}
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
