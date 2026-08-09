import { ArrowUpRight, Smartphone } from 'lucide-react';
import { Button } from '../Button/Button';

export function ProjectCard({ project, onOpenDetails }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-surface-dark dark:bg-surface-dark light:bg-white border border-border-dark dark:border-border-dark light:border-slate-200 p-6 sm:p-7 transition-all duration-300 hover:border-accent-blue/40 hover:shadow-glow-blue hover:-translate-y-1">
      {/* Top Header & Tag */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent-violet/10 text-accent-violet border border-accent-violet/20">
            <Smartphone className="w-3.5 h-3.5" />
            {project.domain}
          </span>
          <span className="text-xs font-mono text-content-mutedDark">{project.role}</span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-content-primaryDark dark:text-content-primaryDark light:text-slate-900 group-hover:text-accent-blue transition-colors">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-600 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Key Features Bullet List */}
        <div className="mt-5 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-content-mutedDark font-semibold">
            Key Features
          </div>
          <ul className="space-y-1.5">
            {project.keyFeatures.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="text-xs text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-700 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0 mt-1"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech Stack Tags & CTA Button */}
      <div className="mt-6 pt-5 border-t border-border-dark dark:border-border-dark light:border-slate-100 flex flex-col gap-4">
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface-elevatedDark dark:bg-surface-elevatedDark light:bg-slate-100 text-content-secondaryDark dark:text-content-secondaryDark light:text-slate-700 border border-border-dark dark:border-border-dark light:border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <Button
          variant="outline"
          size="sm"
          icon={ArrowUpRight}
          iconPosition="right"
          onClick={() => onOpenDetails(project)}
          className="w-full justify-between mt-1"
        >
          View Technical Case Study
        </Button>
      </div>
    </div>
  );
}
