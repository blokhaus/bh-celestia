/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Customizing colors
      colors: {
        primary: {
          DEFAULT: '#00b8a5',
          light: '#00d9c0',
          dark: '#008e7d',
        },
        secondary: {
          DEFAULT: '#f09c47',
          light: '#f2b97a',
          dark: '#d17e2d',
        },
        dark: '#333',
        light: '#e2e9ed',
        pure: {
          white: '#ffffff',
          black: '#000000',
        },
        blue: {
          light: '#F5FAFA',
          dark: '#495369',
          darker: '#2E3A3A',
        }
      },
      // Customizing fonts
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        roboto: ['"Roboto Flex"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

