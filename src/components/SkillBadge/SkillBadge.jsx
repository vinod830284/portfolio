export function SkillBadge({ skill }) {
  return (
    <div className="inline-flex items-center px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-slate-100 dark:bg-[#171B21]/80 text-slate-800 dark:text-[#F5F7FA] border border-slate-200 dark:border-white/10 hover:border-accent-blue/40 hover:text-accent-blue hover:shadow-sm hover:scale-[1.02] cursor-default group">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-violet/60 group-hover:bg-accent-blue group-hover:scale-125 transition-all mr-2"></span>
      {skill}
    </div>
  );
}
