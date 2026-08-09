import { Mail, Linkedin, Github, Phone, MapPin, Copy, Download, Send } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { Toast } from '../../components/Toast/Toast';
import { socialLinks } from '../../data/socialLinks';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

export function Contact() {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 border border-border-dark dark:border-border-dark light:border-slate-200 shadow-2xl relative">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-ping" />
              GET IN TOUCH
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-content-primaryDark dark:text-content-primaryDark light:text-slate-900">
              Let's build something <span className="gradient-text">great.</span>
            </h2>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-600 leading-relaxed">
              I'm open to full-time engineering opportunities and contracts where I can contribute to building high-quality mobile applications with React Native.
            </p>
          </div>

          {/* Quick Copy Email Banner */}
          <div className="mt-8 p-4 rounded-2xl bg-surface-dark/90 dark:bg-surface-dark/90 light:bg-slate-100 border border-border-dark dark:border-border-dark light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-content-mutedDark">Direct Email</div>
                <div className="text-sm font-semibold text-content-primaryDark dark:text-content-primaryDark light:text-slate-900 font-mono">
                  {socialLinks.email}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                variant="primary"
                size="sm"
                icon={Copy}
                onClick={() => copyToClipboard(socialLinks.email)}
                className="w-full sm:w-auto"
              >
                {isCopied ? 'Copied!' : 'Copy Email'}
              </Button>
              <Button
                href={`mailto:${socialLinks.email}`}
                variant="secondary"
                size="sm"
                icon={Send}
                className="w-full sm:w-auto"
              >
                Send Email
              </Button>
            </div>
          </div>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-surface-dark/60 dark:bg-surface-dark/60 light:bg-white border border-border-dark dark:border-border-dark light:border-slate-200 hover:border-accent-blue/40 hover:bg-surface-elevatedDark transition-all flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono text-content-mutedDark">LinkedIn</div>
                  <div className="text-xs font-semibold text-content-primaryDark dark:text-content-primaryDark light:text-slate-900 group-hover:text-accent-blue transition-colors">
                    in/vinodkumar830284
                  </div>
                </div>
              </a>
            )}

            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-surface-dark/60 dark:bg-surface-dark/60 light:bg-white border border-border-dark dark:border-border-dark light:border-slate-200 hover:border-accent-blue/40 hover:bg-surface-elevatedDark transition-all flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-500/10 flex items-center justify-center text-content-primaryDark group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono text-content-mutedDark">GitHub</div>
                  <div className="text-xs font-semibold text-content-primaryDark dark:text-content-primaryDark light:text-slate-900 group-hover:text-accent-blue transition-colors">
                    github.com/vinod830284
                  </div>
                </div>
              </a>
            )}

            <a
              href={`tel:${socialLinks.phone}`}
              className="p-4 rounded-xl bg-surface-dark/60 dark:bg-surface-dark/60 light:bg-white border border-border-dark dark:border-border-dark light:border-slate-200 hover:border-accent-blue/40 hover:bg-surface-elevatedDark transition-all flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-content-mutedDark">Phone</div>
                <div className="text-xs font-semibold text-content-primaryDark dark:text-content-primaryDark light:text-slate-900 group-hover:text-accent-blue transition-colors">
                  {socialLinks.phone}
                </div>
              </div>
            </a>

            <div className="p-4 rounded-xl bg-surface-dark/60 dark:bg-surface-dark/60 light:bg-white border border-border-dark dark:border-border-dark light:border-slate-200 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center text-accent-violet">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-content-mutedDark">Location</div>
                <div className="text-xs font-semibold text-content-primaryDark dark:text-content-primaryDark light:text-slate-900">
                  {socialLinks.location}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Resume Download Button */}
          <div className="mt-8 text-center pt-6 border-t border-border-dark dark:border-border-dark light:border-slate-200">
            <Button
              href={socialLinks.resumePath}
              download="Vinod_Kumar_React_Native_Developer_Resume.pdf"
              target="_blank"
              variant="outline"
              size="lg"
              icon={Download}
            >
              Download Verified Resume (PDF)
            </Button>
          </div>
        </div>
      </div>

      {/* Copy Toast Feedback */}
      <Toast show={isCopied} message="Email copied to clipboard!" />
    </section>
  );
}
