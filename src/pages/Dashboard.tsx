import { Flame, Plus, Sparkles, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const quickWins = [
  { label: 'Focus profond', detail: '90 min', accent: 'bg-gradient-to-r from-blue-500/30 to-cyan-400/20' },
  { label: 'Respiration', detail: '4-7-8 • 2 min', accent: 'bg-gradient-to-r from-emerald-400/30 to-teal-500/20' },
  { label: 'Micro pause', detail: 'Stretch', accent: 'bg-gradient-to-r from-violet-500/30 to-purple-500/20' },
];

export function Dashboard() {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-soft"
      >
        <p className="text-sm text-white/60">Semaine #42</p>
        <h2 className="text-2xl font-semibold leading-7 mt-1">Prêt pour une journée en énergie haute 🔥</h2>
        <p className="text-sm text-white/70 mt-2 leading-5">
          On concentre les efforts sur les 3 micro-habitudes prioritaires. Les actions rapides sont optimisées pour une utilisation à une main.
        </p>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {quickWins.map((win) => (
            <div key={win.label} className={`rounded-xl p-3 text-xs leading-4 ${win.accent} border border-white/10`}>
              <p className="text-white/80">{win.label}</p>
              <p className="text-white font-semibold text-sm">{win.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Button className="flex-1" aria-label="Démarrer une session" type="button">
            <span className="flex items-center gap-2 justify-center">
              <Sparkles className="h-5 w-5" /> Lance la session
            </span>
          </Button>
          <Button variant="ghost" className="w-14 h-14 px-0" aria-label="Ajouter une habitude">
            <Plus className="h-6 w-6 mx-auto" />
          </Button>
        </div>
      </motion.div>

      <Card title="Récurrence" description="Streak actuel">
        <div className="flex items-center justify-between bg-white/5 rounded-xl p-3">
          <div>
            <p className="text-sm text-white/70">Jours alignés</p>
            <p className="text-2xl font-semibold flex items-center gap-2"><Flame className="h-6 w-6 text-orange-400" /> 12</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-emerald-300">+3 vs semaine dernière</p>
            <p className="text-white/60 text-sm">Objectif : 18</p>
          </div>
        </div>
      </Card>

      <Card title="Prochain palier" description="Gamification douce">
        <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
          <div className="p-3 rounded-2xl bg-amber-400/15 text-amber-300">
            <Trophy className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white/70">Badge focus</p>
            <p className="text-white font-semibold leading-5">Encore 2 sessions de 25min pour débloquer le niveau argent</p>
          </div>
          <Button variant="ghost" className="w-auto px-3 py-2 text-sm">
            Planifier
          </Button>
        </div>
      </Card>
    </div>
  );
}
