import type { PropsWithChildren, ReactNode } from 'react'
import clsx from 'clsx'

type CardProps = PropsWithChildren<{
  title?: string
  subtitle?: string
  rightSlot?: ReactNode
  className?: string
}>

export function Card({ title, subtitle, rightSlot, className, children }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white/90 backdrop-blur-md border border-white/50 shadow-mobile rounded-3xl p-4 sm:p-6',
        className,
      )}
    >
      {(title || subtitle || rightSlot) && (
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="space-y-0.5 min-w-0">
            {title && (
              <p className="text-[clamp(14px,3vw,16px)] font-semibold text-slate-900 truncate">{title}</p>
            )}
            {subtitle && <p className="text-sm text-slate-500 leading-5 truncate">{subtitle}</p>}
          </div>
          {rightSlot && <div className="shrink-0">{rightSlot}</div>}
        </div>
      )}
      {children}
    </div>
  )}
