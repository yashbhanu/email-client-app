/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        accent: "#E54065",
        background: "#F4F5F9",
        borderColor: "#CFD2DC",
        textColor: "#636363",
        filterBtn: "#E1E4EA",
        readBg: "#F2F2F2",
      },
    },
  },
  plugins: [],
}

