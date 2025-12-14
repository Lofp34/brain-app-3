# Brain App Mobile-first

Application React + TypeScript stylée avec Tailwind pour illustrer une expérience mobile premium (iPhone 12 & co).

## Périmètre
- Layout mobile (`MobileLayout`) avec header compact, navigation basse et gestion des safe areas (`env(safe-area-inset-*)`).
- Composants UI : `Card`, `PrimaryButton`, `ActionBar`, liste d’actions tactiles et carte analytique.
- Animations douces via `framer-motion` et typographie adaptative (`clamp`).

## Démarrage
```bash
npm install
npm run dev
```

## Bonnes pratiques intégrées
- Mobile-first avec Tailwind (`p-4`, `grid`, `flex`, `gap`) et `overflow-x-hidden` global.
- Zones cliquables ≥48px et barre d’action basse utilisable au pouce.
- Meta `theme-color` et `viewport-fit=cover` pour une expérience plein écran.

## Tests manuels conseillés
1. Lancer `npm run dev` et activer l’émulation « iPhone 12 » dans Chrome.
2. Vérifier l’absence de scroll horizontal et la lisibilité en clair/sombre.
3. Tester la navigation tactile (boutons actifs, zones interactives, transitions fluides).
