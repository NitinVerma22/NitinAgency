import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors: {
    primary: " #02577a",
    accent: "#02a9f7", // Bright blue
    background: "#d4f0fc",
    secondary: "#89d6fb", // Lighter blue
    dark: "#01303f", // Dark blue
    light: "#f8fafc", // Light background
  },
    },
  },
  plugins: [],
} satisfies Config;


// Hex	RGB
// #d4f0fc	(212,240,252)
// #89d6fb	(137,214,251)
// #02a9f7	(2,169,247)
// #02577a	(2,87,122)
// #01303f	(1,48,63)
