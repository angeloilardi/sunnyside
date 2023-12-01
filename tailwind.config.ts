import type { Config } from 'tailwindcss'

const config: Config = {
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
      colors: { 'bittersweet': { DEFAULT: '#fe7867', 100: '#470900', 200: '#8e1101', 300: '#d51a01', 400: '#fe3a20', 500: '#fe7867', 600: '#fe9385', 700: '#ffaea4', 800: '#ffc9c2', 900: '#ffe4e1' }, 'gold': { DEFAULT: '#fad400', 100: '#322a00', 200: '#645500', 300: '#967f00', 400: '#c8aa00', 500: '#fad400', 600: '#ffe02f', 700: '#ffe863', 800: '#ffef97', 900: '#fff7cb' }, 'brunswick_green': { DEFAULT: '#25564b', 100: '#07110f', 200: '#0f221e', 300: '#16332d', 400: '#1d453c', 500: '#25564b', 600: '#3c8c7b', 700: '#5cb9a5', 800: '#92d0c3', 900: '#c9e8e1' }, 'midnight_green': { DEFAULT: '#19536b', 100: '#051115', 200: '#0a212b', 300: '#0f3240', 400: '#144256', 500: '#19536b', 600: '#2882a9', 700: '#48aad4', 800: '#85c6e2', 900: '#c2e3f1' }, 'viridian': { DEFAULT: '#458c7e', 100: '#0e1c19', 200: '#1c3832', 300: '#29544c', 400: '#377065', 500: '#458c7e', 600: '#5eb09f', 700: '#86c3b7', 800: '#aed7cf', 900: '#d7ebe7' }, 'gunmetal': { DEFAULT: '#23303e', 100: '#070a0c', 200: '#0e1319', 300: '#151d25', 400: '#1c2632', 500: '#23303e', 600: '#415973', 700: '#6082a6', 800: '#95acc4', 900: '#cad5e1' }, 'charcoal': { DEFAULT: '#374350', 100: '#0b0d10', 200: '#151a20', 300: '#20282f', 400: '#2b353f', 500: '#374350', 600: '#54677c', 700: '#788da3', 800: '#a5b3c2', 900: '#d2d9e0' }, 'cool_gray': { DEFAULT: '#818498', 100: '#191a1f', 200: '#32343e', 300: '#4c4e5d', 400: '#65687b', 500: '#818498', 600: '#9a9cac', 700: '#b3b5c1', 800: '#cdced6', 900: '#e6e6ea' }, 'french_gray': { DEFAULT: '#a7abae', 100: '#212224', 200: '#424547', 300: '#62676b', 400: '#84898d', 500: '#a7abae', 600: '#b9bcbe', 700: '#cacdcf', 800: '#dcdedf', 900: '#edeeef' } }
    },
    fontFamily: {
      "barlow": "var(--font-barlow)",
      "fraunces": "var(--font-fraunces)",
    }
  },
  plugins: [],
}
export default config
