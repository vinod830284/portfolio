import { socialLinks } from '../../data/socialLinks';

export function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0B0D10] text-slate-600 dark:text-[#A5ACB8] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Brand info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-extrabold font-mono tracking-wider text-slate-900 dark:text-[#F5F7FA]">
            VINOD KUMAR
          </span>
          <span className="hidden sm:inline text-slate-400 dark:text-[#6F7785]">•</span>
          <span className="text-xs text-slate-500 dark:text-[#6F7785]">React Native Developer</span>
        </div>

        {/* Center Copyright */}
        <div className="text-xs text-slate-500 dark:text-[#6F7785] text-center">
          © {new Date().getFullYear()} Vinod Kumar. All rights reserved.
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-4 text-xs font-medium">
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-blue transition-colors"
            >
              LinkedIn
            </a>
          )}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-blue transition-colors"
            >
              GitHub
            </a>
          )}
          <a
            href={`mailto:${socialLinks.email}`}
            className="hover:text-accent-blue transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
