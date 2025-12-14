import { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'primary', ...props }, ref) => {
  const variants = {
    primary: 'bg-primary text-white shadow-soft active:translate-y-[1px] active:shadow-none',
    ghost: 'bg-white/10 text-white active:bg-white/20',
  };

  return (
    <button
      ref={ref}
      className={twMerge(
        'w-full rounded-2xl px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
        variants[variant],
        className
      )}
      {...props}
    />
  );
});

Button.displayName = 'Button';
