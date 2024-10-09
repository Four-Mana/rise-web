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
      colors: {
        'primary': {
          50: '#fef7db',
          100: '#fdefb4',
          200: '#fce572',
          300: '#fbd935',
          400: '#f3c912',
          500: '#eab308', // Base color
          600: '#ca9406',
          700: '#a27205',
          800: '#825903',
          900: '#5f4202',
        },
        'secondary': '#00c1ff',
        'accent': '#4e4637',
        'warning': '#fe8a7d'
      }
    },
  },
  plugins: [],
};
export default config;
