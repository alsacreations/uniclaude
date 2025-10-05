# Rapport d'Accessibilité - UniClaude

## ✅ Conformité aux Guidelines Alsacréations

Ce document détaille les améliorations d'accessibilité appliquées à l'application UniClaude selon les [Guidelines d'accessibilité Alsacréations](https://github.com/alsacreations/kiwipedia/blob/main/guidelines/accessibility.md).

---

## Checklist Niveau 1 (base) 🥈

### HTML

#### ✅ Standards et Validation

- [x] Code HTML5 valide
- [x] Attribut `lang="fr"` sur `<html>`
- [x] Titre `<title>` pertinent et descriptif
- [x] Hiérarchie des titres respectée avec un `<h1>` unique

#### ✅ Landmarks ARIA

- [x] `<header role="banner">` pour l'en-tête principal
- [x] `<main role="main" id="main" tabindex="-1">` pour le contenu principal
- [x] `<footer role="contentinfo">` pour le pied de page
- [x] `<section role="search">` pour la zone de recherche avec `aria-label`

#### ✅ Navigation et Focus

- [x] **Lien d'évitement** (skip link) : "Aller au contenu principal"

  ```html
  <a href="#main" class="skip-link">Aller au contenu principal</a>
  ```

- [x] **Navigation optimisée au clavier** : Pattern de grille accessible (Grid Pattern)
  - Un seul élément tabbable dans la grille (tabindex="0" sur le premier, "-1" sur les autres)
  - Navigation par **flèches** (↑↓←→) entre les caractères
  - **Home/End** pour aller au début/fin de la grille
  - **Enter/Espace** pour copier un caractère
  - Indication visuelle de l'aide clavier avec `<kbd>`
- [x] Tabulation cohérente sur tous les éléments interactifs
- [x] Tous les boutons sont des vrais `<button>` éléments

#### ✅ Liens

- [x] Intitulés explicites pour tous les liens
- [x] Indication d'ouverture dans nouvelle fenêtre :

  ```html
  <a
    href="..."
    target="_blank"
    aria-label="Unicode.org (ouvre une nouvelle fenêtre)"
  ></a>
  ```

#### ✅ Formulaires

- [x] Label associé au champ de recherche (avec classe `visually-hidden`)
- [x] `autocomplete="off"` approprié pour le champ de recherche
- [x] Bouton "Effacer" avec `aria-label="Effacer la recherche"`

---

### CSS

#### ✅ Focus et Outline

- [x] **Pas de `outline: none` sans alternative** ❌ → ✅ Corrigé
- [x] Utilisation de `:focus-visible` pour gérer le focus clavier vs souris :

  ```css
  .char-card:focus:not(:focus-visible) {
    outline: none;
  }

  .char-card:focus-visible {
    outline: 3px solid var(--primary-color);
    outline-offset: 2px;
  }
  ```

#### ✅ Tailles de polices fluides

- [x] Utilisation de `rem` et `em` pour permettre l'agrandissement

#### ✅ Zoom et Responsive

- [x] Viewport correct sans `user-scalable=0`
- [x] Support du zoom jusqu'à 200%
- [x] Pas de hauteurs fixes empêchant l'affichage du contenu zoomé

#### ✅ Contenu masqué accessible

- [x] Classe `.visually-hidden` implémentée pour masquer visuellement mais garder accessible aux lecteurs d'écran

  ```css
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  ```

#### ✅ Skip Link

- [x] Lien d'évitement masqué par défaut, visible au focus

  ```css
  .skip-link {
    position: absolute;
    top: -40px;
    /* ... */
  }

  .skip-link:focus {
    top: 0;
  }
  ```

---

### Médias et Images

#### ✅ SVG et émojis

- [x] Émojis décoratifs dans le titre (🦄)
- [x] Caractère "␣" pour visualiser les espaces marqué `aria-hidden="true"`

---

### JavaScript et Composants

#### ✅ Boutons de caractères

- [x] Conversion de `<div>` en `<button type="button">` pour une meilleure sémantique
- [x] Labels accessibles avec `aria-label` :

  ```javascript
  aria-label="Copier SPACE, code 0020, entité &#32;"
  ```

- [x] Contenu visuel marqué `aria-hidden="true"` pour éviter la duplication

#### ✅ ARIA Live Regions

- [x] Notification de copie avec `role="status" aria-live="polite" aria-atomic="true"`
- [x] Statistiques avec `role="status" aria-live="polite"`
- [x] Spinner de chargement avec `role="status" aria-live="polite"`

#### ✅ Grille de caractères

- [x] Zone avec `role="grid"` conforme au [Grid Pattern WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)
- [x] Navigation par flèches implémentée en JavaScript
- [x] `aria-describedby` pointant vers l'aide clavier
- [x] Gestion du focus roving (tabindex dynamique)

#### ✅ Pattern de Navigation au Clavier

**Problème résolu** : Avec 500+ boutons affichés, la tabulation serait très laborieuse.

**Solution implémentée** : Grid Pattern accessible

```javascript
// Un seul bouton tabbable (le premier)
card.setAttribute("tabindex", index === 0 ? "0" : "-1");

// Navigation par flèches entre les boutons
// ← → : caractère précédent/suivant
// ↑ ↓ : ligne précédente/suivante
// Home : premier caractère
// End : dernier caractère
```

**Avantages** :

- ✅ Navigation rapide et efficace
- ✅ Conforme aux WAI-ARIA Authoring Practices
- ✅ Expérience utilisateur optimale au clavier
- ✅ Aide visuelle intégrée pour les utilisateurs

---

## Niveau d'Accessibilité Atteint

### 🥈 Niveau 1 - Conformité Partielle RGAA

L'application respecte les critères de base du niveau 1 :

- ✅ Structure HTML sémantique
- ✅ Navigation au clavier complète
- ✅ Focus visible et géré correctement
- ✅ Landmarks ARIA
- ✅ Lien d'évitement
- ✅ ARIA live regions pour les contenus dynamiques

### Points d'attention restants

#### Pour un Niveau 2 (🥇)

- [ ] Test avec lecteur d'écran (NVDA, JAWS, VoiceOver)
- [ ] Validation complète WCAG 2.1 AA
- [ ] Ajout d'un plugin de personnalisation (AccessConfig / Orange Confort+)

---

## Tests Recommandés

### Outils de vérification

1. **Extensions navigateur** :

   - Wave Browser Extension
   - Axe DevTools
   - HeadingsMap

2. **Tests manuels** :

   - ✅ Navigation complète au clavier (Tab, Shift+Tab, Enter, Espace)
   - ✅ Test du lien d'évitement
   - ✅ Zoom jusqu'à 200%
   - ✅ Désactivation de JavaScript (dégradation gracieuse partielle)

3. **Lecteurs d'écran** :
   - NVDA (Windows)
   - VoiceOver (macOS : Cmd+Fn+F5)
   - JAWS (Windows)

---

## Résumé des Améliorations Appliquées

| Élément               | Avant              | Après                                      |
| --------------------- | ------------------ | ------------------------------------------ |
| Outline sur focus     | `outline: none` ❌ | `:focus-visible` ✅                        |
| Boutons de caractères | `<div>` cliquable  | `<button>` avec aria-label ✅              |
| Landmarks             | Aucun              | `role="banner/main/contentinfo/search"` ✅ |
| Lien d'évitement      | Absent             | Skip link implémenté ✅                    |
| Label de recherche    | Placeholder seul   | `<label>` + placeholder ✅                 |
| Notification          | Simple div         | `role="status" aria-live` ✅               |
| Lien externe          | Pas d'indication   | `aria-label` avec info ✅                  |

---

## Conformité Globale

### ✅ Conforme

- Structure HTML sémantique
- Navigation au clavier
- Focus visible
- Labels et alternatives textuelles
- ARIA approprié

### ⚠️ À tester

- Lecteurs d'écran
- Contraste des couleurs (à valider avec outil)
- Cas d'usage réels avec utilisateurs

### 📝 Recommandations futures

- Ajouter des tests unitaires d'accessibilité
- Intégrer un outil de CI/CD pour validation auto (pa11y, axe-core)
- Documentation utilisateur sur les raccourcis clavier

---

_Dernière mise à jour : 5 octobre 2025_
