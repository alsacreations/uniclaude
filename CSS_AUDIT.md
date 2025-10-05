# 📋 Audit CSS selon Guidelines Alsacréations - UniClaude

**Date** : 5 octobre 2025  
**Référence** : [Guidelines CSS Alsacréations](https://github.com/alsacreations/kiwipedia/blob/main/guidelines/css.md)

---

## 📊 Vue d'Ensemble

### Statut Général : ⚠️ **Partiellement Conforme**

| Catégorie               | Conformité | Priorité |
| ----------------------- | ---------- | -------- |
| Architecture CSS        | 🟡 50%     | Haute    |
| Syntaxe et conventions  | 🟢 80%     | Haute    |
| Système de design       | 🟡 40%     | Haute    |
| Mise en page            | 🔴 20%     | Moyenne  |
| Responsive Design       | 🟡 60%     | Moyenne  |
| Thématisation           | 🔴 0%      | Basse    |
| Optimisation animations | 🟢 90%     | Basse    |
| Typographie             | 🟡 60%     | Moyenne  |

**Score global : 55% conforme**

---

## 1️⃣ Configuration de Projet

### ✅ Points Conformes

- ✅ CSS Vanilla natif (pas de framework)
- ✅ Utilisation de CSS Custom Properties
- ✅ Pas de dépendance externe

### ❌ Points Non Conformes

| Problème                    | Guideline                         | Impact |
| --------------------------- | --------------------------------- | ------ |
| ❌ Pas de PostCSS           | Recommandé pour concaténation     | Moyen  |
| ❌ Pas de Stylelint         | Validation syntaxique obligatoire | Élevé  |
| ❌ Pas de Prettier pour CSS | Formatage automatique             | Moyen  |
| ❌ Pas de stylelint-order   | Organisation SMACSS automatique   | Moyen  |

#### Recommandation

```bash
# Installation des outils de qualité
npm install -D stylelint stylelint-config-standard stylelint-order prettier
```

---

## 2️⃣ Architecture CSS

### ❌ Structure Non Conforme

**Problème majeur** : Fichier monolithique unique (`styles.css`) au lieu d'une architecture modulaire.

#### Structure Actuelle

```
styles.css (484 lignes - fichier unique)
```

#### Structure Attendue selon Guidelines

```
css/
├── config/
│   ├── reset.css         # Reset
│   ├── fonts.css         # @font-face
│   ├── layouts.css       # Bretzel Layouts
│   ├── natives.css       # Éléments natifs
│   └── base.css          # Styles de base
├── theme/
│   ├── theme.css         # Variables primitives
│   └── theme-tokens.css  # Tokens sémantiques
├── components/
│   ├── header.css
│   ├── search.css
│   ├── char-card.css
│   └── notification.css
├── utilities/
│   └── accessibility.css
└── app.css               # Point d'entrée
```

### ❌ Layers CSS Non Utilisés

Les guidelines recommandent l'utilisation de `@layer` pour gérer la cascade :

```css
/* MANQUANT dans UniClaude */
@layer config, base, components, utilities;

@import "/css/config/reset.css" layer(config);
@import "/css/theme/theme.css" layer(config);
/* etc. */
```

**Impact** : Difficulté à maintenir et étendre le code.

---

## 3️⃣ Syntaxe et Conventions

### ✅ Points Conformes

- ✅ Utilisation de classes (`.card`, `.char-code`)
- ✅ Évitement des sélecteurs d'ID
- ✅ Convention BEM partielle (`.char-card`, `.char-display`, `.char-info`)
- ✅ États avec préfixes (`.visible`, `.show`, `.hidden`)

### ⚠️ Points à Améliorer

#### Nommage Incohérent

```css
/* ✅ BIEN : BEM */
.char-card
.char-display
.char-info
.char-code
.char-name

/* ⚠️ INCOHÉRENT : Pas de BEM */
.subtitle        /* → devrait être .header-subtitle */
.stats           /* → devrait être .search-stats */
.filters         /* → devrait être .search-filters */
.clear-btn; /* → devrait être .search-clear-btn */
```

#### Organisation des Propriétés

❌ **Pas d'ordre SMACSS** : Les propriétés ne suivent pas l'ordre recommandé.

**Exemple actuel** :

```css
.char-card {
  font-family: inherit; /* 3. Typographie */
  font-size: inherit; /* 3. Typographie */
  color: inherit; /* 3. Typographie */
  width: 100%; /* 2. Modèle de boîte */
  background: var(--bg-light); /* 4. Décoration */
  border: 2px solid var(--border-color); /* 4. Décoration */
  padding: 1.5rem 1rem; /* 2. Modèle de boîte */
  cursor: pointer; /* 6. Autres */
  transition: all 0.3s ease; /* 5. Animations */
  display: flex; /* 2. Modèle de boîte */
  position: relative; /* 1. Positionnement */
  overflow: hidden; /* 2. Modèle de boîte */
}
```

**Devrait être** (ordre SMACSS) :

```css
.char-card {
  /* 1. Positionnement */
  position: relative;

  /* 2. Modèle de boîte */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1.5rem 1rem;
  overflow: hidden;

  /* 3. Typographie */
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  text-align: center;

  /* 4. Décoration */
  background: var(--bg-light);
  border: 2px solid var(--border-color);
  border-radius: 0.75rem;
  box-shadow: none;

  /* 5. Animations */
  transition: all 0.3s ease;

  /* 6. Autres */
  cursor: pointer;
}
```

### ⚠️ Nesting CSS Natif Non Utilisé

Les guidelines recommandent l'utilisation du nesting natif :

```css
/* ❌ ACTUEL : Sélecteurs séparés */
.char-card:hover {
  transform: translateY(-4px);
}

.char-card:focus-visible {
  outline: 3px solid var(--primary-color);
}

/* ✅ RECOMMANDÉ : Nesting natif */
.char-card {
  /* Styles de base */

  &:hover {
    transform: translateY(-4px);
  }

  &:focus-visible {
    outline: 3px solid var(--primary-color);
  }

  @media (width >= 48rem) {
    padding: 2rem 1rem;
  }
}
```

---

## 4️⃣ Système de Design

### ❌ Architecture Non Conforme

**Problème majeur** : Les variables CSS ne suivent pas l'architecture à trois niveaux recommandée.

#### Architecture Actuelle (Incorrect)

```css
:root {
  --primary-color: #6366f1; /* Mélange de primitives et tokens */
  --bg-color: #0f172a;
  --text-color: #f1f5f9;
  --shadow: 0 4px 6px -1px rgb(...); /* Pas de convention */
}
```

#### Architecture Attendue (Guidelines)

**Niveau 1 : Variables Primitives** (`theme.css`)

```css
:root {
  /* Couleurs - Convention --color-* */
  --color-indigo-500: #6366f1;
  --color-indigo-400: #818cf8;
  --color-violet-500: #8b5cf6;
  --color-slate-950: #0f172a;
  --color-slate-900: #1e293b;
  --color-slate-700: #334155;
  --color-slate-300: #cbd5e1;
  --color-slate-100: #f1f5f9;
  --color-emerald-400: #34d399;

  /* Espacements - Convention --spacing-* */
  --spacing-8: 0.5rem;
  --spacing-16: 1rem;
  --spacing-24: 1.5rem;
  --spacing-32: 2rem;
  --spacing-48: 3rem;

  /* Tailles de texte - Convention --text-* */
  --text-14: 0.875rem;
  --text-16: 1rem;
  --text-18: 1.125rem;
  --text-48: 3rem;

  /* Arrondis - Convention --radius-* */
  --radius-s: 0.25rem;
  --radius-m: 0.5rem;
  --radius-l: 0.75rem;
  --radius-xl: 1rem;

  /* Ombres - Convention --shadow-* */
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.3);
}
```

**Niveau 2 : Tokens Sémantiques** (`theme-tokens.css`)

```css
:root {
  /* Couleurs principales */
  --primary: var(--color-indigo-500);
  --primary-hover: var(--color-indigo-400);
  --on-primary: var(--color-white);

  /* Surfaces et contenus (Material Design) */
  --surface: var(--color-slate-900);
  --surface-variant: var(--color-slate-800);
  --on-surface: var(--color-slate-100);
  --on-surface-secondary: var(--color-slate-300);

  /* Interactions */
  --link: var(--primary);
  --link-hover: var(--primary-hover);

  /* Bordures */
  --border-light: var(--color-slate-700);
  --border-medium: var(--color-slate-600);

  /* États */
  --success: var(--color-emerald-400);
  --error: var(--color-red-500);

  /* Espacements adaptatifs */
  --gap-s: clamp(var(--spacing-8), 0.3rem + 0.9vw, var(--spacing-16));
  --gap-m: clamp(var(--spacing-16), 0.6rem + 1.8vw, var(--spacing-32));
  --gap-l: clamp(var(--spacing-24), 0.9rem + 2.7vw, var(--spacing-48));
}
```

**Niveau 3 : Composants** (utilisation)

```css
.char-card {
  padding: var(--spacing-24) var(--spacing-16);
  background: var(--surface);
  border: 2px solid var(--border-light);
  border-radius: var(--radius-l);
  box-shadow: var(--shadow-md);
}
```

### 📋 Tableau de Conversion

| Actuel            | →   | Primitives            | →   | Tokens                   |
| ----------------- | --- | --------------------- | --- | ------------------------ |
| `--primary-color` | →   | `--color-indigo-500`  | →   | `--primary`              |
| `--bg-color`      | →   | `--color-slate-950`   | →   | `--surface-dark`         |
| `--bg-light`      | →   | `--color-slate-900`   | →   | `--surface`              |
| `--text-color`    | →   | `--color-slate-100`   | →   | `--on-surface`           |
| `--text-muted`    | →   | `--color-slate-300`   | →   | `--on-surface-secondary` |
| `--success-color` | →   | `--color-emerald-400` | →   | `--success`              |

---

## 5️⃣ Mise en Page et Positionnement

### ❌ Bretzel Layouts Non Utilisés

**Problème majeur** : Utilisation directe de Flexbox/Grid au lieu des layouts utilitaires Bretzel.

#### Exemples de Non-Conformité

**1. Grid de caractères**

```css
/* ❌ ACTUEL : Grid CSS personnalisé */
.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}
```

```html
<!-- ✅ RECOMMANDÉ : Bretzel autogrid -->
<div data-layout="autogrid" data-gap="m">
  <!-- Cartes de caractères -->
</div>
```

**2. Header centré**

```css
/* ❌ ACTUEL : Flexbox manuel */
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
```

```html
<!-- ✅ RECOMMANDÉ : Bretzel stack -->
<div data-layout="stack" data-gap="m" data-align="center">
  <div class="spinner"></div>
  <p>Chargement...</p>
</div>
```

**3. Filtres horizontaux**

```css
/* ❌ ACTUEL : Flexbox avec wrap */
.filters {
  display: flex;
  align-items: center;
  gap: 1rem;
}
```

```html
<!-- ✅ RECOMMANDÉ : Bretzel cluster -->
<div data-layout="cluster" data-gap="m" data-align="center">
  <label>Bloc :</label>
  <select id="blockFilter">
    ...
  </select>
</div>
```

**4. Notification positionnée**

```css
/* ❌ ACTUEL : Position fixe manuelle */
.copy-notification {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
```

```html
<!-- ✅ RECOMMANDÉ : Bretzel cluster pour le contenu -->
<div class="copy-notification">
  <div data-layout="cluster" data-gap="s" data-align="center">
    <span class="copied-char">✓</span>
    <span>Copié !</span>
  </div>
</div>
```

### 📊 Priorités de Layout selon Guidelines

| Priorité    | Méthode            | Cas d'Usage              |
| ----------- | ------------------ | ------------------------ |
| **1**       | 🎯 Bretzel Layouts | Layout simple responsive |
| **2**       | Grid Layout        | Layout spécifique        |
| **3**       | Flexbox            | Layout spécifique        |
| Cas spécial | Position           | Overlays                 |

**UniClaude utilise actuellement Priorité 2-3 au lieu de Priorité 1.**

---

## 6️⃣ Responsive Design

### ✅ Points Conformes

- ✅ Utilisation de `rem` pour les valeurs

### ⚠️ Points à Améliorer

#### Breakpoints Non Standardisés

```css
/* ❌ ACTUEL : Valeurs en px, pas mobile-first */
@media (max-width: 768px) {
}
@media (max-width: 480px) {
}
```

```css
/* ✅ RECOMMANDÉ : Mobile First avec rem */
/* Base mobile (par défaut) */

@media (width >= 48rem) {
  /* 768px - md */
  /* Tablettes */
}

@media (width >= 64rem) {
  /* 1024px - lg */
  /* Desktop */
}
```

#### Custom Media Queries Non Utilisés

Les guidelines recommandent PostCSS Custom Media :

```css
/* Configuration */
@custom-media --md (width >= 48rem);
@custom-media --lg (width >= 64rem);

/* Utilisation */
.char-card {
  padding: 1rem;

  @media (--md) {
    padding: 1.5rem;
  }
}
```

---

## 7️⃣ Thématisation (Dark Mode)

### ❌ Pas de Support Light/Dark Mode

**Problème** : L'application est uniquement en mode sombre, sans possibilité de basculer.

#### Ce Qui Manque

**1. Fonction `light-dark()`**

```css
/* ✅ RECOMMANDÉ selon guidelines */
:root {
  color-scheme: light dark;

  --surface: light-dark(#ffffff, #1e293b);
  --on-surface: light-dark(#0f172a, #f1f5f9);
  --primary: light-dark(#4f46e5, #818cf8);
}
```

**2. Theme Switcher**

```css
:root {
  color-scheme: light dark;

  &[data-theme="light"] {
    color-scheme: light;
  }

  &[data-theme="dark"] {
    color-scheme: dark;
  }
}
```

**Impact** : Non-conformité aux préférences système et limitations d'accessibilité.

---

## 8️⃣ Optimisation des Animations

### ✅ Points Conformes

- ✅ Animation uniquement de `transform` et `opacity`
- ✅ Transitions sur propriétés spécifiques

```css
/* ✅ BIEN */
.char-card {
  transition: transform 0.3s ease, border-color 0.3s ease;
}
```

### ⚠️ Point à Améliorer

```css
/* ⚠️ À ÉVITER : transition sur "all" */
.char-card {
  transition: all 0.3s ease; /* Moins performant */
}

/* ✅ MIEUX : propriétés spécifiques */
.char-card {
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
```

---

## 9️⃣ Typographie

### ⚠️ Points à Améliorer

#### Pas de Police Système

```css
/* ❌ ACTUEL : Stack personnalisé */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", sans-serif;
}
```

```css
/* ✅ RECOMMANDÉ : system-ui */
body {
  font-family: system-ui, sans-serif;
}
```

**Raison** : Performance, UX native, évite les Layout Shifts.

#### Pas de Tailles Fluides

```css
/* ❌ ACTUEL : Tailles fixes */
header h1 {
  font-size: 3rem;
}

@media (max-width: 768px) {
  header h1 {
    font-size: 2rem;
  }
}
```

```css
/* ✅ RECOMMANDÉ : Tailles fluides avec clamp() */
header h1 {
  font-size: clamp(2rem, 1.5rem + 2vw, 3rem);
}
```

---

## 📊 Résumé des Non-Conformités

### 🔴 Critiques (À Corriger en Priorité)

1. **Architecture monolithique** → Découper en modules
2. **Pas de Stylelint** → Installer et configurer
3. **Système de design non conforme** → Implémenter architecture 3 niveaux
4. **Pas de Bretzel Layouts** → Remplacer Grid/Flexbox manuels

### 🟡 Importantes (À Améliorer)

5. **Nommage BEM incohérent** → Standardiser les noms de classes
6. **Ordre SMACSS non respecté** → Installer stylelint-order
7. **Pas de nesting CSS** → Utiliser la syntaxe native
8. **Breakpoints non standardisés** → Passer en mobile-first avec rem
9. **Pas de dark/light mode** → Implémenter `light-dark()`

### 🟢 Mineures (Optionnelles)

10. **`transition: all`** → Spécifier les propriétés
11. **Police système** → Utiliser `system-ui`
12. **Tailles de texte fixes** → Utiliser `clamp()`

---

## 🎯 Plan d'Action Recommandé

### Phase 1 : Outillage (1-2h)

```bash
# 1. Installer Stylelint et Prettier
npm init -y
npm install -D stylelint stylelint-config-standard stylelint-order prettier

# 2. Créer stylelint.config.js (comme dans guidelines)
# 3. Créer .prettierrc
# 4. Configurer scripts dans package.json
```

### Phase 2 : Architecture (4-6h)

1. Découper `styles.css` en modules :

   - `css/config/reset.css`
   - `css/theme/theme.css` (primitives)
   - `css/theme/theme-tokens.css` (tokens)
   - `css/components/*.css`
   - `css/app.css` (avec @layer)

2. Renommer les variables selon conventions :
   - `--color-*` pour les primitives
   - Tokens sémantiques (`--surface`, `--on-surface`, etc.)

### Phase 3 : Layouts Bretzel (2-3h)

1. Installer Bretzel Layouts
2. Remplacer les Grid/Flexbox manuels
3. Utiliser `data-layout` dans le HTML

### Phase 4 : Améliorations (2-3h)

1. Implémenter dark/light mode avec `light-dark()`
2. Standardiser le nommage BEM
3. Passer en mobile-first
4. Utiliser le nesting CSS natif

---

## ✅ Ce Qui Est Déjà Bien

- ✅ CSS Vanilla natif (pas de framework lourd)
- ✅ Custom Properties utilisées
- ✅ Animations optimisées (transform/opacity)
- ✅ Accessibilité au focus (`:focus-visible`)
- ✅ Pas de sélecteurs d'ID
- ✅ États avec préfixes (`.is-*`, `.has-*`)
- ✅ Transitions fluides
- ✅ Responsive design fonctionnel

---

## 📈 Score de Conformité Détaillé

| Critère                 | Points | Max     | %       |
| ----------------------- | ------ | ------- | ------- |
| Architecture CSS        | 10     | 20      | 50%     |
| Syntaxe et conventions  | 16     | 20      | 80%     |
| Système de design       | 8      | 20      | 40%     |
| Mise en page (Bretzel)  | 2      | 10      | 20%     |
| Responsive Design       | 6      | 10      | 60%     |
| Thématisation           | 0      | 10      | 0%      |
| Optimisation animations | 9      | 10      | 90%     |
| Typographie             | 6      | 10      | 60%     |
| **TOTAL**               | **57** | **110** | **52%** |

---

## 🎓 Conclusion

UniClaude est un projet **bien codé pour du CSS Vanilla**, mais ne suit pas encore les **guidelines Alsacréations modernes**. Les principales lacunes sont :

1. **Architecture** : Fichier monolithique vs structure modulaire
2. **Design System** : Variables plates vs architecture 3 niveaux
3. **Layouts** : Grid/Flex manuel vs Bretzel Layouts
4. **Outillage** : Pas de validation automatique (Stylelint)

**Recommandation** : Pour un projet de production Alsacréations, il faudrait refactoriser l'architecture CSS selon les guidelines (estimé 10-15h de travail).

Pour un projet personnel ou prototype, l'état actuel est **acceptable** mais pourrait bénéficier d'au moins :

- ✅ Installation de Stylelint
- ✅ Découpage en quelques fichiers (config, components, utilities)
- ✅ Utilisation partielle de Bretzel pour les layouts simples

---

_Audit réalisé le 5 octobre 2025 selon [Guidelines CSS Alsacréations](https://github.com/alsacreations/kiwipedia/blob/main/guidelines/css.md)_
