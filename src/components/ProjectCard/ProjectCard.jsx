import { ArrowUpRight, Smartphone } from 'lucide-react';
import { Button } from '../Button/Button';

export function ProjectCard({ project, onOpenDetails }) {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
        project.featured
          ? 'bg-gradient-to-b from-accent-blue/5 to-transparent dark:from-accent-blue/10 dark:to-transparent bg-white dark:bg-[#11151A] border-2 border-accent-blue/40 shadow-glow-blue'
          : 'bg-white dark:bg-[#11151A] border border-slate-200 dark:border-white/10 hover:border-accent-blue/40 hover:shadow-glow-blue'
      }`}
    >
      {/* Top Header & Tag */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent-violet/10 text-accent-violet border border-accent-violet/20">
              <Smartphone className="w-3.5 h-3.5" />
              {project.domain}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-accent-blue/15 text-accent-blue border border-accent-blue/30">
                Key Technical Specialization
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-[#6F7785]">{project.role}</span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#F5F7FA] group-hover:text-accent-blue transition-colors">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm text-slate-600 dark:text-[#A5ACB8] leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Key Features Bullet List */}
        <div className="mt-5 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-[#6F7785] font-semibold">
            Key Features
          </div>
          <ul className="space-y-1.5">
            {project.keyFeatures.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="text-xs text-slate-600 dark:text-[#A5ACB8] flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0 mt-1"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech Stack Tags & CTA Button */}
      <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 flex flex-col gap-4">
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-[#171B21] text-slate-700 dark:text-[#A5ACB8] border border-slate-200 dark:border-white/10"
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
