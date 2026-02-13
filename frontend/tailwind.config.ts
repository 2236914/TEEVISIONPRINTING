import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [daisyui],
  daisyui: {
    darkTheme: 'light', // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
  },
  theme: {
    colors: {
      primaryT: '#FFCD00',
      secondaryT: '#231F20',
      white: '#FFFFFF',
      black: '#000000',
      background1: '#F6F7F9',
      background2: '#242323',
      background3: '#F1F0F5',
      background4: '#F5F5F5',
      background5: '#E7E8E3',
      productPriceColor: '#969292',
      priceMarkupIndicationBackground: '#ADD8E6', //blue
      clothingQuantityFromAndToIndicationBackground: '#CBC3E3', //purple
      numberOfColorsIndicationBackground: '#FFD580', //orange
      priceDataIndicationBackground: '#EDEDED', //gray
      activeNavigationItemBackground: '#F5C341',
      buttonBackgroundColor: '#F5C341',
      loadingColor: '#F5C341',
      borderColor: '#A9A9A9',
      primaryMinimalist: '#FCDC5C',
      closeButtonColor: '#F52F57',
      subLabelColor: '#6F6F6F',
      linkColor: '#0044CC',
      errorColor: '#CC183C',
      darkGrey: '#1E1D1D',
    },
    extend: {
      fontFamily: {
        // integralcf: ['var(--font-integralcf)'],
        // coolvetica: ['var(--font-coolvetica)'],
        // oswald: ['var(--font-oswald)'],
      },
      dropShadow: {
        glowRed: ['0 0 3px #CC183C'],
        glowGreen: ['0 0 3px #357A38'],
        bottomShadow: '2px 10px 45px rgba(0, 0, 0, 0.5)',
        videoShadow: '2px 30px 20px rgba(0, 0, 0, 0.5)',
        secondSectionTabBody: '2px 15px 45px rgba(0, 0, 0, 0.35)',
        secondSectionTab: '0px -10px 5px rgba(0, 0, 0, 0.2)',
        reviewCard: '0px 15px 45px rgba(0, 0, 0, 0.4)',
      },

      fontSize: {
        hero: '3.3rem',
        'hero-1_5xl': '3rem',
        'hero-xl': '2.8rem',
        'hero-md': '2.2rem',
        'hero-sm': '1.2rem',
        'hero-main-sm': '1.5rem',
        'hero-main-md': '2.5rem',
        body: '1.2rem',
        'body-sm': '0.9rem',
        'body-md': '1.5rem',
        button: '0.9rem',
        'button-md': '1.5rem',
        heroCard: '2.8rem',
        nestedTabs: '1.05rem',
        'nestedTabs-xl': '0.8rem',
        'nestedTabs-1_5xl': '0.9rem',
        navItem: '1.5rem',
        'navItem-md': '2.2rem',
        navSubItem: '0.9rem',
        'navSubItem-md': '1.2rem',
        cardHeading: '1rem',
        'cardHeading-sm': '0.9rem',
        'cardHeading-md': '1.5rem',
        h3: '2rem',
        'h3-md': '1.8rem',
        'h3-small': '1.3rem',
      },
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1025px',
        xl: '1280px',
        '1_5xl': '1450px',
        '2xl': '1536px',
        '3xl': '1740px', // Add custom 3xl breakpoint
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
};
export default config;
