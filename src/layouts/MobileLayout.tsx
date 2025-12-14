import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, Sparkles, Clock3, MessageCircle, User } from 'lucide-react';
import { actions } from '../data/mockData';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Clock3,
  MessageCircle,
  User,
};

interface MobileLayoutProps {
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
  children: ReactNode;
}

export function MobileLayout({ title, subtitle, trailing, children }: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 overflow-hidden">
      <div className="sticky top-0 z-20 backdrop-blur-lg bg-slate-950/60 border-b border-white/10 px-5 py-4" aria-label="Top bar">
        <div className="flex items-center justify-between gap-3">
          <div className="space-y-1 min-w-0">
            <p className="text-[clamp(12px,3vw,14px)] text-slate-400 uppercase tracking-[0.2em]">Flow</p>
            <h1 className="text-[clamp(20px,5vw,26px)] font-semibold leading-6 truncate">{title}</h1>
            {subtitle ? <p className="text-sm text-slate-400 leading-5">{subtitle}</p> : null}
          </div>
          {trailing}
        </div>
      </div>

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="pb-32 pt-4 px-4 sm:px-5"
      >
        <div className="mx-auto max-w-xl space-y-5">{children}</div>
      </motion.main>

      <nav
        className="fixed bottom-0 inset-x-0 z-30 px-5 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 bg-slate-900/90 backdrop-blur-xl border-t border-white/10"
        aria-label="Navigation principale"
      >
        <div className="grid grid-cols-4 gap-3 max-w-xl mx-auto">
          {actions.map((action) => {
            const Icon = iconMap[action.icon];
            return (
              <button
                key={action.label}
                className="flex flex-col items-center gap-1 rounded-2xl py-3 text-[13px] font-medium text-slate-300 hover:text-white transition-all active:scale-95"
                aria-label={action.label}
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 shadow-soft-card">
                  <Icon className="w-5 h-5" aria-hidden />
                </div>
                {action.label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
