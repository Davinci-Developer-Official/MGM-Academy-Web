import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");


const config: Config = {
  darkMode: 'class', // Enables class-based dark mode

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("daisyui"),
    //require('tailwind-scrollbar-hide'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
export default config
