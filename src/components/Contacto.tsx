'use client';
import { useState } from 'react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  tipo: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

const contactInfo = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4h3l2 5-2 1a12 12 0 006 6l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
      </svg>
    ),
    label: 'Teléfono',
    value: '+51 983 579 443',
    href: 'tel:+51983579443',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
      </svg>
    ),
    label: 'Email',
    value: 'contacto@grupoitasa.pe',
    href: 'mailto:contacto@grupoitasa.pe',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" /><circle cx="12" cy="10" r="2.2" />
      </svg>
    ),
    label: 'Dirección',
    value: 'Av. Javier Prado Este 1234, San Isidro, Lima',
    href: 'https://maps.google.com',
  },
];

export default function Contacto() {
  const [form, setForm] = useState<FormData>({
    nombre: '', email: '', telefono: '', tipo: '', mensaje: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.nombre.trim()) e.nombre = 'El nombre es requerido.';
    if (!form.email.trim()) {
      e.email = 'El email es requerido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Ingresa un email válido.';
    }
    if (!form.mensaje.trim()) e.mensaje = 'El mensaje es requerido.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ nombre: '', email: '', telefono: '', tipo: '', mensaje: '' });
    }, 1200);
  };

  const field = (key: keyof FormData) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value })),
  });

  const inputStyle = (err?: string): React.CSSProperties => ({
    width: '100%',
    padding: '13px 14px',
    border: `1px solid ${err ? '#b2453a' : 'var(--line)'}`,
    borderRadius: '4px',
    background: 'var(--white)',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    fontFamily: 'inherit',
    color: 'var(--ink)',
  });

  return (
    <section id="contacto" className="py-24">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
          {/* Info */}
          <div>
            <span className="eyebrow reveal">Hablemos</span>
            <h2 className="mt-3.5 mb-5 reveal d1" style={{ fontSize: 'clamp(30px,4vw,46px)', lineHeight: 1.1 }}>
              Estamos listos para ayudarte
            </h2>
            <p className="reveal d2" style={{ color: 'var(--ink-2)', maxWidth: '38ch' }}>
              Cuéntanos lo que buscas y un asesor especializado se comunicará contigo
              en menos de 24 horas.
            </p>

            <ul className="list-none m-0 p-0 mt-8 grid gap-[22px] reveal d3">
              {contactInfo.map((c, i) => (
                <li key={i} className="grid gap-3.5 items-start" style={{ gridTemplateColumns: '40px 1fr' }}>
                  <span
                    className="w-10 h-10 border rounded-md grid place-items-center"
                    style={{ borderColor: 'var(--line)', color: 'var(--green)' }}
                  >
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest font-medium mb-0.5 m-0" style={{ color: 'var(--ink-2)' }}>
                      {c.label}
                    </p>
                    <a href={c.href} className="text-[15px]" style={{ color: 'var(--ink)' }}>
                      {c.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div
            className="reveal d2 rounded-md p-8 md:p-10 border"
            style={{ background: 'var(--white)', borderColor: 'var(--line)' }}
          >
            {sent && (
              <div
                className="flex gap-4 items-start p-5 rounded-md mb-5 border"
                style={{ background: '#f0f7f3', borderColor: '#cfe3d8' }}
              >
                <span
                  className="w-9 h-9 rounded-full grid place-items-center flex-shrink-0"
                  style={{ background: 'var(--green)', color: 'white' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 6" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-[15px] font-medium m-0 mb-1">¡Mensaje enviado!</h4>
                  <p className="m-0 text-sm" style={{ color: 'var(--ink-2)' }}>
                    Un asesor se comunicará contigo pronto. Gracias por contactarnos.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {/* Nombre */}
                <div className="grid gap-2">
                  <label className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--ink-2)' }}>
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    placeholder="Juan Pérez"
                    style={inputStyle(errors.nombre)}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--green)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(13,70,53,0.08)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = errors.nombre ? '#b2453a' : 'var(--line)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    {...field('nombre')}
                  />
                  {errors.nombre && <span className="text-[12px]" style={{ color: '#b2453a' }}>{errors.nombre}</span>}
                </div>

                {/* Email */}
                <div className="grid gap-2">
                  <label className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--ink-2)' }}>
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    placeholder="juan@ejemplo.com"
                    style={inputStyle(errors.email)}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--green)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(13,70,53,0.08)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = errors.email ? '#b2453a' : 'var(--line)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    {...field('email')}
                  />
                  {errors.email && <span className="text-[12px]" style={{ color: '#b2453a' }}>{errors.email}</span>}
                </div>

                {/* Teléfono */}
                <div className="grid gap-2">
                  <label className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--ink-2)' }}>
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+51 999 000 000"
                    style={inputStyle()}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--green)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(13,70,53,0.08)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--line)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    {...field('telefono')}
                  />
                </div>

                {/* Tipo */}
                <div className="grid gap-2">
                  <label className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--ink-2)' }}>
                    Me interesa
                  </label>
                  <select
                    style={{ ...inputStyle(), appearance: 'auto' }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--green)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(13,70,53,0.08)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--line)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    {...field('tipo')}
                  >
                    <option value="">Seleccionar...</option>
                    <option>Comprar una propiedad</option>
                    <option>Alquilar una propiedad</option>
                    <option>Vender mi propiedad</option>
                    <option>Asesoría legal</option>
                    <option>Inversión inmobiliaria</option>
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div className="grid gap-2 mb-6">
                <label className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--ink-2)' }}>
                  Mensaje *
                </label>
                <textarea
                  placeholder="Cuéntanos qué estás buscando..."
                  style={{ ...inputStyle(errors.mensaje), minHeight: '120px', resize: 'vertical' }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--green)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(13,70,53,0.08)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = errors.mensaje ? '#b2453a' : 'var(--line)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  {...field('mensaje')}
                />
                {errors.mensaje && <span className="text-[12px]" style={{ color: '#b2453a' }}>{errors.mensaje}</span>}
              </div>

              <div className="flex flex-wrap gap-4 items-center justify-between">
                <p className="text-[12px] m-0" style={{ color: 'var(--ink-2)', maxWidth: '36ch' }}>
                  Al enviar, aceptas que nos comuniquemos contigo para atender tu consulta.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium rounded text-white transition-colors duration-200 disabled:opacity-70"
                  style={{ background: 'var(--green)', minWidth: '160px' }}
                  onMouseEnter={(e) => !loading && ((e.currentTarget as HTMLButtonElement).style.background = 'var(--green-700)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'var(--green)')}
                >
                  {loading ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
