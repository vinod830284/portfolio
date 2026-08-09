import { CheckCircle2 } from 'lucide-react';

export function Toast({ show, message }) {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-surface-elevatedDark text-content-primaryDark border border-accent-blue/30 shadow-glow-blue animate-bounce">
      <CheckCircle2 className="w-5 h-5 text-accent-cyan" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
