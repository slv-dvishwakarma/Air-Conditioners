import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#131921",
        "ternary": "#E6E6E6",
        "paragraph": "#565959",
        "accentColor": "#FF8500",
        'blue': '#0000FF',
        'green': '#008000',
        'red': '#ff0000',
      },
      keyframes: {
        slideInDown: {
          from: {
            transform: 'translate3d(0, -100%, 0)',
            visibility: 'visible',
          },
          to: {
            transform: 'translateZ(0)',
          },
        },
        slideIn: {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(-20%)',
          },
        },
        slideOut: {
          from: {
            transform: 'translateX(-20%)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        animateSlideInDown: 'slideInDown 1s ease',
        animateslideIn: 'slideIn 1s ease',
        animateslideOut: 'slideOut 1s ease',
      },
    },
  },
  plugins: [],
};
export default config;
