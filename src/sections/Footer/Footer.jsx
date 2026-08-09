import { socialLinks } from '../../data/socialLinks';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border-dark dark:border-border-dark light:border-slate-200 bg-bg-dark dark:bg-bg-dark light:bg-slate-100 text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Brand info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-extrabold font-mono tracking-wider text-content-primaryDark dark:text-content-primaryDark light:text-slate-900">
            VINOD KUMAR
          </span>
          <span className="hidden sm:inline text-content-mutedDark">•</span>
          <span className="text-xs text-content-mutedDark">React Native Developer</span>
        </div>

        {/* Center Copyright */}
        <div className="text-xs text-content-mutedDark text-center">
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
