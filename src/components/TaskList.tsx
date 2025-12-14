import { CheckCircle2, Clock3, Link, Smartphone } from 'lucide-react'
import { Card } from './ui/Card'
import { PrimaryButton } from './ui/PrimaryButton'

const tasks = [
  {
    title: 'Débrief neuro (15 min)',
    subtitle: 'Synthèse audio + note rapide',
    icon: <Smartphone size={20} />,
    status: 'Planifié',
  },
  {
    title: 'Micro-pause guidée',
    subtitle: 'Respiration 4-7-8 avec haptique',
    icon: <Clock3 size={20} />,
    status: 'À lancer',
  },
  {
    title: 'Envoyer lien de session',
    subtitle: 'Partage sécurisé en 1 tap',
    icon: <Link size={20} />,
    status: 'Prêt',
  },
]

export function TaskList() {
  return (
    <Card title="Actions à portée de pouce" subtitle="Zones tactiles ≥48px, aucune friction">
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <button
            key={task.title}
            className="w-full flex items-center gap-3 bg-slate-50 hover:bg-slate-100 active:scale-[0.99] transition rounded-2xl p-3 text-left"
          >
            <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-brand-600">
              {task.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[clamp(14px,3.3vw,16px)] font-semibold text-slate-900 truncate">{task.title}</p>
              <p className="text-sm text-slate-500 leading-5 truncate">{task.subtitle}</p>
            </div>
            <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">{task.status}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <CheckCircle2 className="text-brand-600" size={18} />
          <span>Tap errors <strong className="text-slate-800">0.8%</strong></span>
        </div>
        <PrimaryButton variant="ghost" className="text-sm px-3 py-2">Journal</PrimaryButton>
      </div>
    </Card>
  )
}
