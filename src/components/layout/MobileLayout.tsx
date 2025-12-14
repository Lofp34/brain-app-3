import type { PropsWithChildren, ReactNode } from 'react'
import { ArrowLeft, Bell } from 'lucide-react'
import { motion } from 'framer-motion'
import { ActionBar, type ActionItem } from '../ui/ActionBar'

interface MobileLayoutProps extends PropsWithChildren {
  title: string
  subtitle?: string
  trailingHeaderSlot?: ReactNode
  actions: ActionItem[]
}

export function MobileLayout({ title, subtitle, trailingHeaderSlot, actions, children }: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 text-white">
      <div className="mx-auto max-w-xl min-h-screen flex flex-col" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        <header className="sticky top-0 z-30 bg-slate-900/70 backdrop-blur-lg px-4 pt-4 pb-3">
          <div className="flex items-center justify-between gap-3">
            <button
              aria-label="Revenir"
              className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center border border-white/10"
            >
              <ArrowLeft size={22} />
            </button>
            <div className="text-center flex-1 min-w-0">
              <p className="text-[clamp(14px,3.2vw,16px)] font-semibold text-white truncate">{title}</p>
              {subtitle && <p className="text-sm text-slate-300 leading-5 truncate">{subtitle}</p>}
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Notifications"
                className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center border border-white/10"
              >
                <Bell size={20} />
              </button>
              {trailingHeaderSlot}
            </div>
          </div>
        </header>

        <motion.main
          initial={{ opacity: 0, translateY: 8 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="flex-1 w-full px-4 pb-32 pt-4 space-y-4 sm:space-y-6"
        >
          {children}
        </motion.main>

        <ActionBar items={actions} />
      </div>
    </div>
  )
}
