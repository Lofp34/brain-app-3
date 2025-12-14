import { Bell, LogOut, ShieldCheck } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Profile() {
  return (
    <div className="space-y-4">
      <Card title="Profil" description="Prêt pour le mode mobile">
        <div className="flex items-center gap-3">
          <img
            src="https://api.dicebear.com/9.x/identicon/svg?seed=brain"
            alt="Avatar"
            className="h-12 w-12 rounded-2xl"
          />
          <div className="flex-1">
            <p className="font-semibold text-white leading-5">Alexandre</p>
            <p className="text-sm text-white/60">Mode focus activé</p>
          </div>
          <Button variant="ghost" className="w-auto px-3 py-2 text-sm">Editer</Button>
        </div>
      </Card>

      <Card title="Sécurité" description="Privé par défaut">
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
            <ShieldCheck className="h-5 w-5 text-emerald-300" />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white font-semibold leading-5">Chiffrement end-to-end</p>
              <p className="text-xs text-white/60 leading-4">Vos données santé restent sur le device</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
            <Bell className="h-5 w-5 text-amber-300" />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white font-semibold leading-5">Notifications haptique douce</p>
              <p className="text-xs text-white/60 leading-4">Rappels adaptés pour éviter le stress</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Button variant="ghost" className="w-full" aria-label="Se déconnecter">
            <span className="flex items-center justify-center gap-2 text-red-200">
              <LogOut className="h-5 w-5" /> Déconnexion
            </span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
