# Louis-Marie Simonneaux — e-Portfolio

Portfolio personnel : éditorial, chaleureux, bilingue (FR/EN), avec thème clair/sombre
(Toulouse de jour ↔ de nuit en fond) et animations d'arrivée.

**En ligne :** https://lmsimonneaux.github.io/LMSimonneaux/

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Framer Motion](https://www.framer.com/motion/) — chorégraphie d'arrivée & reveals
- CSS sur-mesure (variables de thème), polices *Fraunces* + *Inter*

## Logos des outils

Les marques de la section *Outils* sont dans [`public/logos/`](public/logos/) —
SVG monochromes peints via `mask-image` + `currentColor`, pour qu'ils suivent le
thème. Sources et licences : [`public/logos/CREDITS.txt`](public/logos/CREDITS.txt)
(Simple Icons et SVG Logos en CC0, Devicon en MIT).

49 outils sur 67 ont une marque. Les 18 autres s'affichent en monogramme, pour
deux raisons :

- aucun set d'icônes libre ne les porte (PhantomBuster, Pennylane, Polypane,
  Pageclip, HazeOver, Hammerspoon, Base44, PromptCowboy, Fireflies, Luma,
  MarkChart, Shottr, Logic Pro, Herd, Zimbra, .tech domains) ;
- ou leur logo ne survit pas au passage en silhouette : BrowserStack devient un
  disque plein, Adobe Illustrator un carré plein.

Pour en ajouter un : déposer `public/logos/<slug>.svg` (idéalement un tracé
lisible en aplat), puis renseigner `slug` sur l'entrée correspondante de `tools`
dans [`src/content.ts`](src/content.ts). `wide: true` élargit la boîte d'un
logotype (Cal.com), `mono: 'XX'` force le monogramme.
