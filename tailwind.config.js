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
        "vts-bg": "hsl(var(--vts-bg))",
        "vts-surface": "hsl(var(--vts-surface))",
        "vts-text": "hsl(var(--vts-text))",
        "vts-muted": "hsl(var(--vts-muted))",
        "vts-border": "hsl(var(--vts-border))",
        "vts-accent": "hsl(var(--vts-accent))",
        "vts-accentHover": "hsl(var(--vts-accent-hover))",
      },
    },
  },
  plugins: [],
};