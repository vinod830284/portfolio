import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { SkillBadge } from '../../components/SkillBadge/SkillBadge';
import { skillsData } from '../../data/skills';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-100/50 dark:bg-[#11151A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="TECHNICAL STACK"
          title="Skills & Technologies"
          subtitle="Comprehensive toolkit for developing high-performance React Native mobile applications."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-accent-blue to-accent-violet text-white shadow-glow-blue'
                    : 'bg-slate-200 dark:bg-[#171B21]/60 text-slate-700 dark:text-[#A5ACB8] border border-slate-300 dark:border-white/10 hover:border-accent-blue/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((catGroup, idx) => (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 hover:border-accent-blue/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-white/10">
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-[#F5F7FA] font-mono tracking-tight flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-blue"></span>
                    {catGroup.category}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-[#6F7785]">
                    {catGroup.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {catGroup.skills.map((skill, sIdx) => (
                    <SkillBadge key={sIdx} skill={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
