import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light theme"
      className="p-2 rounded-lg transition-all duration-300 text-content-secondaryDark hover:text-content-primaryDark dark:text-content-secondaryDark dark:hover:text-content-primaryDark light:text-slate-600 light:hover:text-slate-900 bg-surface-elevatedDark/40 dark:bg-surface-elevatedDark/40 light:bg-slate-100 border border-border-dark dark:border-border-dark light:border-slate-200 hover:border-accent-blue/40"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600 hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}
