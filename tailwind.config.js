/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        bg3: 'var(--bg3)',
        surface: 'var(--surface)',
        surface2: 'var(--surface2)',
        border: 'var(--border)',
        border2: 'var(--border2)',
        text: 'var(--text)',
        text2: 'var(--text2)',
        text3: 'var(--text3)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
        accent3: 'var(--accent3)',
        red: 'var(--red)',
        teal: 'var(--teal)',
        purple: 'var(--purple)',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      borderRadius: {
        card: '16px',
        card2: '24px',
      },
      boxShadow: {
        card: '0 20px 60px rgba(0,0,0,0.5)',
        glow: '0 4px 20px rgba(232,201,122,0.15)',
        'glow-lg': '0 8px 32px rgba(200,168,80,0.5)',
        'glow-xl': '0 10px 40px rgba(200,168,80,0.5)',
      },
      animation: {
        'loader-pulse': 'loaderPulse 1.5s ease-in-out infinite',
        'blink': 'blink 1.5s ease-in-out infinite',
        'blink-fast': 'blink 0.8s step-end infinite',
        'float': 'float1 4s ease-in-out infinite',
        'float-slow': 'float1 5s ease-in-out infinite',
        'orb-float': 'orbFloat 10s ease-in-out infinite',
        'orb-float-slow': 'orbFloat 13s ease-in-out infinite',
        'dot-pulse': 'dotPulse 3s ease-in-out infinite',
        'hero-reveal': 'heroReveal 1s cubic-bezier(0.4,0,0.2,1) both',
      },
      keyframes: {
        loaderPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(0.97)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        orbFloat: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(20px,-30px) scale(1.05)' },
          '66%': { transform: 'translate(-15px,20px) scale(0.95)' },
        },
        dotPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.3' },
        },
        heroReveal: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
