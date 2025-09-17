
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0e3085",
          gold: "#cc9966",
          sage: "#669966"
        }
      },
      borderRadius: { '2xl': '1.25rem' },
      boxShadow: { soft: "0 10px 25px rgba(0,0,0,0.08)" }
    },
  },
  plugins: [],
}
