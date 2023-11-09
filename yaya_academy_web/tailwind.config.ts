import type { Config } from 'tailwindcss'

const themeConfig = {
  background: {
    dark: "#00171f",
    light: "#ffffff"
  },
} as const;


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: themeConfig.background,
      }
    },
  },
  plugins: [],
}
export default config
