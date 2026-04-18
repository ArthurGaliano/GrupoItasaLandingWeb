export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51983579443"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed right-[22px] bottom-[22px] z-50 w-14 h-14 rounded-full grid place-items-center transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.04]"
      style={{ background: '#25D366', color: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.18)' }}
    >
      <span className="wa-pulse" />
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="relative z-10">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.92.56 3.81 1.62 5.42L2 22l4.8-1.26a9.86 9.86 0 005.24 1.52h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0012.04 2zm0 18.2h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-2.85.75.76-2.78-.2-.32a8.2 8.2 0 01-1.27-4.4c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 012.42 5.83c0 4.54-3.7 8.24-8.25 8.24zm4.53-6.17c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12s-.63.8-.78.96c-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.83-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.42.06-.65.31s-.85.83-.85 2.03.87 2.35 1 2.52c.12.17 1.71 2.62 4.14 3.68.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.57.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
      </svg>
      <span
        className="absolute right-[68px] top-1/2 -translate-y-1/2 bg-white text-[13px] whitespace-nowrap px-3 py-2 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ color: 'var(--ink)', boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}
      >
        ¿En qué podemos ayudarte?
      </span>
    </a>
  );
}
