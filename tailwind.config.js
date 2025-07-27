/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'fccac-purple': '#7C3AED',
        'fccac-teal': '#14B8A6',
        'fccac-gold': '#F59E0B',
      }
    },
  },
  plugins: [],
}
