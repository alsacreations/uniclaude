# 🦄 UniClaude

**Explorateur de caractères Unicode** - Assistant unicode pour les humains

Application web pour rechercher, explorer et copier facilement plus de 10 000 caractères Unicode.

[![Accessibilité](https://img.shields.io/badge/Accessibilit%C3%A9-WCAG%202.1%20AA-brightgreen)](./ACCESSIBILITY.md)
[![Contraste](https://img.shields.io/badge/Contraste-100%25%20AA-brightgreen)](./COLOR_CONTRAST_ANALYSIS.md)
[![HTML5](https://img.shields.io/badge/HTML5-native-orange)](https://www.w3.org/TR/html52/)
[![CSS3](https://img.shields.io/badge/CSS3-native-blue)](https://www.w3.org/Style/CSS/)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-yellow)](https://developer.mozilla.org/fr/docs/Web/JavaScript)

---

## ✨ Fonctionnalités

- 🔍 **Recherche multi-critères** : par caractère, nom Unicode, code hexadécimal, entité HTML, ou bloc
- 📋 **Copie en un clic** : cliquez sur n'importe quel caractère pour le copier dans votre presse-papier
- 🏷️ **Informations complètes** : code Unicode (hexa), entité HTML, et nom du caractère
- 🎨 **Interface moderne** : design dark mode responsive et accessible
- ♿ **Accessible** : conforme aux guidelines WCAG et RGAA niveau 1
- 🚀 **Zéro dépendance** : HTML/CSS/JS natifs uniquement

---

## 📦 Blocs Unicode Inclus

Plus de **80 blocs Unicode** couverts, incluant :

- **Scripts** : Latin (base et étendus), Grec, Cyrillique, Arabe, Hébreu, scripts asiatiques...
- **Ponctuation** : générale, typographique, espaces variés
- **Symboles** : mathématiques, monétaires, flèches, formes géométriques
- **Emojis** : emoticons, symboles divers, transport, drapeaux
- **Spéciaux** : exposants, indices, fractions, chiffres romains

---

## 🚀 Utilisation

### Installation Locale

1. Clonez le repository :

```bash
git clone https://github.com/alsacreations/uniclaude.git
cd uniclaude
```

2. Ouvrez `index.html` dans votre navigateur, ou lancez un serveur local :

```bash
# Python 3
python3 -m http.server 8000

# Node.js avec http-server
npx http-server
```

3. Accédez à `http://localhost:8000`

### Navigation

#### Recherche

- Tapez dans le champ de recherche pour filtrer par :
  - Caractère : `€`, `→`, `♥`
  - Nom : `euro`, `arrow`, `heart`
  - Code hexa : `20AC`, `2192`
  - Entité HTML : `&euro;`, `&#8364;`

#### Filtres

- Sélectionnez un bloc Unicode dans le menu déroulant pour affiner les résultats

#### Copie

- Cliquez sur n'importe quelle carte de caractère pour copier le caractère
- Une notification confirme la copie

---

## ♿ Accessibilité

UniClaude est développé selon les **Guidelines d'accessibilité Alsacréations** et vise la conformité **RGAA niveau 1**.

### Fonctionnalités d'accessibilité

✅ **Navigation au clavier complète**

- `Tab` / `Shift+Tab` : navigation entre les éléments
- `Enter` ou `Espace` : activation des boutons
- Lien d'évitement : "Aller au contenu principal"

✅ **Focus visible**

- Contours clairs sur tous les éléments interactifs
- Utilisation de `:focus-visible` pour ne pas gêner la navigation à la souris

✅ **Sémantique HTML**

- Structure avec landmarks ARIA (`banner`, `main`, `contentinfo`, `search`)
- Titres hiérarchisés
- Boutons appropriés pour les actions

✅ **ARIA**

- Labels accessibles sur tous les contrôles
- Live regions pour les notifications et mises à jour dynamiques
- Rôles et propriétés appropriés

✅ **Design inclusif**

- Tailles de police fluides (rem/em)
- Support du zoom jusqu'à 200%
- **Contrastes de couleurs WCAG 2.1 AA conformes** ✅

📄 Documentation détaillée :

- [Rapport d'accessibilité complet](./ACCESSIBILITY.md)
- [Analyse des contrastes de couleurs](./COLOR_CONTRAST_ANALYSIS.md)
- [Documentation navigation clavier](./KEYBOARD_NAVIGATION.md)

---

## 🛠️ Technologies

- **HTML5** : Structure sémantique
- **CSS3** : Grid, Flexbox, variables CSS, focus-visible
- **JavaScript Vanilla** : Aucune dépendance externe
- **Unicode 15.1** : Base de données des caractères

---

## 📁 Structure du Projet

```
uniclaude/
├── index.html          # Structure HTML principale
├── styles.css          # Styles et design
├── app.js             # Logique JavaScript
├── README.md          # Ce fichier
├── ACCESSIBILITY.md   # Rapport d'accessibilité
└── LICENSE            # Licence du projet
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Veuillez suivre les guidelines :

1. **Accessibilité** : tout ajout doit respecter les [guidelines d'accessibilité](https://github.com/alsacreations/kiwipedia/blob/main/guidelines/accessibility.md)
2. **Code** : maintenir le style existant (HTML/CSS/JS natifs)
3. **Tests** : tester la navigation au clavier et avec lecteur d'écran

---

## 📝 TODO / Roadmap

- [ ] Ajouter plus de blocs Unicode (CJK, scripts rares...)
- [ ] Améliorer les noms de caractères (base plus complète)
- [ ] Option de copie multiple (sélection)
- [ ] Export de favoris
- [ ] Mode d'affichage alternatif (liste vs grille)
- [ ] Tests automatisés d'accessibilité (pa11y, axe-core)
- [ ] Thème clair en option
- [ ] PWA pour utilisation hors-ligne

---

## 📜 Licence

MIT License - voir [LICENSE](./LICENSE)

---

## 👥 Crédits

Développé par [Alsacréations](https://www.alsacreations.fr/)

Données Unicode © Unicode, Inc.

---

## 🔗 Ressources

- [Consortium Unicode](https://unicode.org/)
- [Unicode Character Database](https://www.unicode.org/Public/UCD/latest/)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [RGAA 4.1](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)
- [Guidelines Alsacréations](https://github.com/alsacreations/kiwipedia/blob/main/guidelines/accessibility.md)
