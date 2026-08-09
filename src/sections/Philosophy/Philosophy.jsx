import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { philosophyData } from '../../data/philosophy';

export function Philosophy() {
  return (
    <section className="py-16 md:py-24 relative bg-slate-100/50 dark:bg-[#11151A]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="ENGINEERING MINDSET"
          title="How I Approach Development"
          subtitle="Core engineering principles that guide my day-to-day work and application design."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {philosophyData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 hover:border-accent-blue/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-extrabold font-mono text-accent-blue/50">
                  {item.number}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-[#F5F7FA] mt-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-[#A5ACB8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
