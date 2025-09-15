/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom color palette for the salon theme
      colors: {
        "brand-primary": "#A0522D", // Sienna
        "brand-secondary": "#D2B48C", // Tan
        cream: {
          100: "#FFF8F0",
          200: "#FDF5E6",
        },
        gold: "#D1B59A",
        "dark-text": "#36241C",
      },
      // Define font families for easy use with Tailwind utilities
      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      // Custom transition for smooth animations
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
