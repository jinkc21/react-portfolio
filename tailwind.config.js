/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class', // or 'media' or 'class
  theme: {
    extend: {
      fontFamily: {
        'permanent-marker-regular': ["Permanent Marker"],
      },
    },
  },
  plugins: [],
}

