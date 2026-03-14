/** @type {import('tailwindcss').Config} */
export default {
  // ── Content paths — Tailwind scans these files for class names ──────────
  // If a class is not found here, it will be purged from the final CSS build
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {

      // ── Brand Colors ────────────────────────────────────────────────────
      // Usage: text-crimson, bg-navy, border-gold, etc.
      colors: {
        crimson: {
          DEFAULT: '#9B1C1C',
          dark:    '#7A1515',
          light:   '#C0392B',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#E8C97A',
        },
        navy: {
          DEFAULT: '#0F1C3F',
          light:   '#1A2D5A',
        },
        offwhite: '#FAF8F4',
        warm:     '#F0ECE4',
        dark:     '#1A1510',
        mid:      '#4A3F35',
        light:    '#8A7F75',
      },

      // ── Font Families ───────────────────────────────────────────────────
      // Usage: font-display, font-body
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
      },

      // ── Font Sizes ──────────────────────────────────────────────────────
      fontSize: {
        '2xs': ['10px', { lineHeight: '1.4' }],
        'xs':  ['11px', { lineHeight: '1.5' }],
        'sm':  ['13px', { lineHeight: '1.6' }],
        'base':['15px', { lineHeight: '1.7' }],
        'lg':  ['17px', { lineHeight: '1.7' }],
        'xl':  ['19px', { lineHeight: '1.4' }],
        '2xl': ['22px', { lineHeight: '1.3' }],
        '3xl': ['28px', { lineHeight: '1.2' }],
        '4xl': ['36px', { lineHeight: '1.15'}],
        '5xl': ['44px', { lineHeight: '1.1' }],
        '6xl': ['56px', { lineHeight: '1.05'}],
        '7xl': ['72px', { lineHeight: '1.0' }],
      },

      // ── Box Shadows ─────────────────────────────────────────────────────
      // Usage: shadow-sm, shadow-card, shadow-crimson, shadow-gold
      boxShadow: {
        sm:      '0 2px 8px rgba(15,28,63,0.08)',
        md:      '0 8px 32px rgba(15,28,63,0.12)',
        lg:      '0 20px 60px rgba(15,28,63,0.18)',
        card:    '0 8px 32px rgba(15,28,63,0.12)',
        crimson: '0 8px 24px rgba(155,28,28,0.35)',
        gold:    '0 8px 24px rgba(201,168,76,0.40)',
      },

      // ── Border Radius ───────────────────────────────────────────────────
      borderRadius: {
        DEFAULT: '6px',
        md:      '12px',
        lg:      '20px',
        xl:      '24px',
      },

      // ── Spacing extras ──────────────────────────────────────────────────
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },

      // ── Max Width ───────────────────────────────────────────────────────
      maxWidth: {
        '8xl': '1200px',
      },

      // ── Custom Animations ───────────────────────────────────────────────
      // Usage: animate-fade-up, animate-fade-in, animate-slide-in-right, animate-shimmer
      animation: {
        'fade-up':        'fadeUp 0.7s ease forwards',
        'fade-in':        'fadeIn 0.6s ease forwards',
        'slide-in-right': 'slideInRight 0.4s ease forwards',
        'shimmer':        'shimmer 1.4s ease infinite',
        'pulse-ring':     'pulseRing 1.5s ease infinite',
        'scroll-line':    'scrollLine 1.5s ease infinite',
        'spin-slow':      'spin 1s linear infinite',
      },

      // Keyframes are defined in index.css as raw @keyframes
      // and referenced here by name so Tailwind knows about them
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)'    },
        },
        shimmer: {
          '0%':   { backgroundPosition: '200% 0'  },
          '100%': { backgroundPosition: '-200% 0' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)',   opacity: '0.8' },
          '100%': { transform: 'scale(1.5)', opacity: '0'   },
        },
        scrollLine: {
          '0%, 100%': { transform: 'scaleY(1)',   opacity: '1'   },
          '50%':      { transform: 'scaleY(0.5)', opacity: '0.5' },
        },
      },

      // ── Transition Timing ───────────────────────────────────────────────
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      transitionDuration: {
        DEFAULT: '300ms',
      },

      // ── Background Size (for shimmer animation) ─────────────────────────
      backgroundSize: {
        '200': '200% 100%',
      },
    },
  },

  plugins: [],
};