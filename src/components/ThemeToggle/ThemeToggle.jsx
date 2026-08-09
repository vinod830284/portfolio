import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light theme"
      className="p-2 rounded-lg transition-all duration-300 text-slate-600 dark:text-[#A5ACB8] hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-[#171B21]/60 border border-slate-200 dark:border-white/10 hover:border-accent-blue/40"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600 hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}
