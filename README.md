# Brain Mobile Lab

Prototype React + Vite conçu mobile-first pour valider l'ergonomie décrite dans `MOBILE_RESPONSIVE_PLAN.md` (iPhone 12 et équivalents).

## Démarrage

```bash
npm install
npm run dev
```

## Principes intégrés
- Layout centré max 480px, `overflow-x` masqué, safe areas iOS.
- Barre d'action basse avec icônes et états actifs.
- Typographie `clamp()`, cartes et listes adaptées au pouce.
- Placeholder graphique prêt pour `Recharts` avec hauteur minimale.
