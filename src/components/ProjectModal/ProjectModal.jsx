import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, CheckCircle2, AlertTriangle, UserCheck, Layers } from 'lucide-react';
import { Button } from '../Button/Button';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface-dark dark:bg-surface-dark light:bg-white border border-border-dark dark:border-border-dark light:border-slate-200 shadow-2xl p-6 sm:p-8 z-10 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-5 right-5 p-2 rounded-xl text-content-mutedDark hover:text-content-primaryDark hover:bg-surface-elevatedDark transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
              <Smartphone className="w-3.5 h-3.5" />
              {project.domain}
            </span>
            <span className="text-xs font-mono text-content-mutedDark">{project.role}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-content-primaryDark dark:text-content-primaryDark light:text-slate-900 pr-8">
            {project.title}
          </h2>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 my-4">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-accent-violet/10 text-accent-violet border border-accent-violet/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-6 mt-6 pt-6 border-t border-border-dark dark:border-border-dark light:border-slate-100">
            {/* Overview */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-accent-blue font-bold flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4" /> Project Overview
              </h3>
              <p className="text-sm sm:text-base text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-700 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-accent-blue font-bold flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0 mt-2"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Challenges & Solutions */}
            {project.technicalChallenges && project.technicalChallenges.length > 0 && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" /> Technical Challenges & Engineering Solutions
                </h3>
                <ul className="space-y-2 mt-2">
                  {project.technicalChallenges.map((challenge, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-700 flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Vinod's Contributions */}
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-accent-blue font-bold flex items-center gap-2 mb-3">
                <UserCheck className="w-4 h-4 text-accent-violet" /> Vinod's Key Contributions
              </h3>
              <ul className="space-y-2">
                {project.contributions.map((contribution, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-6 border-t border-border-dark dark:border-border-dark light:border-slate-100 flex justify-end">
            <Button variant="secondary" onClick={onClose}>
              Close Details
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
