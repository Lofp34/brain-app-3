# NeuroTrack Mobile

Prototype mobile-first (Vite + React + Tailwind) qui illustre le plan d’adaptation iPhone 12 décrit dans `MOBILE_RESPONSIVE_PLAN.md`. L’interface combine un layout optimisé pour le pouce, des cartes de stats, un graphique Recharts responsive et un assistant de coaching.

## Lancer le projet

```bash
npm install
npm run dev
```

- Serveur par défaut sur [http://localhost:5173](http://localhost:5173)
- Tailwind + framer-motion pour les transitions et la typographie adaptative.

## Scripts
- `npm run dev` : mode développement avec rechargement.
- `npm run build` : build de production.
- `npm run preview` : prévisualisation du build.
- `npm run lint` : lint des fichiers TS/TSX.

## Notes de design
- Layout mobile-first avec `overflow-x-hidden`, safe areas et barre d’action basse.
- Composants responsives (cartes, listes, chartes) pensés pour 390px–768px.
- Contraste élevé et `clamp()` pour garder la lisibilité sur mobile.
