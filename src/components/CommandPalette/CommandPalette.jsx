import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, Briefcase, Code, Mail, Phone, X, ExternalLink } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

export function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const { copyToClipboard } = useCopyToClipboard();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent
          window.dispatchEvent(new CustomEvent('toggle-command-palette'));
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'projects',
      label: 'View Featured Projects',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'experience',
      label: 'View Experience Timeline',
      category: 'Navigation',
      icon: FileText,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'skills',
      label: 'View Technical Skills',
      category: 'Navigation',
      icon: Code,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'resume',
      label: 'View Official CV (Google Docs)',
      category: 'Action',
      icon: FileText,
      action: () => {
        window.open(socialLinks.resumePath, '_blank');
        onClose();
      }
    },
    {
      id: 'email',
      label: `Copy Email: ${socialLinks.email}`,
      category: 'Action',
      icon: Mail,
      action: () => {
        copyToClipboard(socialLinks.email);
        onClose();
      }
    },
    {
      id: 'phone',
      label: `Call Phone: ${socialLinks.phone}`,
      category: 'Action',
      icon: Phone,
      action: () => {
        window.location.href = `tel:${socialLinks.phone}`;
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((act) =>
    act.label.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Command Palette Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-[#11151A] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden z-10 text-left"
        >
          {/* Input Header */}
          <div className="flex items-center px-4 py-3 border-b border-slate-200 dark:border-white/10 gap-3">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Type a command or search section... (Esc to exit)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm font-sans text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Action List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredActions.length === 0 ? (
              <div className="p-4 text-center text-xs text-slate-400 font-mono">
                No matching commands found
              </div>
            ) : (
              filteredActions.map((act) => {
                const IconComp = act.icon;
                return (
                  <button
                    key={act.id}
                    onClick={act.action}
                    className="w-full p-3 rounded-xl flex items-center justify-between text-left hover:bg-accent-blue/10 hover:border-accent-blue/20 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-accent-blue transition-colors">
                          {act.label}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400">{act.category}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-accent-blue transition-colors" />
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts Info */}
          <div className="px-4 py-2 bg-slate-50 dark:bg-[#0B0D10] border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-[#6F7785]">
            <span>Navigate with mouse or keyboard</span>
            <span>press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300">Esc</kbd> to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
