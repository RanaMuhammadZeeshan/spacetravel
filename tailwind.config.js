/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Bellefair: ['Bellefair', 'serif'],
        barlow: ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        primary: '#0B0D17',
        secondary: '#D0D6F9',
        tertiary: '#FFF',
      },
      backgroundImage: {
        'image-mobile':
          "url('/src/assets/images/home/background-home-mobile.jpg')",
        'image-tablet':
          "url('/src/assets/images/home/background-home-tablet.jpg')",
        'image-desktop':
          "url('/src/assets/images/home/background-home-desktop.jpg')",
        'image-destination-mobile':
          "url('/src/assets/images/destination/background-destination-mobile.jpg')",
        'image-destination-tablet':
          "url('/src/assets/images/destination/background-destination-tablet.jpg')",
        'image-destination-desktop':
          "url('/src/assets/images/destination/background-destination-desktop.jpg')",
        'image-crew-mobile':
          "url('/src/assets/images/crew/background-crew-mobile.jpg')",
        'image-crew-tablet':
          "url('/src/assets/images/crew/background-crew-tablet.jpg')",
        'image-crew-desktop':
          "url('/src/assets/images/crew/background-crew-desktop.jpg')",
        'image-technology-mobile':
          "url('/src/assets/images/technology/background-technology-mobile.jpg')",
        'image-technology-tablet':
          "url('/src/assets/images/technology/background-technology-tablet.jpg')",
        'image-technology-desktop':
          "url('/src/assets/images/technology/background-technology-desktop.jpg')",
      },
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}
