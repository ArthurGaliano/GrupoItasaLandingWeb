import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gn: {
          DEFAULT: '#0D4635',
          dark: '#0a3728',
        },
        gold: {
          DEFAULT: '#C9A84C',
          dark: '#b0913e',
        },
        cream: '#F5F4F0',
        ink: {
          DEFAULT: '#1A1A1A',
          2: '#6B6B6B',
        },
        line: '#E8E6E0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
      },
    },
  },
  plugins: [],
};

export default config;
