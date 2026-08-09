/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#0B0D10',
          light: '#F8FAFC',
        },
        surface: {
          dark: '#11151A',
          light: '#FFFFFF',
          elevatedDark: '#171B21',
          elevatedLight: '#F1F5F9',
        },
        border: {
          dark: 'rgba(255, 255, 255, 0.08)',
          light: 'rgba(0, 0, 0, 0.08)',
          darkHover: 'rgba(255, 255, 255, 0.16)',
          lightHover: 'rgba(0, 0, 0, 0.16)',
        },
        content: {
          primaryDark: '#F5F7FA',
          primaryLight: '#0F172A',
          secondaryDark: '#A5ACB8',
          secondaryLight: '#475569',
          mutedDark: '#6F7785',
          mutedLight: '#64748B',
        },
        accent: {
          blue: '#3B82F6',
          violet: '#8B5CF6',
          cyan: '#06B6D4',
          emerald: '#10B981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
