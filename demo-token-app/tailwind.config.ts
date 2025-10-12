import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--global-color-primary)',
        'on-primary': 'var(--global-color-on-primary)',
        background: 'var(--global-color-background)',
        foreground: 'var(--global-color-foreground)',
      },
    },
  },
  plugins: [],
}

export default config
