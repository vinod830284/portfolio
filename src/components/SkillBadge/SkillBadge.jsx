export function SkillBadge({ skill }) {
  return (
    <div className="inline-flex items-center px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-surface-elevatedDark/80 dark:bg-surface-elevatedDark/80 light:bg-slate-100 text-content-primaryDark dark:text-content-primaryDark light:text-slate-800 border border-border-dark dark:border-border-dark light:border-slate-200 hover:border-accent-blue/40 hover:text-accent-blue hover:shadow-sm hover:scale-[1.02] cursor-default group">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-violet/60 group-hover:bg-accent-blue group-hover:scale-125 transition-all mr-2"></span>
      {skill}
    </div>
  );
}
