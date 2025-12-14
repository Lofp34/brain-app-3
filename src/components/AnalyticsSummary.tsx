import { ArrowUpRight, Flame, Focus } from 'lucide-react'
import { Card } from './ui/Card'
import { PrimaryButton } from './ui/PrimaryButton'

export function AnalyticsSummary() {
  return (
    <Card
      title="Programme cérébral"
      subtitle="Optimisé pour iPhone 12 • aucune friction"
      rightSlot={<span className="text-xs text-brand-50 bg-white/10 px-3 py-1 rounded-full">Live</span>}
      className="bg-gradient-to-r from-brand-700 to-brand-500 text-white"
    >
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-[clamp(22px,6vw,30px)] font-bold leading-tight">NeuroPulse Mobile</p>
            <p className="text-sm text-brand-50 leading-6">
              Séances guidées, biométrie en temps réel et recommandations tactiles.
            </p>
          </div>
          <PrimaryButton className="bg-white text-brand-700 shadow-lg hover:shadow-xl">
            Continuer <ArrowUpRight size={18} />
          </PrimaryButton>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="rounded-2xl bg-white/10 px-4 py-3">
            <p className="text-[clamp(12px,3vw,13px)] text-brand-50">Focus moyen</p>
            <p className="text-[clamp(20px,5vw,24px)] font-semibold">86%</p>
            <p className="text-xs text-brand-100">+8% vs. hier</p>
          </div>
          <div className="rounded-2xl bg-white/10 px-4 py-3">
            <p className="text-[clamp(12px,3vw,13px)] text-brand-50">Séances</p>
            <p className="text-[clamp(20px,5vw,24px)] font-semibold">24 min</p>
            <p className="text-xs text-brand-100">3 micro-pauses planifiées</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { icon: <Flame size={22} />, label: 'Intensité', value: 'Modérée' },
            { icon: <Focus size={22} />, label: 'Mode', value: 'Deep Work' },
            { icon: <ArrowUpRight size={22} />, label: 'Prochain', value: 'Débrief 14h' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/10 px-3 py-3 space-y-1">
              <div className="flex justify-center text-brand-50">{item.icon}</div>
              <p className="text-[clamp(12px,3vw,13px)] text-brand-100">{item.label}</p>
              <p className="text-[clamp(14px,3.5vw,16px)] font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
