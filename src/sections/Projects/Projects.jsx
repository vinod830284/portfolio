import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { ProjectModal } from '../../components/ProjectModal/ProjectModal';
import { projectsData } from '../../data/projects';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Real-Time Comms', 'Booking & Mobility', 'Healthcare & Environment'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Real-Time Comms') return project.domain === 'Real-Time Communication';
    if (activeCategory === 'Booking & Mobility') return project.domain.includes('Booking') || project.domain.includes('Mobility');
    if (activeCategory === 'Healthcare & Environment') return project.domain.includes('Healthcare') || project.domain.includes('Environmental') || project.domain.includes('Wellness');
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="PORTFOLIO WORK"
          title="Featured Projects & Key Domains"
          subtitle="Production React Native applications engineered for performance, scale, and real-time connectivity."
        />

        {/* Domain Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-accent-blue to-accent-violet text-white shadow-glow-blue scale-105'
                  : 'bg-white dark:bg-[#11151A] text-slate-600 dark:text-[#A5ACB8] border border-slate-200 dark:border-white/10 hover:border-accent-blue/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-column / 2-column / 1-column responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex"
            >
              <ProjectCard
                project={project}
                onOpenDetails={(proj) => setSelectedProject(proj)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
