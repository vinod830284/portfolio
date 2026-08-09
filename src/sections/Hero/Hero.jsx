import { motion } from 'framer-motion';
import { ArrowDownRight, Download, Send, CheckCircle2, Smartphone, ShieldCheck, Cpu } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { HeroVisual } from '../../components/HeroVisual/HeroVisual';
import { socialLinks } from '../../data/socialLinks';

export function Hero() {
  const metadataBadges = [
    { text: '3+ Years Experience', icon: ShieldCheck },
    { text: 'React Native Expert', icon: Smartphone },
    { text: 'iOS & Android Parity', icon: Cpu },
    { text: 'Open to Opportunities', icon: CheckCircle2, highlight: true },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-accent-violet/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Small Label Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-ping" />
              React Native Developer
            </div>

            {/* Main Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA] leading-[1.15]">
              Building reliable mobile experiences with{' '}
              <span className="gradient-text">React Native.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#A5ACB8] leading-relaxed max-w-2xl">
              React Native Developer with <strong>3+ years of experience</strong> building and maintaining production-ready applications for iOS and Android across booking, wellness, healthcare, environmental reporting, and real-time communication domains.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={ArrowDownRight}
                iconPosition="right"
              >
                View My Work
              </Button>

              <Button
                href={socialLinks.resumePath}
                download="Vinod_Kumar_React_Native_Developer_Resume.pdf"
                target="_blank"
                variant="secondary"
                size="lg"
                icon={Download}
              >
                Download Resume
              </Button>

              <Button
                href="#contact"
                variant="outline"
                size="lg"
                icon={Send}
                iconPosition="right"
              >
                Let's Connect
              </Button>
            </div>

            {/* Small Metadata Chips */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-2 sm:gap-3">
              {metadataBadges.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={idx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${badge.highlight
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-slate-100 dark:bg-[#171B21]/60 text-slate-700 dark:text-[#A5ACB8] border border-slate-200 dark:border-white/10'
                      }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${badge.highlight ? 'text-emerald-500' : 'text-accent-blue'}`} />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
