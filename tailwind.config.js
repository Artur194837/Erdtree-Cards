// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Passt auf Next.js App Router
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Wichtig, da Sie einen 'src' Ordner nutzen
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    textColor: theme => theme('colors'),
     textColor: {
       'erdtree-gold': '#FFFAA9'
     }
  },
  plugins: [],
}