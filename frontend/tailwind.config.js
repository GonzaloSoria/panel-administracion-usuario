/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'header-color': '#ffffff',
    },
    backgroundColor: {
      'header': '#67568c',
      'form': '#ff6e6c',
    }
  },
  plugins: [],
}

