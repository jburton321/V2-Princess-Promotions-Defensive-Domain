import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0F1923', mid: '#1B2A4A' },
        blue: { DEFAULT: '#2E75B6', lt: '#5BA0D9', pl: '#EAF2FB' },
        gold: { DEFAULT: '#C4922A', pl: '#FBF3E2' },
        bg: { DEFAULT: '#F5F6F9', card: '#FFFFFF', 'card-alt': '#F0F2F7' },
        tx: { DEFAULT: '#171A20', '2': '#4A4F5C', '3': '#8B8F9A' },
        bdr: { DEFAULT: '#E2E5EC' },
        status: {
          red: '#C0392B',
          'red-pl': '#FDF0EF',
          grn: '#1A8B4C',
          'grn-pl': '#EEFBF3',
          amb: '#B7950B',
          'amb-pl': '#FEF9E7',
        },
      },
      borderRadius: { bento: '20px' },
      maxWidth: { content: '1100px' },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
