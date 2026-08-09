import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { experienceData } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-slate-100/50 dark:bg-[#11151A]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="CAREER PATH"
          title="Professional Experience"
          subtitle="Building and scaling production mobile applications at Ditstek Innovations."
        />

        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-violet to-transparent transform -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-[#11151A] border-2 border-accent-blue flex items-center justify-center shadow-glow-blue z-10 hidden sm:flex">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse" />
                  </div>

                  {/* Experience Content Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] glass-panel rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 shadow-xl hover:border-accent-blue/40 transition-all">
                    {/* Header: Role & Type */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-[#6F7785]">
                        <Calendar className="w-3.5 h-3.5 text-accent-violet" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-[#F5F7FA]">
                      {item.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-[#A5ACB8] mt-1 mb-4 font-medium">
                      <div className="flex items-center gap-1 text-accent-blue font-semibold">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{item.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-[#6F7785]" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Bullet Responsibilities */}
                    <ul className="space-y-2 mb-5">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-[#A5ACB8] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Tag list */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-white/10">
                      {item.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-[#171B21] text-slate-700 dark:text-[#A5ACB8] border border-slate-200 dark:border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
