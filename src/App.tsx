import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Bell, Sparkles, Target, Activity, NotebookPen, Flame } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis } from 'recharts';
import { MobileLayout } from './layouts/MobileLayout';
import { focusTasks, moodEntries } from './data/mockData';

function Pill({ children }: { children: string }) {
  return <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-200 border border-white/5">{children}</span>;
}

function StatCard({
  label,
  value,
  delta,
  accent,
  icon: Icon,
}: {
  label: string;
  value: string;
  delta: string;
  accent: string;
  icon: typeof Sparkles;
}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/5 p-4 sm:p-5 shadow-soft-card">
      <div className="flex items-center justify-between">
        <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-xs font-medium text-emerald-400">{delta}</span>
      </div>
      <p className="mt-4 text-sm text-slate-400">{label}</p>
      <p className="text-2xl font-semibold text-white leading-8">{value}</p>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
        <div className="h-full rounded-full" style={{ width: accent, background: 'linear-gradient(90deg,#22c55e,#06b6d4)' }} />
      </div>
    </div>
  );
}

const tooltipFormatter = (value: number) => `${value}%`;

function MoodChart() {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/5 p-4 sm:p-5 shadow-soft-card">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm text-slate-300 font-semibold">Variabilité émotionnelle</p>
          <p className="text-xs text-slate-400 mt-1 leading-4">Stabilité moyenne sur 7 jours</p>
        </div>
        <button className="px-3 py-2 rounded-xl bg-white/10 text-xs border border-white/5">Details</button>
      </div>

      <div className="mt-4 min-h-[260px]">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={moodEntries} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="mood" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1e1b4b" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis dataKey="label" tickLine={false} axisLine={false} stroke="#94a3b8" tickMargin={8} />
            <YAxis hide domain={[40, 100]} />
            <Tooltip
              contentStyle={{ background: '#0f172a', borderRadius: 14, border: '1px solid rgba(255,255,255,0.08)' }}
              formatter={tooltipFormatter}
              labelClassName="text-slate-400"
            />
            <Area type="monotone" dataKey="score" stroke="#38bdf8" strokeWidth={2.4} fillOpacity={1} fill="url(#mood)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function FocusList() {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/5 p-4 sm:p-5 shadow-soft-card space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">Focus coaching</p>
          <p className="text-xs text-slate-400 mt-1">3 actions pour aujourd&apos;hui</p>
        </div>
        <button className="text-xs text-blue-300 flex items-center gap-1">
          Voir tout <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
      <div className="space-y-3 divide-y divide-white/5">
        {focusTasks.map((task) => (
          <div key={task.title} className="pt-3 first:pt-0 flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/15 text-blue-200 flex items-center justify-center">
              <Target className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <p className="font-medium text-slate-50 leading-6">{task.title}</p>
              <p className="text-[13px] text-slate-400 leading-5">{task.impact}</p>
              <p className="text-xs text-slate-500">{task.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NeuroAssistant() {
  const prompts = useMemo(
    () => [
      'Comment puis-je stabiliser ma concentration cette après-midi ?',
      'Plan rapide de respiration pour baisser le stress.',
      'Quels signaux anticiper avant une baisse de focus ?',
    ],
    [],
  );

  const [selected, setSelected] = useState(0);

  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-950 border border-white/10 p-4 sm:p-5 shadow-soft-card">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm font-semibold">Assistant Neuro</p>
          <p className="text-xs text-slate-400 mt-1">Coaching instantané</p>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-100 flex items-center justify-center">
          <Sparkles className="w-4 h-4" />
        </div>
      </div>
      <div className="space-y-2">
        {prompts.map((prompt, index) => (
          <button
            key={prompt}
            onClick={() => setSelected(index)}
            className={`w-full text-left px-4 py-3 rounded-2xl border transition-all ${
              selected === index
                ? 'bg-white/10 border-white/15 text-slate-50'
                : 'bg-white/5 border-white/5 text-slate-200 hover:bg-white/8'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm leading-5">{prompt}</p>
              {selected === index ? <Flame className="w-4 h-4 text-amber-300" /> : null}
            </div>
          </button>
        ))}
      </div>
      <div className="mt-3 rounded-2xl bg-white/5 border border-white/5 p-3 text-[13px] leading-5 text-slate-200">
        <p>
          {selected === 0 && 'Programme de 7 minutes : respiration box (4-4-4), verre d’eau, micro-pause oculaire. Active un son focus léger.'}
          {selected === 1 &&
            'Respire 4s par le nez, bloque 4s, expire 6s. Répète 5 fois. Ajoute un étirement du cou pour réduire la tension.'}
          {selected === 2 &&
            'Surveille la fatigue visuelle et le besoin de mouvement. Quand tu notes ces signaux, programme une pause active de 5 minutes.'}
        </p>
      </div>
    </div>
  );
}

function HeaderTrailing() {
  return (
    <div className="flex items-center gap-2">
      <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 hidden sm:flex">Mode iPhone 12</div>
      <button className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
        <Bell className="w-5 h-5" />
      </button>
    </div>
  );
}

function App() {
  return (
    <MobileLayout
      title="NeuroTrack Mobile"
      subtitle="Pilotage du focus et du mood en situation de mobilité"
      trailing={<HeaderTrailing />}
    >
      <div className="flex flex-wrap gap-2">
        <Pill>Mobile-first</Pill>
        <Pill>Safe areas</Pill>
        <Pill>Chart responsive</Pill>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatCard label="Score de focus" value="82%" delta="+6%" accent="82%" icon={Activity} />
        <StatCard label="Stabilité émotionnelle" value="74%" delta="+3%" accent="74%" icon={NotebookPen} />
      </div>

      <MoodChart />
      <FocusList />
      <NeuroAssistant />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          className="sticky bottom-28 left-0 right-0 mx-auto max-w-xl"
          aria-live="polite"
        >
          <div className="flex items-center gap-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 px-4 py-3 text-sm text-emerald-50 shadow-soft-card">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/20 text-emerald-100 font-semibold">
              60s
            </span>
            <div className="flex-1">
              <p className="font-semibold leading-6">Routine prête</p>
              <p className="text-[13px] text-emerald-100/80 leading-5">Respiration + recentrage disponibles en moins d’une minute.</p>
            </div>
            <button className="px-3 py-2 rounded-xl bg-emerald-400 text-slate-950 text-xs font-semibold">Lancer</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </MobileLayout>
  );
}

export default App;
