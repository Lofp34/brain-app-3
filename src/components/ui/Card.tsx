import { ReactNode } from 'react';

export function Card({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <section className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-soft">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div>
          <p className="text-xs text-white/60">{description}</p>
          <h2 className="text-lg font-semibold leading-6">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}
