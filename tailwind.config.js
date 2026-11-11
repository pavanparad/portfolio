/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F0FA',
        lavender: {
          DEFAULT: '#DCCCF5',
          50: '#FAF7FD',
          100: '#F5F0FA',
          200: '#EAE0FF',
          300: '#DCCCF5',
          400: '#C4A7FF',
          500: '#A88BEA',
          600: '#8964DE',
          700: '#6C41CE',
          800: '#4D25A8',
          900: '#2C1368',
        },
        charcoal: '#17151B',
        gold: {
          DEFAULT: '#C9A45C',
          light: '#DFC8A4',
          dark: '#9E7E3C',
        },
        ivory: '#F6F1E9',
        dark: {
          DEFAULT: '#17151B',
          muted: '#272332',
          card: '#1F1B2A',
        },
        subtle: '#77717F',
        accent: '#A88BEA',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marqueeReverse 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at 30% 40%, rgba(220, 203, 250, 0.45), transparent 70%), radial-gradient(ellipse at 80% 20%, rgba(234, 224, 255, 0.6), transparent 60%)',
      }
    },
  },
  plugins: [],
}
