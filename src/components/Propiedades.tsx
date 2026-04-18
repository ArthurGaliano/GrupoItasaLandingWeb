'use client';
import { useState } from 'react';
import Image from 'next/image';
import propiedadesData from '@/data/propiedades.json';

interface Propiedad {
  id: number;
  nombre: string;
  tipo: string;
  distrito: string;
  precio: string;
  moneda: string;
  badge: string;
  badgeType: 'default' | 'gold';
  imagen: string;
  destacado: boolean;
}

const chips = ['Todos', 'En Venta', 'En Alquiler', 'Departamento', 'Casa', 'Oficina', 'Local Comercial'];

export default function Propiedades() {
  const [filtro, setFiltro] = useState('Todos');
  const [favs, setFavs] = useState<number[]>([]);

  const propiedades = propiedadesData as Propiedad[];

  const filtered = propiedades.filter((p) => {
    if (filtro === 'Todos') return true;
    if (filtro === 'En Venta') return p.badge === 'En Venta';
    if (filtro === 'En Alquiler') return p.badge === 'En Alquiler';
    return p.tipo === filtro;
  });

  const toggleFav = (id: number) =>
    setFavs((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section id="propiedades" className="py-24">
      <div className="max-w-container mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 md:gap-10 items-end mb-14">
          <div>
            <span className="eyebrow reveal">Portafolio</span>
            <h2 className="mt-3.5 reveal d1" style={{ fontSize: 'clamp(30px,4vw,46px)', lineHeight: 1.1 }}>
              Propiedades seleccionadas
            </h2>
          </div>
          <p className="reveal d2" style={{ color: 'var(--ink-2)', fontSize: '16px', maxWidth: '48ch' }}>
            Una selección curada de inmuebles en las mejores ubicaciones de Lima,
            verificados y listos para visitar.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2.5 mb-10 reveal">
          {chips.map((chip) => (
            <button
              key={chip}
              onClick={() => setFiltro(chip)}
              className="px-4 py-2 text-[13px] border rounded-full transition-all duration-200"
              style={{
                borderColor: filtro === chip ? 'var(--green)' : 'var(--line)',
                background: filtro === chip ? 'var(--green)' : 'transparent',
                color: filtro === chip ? 'white' : 'var(--ink-2)',
              }}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div
            className="text-center py-16 border border-dashed rounded-md"
            style={{ borderColor: 'var(--line)', color: 'var(--ink-2)' }}
          >
            No hay propiedades que coincidan con el filtro seleccionado.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className="reveal flex flex-col border rounded-md overflow-hidden transition-all duration-300"
                style={{
                  background: 'var(--white)',
                  borderColor: 'var(--line)',
                  transitionDelay: `${i * 0.06}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#d4d0c5';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--line)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden" style={{ background: 'var(--cream)' }}>
                  <Image
                    src={p.imagen}
                    alt={p.nombre}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Badge */}
                  <span
                    className="absolute top-3.5 left-3.5 px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-widest rounded-sm"
                    style={{
                      background: p.badgeType === 'gold' ? 'var(--gold)' : 'var(--white)',
                      color: p.badgeType === 'gold' ? 'white' : 'var(--green)',
                    }}
                  >
                    {p.badge}
                  </span>
                  {/* Fav button */}
                  <button
                    aria-label="Guardar propiedad"
                    onClick={() => toggleFav(p.id)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full grid place-items-center transition-colors duration-200"
                    style={{ background: 'rgba(255,255,255,0.92)' }}
                  >
                    {favs.includes(p.id) ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#C9A84C" stroke="#C9A84C" strokeWidth="1.4">
                        <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 7C19 16.5 12 21 12 21z" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 7C19 16.5 12 21 12 21z" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-2.5 p-[22px] pb-6 flex-1">
                  <p className="text-[13px]" style={{ color: 'var(--ink-2)' }}>{p.tipo}</p>
                  <h3 className="text-[18px] font-normal leading-snug" style={{ letterSpacing: '-0.01em' }}>
                    {p.nombre}
                  </h3>
                  <div
                    className="flex items-center justify-between gap-3 border-t pt-4 mt-1.5"
                    style={{ borderColor: 'var(--line)' }}
                  >
                    <div>
                      <small
                        className="block text-[11px] font-medium uppercase tracking-widest mb-0.5"
                        style={{ color: 'var(--ink-2)' }}
                      >
                        Precio
                      </small>
                      <span className="text-xl font-normal" style={{ letterSpacing: '-0.01em' }}>
                        {p.moneda.includes('/') ? '' : '$ '}
                        {p.precio}
                        {p.moneda.includes('/') ? ` ${p.moneda}` : ' USD'}
                      </span>
                    </div>
                    <span
                      className="text-[13px] inline-flex items-center gap-1.5"
                      style={{ color: 'var(--ink-2)' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" />
                        <circle cx="12" cy="10" r="2.2" />
                      </svg>
                      {p.distrito}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium rounded border transition-all duration-200"
            style={{ borderColor: 'var(--gold)', color: 'var(--green)' }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--gold)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'white';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--green)';
            }}
          >
            Consultar por otras propiedades
          </a>
        </div>
      </div>
    </section>
  );
}
