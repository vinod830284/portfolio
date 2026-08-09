export function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'left',
  href,
  download,
  target,
  rel,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary:
      'bg-gradient-to-r from-accent-blue to-accent-violet hover:from-blue-600 hover:to-violet-600 text-white shadow-glow-blue hover:shadow-glow-violet transform hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-slate-100 dark:bg-[#171B21] text-slate-800 dark:text-[#F5F7FA] hover:bg-slate-200 dark:hover:bg-[#171B21]/80 border border-slate-300 dark:border-white/10 transform hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'bg-transparent border border-slate-300 dark:border-white/15 hover:border-accent-blue text-slate-800 dark:text-[#F5F7FA] hover:bg-accent-blue/10 transform hover:-translate-y-0.5 active:translate-y-0',
    ghost:
      'bg-transparent text-slate-600 dark:text-[#A5ACB8] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#171B21]/50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5 font-semibold',
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} group`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
