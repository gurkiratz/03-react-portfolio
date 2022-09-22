/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
      },
      fontFamily: ["Raleway", "sans-serif"],
      backgroundImage: {
        workImg: "url('./src/assets/workImg.jpeg')",
        realEstate: "url('./src/assets/realestate.jpg')",
      },
    },
  },
  plugins: [],
};
