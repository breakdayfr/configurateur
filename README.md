# Configurateur 3D - MVP Phase 1

## 📋 Description

Application web de configuration 3D pour vêtements de sport personnalisables. Ce configurateur permet aux utilisateurs de visualiser et personnaliser des vêtements en temps réel avec des options de couleur, logo, et gestion de commandes d'équipe.

**Marché cible** : Lycéens, équipes esports, merchandising sportif

## ✨ Fonctionnalités (Phase 1)

- 🎨 Visualisation 3D interactive du produit
- 🖌️ Sélection de couleurs (8 options disponibles)
- 📐 Sélection de tailles (XS à XXL)
- 🔄 Gestion d'état avec Zustand
- 💅 Interface moderne avec Tailwind CSS

## 🛠️ Technologies

- **Frontend** : Next.js 15, React 18, TypeScript
- **3D** : Three.js, React Three Fiber, Drei
- **État** : Zustand
- **Styles** : Tailwind CSS
- **Build** : Turbopack

## 📦 Installation

### Prérequis

- Node.js 18+ installé sur votre machine
- Git installé

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/breakdayfr/configurateur.git
   cd configurateur
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans votre navigateur**
   
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🧪 Test de Phase 1

Après avoir lancé `npm run dev`, vous devriez voir :

- Une sphère blanche au centre de l'écran (placeholder 3D)
- Trois boutons de test en bas : Rouge, Bleu, Vert
- En cliquant sur les boutons, la couleur de la sphère change

Cela confirme que :
- ✅ Three.js est correctement configuré
- ✅ React Three Fiber fonctionne
- ✅ Zustand gère l'état correctement
- ✅ L'interface réagit aux changements d'état

## 📁 Structure du Projet

```
configurateur/
├── src/
│   ├── app/                    # Pages Next.js
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Page d'accueil
│   │   └── globals.css        # Styles globaux
│   ├── components/
│   │   └── 3d/
│   │       └── Experience.tsx # Composant 3D principal
│   ├── config/
│   │   └── constants.ts       # Configuration (couleurs, prix, tailles)
│   └── store/
│       └── useConfigurator.ts # Store Zustand
├── package.json               # Dépendances
├── tsconfig.json             # Configuration TypeScript
├── tailwind.config.ts        # Configuration Tailwind
├── next.config.ts            # Configuration Next.js
├── postcss.config.mjs        # Configuration PostCSS
└── README.md                 # Ce fichier
```

## 🚀 Prochaines Phases

### Phase 2 (À venir)
- Importer modèle 3D réel (.glb) de hoodie
- Remplacer la sphère par le modèle de vêtement
- Application de textures et matériaux
- Upload de logo personnalisé
- Interface de gestion de roster d'équipe
- Import CSV/Excel pour commandes groupées

### Phase 3 (À venir)
- Intégration Shopify pour checkout
- Gestion de panier
- Calcul de prix dynamique
- API Routes pour proxy Shopify
- Système de paiement

## 📝 Scripts Disponibles

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Build de production
npm run start    # Lancer le serveur de production
npm run lint     # Vérifier le code avec ESLint
```

## 🎯 Objectifs MVP (1 mois)

- ✅ Phase 1 : Infrastructure et configuration (COMPLÉTÉE)
- ⏳ Phase 2 : Modèle 3D et personnalisation avancée
- ⏳ Phase 3 : Intégration e-commerce et commandes d'équipe

## 📞 Support

Pour toute question ou problème, veuillez créer une issue sur GitHub.

---

**Version** : Phase 1 MVP  
**Dernière mise à jour** : 2024
