# Louis-Marie Simonneaux — e-Portfolio

Portfolio personnel : éditorial, chaleureux, bilingue (FR/EN), avec thème clair/sombre
(Toulouse de jour ↔ de nuit en fond) et animations d'arrivée.

**En ligne :** https://lmsimonneaux.github.io/LMSimonneaux/

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Framer Motion](https://www.framer.com/motion/) — chorégraphie d'arrivée & reveals
- CSS sur-mesure (variables de thème), polices *Fraunces* + *Inter*

## Développement

```bash
npm install
npm run dev      # http://localhost:5173/LMSimonneaux/
npm run build    # génère dist/
npm run preview  # prévisualise le build
```

## Contenu

Tout le contenu (FR/EN) vit dans [`src/content.ts`](src/content.ts) — c'est le seul
fichier à éditer pour mettre à jour les textes, projets et expériences.

## Déploiement

Push sur `main` → build et publication automatiques via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
Régler une fois *Settings → Pages → Source* sur **GitHub Actions**.

## Ancien site

L'ancienne version (HTML statique) est conservée dans [`legacy/`](legacy/).
