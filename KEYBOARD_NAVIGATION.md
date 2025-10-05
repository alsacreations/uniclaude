# Navigation au Clavier - Documentation

## 🎯 Problème Identifié

Avec **500+ boutons de caractères** affichés simultanément, utiliser la touche `Tab` pour naviguer entre eux serait :

- ❌ **Très lent** : il faudrait appuyer 500 fois sur Tab
- ❌ **Frustrant** pour les utilisateurs au clavier
- ❌ **Non conforme** aux bonnes pratiques d'accessibilité

## ✅ Solution Implémentée : Grid Pattern

Nous avons implémenté le **[Grid Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)** recommandé par WAI-ARIA Authoring Practices.

### Principe

1. **Un seul élément "tabbable"** dans la grille (le premier bouton)
2. **Navigation par flèches** entre les éléments
3. **Raccourcis** Home/End pour aller au début/fin

### Touches Supportées

| Touche              | Action                                             |
| ------------------- | -------------------------------------------------- |
| `Tab`               | Entrer dans la grille (focus le premier caractère) |
| `→`                 | Caractère suivant (à droite)                       |
| `←`                 | Caractère précédent (à gauche)                     |
| `↓`                 | Ligne suivante (en bas)                            |
| `↑`                 | Ligne précédente (en haut)                         |
| `Home`              | Premier caractère de la grille                     |
| `End`               | Dernier caractère de la grille                     |
| `Enter` ou `Espace` | Copier le caractère                                |
| `Shift+Tab`         | Sortir de la grille (retour vers les filtres)      |

### Implémentation Technique

#### HTML

```html
<!-- Aide visuelle pour les utilisateurs -->
<div class="keyboard-help">
  Navigation au clavier : Utilisez les <kbd>flèches</kbd>...
</div>

<!-- Grille avec role approprié -->
<div role="grid" aria-describedby="keyboardHelp">
  <!-- Boutons générés en JS -->
</div>
```

#### JavaScript - Gestion du Tabindex

```javascript
// Seul le premier bouton est tabbable
card.setAttribute("tabindex", index === 0 ? "0" : "-1");
```

#### JavaScript - Navigation par Flèches

```javascript
charactersGrid.addEventListener("keydown", (e) => {
  const cards = Array.from(charactersGrid.querySelectorAll(".char-card"));
  const currentIndex = parseInt(e.target.getAttribute("data-index"));

  switch (e.key) {
    case "ArrowRight": // Suivant
      targetIndex = Math.min(currentIndex + 1, cards.length - 1);
      break;
    case "ArrowLeft": // Précédent
      targetIndex = Math.max(currentIndex - 1, 0);
      break;
    case "ArrowDown": // Ligne suivante
      targetIndex = Math.min(currentIndex + colonnes, cards.length - 1);
      break;
    case "ArrowUp": // Ligne précédente
      targetIndex = Math.max(currentIndex - colonnes, 0);
      break;
    // ...
  }

  // Déplacer le focus
  cards[targetIndex].focus();
});
```

#### Technique du "Roving Tabindex"

La technique du **roving tabindex** consiste à :

1. Avoir un seul élément avec `tabindex="0"` (celui qui a le focus)
2. Tous les autres ont `tabindex="-1"` (focusables mais pas tabbables)
3. Quand on navigue avec les flèches :
   - L'ancien élément passe à `tabindex="-1"`
   - Le nouvel élément passe à `tabindex="0"`
   - On déplace le focus avec `.focus()`

### Avantages

✅ **Navigation rapide et intuitive**

- Parcourir rapidement les caractères
- Pattern familier pour les utilisateurs de lecteurs d'écran

✅ **Conforme aux standards**

- WAI-ARIA Authoring Practices Guide
- WCAG 2.1 / RGAA 4.1

✅ **Accessible**

- Compatible avec les lecteurs d'écran
- Fonctionne avec tous les navigateurs modernes

✅ **Expérience utilisateur optimale**

- Navigation naturelle et efficace
- Aide visuelle intégrée

## 🧪 Tests

### Test Manuel au Clavier

1. **Entrer dans la grille**

   - Appuyez sur `Tab` depuis le champ de recherche ou les filtres
   - Le premier caractère devrait être surligné

2. **Navigation**

   - Utilisez les flèches pour vous déplacer
   - Vérifiez que le focus se déplace correctement

3. **Copie**

   - Appuyez sur `Enter` ou `Espace` sur un caractère
   - Vérifiez qu'une notification apparaît

4. **Sortir**
   - Appuyez sur `Shift+Tab`
   - Le focus devrait revenir aux filtres

### Test avec Lecteur d'Écran

**NVDA (Windows)** :

- Mode navigation : Les flèches fonctionnent directement
- Mode formulaire : Passer en mode formulaire avec `Insert+Espace`

**VoiceOver (macOS)** :

- Activer avec `Cmd+F5`
- Naviguer avec `Ctrl+Option+flèches`

**JAWS (Windows)** :

- Mode formulaire : `Enter` sur la grille
- Naviguer avec les flèches

## 📚 Références

- [WAI-ARIA Authoring Practices - Grid Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)
- [MDN - Managing Focus](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- [Inclusive Components - Data Tables](https://inclusive-components.design/data-tables/)
- [A11y Style Guide - Keyboard Navigation](https://a11y-style-guide.com/style-guide/section-general.html#kssref-general-keyboard-navigation)

## 🔄 Améliorations Futures Possibles

- [ ] Sauvegarde de la position du focus lors du filtrage
- [ ] Navigation par caractère (appuyer sur une lettre pour sauter à cette section)
- [ ] Support de `Page Up` / `Page Down` pour sauter plusieurs lignes
- [ ] Mode de sélection multiple (avec `Shift` ou `Ctrl`)

---

_Dernière mise à jour : 5 octobre 2025_
