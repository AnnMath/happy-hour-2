import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "roboto-mono": ['var(--font-roboto-mono)'],
      "montserrat": ['var(--montserrat)'],
      "cabin": ['var(--font-cabin)']
    },
    extend: {
      colors: {
        "deep-blue": "oklch(var(--color-deep-blue) / <alpha-value>)",
        "slate-blue": "oklch(var(--color-slate-blue) / <alpha-value>)",
        "wattle": {
          50: "var(--color-wattle-50)",
          100: "var(--color-wattle-100)",
          200: "var(--color-wattle-200)",
          300: "var(--color-wattle-300)",
          400: "var(--color-wattle-400)",
          500: "var(--color-wattle-500)",
          600: "var(--color-wattle-600)",
          700: "var(--color-wattle-700)",
          800: "var(--color-wattle-800)",
          900: "var(--color-wattle-900)",
          950: "var(--color-wattle-950)",
        },
        "persian-pink": {
          50: "var(--color-persian-pink-50)",
          100: "var(--color-persian-pink-100)",
          200: "var(--color-persian-pink-200)",
          300: "var(--color-persian-pink-300)",
          400: "var(--color-persian-pink-400)",
          500: "var(--color-persian-pink-500)",
          600: "var(--color-persian-pink-600)",
          700: "var(--color-persian-pink-700)",
          800: "var(--color-persian-pink-800)",
          900: "var(--color-persian-pink-900)",
          950: "var(--color-persian-pink-950)",
        }
      },
      boxShadow: {
        "solid": "var(--shadow-solid)",
        "solid-big": "var(--shadow-solid-big)"
      },
    },
    
  },
  plugins: [],
} satisfies Config;
