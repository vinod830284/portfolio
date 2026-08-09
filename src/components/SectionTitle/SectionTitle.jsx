export function SectionTitle({ badge, title, subtitle, alignment = 'center', className = '' }) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[alignment]} mb-12 ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-mono font-medium tracking-wide bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-[#A5ACB8]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
