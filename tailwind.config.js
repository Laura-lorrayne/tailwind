/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        laura:"#8257e6",
        primary: "#3490dc",
        secondary: "#f1c40f",
        tertiary: "#e74c3c",
        quaternary: "#2ecc71",
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        md: "720px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}