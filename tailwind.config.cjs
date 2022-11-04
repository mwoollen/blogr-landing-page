/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "light-red": "hsl(356, 100%, 66%)",
        "very-light-red": "hsl(355, 100%, 74%)",
        "white": "hsl(0, 0%, 100%)",
        "grayish-blue": "hsl(240, 2%, 79%)",
        "very-dark-blue": "hsl(208, 49%, 24%)",
        "very-light-blue": "hsla(209, 12%, 34%, 1)",
        "very-dark-black-blue": "hsl(240, 10%, 16%)",
        "very-dark-gray-blue": "hsl(237, 17%, 21%)",
        "very-dark-desaturated-blue": "hsl(237, 23%, 32%)",
      },
      backgroundImage: {
        "desktop-pattern": "url('/bg-pattern-intro-desktop.svg'), linear-gradient(135deg, #FF8F71 0%, #FF3E55 100%)",
        "mobile-section-pattern": "url('/bg-pattern-circles.svg'), linear-gradient(135deg, #2D2E40 0%, #3F4164 100%)",
      },
      backgroundSize: {
        "desktop-pattern-size-desktop": "2500px, 100%",
        "desktop-pattern-size-mobile": "1600px, 100%",
        "mobile-section-pattern-size-desktop": "1014px, 100%",
        "mobile-section-pattern-size-mobile": "602px, 100%",
      },
      boxShadow: {
        "dropdown": "0px 20px 40px rgba(0, 0, 0, 0.243444)"
      },
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      }
    },
  },
  plugins: [],
}
