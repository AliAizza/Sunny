/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lineYellow: '#FAD400',
        lineRed: '#FE7766',
        cherryTitle: '#24554A',
        cherryParagraph: '#3E7467',
        orangeTitle: '#052C3B',
        orangeParagraph: '#19536C',
        clientsTitle: '#A7AAAD',
        clientsFeedbacks: '#5B636D',
        clientsNames: '#24303E',
        footerBackground: '#90D4C6',
        footerText: '#458D7E',
        fadedWhite: 'rbga(255,255,255,0.2537)',
        textGrey: '#808397',
        menuBackground: '#FFFCF8',
        buttonYellow: '#FBD600',
      },
      backgroundImage: {
        desktopHero: "url('../public/assets/desktop/image-header.jpg')",
        cherryBackground: "url('../public/assets/desktop/image-graphic-design.jpg')",
        orangeBackground: "url('../public/assets/desktop/image-photography.jpg')",
        milkBackground: "url('../public/assets/desktop/image-gallery-milkbottles.jpg')",
        orangeeBackground: "url('../public/assets/desktop/image-gallery-orange.jpg')",
        coneBackground: "url('../public/assets/desktop/image-gallery-cone.jpg')",
        sugarBackground: "url('../public/assets/desktop/image-gallery-sugarcubes.jpg')",
        mobileHero: "url('../public/assets/mobile/image-header.jpg')",
        mobilecherryBackground: "url('../public/assets/mobile/image-graphic-design.jpg')",
        mobileorangeBackground: "url('../public/assets/mobile/image-photography.jpg')",
        mobilemilkBackground: "url('../public/assets/mobile/image-gallery-milkbottles.jpg')",
        mobileorangeeBackground: "url('../public/assets/mobile/image-gallery-orange.jpg')",
        mobileconeBackground: "url('../public/assets/mobile/image-gallery-cone.jpg')",
        mobilesugarBackground: "url('../public/assets/mobile/image-gallery-sugar-cubes.jpg')",
      },
      fontFamily: {
        body: ['Fraunces'],
        sec: ['Barlow'],
      },
      fontSize: {
        big: "3.5rem",
        '1.125rem': "1.125rem",
        '0.9375rem': "0.9375rem",
        '2.5rem': "2.5rem",
        '1.75rem': "1.75rem",
        '0.875rem': "0.875rem",
        '2rem': "2rem",
      },
      letterSpacing: {
        main: "0.54688rem",
        rev: "-0.00806rem",
        '1px': "1px",
        '0.25rem': "0.25rem",
      },
      spacing: {
        minusmid: "50%",
        '6.03rem': "6.03rem",
        '2.87rem': "2.87rem",
        '2.94rem': "2.94rem",
        '37.5rem': "37.5rem",
        '27.8125rem': "27.8125rem",
        '8.5625rem': "8.5625rem",
        'minus0.53rem': '-0.53rem',
        '0.75rem': "0.75rem",
        '3.69rem': "3.69rem",
        '1.7rem': "1.7rem",
        '21.1875rem': "21.1875rem",
        '21.875rem': "21.875rem",
        '4.2rem': "4.2rem",
        '0.56rem': "0.56rem",
        '22.5rem': "22.5rem",
        '27.9375rem': "27.9375rem",
        '4.5rem': "4.5rem",
        '90per': "90%",
        '5per': "5%",
        '7.5rem': "7.5rem",
        'minus20rem': "-20rem",
        '33.625rem': "33.625rem",
        '75rem': "75rem",
        '23.5rem': "23.5rem",
      },
      borderRadius: {
        '1.75rem': "1.75rem",
        '4.5rem': "4.5rem",
      },
      zIndex: {
        minus1: "-1",
      },
    },
    screens: {
      '1000': { 'max': '1000px' },
      '1150': {'max': '1150px'},
      'medium': { 'max': '850px' },
      '500': { 'max': '500px' },
      'small': {'max': '375px'},
    }
  },
  plugins: [],
};