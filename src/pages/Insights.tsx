import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const data = [
  { name: 'Lun', focus: 2.1, mood: 7.5 },
  { name: 'Mar', focus: 2.4, mood: 7.2 },
  { name: 'Mer', focus: 2.8, mood: 8.1 },
  { name: 'Jeu', focus: 3.2, mood: 8.4 },
  { name: 'Ven', focus: 2.9, mood: 8.0 },
  { name: 'Sam', focus: 2.6, mood: 7.8 },
  { name: 'Dim', focus: 2.3, mood: 7.4 },
];

export function Insights() {
  return (
    <div className="space-y-4">
      <Card title="Charge cognitive" description="Rolling 7j">
        <div className="min-h-[260px]">
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={data} margin={{ left: 0, right: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="focus" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#cbd5f5', fontSize: 12 }} />
              <YAxis hide domain={[0, 4]} />
              <Tooltip
                contentStyle={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}
                labelStyle={{ color: '#cbd5f5', fontWeight: 600 }}
                formatter={(value: number) => [`${value.toFixed(1)}h`, 'Focus profond']}
              />
              <Area type="monotone" dataKey="focus" stroke="#60a5fa" strokeWidth={3} fillOpacity={1} fill="url(#focus)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="Actions rapides" description="Pour aujourd'hui">
        <div className="space-y-3">
          {[
            'Bloquer un créneau focus de 25min',
            'Choisir un rituel pré-session',
            'Partager le score moodboard avec le coach',
          ].map((item) => (
            <div key={item} className="flex items-center justify-between bg-white/5 rounded-xl p-3">
              <p className="text-sm leading-5 text-white/80">{item}</p>
              <Button variant="ghost" className="w-auto px-3 py-2 text-sm" aria-label={item}>
                Go
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
