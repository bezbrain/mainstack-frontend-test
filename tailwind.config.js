/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        iPad: "951px",
        iPadAir: "820px",
        surfaceDuo: "540px",
        iPhone: "435px",
        smallPhone: "330px",
      },
    },
  },
  plugins: [],
};
