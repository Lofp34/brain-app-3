import { Brain, Home, MessageSquare, Plus, Sparkles, User } from 'lucide-react'
import { MobileLayout } from './components/layout/MobileLayout'
import { AnalyticsSummary } from './components/AnalyticsSummary'
import { TaskList } from './components/TaskList'
import { Card } from './components/ui/Card'
import { PrimaryButton } from './components/ui/PrimaryButton'

const navigation = [
  { label: 'Accueil', icon: <Home size={22} /> },
  { label: 'Insights', icon: <Sparkles size={22} /> },
  { label: 'Start', icon: <Plus size={22} className="text-white" />, active: true },
  { label: 'Chat', icon: <MessageSquare size={22} /> },
  { label: 'Profil', icon: <User size={22} /> },
]

function App() {
  return (
    <MobileLayout
      title="Mode Neuro mobile"
      subtitle="Optimisé pour iPhone 12"
      actions={navigation}
      trailingHeaderSlot={
        <div className="px-3 py-2 rounded-2xl bg-white/10 border border-white/10 text-xs text-brand-50">
          Live sync
        </div>
      }
    >
      <AnalyticsSummary />

      <Card title="Focus du jour" subtitle="Mobile-first • gestes visibles">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {["Deep work • 45'", 'Micro-pauses intelligentes', 'Synthèse audio + haptique'].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-slate-900">
              <p className="text-[clamp(13px,3vw,15px)] font-semibold leading-tight">{item}</p>
              <p className="text-xs text-slate-500 leading-5">Prêt en 1 tap, zones ≥48px.</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Séances rapides" subtitle="Transitions 200ms, easing easeOut">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 border border-slate-100">
            <div>
              <p className="text-[clamp(14px,3.2vw,16px)] font-semibold text-slate-900">Sprint 25 min</p>
              <p className="text-sm text-slate-500 leading-5">Haptique + retour audio soft</p>
            </div>
            <PrimaryButton className="px-3 py-2">Lancer</PrimaryButton>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 border border-slate-100">
            <div>
              <p className="text-[clamp(14px,3.2vw,16px)] font-semibold text-slate-900">Check-in 90s</p>
              <p className="text-sm text-slate-500 leading-5">Aucune saisie longue, gestures guidés</p>
            </div>
            <PrimaryButton variant="ghost" className="px-3 py-2">Démarrer</PrimaryButton>
          </div>
        </div>
      </Card>

      <TaskList />

      <Card title="Checklist livrable" subtitle="Pensée pour iPhone 12, SE et Pixel 7">
        <ul className="space-y-2 text-sm text-slate-200">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Aucun scroll horizontal, `overflow-x-hidden` global.
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Boutons ≥48px + safe areas gérés.
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Charts lisibles & nav pouce en bas.
          </li>
        </ul>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <PrimaryButton className="w-full sm:w-auto">Tester en iPhone 12</PrimaryButton>
          <PrimaryButton variant="ghost" className="w-full sm:w-auto">
            <Brain size={18} /> Mode sombre actif
          </PrimaryButton>
        </div>
      </Card>
    </MobileLayout>
  )
}

export default App
