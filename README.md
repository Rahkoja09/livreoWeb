# Livreo — Site vitrine de téléchargement

Landing page pour l'application mobile Livreo (livraison de colis à Madagascar).

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
bun install

# 2. Lancer en développement
bun run dev

# 3. Ouvrir http://localhost:3000
```

## ⚙️ Configuration requise

Avant de déployer, modifie ces 2 variables dans `src/app/page.tsx` :

```tsx
// Ligne 7 : Remplace par ton lien MediaFire APK
const APK_DOWNLOAD_URL = 'https://www.mediafire.com/file/VOTRE_LIEN_APK/file/livreo.apk';

// Ligne 10 : Remplace par ton ID Meta Pixel
const META_PIXEL_ID = 'VOTRE_PIXEL_ID_META';
```

## 📦 Déploiement sur Vercel (gratuit, recommandé)

### Option A : Via GitHub (recommandé)

1. Crée un repo sur GitHub : `livreo-web`
2. Push le code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Livreo landing page"
   git branch -M main
   git remote add origin https://github.com/TON_USERNAME/livreo-web.git
   git push -u origin main
   ```
3. Va sur [vercel.com](https://vercel.com) → Sign up with GitHub
4. Click **"New Project"** → Import `livreo-web`
5. Click **"Deploy"** — c'est tout !
6. Tu obtiens une URL type `livreo-web.vercel.app`

### Option B : Via CLI Vercel

```bash
npm i -g vercel
vercel
# Suis les instructions (login, project name, etc.)
vercel --prod
```

## 📘 Déploiement sur GitHub Pages (alternative)

```bash
# Build statique
bun run build
# Le dossier .next/static contient les fichiers
# Configure next.config.ts pour export statique si besoin
```

## 🎨 Stack technique

- **Next.js 16** (App Router)
- **TypeScript 5**
- **Tailwind CSS 4**
- **Grid Müller-Brockmann** (12 colonnes, baseline 8px)
- **Meta Pixel** (tracking Facebook Ads)
- **Polices** : Geist Sans + Geist Mono

## 🎯 Couleurs de marque

```css
--mb-ink: #182C50      /* Navy */
--mb-accent: #E77830   /* Orange Livreo */
--mb-paper: #ffffff    /* Fond blanc */
```

## ⌨️ Raccourci debug

Appuie sur **G** pour afficher/masquer le grid overlay (debug).

## 📱 Contenu

- Hero : "Vous êtes livreur ? ou vous en cherchez un ?"
- Compiled text : Gratuit, Sécurisé, Rapide, Facile, Revenu, Madagascar
- Sections : Comment ça marche, Installation, Télécharger
- Boutons CTA navy avec coins droits
