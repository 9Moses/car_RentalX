/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // Define custom breakpoints for mobile screens
        sm: "576px", // Small screens
        md: "768px", // Medium screens
        lg: "992px", // Large screens
        xl: "1200px", // Extra-large screens
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        // Define custom font sizes
        xs: "480px",
        ss: "620px",
        sm: "590px",
        md: "769px",
        lg: "1200px",
        xl: "1700px", // Extra large
        "2xl": "1.5rem", // 2x large
        "3xl": "1.875rem", // 3x large
        "4xl": "2.25rem", // 4x large
        "5xl": "3rem", // 5x large
      },
      colors: {
        // Define custom colors
        primary: "#F5F5F6",
        secondary: "#A9AAB7",
        tertiary: "#70778E",
        success: "#38c172",
        warning: "#ffed4a",
        error: "#e3342f",
        black: "#100E0F",
        white: "#fff",
        d_orange: "#F7240E",
        gray: "#57535E",
      },
    },
  },
  plugins: [],
};
