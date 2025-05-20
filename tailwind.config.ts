import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "primary-dark": "var(--primary-dark)",
        white: "var(--white)",
        black: "var(--black)",
        textLight: "var(--text-light)",
        background: "var(--bg-color)",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat), sans-serif",
      },
      animation: {
        loader: "loader 2s linear infinite",
      },
      keyframes: {
        loader: {
          "0%": {
            left: "-40px",
          },
          "100%": {
            left: "105%",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
