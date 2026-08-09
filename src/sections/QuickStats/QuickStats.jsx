import { motion } from 'framer-motion';
import { statsData } from '../../data/stats';

export function QuickStats() {
  return (
    <section className="py-10 border-y border-border-dark dark:border-border-dark light:border-slate-200 bg-surface-dark/50 dark:bg-surface-dark/50 light:bg-slate-50/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-xl glass-panel border border-border-dark dark:border-border-dark light:border-slate-200 hover:border-accent-blue/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text tracking-tight font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-content-primaryDark dark:text-content-primaryDark light:text-slate-900 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-content-mutedDark dark:text-content-mutedDark light:text-slate-500 mt-0.5">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
