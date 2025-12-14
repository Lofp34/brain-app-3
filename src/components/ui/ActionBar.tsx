import type { ReactNode } from 'react'
import clsx from 'clsx'

export type ActionItem = {
  label: string
  icon: ReactNode
  active?: boolean
  onClick?: () => void
}

type ActionBarProps = {
  items: ActionItem[]
}

export function ActionBar({ items }: ActionBarProps) {
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-white/60 shadow-mobile"
      aria-label="Navigation principale"
    >
      <div className="max-w-xl mx-auto px-4 py-2 grid grid-cols-5 gap-2 pb-[max(env(safe-area-inset-bottom),8px)]">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={item.onClick}
            className={clsx(
              'flex flex-col items-center justify-center gap-1 py-2 rounded-2xl text-xs font-semibold transition',
              item.active ? 'text-brand-600 bg-brand-50' : 'text-slate-500 hover:text-slate-800',
            )}
            aria-current={item.active ? 'page' : undefined}
          >
            <span className={clsx('w-10 h-10 rounded-2xl flex items-center justify-center', item.active && 'bg-white shadow-md')}>
              {item.icon}
            </span>
            <span className="text-[clamp(11px,2.8vw,12px)] leading-none">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
