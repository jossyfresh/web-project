import type { Config } from 'tailwindcss'
import { useAppSelector } from './app/Redux/store';
import { store } from './app/Redux/store';

// const appStore = store.getState();
// const theme = appStore.themeReducer.theme;

const themeConfig = {
  background: {
    dark: "#fffffff",
  }
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    custom: {
      background: "#fffffff",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
