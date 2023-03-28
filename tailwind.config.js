/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    neumorphismSize: {
      xs: "0.05em",
      sm: "0.1em",
      default: "0.2em",
      lg: "0.4em",
      xl: "0.8em",
    },
    neumorphismColor: {
      red: {
        100: "#FBEBE9",
        200: "#F5CEC7",
        // ...
      },
    },
  },
  plugins: [require("tailwindcss-neumorphism")],
  variants: {
    neumorphismFlat: ["responsive"],
    neumorphismConcave: false,
    neumorphismConvex: ["responsive", "hover"],
    neumorphismInset: ["focus", "active"],
  },
};
