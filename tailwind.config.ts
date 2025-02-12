import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        screens: {
          '2xl': '1280px',
        },
      },
      fontFamily: {
        archivo: 'var(--font-archivo)',
      },
      colors: {
        gray: {
          101: 'var(--color-stroke-tertiary)',
          150: 'var(--color-surface-secondary)',
          450: 'var(--color-stroke-secondary)',
          650: 'var(--color-cta-fill-primary)',
          750: 'var(--color-text-primary)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
