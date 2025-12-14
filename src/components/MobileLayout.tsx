import { Home, LineChart, Menu, Moon, Settings, User } from 'lucide-react';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { to: '/', label: 'Accueil', icon: Home },
  { to: '/insights', label: 'Insights', icon: LineChart },
  { to: '/profile', label: 'Profil', icon: User },
];

export function MobileLayout({ title, action, children }: { title: string; action?: ReactNode; children: ReactNode }) {
  const location = useLocation();

  return (
    <div className="bg-surface min-h-screen text-white flex flex-col">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-surface/80 bg-surface/90 border-b border-white/5 safe-area-padding">
        <div className="flex items-center gap-3 px-4 pt-4 pb-3">
          <button
            aria-label="Ouvrir le menu"
            className="p-2 rounded-xl bg-white/5 active:bg-white/10 transition"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-white/60 leading-4">Board exécutif</p>
            <h1 className="text-lg font-semibold leading-6 truncate">{title}</h1>
          </div>
          <button
            aria-label="Changer le thème"
            className="p-2 rounded-xl bg-white/5 active:bg-white/10 transition"
          >
            <Moon className="h-5 w-5" />
          </button>
          {action}
        </div>
      </header>

      <main className="flex-1 px-4 pb-28 pt-4 space-y-4">{children}</main>

      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-30"
      >
        <div className="mx-auto max-w-xl px-4 pb-3 bottom-nav-safe">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-soft p-2 flex items-center justify-between">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex-1"
                  aria-label={item.label}
                >
                  <div className="flex flex-col items-center gap-1 py-2 rounded-xl active:bg-white/5 transition">
                    <Icon className={`h-5 w-5 ${active ? 'text-white' : 'text-white/60'}`} />
                    <span className={`text-xs ${active ? 'text-white' : 'text-white/60'}`}>{item.label}</span>
                  </div>
                </Link>
              );
            })}
            <button
              aria-label="Paramètres"
              className="p-3 rounded-xl bg-white/10 active:bg-white/20 transition"
            >
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
