/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        // primary: '#78716c',
        primary: "#000000",
        secondary: "#94a3b8",
        dark: "#121212",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
