/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "rgba(255, 223, 77, 1)", // lighter shade
          DEFAULT: "rgb(255, 215, 0)", // main golden color
          dark: "rgba(204, 172, 0, 1)", // darker shade
        },
        secondary: {
          light: "rgba(211, 211, 211, 1)", // lighter shade
          DEFAULT: "rgb(192, 192, 192)", // main silver color
          dark: "rgba(169, 169, 169, 1)", // darker shade
        },
      },
    },
  },
  plugins: [],
};
