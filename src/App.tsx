import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './components/ui/Button';
import { MobileLayout } from './components/MobileLayout';
import { Dashboard } from './pages/Dashboard';
import { Insights } from './pages/Insights';
import { Profile } from './pages/Profile';

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -40, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <MobileLayout
      title="Brain Mobile"
      action={
        <Button
          variant="ghost"
          className="w-auto px-3 py-2 text-sm hidden sm:inline-flex"
          onClick={() => navigate('/insights')}
        >
          Vue insights
        </Button>
      }
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Dashboard />
              </PageWrapper>
            }
          />
          <Route
            path="/insights"
            element={
              <PageWrapper>
                <Insights />
              </PageWrapper>
            }
          />
          <Route
            path="/profile"
            element={
              <PageWrapper>
                <Profile />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </MobileLayout>
  );
}
