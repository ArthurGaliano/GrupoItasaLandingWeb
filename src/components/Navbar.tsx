'use client';
import { useState, useEffect } from 'react';

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'propiedades', label: 'Propiedades' },
  { id: 'contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'saturate(1.1) blur(10px)',
        borderBottom: scrolled ? '1px solid #E8E6E0' : '1px solid transparent',
      }}
    >
      <div className="max-w-container mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
        {/* Brand */}
        <a href="#inicio" onClick={go('inicio')} className="flex items-center gap-2.5">
          <span
            className="w-8 h-8 rounded grid place-items-center text-sm font-semibold text-white"
            style={{ background: 'var(--green)' }}
          >
            GI
          </span>
          <span className="text-base font-medium tracking-tight">
            Grupo Itasa
            <em className="not-italic font-light" style={{ color: 'var(--ink-2)' }}>
              {' '}· Inmobiliaria
            </em>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={go(l.id)}
              className="text-sm transition-colors duration-200 relative pb-0.5"
              style={{
                color: active === l.id ? 'var(--green)' : 'var(--ink)',
              }}
            >
              {l.label}
              {active === l.id && (
                <span
                  className="absolute left-0 right-0 -bottom-0.5 h-px"
                  style={{ background: 'var(--gold)' }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2.5">
          <a
            href="#contacto"
            onClick={go('contacto')}
            className="hidden md:inline-flex items-center justify-center px-[18px] py-[11px] text-[13px] font-medium rounded text-white transition-colors duration-200"
            style={{ background: 'var(--green)' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--green-700)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--green)')}
          >
            Contáctanos
          </a>
          <button
            className="md:hidden grid place-items-center w-10 h-10 rounded border"
            style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}
            aria-label="Menú"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t bg-white" style={{ borderColor: 'var(--line)' }}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={go(l.id)}
              className="block px-6 py-4 text-[15px] border-b"
              style={{ borderColor: 'var(--line)' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
