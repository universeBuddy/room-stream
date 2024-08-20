import { fontFamily } from 'tailwindcss/defaultTheme'
import tailwindcssAnimate from 'tailwindcss-animate'
import { Config } from 'tailwindcss'

export const darkMode: Config['darkMode'] = ['class']
export const content: Config['content'] = ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}']
export const theme: Config['theme'] = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
    },
  },
  extend: {
    colors: {
      dark: {
        1: '#1C1F2E',
        2: '#161925',
      },
      blue: {
        1: '#0E78F9',
      },
      sky: {
        1: '#C9DDFF',
      }
    },
    backgroundImage: {
      hero: "url('/images/hero-background.png')",
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
}
export const plugins: Config['plugins'] = [tailwindcssAnimate]
