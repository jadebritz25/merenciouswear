import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        gold: '#C9A96E',
        'gold-dark': '#A8874A',
        ink: '#0A0A0A',
      },
      fontFamily: {
        heading: ['var(--font-bodoni)', 'Georgia', 'serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
