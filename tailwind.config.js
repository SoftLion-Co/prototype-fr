/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '15px',
          'sm': '15px',
          'md': '30px',
          'lg': '30px',
          'xl': '50px',
          '2xl': '100px',
          '3xl': '100px',
        },
      },
      screens: {
        sm: 'none',  // Додайте значення для малих екранів (розмір >= 640px)
        md: 'none', 
        lg: 'none', 
        xl: 'none', 
        '2xl': 'none' 
      },
      fontFamily: {
        besley: ['Besley', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'button-blue-gradient': 'linear-gradient(139deg, #AFDAED 0%, #84C6E2 100%)',
        'cookies-gradient': 'radial-gradient(114.26% 136.20% at 100.00% 100.00%, rgba(160, 24, 155, 0.00) 0%, rgba(160, 24, 155, 0.11) 50%, rgba(133, 0, 127, 0.05) 100%)',
        'technology-card-gradient': 'radial-gradient(148.72% 141.42% at 0.00% 0%, rgba(19, 235, 144, 0.08) 0%, rgba(246, 205, 245, 0.23) 41.46%, rgba(175, 218, 237, 0.24) 100%)',
      },
      boxShadow: {
        'button-blue': '0px 3px 32px 0px rgba(36, 141, 238, 0.33)',
        'button-white': '5px 6px 12px 0px rgba(0, 0, 0, 0.15)',
        'technology-card': '0.7506487369537354px 2.251946210861206px 3.0025949478149414px 0px rgba(0, 0, 0, 0.25)',
      },
      spacing: {
        '53': '53px',
        '115': '115px',
        '120': '120px',
        '155': '155px',
        '307': '307px',
      },
      colors: {
        buttonBlue: {
          100: '#AFDAED',
          500: '#84C6E2',
        },
        buttonWhite: 'rgba(242, 212, 239, 0.07)',
        heroTitle: '#2B2B2C;',
        heroTitleBlue: '#27B7FC',
        headingBlue: '#308BB7',
      },
      borderRadius: {
        '15': '15px',
      },
      fontSize: {
        '7': '7px',
        '10': '10px',
        '15': '15px',
        '7.294': '7.294px',
      },
      padding: {
        '19': '19px',
        '35': '35px',
      },
      lineHeight: {
        '151': '151.682%',
      },
      letterSpacing: {
        '0.219': '0.219px',
      },
    },
  },
  plugins: [],
};
