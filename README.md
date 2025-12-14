# Brain Mobile

Application React + Vite pensée mobile-first (iPhone 12 et équivalents) avec Tailwind, framer-motion, lucide-react et Recharts.

## Démarrer

```bash
npm install
npm run dev
```

## Scripts
- `npm run dev` : serveur de dev avec HMR
- `npm run build` : build de production
- `npm run preview` : prévisualisation du build
- `npm run lint` : lint TypeScript/React

## Principes mobiles appliqués
- **Layout mobile** : `MobileLayout` avec header compact, barre d’action basse et gestion des safe areas.
- **Typo et spacing** : approche `clamp`, surfaces `rounded-2xl`, `gap` généreux et `overflow-x-hidden` global.
- **Accessibilité tactile** : boutons ≥48px, feedback actif, icônes 22–24px.
- **Charts responsives** : `ResponsiveContainer` + hauteur minimale 260px.
