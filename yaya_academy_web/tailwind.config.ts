import type { Config } from "tailwindcss";

// const appStore = store.getState();
// const theme = appStore.themeReducer.theme;

const themeConfig = {
  background: {
    dark: "#fffffff",
  },
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    truncate: {
      lines: {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        // Add more lines if needed
      },
    },
    custom: {
      background: "#fffffff",
      primaryColor: "#1478A4",
      bodyBg: "#F7FBFD",
      textColor: "#374379",
    },
    extend: {
      colors: {},
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        french: ["IM Fell French Canon", "serif"],
        DmSans: ["DM Sans"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
