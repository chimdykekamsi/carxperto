/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'primary': {
         light:'#e6ebf0',
         lighthover: '#d9e2e9',
         lightactive: '#b0c2d2',
         normal: '#003b6d',
         normalhover: '#003562',
         normalactive: '#002f57',
         dark:'#002c52',
         darkhover: '#002341',
         darkactive: '#001b31',
         darker: '#001526'
        },
        // Secondary colors
        'secondary': {
          light: '#e6f9f8',
          lighthover: '#d9f6f5',
          lightactive: '#b0edea',
          normal: '#00c6bc',
          normalhover: '#00b2a9',
          normalactive: '#009e96',
          dark: '#00958d',
          darkhover: '#007771',
          darkactive: '#005955',
          darker: '#004542'
        },
        // Accent colors
        'accent': {
          white: '#ffffff',
          whitehover: '#fffffd',
          whiteactive: '#fffef8',
          light: '#fffffd',
          lighthover: '#fffef8',
          lightactive: '#fffdf5',
          normal: '#fffefb',
          normalhover: '#fffdf6',
          normalactive: '#fffcf1',
          dark: '#fffef9'
        },
      },
    }
  },
  plugins: []
});
