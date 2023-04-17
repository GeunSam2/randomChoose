/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rampart: ["Rampart", "cursive"],
        righteous: ["Righteous", "cursive"],
        nanumBGothic: ["NanumBarunGothic", "sans-serif"],
        nanumBGothicB: ["NanumBarunGothicBold", "sans-serif"],
        nanumBGothicL: ["NanumBarunGothicLight", "sans-serif"],
        openSans: ["OpenSans", "sans-serif"],
        openSansItalic: ["OpenSansItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
}
