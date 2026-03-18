import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base backgrounds
        blush: {
          50: "#fff0f3",
          100: "#ffccd5",
          200: "#ffb3c1",
          300: "#ff8fa3",
          400: "#ff758f",
          500: "#ff4d6d",
        },
        // Deep wine tones
        wine: {
          900: "#590d22",
          800: "#800f2f",
          700: "#a4133c",
          600: "#c9184a",
          500: "#ff4d6d",
        },
        // Neutrals
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      animation: {
        "line-draw": "lineDraw 1.5s ease forwards",
        "fade-up": "fadeUp 0.8s ease forwards",
        "mask-reveal": "maskReveal 1.2s ease forwards",
      },
      keyframes: {
        lineDraw: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        maskReveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.4em",
      },
    },
  },
  plugins: [],
};

export default config;
