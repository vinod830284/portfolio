import { motion } from 'framer-motion';
import { Smartphone, Video, Globe, Zap, Cpu, Rocket } from 'lucide-react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { highlightsData } from '../../data/highlights';

const iconMap = {
  Smartphone,
  Video,
  Globe,
  Zap,
  Cpu,
  Rocket
};

export function Highlights() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="TECHNICAL CAPABILITIES"
          title="What I Build"
          subtitle="Core engineering specializations and production capabilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {highlightsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Smartphone;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group p-6 rounded-2xl bg-surface-dark dark:bg-surface-dark light:bg-white border border-border-dark dark:border-border-dark light:border-slate-200 hover:border-accent-blue/40 hover:shadow-glow-blue transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 border border-accent-blue/30 flex items-center justify-center text-accent-blue group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-accent-blue group-hover:to-accent-violet group-hover:text-white transition-all mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-content-primaryDark dark:text-content-primaryDark light:text-slate-900 group-hover:text-accent-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
