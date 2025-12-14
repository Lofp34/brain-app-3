import type { ReactElement } from 'react'
import './App.css'

const quickActions = [
  {
    title: 'Mode Focus',
    description: '45 minutes sans distraction',
    pill: 'Haptique activée',
  },
  {
    title: 'Rappel boisson',
    description: 'Un rappel doux toutes les 35 min',
    pill: 'Hydratation',
  },
]

const focusTasks = [
  { title: 'Synthèse du chapitre 4', duration: '25 min', state: 'En cours' },
  { title: 'Plan du prochain atelier', duration: '30 min', state: 'À préparer' },
  { title: 'Respiration cohérente', duration: '6 min', state: 'Terminé' },
]

const navItems = [
  { label: 'Home', active: true, icon: 'home' },
  { label: 'Focus', active: false, icon: 'target' },
  { label: 'Routines', active: false, icon: 'sparkles' },
  { label: 'Profil', active: false, icon: 'user' },
]

function Icon({ name }: { name: string }) {
  const icons: Record<string, ReactElement> = {
    home: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 10.5 11.2 4a1.2 1.2 0 0 1 1.6 0L20 10.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 9.5v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9" strokeLinecap="round" />
      </svg>
    ),
    target: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" opacity="0.7" />
        <path d="M12 4v2m0 12v2m8-8h-2M6 12H4m10 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" strokeLinecap="round" />
      </svg>
    ),
    sparkles: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3 10.7 8.3 6 10l4.7 1.7L12 17l1.3-5.3L18 10l-4.7-1.7Z" strokeLinejoin="round" />
        <path d="M6.5 16 6 18l-1.5.7L6 19.5 6.5 21l.5-1.5L8.5 18 7 17.5Z" />
        <path d="M17 4.5 16.5 6l-1.5.5 1.5.5.5 1.5L17.5 7l1.5-.5-1.5-.5Z" />
      </svg>
    ),
    user: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 19c0-3.3 3.1-5 7-5s7 1.7 7 5" strokeLinecap="round" />
      </svg>
    ),
    bell: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 10.5a6 6 0 1 1 12 0c0 2.6.7 4.1 1.6 5.2.4.5.1 1.3-.5 1.3H4.9c-.6 0-.9-.8-.5-1.3C5.3 14.6 6 13.1 6 10.5Z" />
        <path d="M10 19.5a2 2 0 0 0 4 0" strokeLinecap="round" />
      </svg>
    ),
    arrowLeft: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14.5 6.5 9 12l5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    play: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9.5 7.5 16 12l-6.5 4.5Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return icons[name]
}

function App() {
  return (
    <div className="app-shell">
      <header className="app-header" aria-label="En-tête">
        <button className="icon-button" aria-label="Retour">
          <Icon name="arrowLeft" />
        </button>
        <div className="header-meta">
          <p className="eyebrow">Session iPhone 12</p>
          <h1>Brain Mobile Lab</h1>
        </div>
        <div className="avatar" role="button" aria-label="Ouvrir le profil">
          LE
        </div>
      </header>

      <main className="content">
        <section className="hero-card" aria-labelledby="hero-title">
          <div className="hero-body">
            <p className="eyebrow">Aujourd'hui</p>
            <h2 id="hero-title">Prête pour un focus serein</h2>
            <p>Zones tactiles larges, transitions douces et zéro débordement latéral.</p>
          </div>
          <div className="hero-score" aria-label="Score de clarté mobile 92%">
            <strong>92%</strong>
            <span>Clarté mobile</span>
          </div>
        </section>

        <section className="grid" aria-label="Actions rapides">
          {quickActions.map((action) => (
            <article className="card" key={action.title}>
              <div className="card-header" aria-describedby={`${action.title}-desc`}>
                <h3>{action.title}</h3>
                <span className="badge">Actif</span>
              </div>
              <p id={`${action.title}-desc`}>{action.description}</p>
              <div className="quick-row">
                <div className="pill">{action.pill}</div>
                <button className="icon-button" aria-label="Lancer l'action">
                  <Icon name="play" />
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="card list-card" aria-label="Tâches en cours">
          <div className="card-header">
            <div>
              <h3>Focus du jour</h3>
              <p className="card-subtitle">Ajusté pour le pouce et la lisibilité extérieure</p>
            </div>
            <button className="icon-button" aria-label="Notifications">
              <Icon name="bell" />
            </button>
          </div>
          <div className="task-list">
            {focusTasks.map((task) => (
              <article className="task" key={task.title}>
                <div>
                  <h4>{task.title}</h4>
                  <span>{task.duration}</span>
                </div>
                <span className="badge">{task.state}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="card chart-card" aria-label="Equilibre sensoriel">
          <div className="card-header">
            <div>
              <h3>Équilibre sensoriel</h3>
              <p className="card-subtitle">Animations limitées et support prefers-reduced-motion</p>
            </div>
            <div className="pill">Zones 48px+</div>
          </div>
          <div className="chart-area">
            Graphique placeholder : connectez Recharts + ResponsiveContainer (min 260px) lors de l'intégration.
          </div>
        </section>
      </main>

      <nav className="bottom-bar" aria-label="Navigation principale">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`nav-btn ${item.active ? 'active' : ''}`}
            aria-label={item.label}
            aria-current={item.active ? 'page' : undefined}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
