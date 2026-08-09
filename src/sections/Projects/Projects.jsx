import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { ProjectModal } from '../../components/ProjectModal/ProjectModal';
import { projectsData } from '../../data/projects';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="PORTFOLIO WORK"
          title="Featured Projects"
          subtitle="Production React Native applications engineered for performance, scale, and real-time connectivity."
        />

        {/* 3-column / 2-column / 1-column responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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
