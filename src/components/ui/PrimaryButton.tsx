import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import clsx from 'clsx'

type PrimaryButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'ghost'
  }
>

export function PrimaryButton({ children, className, variant = 'primary', ...rest }: PrimaryButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-2xl transition-all text-[clamp(14px,3.4vw,17px)] font-semibold'

  const variants = {
    primary:
      'bg-brand-600 text-white shadow-mobile px-4 py-3 sm:px-5 sm:py-3.5 active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-brand-500',
    ghost:
      'bg-white/70 text-slate-800 border border-white/70 px-4 py-2.5 active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-brand-100',
  }

  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  )
}
