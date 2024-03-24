/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-1": '#ce6a6b',
        "c-2": '#4a919e',
        "c-3": '#212e53',
        "c-4": '#985277',
      },
      backgroundImage: {
        'img': "url('https://images.unsplash.com/photo-1707147231430-7870dda96138?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }
    },
  },
  plugins: [],
}