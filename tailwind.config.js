/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1600px',
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
      },
      boxShadow: {
        'button-blue': '0px 3px 32px 0px rgba(36, 141, 238, 0.33)',
      },
      spacing: {
        '155': '155px',
        '307': '307px',
        '53': '53px',
      },
      colors: {
        customBlue: {
          100: '#AFDAED',
          500: '#84C6E2',
        },
      },
      borderRadius: {
        '15': '15px',
      },
      fontSize: {
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
