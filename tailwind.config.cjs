/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "vts-bg": "var(--vts-bg)",
        "vts-surface": "var(--vts-surface)",
        "vts-text": "var(--vts-text)",
        "vts-muted": "var(--vts-muted)",
        "vts-border": "var(--vts-border)",
        "vts-accent": "var(--vts-accent)",
        "vts-accentHover": "var(--vts-accent-hover)",
      },
    },
  },
  plugins: [],
};