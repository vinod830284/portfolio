import { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2 } from 'lucide-react';
import { Button } from '../Button/Button';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { socialLinks } from '../../data/socialLinks';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const navItems = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar({ theme, toggleTheme, onOpenCmdPalette }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map((item) => item.id), 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-3 glass-nav shadow-lg' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-blue to-accent-violet flex items-center justify-center text-white font-bold shadow-glow-blue group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-wider text-slate-900 dark:text-[#F5F7FA] group-hover:text-accent-blue transition-colors">
              VINOD KUMAR
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-[#6F7785] tracking-tight -mt-0.5">
              React Native Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-600 dark:text-[#A5ACB8] hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet opacity-90 -z-10 shadow-sm" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Items: Command Palette, Theme Toggle, View Resume */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={onOpenCmdPalette}
            title="Press Cmd+K to open Quick Search"
            className="px-2.5 py-1.5 rounded-xl text-xs font-mono bg-slate-100 dark:bg-[#171B21] text-slate-600 dark:text-[#A5ACB8] border border-slate-200 dark:border-white/10 hover:border-accent-blue/40 hover:text-accent-blue transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>⌘K</span>
            <span className="text-[10px] text-slate-400">Search</span>
          </button>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Button
            href={socialLinks.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            icon={FileText}
          >
            View Resume
          </Button>
        </div>

        {/* Mobile Hamburger Toggle & Theme Switcher */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-xl text-slate-800 dark:text-[#F5F7FA] bg-slate-100 dark:bg-[#171B21]/80 border border-slate-200 dark:border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-200 dark:border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-accent-blue/15 text-accent-blue border border-accent-blue/30 font-semibold'
                      : 'text-slate-600 dark:text-[#A5ACB8] hover:bg-slate-100 dark:hover:bg-[#171B21] hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <Button
              href={socialLinks.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={FileText}
              className="w-full"
            >
              View Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
