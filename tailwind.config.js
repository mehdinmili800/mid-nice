/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      fontFamily:{
        'keania-one': ['Keania One'],
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'sm-max': {'max': '640px'},
      // => @media (max-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'md-max': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'lg': '1089px',
      // => @media (min-width: 1024px) { ... }
      'lg-max': {'max': '1089px'},
      // => @media (max-width: 1044px) { ... }

      'xl': '1382px',
      // => @media (min-width: 1280px) { ... }
      'xl-max': {'max': '1382px'},
      // => @media (max-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
      '2xl-max': {'max': '1536px'},
      // => @media (max-width: 1536px) { ... }
      
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}

