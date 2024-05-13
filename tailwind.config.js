/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'] // Ensure you have 'Ubuntu' loaded from Google Fonts in your HTML
    },
    fontWeight: {
      'semibold': '500',
      'bold':'700' // Overriding the default semibold weight
    }
  },
  },
  plugins: [require('daisyui'),],
  daisyui:{
    themes: ["light", "dark"],

  },
}

