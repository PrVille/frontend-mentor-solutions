/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        html: "#6abecd",
        css: "#3e54a3",
        js: "#cf6390",
        api: "#aad742",
        newbie: "#6abecd",
        junior: "#aad742",
        intermediate: "#f1b604",
        advanced: "#f48925",
        guru: "#ed2c49",
        tag: "#3e54a3",
      },
    },
  },
  plugins: [],
}
