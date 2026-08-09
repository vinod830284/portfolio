import { motion } from 'framer-motion';
import { Code2, Zap, Layers, Radio, Cpu, ShieldCheck } from 'lucide-react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';

const focusItems = [
  {
    icon: Code2,
    title: 'Clean & Maintainable Code',
    description: 'Writing scalable, well-structured React Native and TypeScript code following modular design patterns.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Eliminating frame drops, leveraging Hermes engine, and optimizing rendering cycles & memory footprint.'
  },
  {
    icon: Layers,
    title: 'Reusable Components',
    description: 'Architecting flexible UI component libraries and design primitives to accelerate product engineering.'
  },
  {
    icon: Radio,
    title: 'Real-Time Features',
    description: 'Building WebRTC video/audio streaming and Mediasoup signaling channels for low-latency collaboration.'
  },
  {
    icon: Cpu,
    title: 'Native Integrations',
    description: 'Interfacing with native mobile APIs (Camera, Microphone, Speaker routing, Push Notifications, Deep Links).'
  },
  {
    icon: ShieldCheck,
    title: 'Production Reliability',
    description: 'Systematic debugging, error boundary setup, Crashlytics monitoring, and smooth App Store / Play Store deployment.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="ABOUT ME"
          title="Engineering mobile applications that perform."
          subtitle="Passionate React Native Developer focused on building intuitive, high-performance cross-platform applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 border border-border-dark dark:border-border-dark light:border-slate-200 shadow-xl space-y-4"
          >
            <div className="text-xs font-mono font-semibold text-accent-blue uppercase tracking-wider">
              Professional Overview
            </div>
            <h3 className="text-2xl font-bold text-content-primaryDark dark:text-content-primaryDark light:text-slate-900">
              Vinod Kumar — React Native Engineer
            </h3>
            <p className="text-sm sm:text-base text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-600 leading-relaxed">
              With <strong>3+ years of professional hands-on experience</strong> in mobile development, I specialize in crafting cross-platform applications for iOS and Android using React Native, Redux Toolkit, and native mobile bridges.
            </p>
            <p className="text-sm sm:text-base text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-600 leading-relaxed">
              My engineering journey spans developing scalable applications across diverse verticals—including parking booking platforms, mental health & wellness apps, environmental reporting tools, and low-latency real-time video streaming solutions using WebRTC and Mediasoup.
            </p>
            <p className="text-sm sm:text-base text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-600 leading-relaxed">
              I thrive on solving complex technical challenges: optimizing rendering lifecycles, establishing seamless API communications, integrating device hardware capabilities, and delivering polished, production-ready apps to millions of end users.
            </p>
          </motion.div>

          {/* Focus Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-xl bg-surface-dark dark:bg-surface-dark light:bg-white border border-border-dark dark:border-border-dark light:border-slate-200 hover:border-accent-blue/40 hover:shadow-glow-blue transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-content-primaryDark dark:text-content-primaryDark light:text-slate-900 group-hover:text-accent-blue transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-600 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
