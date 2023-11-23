import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/Group.png')",
      },
      colors: {
        clientColor: "#4D9DE0",
        bgvipe: "#f97316",
      },
    },
  },
  plugins: [],
};
