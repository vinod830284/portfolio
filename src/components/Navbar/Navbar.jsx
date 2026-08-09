import { useState, useEffect } from 'react';
import { Menu, X, Download, Code2 } from 'lucide-react';
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

export function Navbar({ theme, toggleTheme }) {
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
            <span className="font-extrabold text-base tracking-wider text-content-primaryDark dark:text-content-primaryDark light:text-slate-900 group-hover:text-accent-blue transition-colors">
              VINOD KUMAR
            </span>
            <span className="text-[10px] font-mono text-content-mutedDark tracking-tight -mt-0.5">
              React Native Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-border-dark dark:border-border-dark light:border-slate-200">
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
                    : 'text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-600 hover:text-content-primaryDark'
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

        {/* Right Action Items: Download Resume & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Button
            href={socialLinks.resumePath}
            download="Vinod_Kumar_React_Native_Developer_Resume.pdf"
            target="_blank"
            variant="primary"
            size="sm"
            icon={Download}
          >
            Download Resume
          </Button>
        </div>

        {/* Mobile Hamburger Toggle & Theme Switcher */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-xl text-content-primaryDark bg-surface-elevatedDark/80 border border-border-dark"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-border-dark px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
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
                      : 'text-content-secondaryDark hover:bg-surface-elevatedDark hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-border-dark flex flex-col gap-2">
            <Button
              href={socialLinks.resumePath}
              download="Vinod_Kumar_React_Native_Developer_Resume.pdf"
              target="_blank"
              variant="primary"
              size="md"
              icon={Download}
              className="w-full"
            >
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
