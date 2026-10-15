// ===== Configuration des blocs Unicode =====
const UNICODE_BLOCKS = [
  { name: "Basic Latin", start: 0x0020, end: 0x007f },
  { name: "Latin-1 Supplement", start: 0x0080, end: 0x00ff },
  { name: "Latin Extended-A", start: 0x0100, end: 0x017f },
  { name: "Latin Extended-B", start: 0x0180, end: 0x024f },
  { name: "Latin Extended Additional", start: 0x1e00, end: 0x1eff },
  { name: "IPA Extensions", start: 0x0250, end: 0x02af },
  { name: "Spacing Modifier Letters", start: 0x02b0, end: 0x02ff },
  { name: "Combining Diacritical Marks", start: 0x0300, end: 0x036f },
  { name: "Greek and Coptic", start: 0x0370, end: 0x03ff },
  { name: "Cyrillic", start: 0x0400, end: 0x04ff },
  { name: "Cyrillic Supplement", start: 0x0500, end: 0x052f },
  { name: "Armenian", start: 0x0530, end: 0x058f },
  { name: "Hebrew", start: 0x0590, end: 0x05ff },
  { name: "Arabic", start: 0x0600, end: 0x06ff },
  { name: "Syriac", start: 0x0700, end: 0x074f },
  { name: "Thaana", start: 0x0780, end: 0x07bf },
  { name: "Devanagari", start: 0x0900, end: 0x097f },
  { name: "Bengali", start: 0x0980, end: 0x09ff },
  { name: "Gurmukhi", start: 0x0a00, end: 0x0a7f },
  { name: "Gujarati", start: 0x0a80, end: 0x0aff },
  { name: "Oriya", start: 0x0b00, end: 0x0b7f },
  { name: "Tamil", start: 0x0b80, end: 0x0bff },
  { name: "Telugu", start: 0x0c00, end: 0x0c7f },
  { name: "Kannada", start: 0x0c80, end: 0x0cff },
  { name: "Malayalam", start: 0x0d00, end: 0x0d7f },
  { name: "Thai", start: 0x0e00, end: 0x0e7f },
  { name: "Lao", start: 0x0e80, end: 0x0eff },
  { name: "Tibetan", start: 0x0f00, end: 0x0fff },
  { name: "Georgian", start: 0x10a0, end: 0x10ff },
  { name: "Hangul Jamo", start: 0x1100, end: 0x11ff },
  { name: "Runic", start: 0x16a0, end: 0x16ff },
  { name: "General Punctuation", start: 0x2000, end: 0x206f },
  { name: "Superscripts and Subscripts", start: 0x2070, end: 0x209f },
  { name: "Currency Symbols", start: 0x20a0, end: 0x20cf },
  {
    name: "Combining Diacritical Marks for Symbols",
    start: 0x20d0,
    end: 0x20ff,
  },
  { name: "Letterlike Symbols", start: 0x2100, end: 0x214f },
  { name: "Number Forms", start: 0x2150, end: 0x218f },
  { name: "Arrows", start: 0x2190, end: 0x21ff },
  { name: "Mathematical Operators", start: 0x2200, end: 0x22ff },
  { name: "Miscellaneous Technical", start: 0x2300, end: 0x23ff },
  { name: "Control Pictures", start: 0x2400, end: 0x243f },
  { name: "Optical Character Recognition", start: 0x2440, end: 0x245f },
  { name: "Enclosed Alphanumerics", start: 0x2460, end: 0x24ff },
  { name: "Box Drawing", start: 0x2500, end: 0x257f },
  { name: "Block Elements", start: 0x2580, end: 0x259f },
  { name: "Geometric Shapes", start: 0x25a0, end: 0x25ff },
  { name: "Miscellaneous Symbols", start: 0x2600, end: 0x26ff },
  { name: "Dingbats", start: 0x2700, end: 0x27bf },
  { name: "Supplemental Arrows-A", start: 0x27f0, end: 0x27ff },
  { name: "Braille Patterns", start: 0x2800, end: 0x28ff },
  { name: "Supplemental Arrows-B", start: 0x2900, end: 0x297f },
  { name: "Miscellaneous Mathematical Symbols-A", start: 0x27c0, end: 0x27ef },
  { name: "Miscellaneous Mathematical Symbols-B", start: 0x2980, end: 0x29ff },
  {
    name: "Supplemental Mathematical Operators",
    start: 0x2a00,
    end: 0x2aff,
  },
  { name: "Miscellaneous Symbols and Arrows", start: 0x2b00, end: 0x2bff },
  { name: "CJK Radicals Supplement", start: 0x2e80, end: 0x2eff },
  { name: "Hiragana", start: 0x3040, end: 0x309f },
  { name: "Katakana", start: 0x30a0, end: 0x30ff },
  { name: "Bopomofo", start: 0x3100, end: 0x312f },
  { name: "Hangul Compatibility Jamo", start: 0x3130, end: 0x318f },
  { name: "CJK Symbols and Punctuation", start: 0x3000, end: 0x303f },
  { name: "Enclosed CJK Letters and Months", start: 0x3200, end: 0x32ff },
  { name: "CJK Compatibility", start: 0x3300, end: 0x33ff },
  { name: "Tai Xuan Jing Symbols", start: 0x1d300, end: 0x1d35f },
  { name: "Playing Cards", start: 0x1f0a0, end: 0x1f0ff },
  { name: "Mahjong Tiles", start: 0x1f000, end: 0x1f02f },
  { name: "Domino Tiles", start: 0x1f030, end: 0x1f09f },
  { name: "Emoticons", start: 0x1f600, end: 0x1f64f },
  {
    name: "Miscellaneous Symbols and Pictographs",
    start: 0x1f300,
    end: 0x1f5ff,
  },
  {
    name: "Transport and Map Symbols",
    start: 0x1f680,
    end: 0x1f6ff,
  },
  {
    name: "Supplemental Symbols and Pictographs",
    start: 0x1f900,
    end: 0x1f9ff,
  },
  { name: "Flags", start: 0x1f1e6, end: 0x1f1ff },
  { name: "Alchemical Symbols", start: 0x1f700, end: 0x1f77f },
  { name: "Geometric Shapes Extended", start: 0x1f780, end: 0x1f7ff },
  { name: "Supplemental Arrows-C", start: 0x1f800, end: 0x1f8ff },
  { name: "Enclosed Alphanumeric Supplement", start: 0x1f100, end: 0x1f1e5 },
  { name: "Enclosed Ideographic Supplement", start: 0x1f200, end: 0x1f2ff },
  {
    name: "Symbols and Pictographs Extended-A",
    start: 0x1fa70,
    end: 0x1faff,
  },
];

// ===== Dictionnaire de mots-clés français → anglais pour la recherche =====
const FR_TO_EN_KEYWORDS = {
  // Émotions et expressions
  coeur: "heart",
  cœur: "heart",
  amour: "love heart",
  sourire: "smile",
  rire: "laugh smile joy",
  triste: "sad cry",
  pleure: "cry tear",
  clin: "wink",
  bisou: "kiss",
  bise: "kiss",
  colere: "angry rage",
  colère: "angry rage",
  peur: "fear scared",
  surpris: "surprise shock",
  content: "happy joy smile",

  // Symboles et formes
  etoile: "star",
  étoile: "star",
  fleche: "arrow",
  flèche: "arrow",
  cercle: "circle",
  carre: "square",
  carré: "square",
  triangle: "triangle",
  croix: "cross",
  plus: "plus",
  moins: "minus",
  egale: "equal",
  égale: "equal",
  infini: "infinity",
  pourcent: "percent",
  diese: "sharp number",
  dièse: "sharp number",

  // Nature et météo
  soleil: "sun",
  lune: "moon",
  nuage: "cloud",
  pluie: "rain",
  neige: "snow",
  eclair: "lightning",
  éclair: "lightning",
  "arc-en-ciel": "rainbow",
  arbre: "tree",
  fleur: "flower",
  feuille: "leaf",
  rose: "rose",
  tulipe: "tulip",

  // Animaux
  chat: "cat",
  chien: "dog",
  oiseau: "bird",
  poisson: "fish",
  papillon: "butterfly",
  abeille: "bee",
  cheval: "horse",
  vache: "cow",
  cochon: "pig",
  mouton: "sheep",
  lapin: "rabbit",
  souris: "mouse",
  elephant: "elephant",
  éléphant: "elephant",
  lion: "lion",
  tigre: "tiger",
  singe: "monkey",
  serpent: "snake",

  // Corps humain
  main: "hand",
  doigt: "finger",
  pouce: "thumb",
  poing: "fist",
  bras: "arm",
  jambe: "leg",
  pied: "foot",
  tete: "head",
  tête: "head",
  visage: "face",
  oeil: "eye",
  œil: "eye",
  yeux: "eye eyes",
  oreille: "ear",
  nez: "nose",
  bouche: "mouth",
  langue: "tongue",
  dent: "tooth",
  cheveux: "hair",
  muscle: "muscle",
  os: "bone",
  cerveau: "brain",
  corps: "body",

  // Nourriture et boissons
  pomme: "apple",
  banane: "banana",
  raisin: "grape",
  orange: "orange",
  fraise: "strawberry",
  cerise: "cherry",
  pasteque: "watermelon",
  pastèque: "watermelon",
  melon: "melon",
  citron: "lemon",
  peche: "peach",
  pêche: "peach",
  poire: "pear",
  ananas: "pineapple",
  kiwi: "kiwi",
  mangue: "mango",
  avocat: "avocado",
  tomate: "tomato",
  carotte: "carrot",
  salade: "salad lettuce",
  brocoli: "broccoli",
  mais: "corn",
  maïs: "corn",
  champignon: "mushroom",
  gateau: "cake",
  gâteau: "cake",
  pain: "bread",
  croissant: "croissant",
  baguette: "baguette bread",
  sandwich: "sandwich",
  fromage: "cheese",
  pizza: "pizza",
  hamburger: "burger hamburger",
  frites: "fries",
  "hot-dog": "hotdog",
  taco: "taco",
  burrito: "burrito",
  sushi: "sushi",
  riz: "rice",
  pates: "pasta",
  pâtes: "pasta",
  spaghetti: "spaghetti",
  soupe: "soup",
  oeuf: "egg",
  œuf: "egg",
  poulet: "chicken poultry",
  viande: "meat",
  steak: "steak",
  bacon: "bacon",
  saucisse: "sausage",
  popcorn: "popcorn",
  chocolat: "chocolate",
  bonbon: "candy sweet",
  sucette: "lollipop",
  glace: "ice cream",
  biscuit: "cookie biscuit",
  donut: "doughnut donut",
  tarte: "pie tart",
  miel: "honey",
  confiture: "jam",
  beurre: "butter",
  sel: "salt",
  poivre: "pepper",
  cafe: "coffee",
  café: "coffee",
  the: "tea",
  thé: "tea",
  lait: "milk",
  jus: "juice",
  eau: "water",
  soda: "soda",
  biere: "beer",
  bière: "beer",
  vin: "wine",
  champagne: "champagne",
  cocktail: "cocktail",
  verre: "glass",
  bouteille: "bottle",
  tasse: "cup",
  fourchette: "fork",
  couteau: "knife",
  cuillere: "spoon",
  cuillère: "spoon",
  assiette: "plate",

  // Transports et véhicules
  voiture: "car automobile",
  auto: "car automobile",
  taxi: "taxi",
  bus: "bus",
  camion: "truck lorry",
  ambulance: "ambulance",
  police: "police",
  pompier: "fire engine truck",
  tracteur: "tractor",
  moto: "motorcycle",
  scooter: "scooter",
  velo: "bicycle bike",
  vélo: "bicycle bike",
  vtt: "mountain bike",
  trottinette: "scooter kick",
  skateboard: "skateboard",
  roller: "roller skate",
  train: "train",
  metro: "metro subway",
  métro: "metro subway",
  tram: "tram",
  tramway: "tram",
  avion: "airplane plane aircraft",
  helicoptere: "helicopter",
  hélicoptère: "helicopter",
  fusee: "rocket",
  fusée: "rocket",
  satellite: "satellite",
  ovni: "ufo flying saucer",
  bateau: "boat ship",
  navire: "ship",
  voilier: "sailboat",
  yacht: "yacht",
  ferry: "ferry",
  paquebot: "cruise ship",
  "sous-marin": "submarine",
  ancre: "anchor",

  // Contexte transport aérien
  fly: "airplane plane aircraft",
  flying: "airplane plane aircraft",
  wing: "airplane plane aircraft",
  voler: "airplane plane aircraft bird",
  aile: "airplane plane aircraft bird wing",
  vol: "flight airplane plane",

  // Objets du quotidien
  maison: "house home",
  telephone: "telephone phone",
  téléphone: "telephone phone",
  portable: "mobile phone",
  smartphone: "smartphone",
  ordinateur: "computer",
  laptop: "laptop",
  tablette: "tablet",
  clavier: "keyboard",
  souris: "mouse",
  ecran: "screen",
  écran: "screen",
  imprimante: "printer",
  scanner: "scanner",
  usb: "usb",
  disque: "disk",
  cd: "cd disc",
  dvd: "dvd",
  batterie: "battery",
  chargeur: "charger",
  cable: "cable",
  câble: "cable",
  prise: "plug socket",
  ampoule: "bulb light",
  lampe: "lamp",
  bougie: "candle",
  feu: "fire",
  lumiere: "light",
  lumière: "light",
  livre: "book",
  journal: "newspaper",
  magazine: "magazine",
  page: "page",
  lettre: "letter",
  enveloppe: "envelope",
  timbre: "stamp",
  colis: "package parcel",
  boite: "box",
  boîte: "box",
  crayon: "pencil",
  stylo: "pen",
  gomme: "eraser",
  regle: "ruler",
  règle: "ruler",
  ciseaux: "scissors",
  colle: "glue",
  scotch: "tape",
  agrafe: "staple",
  trombone: "paperclip",
  punaise: "pin thumbtack",
  cle: "key",
  clé: "key",
  cadenas: "lock padlock",
  serrure: "lock",
  porte: "door",
  fenetre: "window",
  fenêtre: "window",
  mur: "wall",
  toit: "roof",
  escalier: "stairs",
  ascenseur: "elevator",
  horloge: "clock",
  reveil: "alarm clock",
  réveil: "alarm clock",
  calendrier: "calendar",
  agenda: "planner agenda",
  poubelle: "trash bin",
  balai: "broom",
  aspirateur: "vacuum",
  fer: "iron",

  // Vêtements et accessoires
  vetement: "clothing clothes",
  vêtement: "clothing clothes",
  chemise: "shirt",
  "t-shirt": "t-shirt tshirt",
  pantalon: "pants trousers",
  jean: "jeans",
  robe: "dress",
  jupe: "skirt",
  manteau: "coat",
  veste: "jacket",
  pull: "sweater",
  gilet: "vest cardigan",
  short: "shorts",
  maillot: "swimsuit jersey",
  bikini: "bikini",
  chaussette: "sock",
  chaussure: "shoe",
  botte: "boot",
  sandale: "sandal",
  talon: "heel",
  basket: "sneaker",
  lunettes: "glasses eyeglasses",
  "lunettes-de-soleil": "sunglasses",
  chapeau: "hat",
  casquette: "cap",
  bonnet: "beanie",
  couronne: "crown",
  echarpe: "scarf",
  écharpe: "scarf",
  gant: "glove",
  ceinture: "belt",
  sac: "bag",
  "sac-a-dos": "backpack",
  valise: "suitcase luggage",
  parapluie: "umbrella",
  cravate: "tie",
  noeud: "bow tie",
  nœud: "bow tie",
  bijou: "jewelry jewel",
  bague: "ring",
  collier: "necklace",
  bracelet: "bracelet",
  boucle: "earring",
  montre: "watch",

  // Musique et divertissement
  musique: "music",
  note: "note musical",
  guitare: "guitar",
  piano: "piano",
  micro: "microphone",
  film: "movie film",
  camera: "camera",
  caméra: "camera",
  jeu: "game",

  // Sports et activités
  sport: "sport",
  ballon: "ball",
  balle: "ball",
  foot: "soccer football",
  football: "soccer football",
  rugby: "rugby",
  basket: "basketball",
  "basket-ball": "basketball",
  tennis: "tennis",
  "tennis-de-table": "ping pong",
  "ping-pong": "ping pong",
  volley: "volleyball",
  "volley-ball": "volleyball",
  handball: "handball",
  baseball: "baseball",
  cricket: "cricket",
  hockey: "hockey",
  golf: "golf",
  bowling: "bowling",
  boxe: "boxing",
  karate: "karate",
  judo: "judo",
  lutte: "wrestling",
  escrime: "fencing",
  tir: "archery shooting",
  "tir-a-arc": "archery",
  course: "running race",
  marathon: "marathon",
  sprint: "sprint",
  saut: "jump",
  natation: "swimming",
  plongee: "diving",
  plongée: "diving",
  surf: "surfing surf",
  ski: "ski skiing",
  snowboard: "snowboard",
  patinage: "skating",
  patin: "skate",
  escalade: "climbing",
  randonnee: "hiking",
  randonnée: "hiking",
  camping: "camping",
  peche: "fishing",
  pêche: "fishing",
  yoga: "yoga",
  musculation: "weightlifting",
  fitness: "fitness",
  gymnastique: "gymnastics",
  danse: "dance",
  medaille: "medal",
  médaille: "medal",
  trophee: "trophy",
  trophée: "trophy",
  coupe: "cup trophy",

  // Lieux et bâtiments
  batiment: "building",
  bâtiment: "building",
  construction: "construction building",
  maison: "house home",
  appartement: "apartment",
  immeuble: "building",
  villa: "villa",
  cabane: "hut cabin",
  tente: "tent",
  igloo: "igloo",
  ecole: "school",
  école: "school",
  universite: "university",
  université: "university",
  college: "college",
  collège: "college",
  lycee: "high school",
  lycée: "high school",
  bibliotheque: "library",
  bibliothèque: "library",
  musee: "museum",
  musée: "museum",
  galerie: "gallery",
  theatre: "theater",
  théâtre: "theater",
  cinema: "cinema movie theater",
  cinéma: "cinema movie theater",
  hopital: "hospital",
  hôpital: "hospital",
  clinique: "clinic",
  pharmacie: "pharmacy",
  eglise: "church",
  église: "church",
  cathedrale: "cathedral",
  cathédrale: "cathedral",
  mosquee: "mosque",
  mosquée: "mosque",
  synagogue: "synagogue",
  temple: "temple",
  hotel: "hotel",
  hôtel: "hotel",
  motel: "motel",
  auberge: "inn hostel",
  restaurant: "restaurant",
  cafe: "cafe",
  café: "cafe",
  bar: "bar",
  boulangerie: "bakery",
  patisserie: "pastry shop",
  pâtisserie: "pastry shop",
  boucherie: "butcher",
  epicerie: "grocery",
  épicerie: "grocery",
  supermarche: "supermarket",
  supermarché: "supermarket",
  marche: "market",
  marché: "market",
  banque: "bank",
  magasin: "shop store",
  boutique: "shop boutique",
  centre: "center mall",
  usine: "factory",
  bureau: "office",
  entreprise: "company business",
  aeroport: "airport",
  aéroport: "airport",
  gare: "station",
  port: "port harbor",
  stade: "stadium",
  piscine: "swimming pool",
  parc: "park",
  jardin: "garden",
  zoo: "zoo",
  aquarium: "aquarium",
  cirque: "circus",
  chateau: "castle",
  château: "castle",
  palais: "palace",
  fort: "fort",
  tour: "tower",
  pyramide: "pyramid",
  statue: "statue",
  monument: "monument",
  fontaine: "fountain",
  pont: "bridge",
  tunnel: "tunnel",
  route: "road",
  rue: "street",
  avenue: "avenue",
  boulevard: "boulevard",
  autoroute: "highway motorway",
  carrefour: "crossroad intersection",
  parking: "parking",
  ville: "city town",
  village: "village",
  campagne: "countryside",
  montagne: "mountain",
  colline: "hill",
  vallee: "valley",
  vallée: "valley",
  plage: "beach",
  mer: "sea",
  ocean: "ocean",
  océan: "ocean",
  lac: "lake",
  riviere: "river",
  rivière: "river",
  fleuve: "river",
  foret: "forest",
  forêt: "forest",
  desert: "desert",
  désert: "desert",
  ile: "island",
  île: "island",
  volcan: "volcano",
  grotte: "cave",
  cascade: "waterfall",

  // Direction et navigation
  haut: "up top",
  bas: "down bottom",
  gauche: "left",
  droite: "right",
  nord: "north",
  sud: "south",
  est: "east",
  ouest: "west",

  // Couleurs
  rouge: "red",
  bleu: "blue",
  vert: "green",
  jaune: "yellow",
  noir: "black",
  blanc: "white",
  gris: "gray grey",
  rose: "pink",
  violet: "purple violet",
  orange: "orange",
  marron: "brown",

  // Nombres et mathématiques
  zero: "zero",
  zéro: "zero",
  un: "one",
  deux: "two",
  trois: "three",
  quatre: "four",
  cinq: "five",
  six: "six",
  sept: "seven",
  huit: "eight",
  neuf: "nine",
  dix: "ten",
  cent: "hundred",
  mille: "thousand",
  fraction: "fraction",
  moitie: "half",
  moitié: "half",
  tiers: "third",
  quart: "quarter",

  // Ponctuation et symboles typographiques
  // Espaces
  espace: "space",
  "espace-insecable": "no-break space nbsp",
  "espace-insécable": "no-break space nbsp",
  insecable: "no-break space nbsp",
  insécable: "no-break space nbsp",
  "espace-fine": "thin space narrow",
  "espace-fine-insecable": "narrow no-break space",
  "espace-fine-insécable": "narrow no-break space",
  cadratin: "em quad space",
  "demi-cadratin": "en quad space",
  "espace-cadratin": "em space",

  // Points et virgules
  point: "dot period point full stop",
  virgule: "comma",
  "point-virgule": "semicolon",
  "deux-points": "colon",
  "points-de-suspension": "ellipsis horizontal",
  ellipse: "ellipsis",
  suspension: "ellipsis",
  "point-median": "middle dot",
  "point-médian": "middle dot",
  interpunct: "middle dot",
  puce: "bullet",

  // Guillemets et apostrophes
  guillemet: "quote quotation",
  "guillemet-anglais": "quotation mark",
  "guillemet-francais": "angle quotation",
  "guillemet-français": "angle quotation",
  chevron: "angle quotation guillemet",
  apostrophe: "apostrophe",
  "apostrophe-typographique": "right single quotation",
  quote: "quotation",
  citation: "quotation",

  // Tirets et traits
  tiret: "dash hyphen",
  "trait-d-union": "hyphen minus",
  "trait-d-union": "hyphen minus",
  "tiret-court": "hyphen",
  "tiret-moyen": "en dash",
  "tiret-long": "em dash",
  "tiret-cadratin": "em dash",
  "tiret-demi-cadratin": "en dash",
  "tiret-insecable": "non-breaking hyphen",
  "tiret-insécable": "non-breaking hyphen",
  trait: "line bar dash",
  "trait-horizontal": "horizontal bar line",
  "trait-vertical": "vertical line bar",
  barre: "bar line slash",
  "barre-oblique": "slash solidus",
  "barre-verticale": "vertical line bar pipe",
  slash: "slash solidus",
  antislash: "reverse solidus backslash",

  // Parenthèses et crochets
  parenthese: "parenthesis",
  parenthèse: "parenthesis",
  crochet: "bracket square",
  accolade: "brace curly bracket",
  chevron: "angle bracket",

  // Symboles de ponctuation spéciaux
  arobase: "at commercial",
  esperluette: "ampersand",
  "et-commercial": "ampersand",
  asterisque: "asterisk star",
  diese: "sharp number hash",
  dièse: "sharp number hash",
  croisillon: "number sign hash",
  exclamation: "exclamation mark",
  interrogation: "question mark",
  interrobang: "interrobang",

  // Symboles monétaires
  dollar: "dollar",
  euro: "euro",
  livre: "pound sterling",
  yen: "yen",
  yuan: "yuan",
  cent: "cent",
  centime: "cent",
  florin: "florin",
  peso: "peso",
  roupie: "rupee",
  franc: "franc",

  // Symboles mathématiques et scientifiques
  plus: "plus",
  moins: "minus hyphen",
  fois: "multiplication times",
  multiplier: "multiplication times",
  diviser: "division",
  division: "division slash",
  egale: "equal equals",
  égale: "equal equals",
  egal: "equal equals",
  égal: "equal equals",
  "different-de": "not equal",
  "différent-de": "not equal",
  "inferieur-a": "less than",
  "inférieur-à": "less than",
  "superieur-a": "greater than",
  "supérieur-à": "greater than",
  "inferieur-ou-egal": "less than or equal",
  "inférieur-ou-égal": "less than or equal",
  "superieur-ou-egal": "greater than or equal",
  "supérieur-ou-égal": "greater than or equal",
  approximatif: "approximately almost equal",
  environ: "approximately almost equal",
  identique: "identical equivalent",
  "plus-ou-moins": "plus-minus plus minus",
  "plus-moins": "plus-minus",
  racine: "square root radical",
  infini: "infinity",
  somme: "summation sum",
  produit: "product",
  integral: "integral",
  intégral: "integral",
  partiel: "partial differential",
  nabla: "nabla gradient",
  proportion: "proportion",
  "pour-cent": "percent",
  pourcent: "percent",
  "pour-mille": "per mille thousand",
  permille: "per mille",
  pourcentage: "percent",

  // Symboles scientifiques et techniques
  degre: "degree",
  degré: "degree",
  celsius: "celsius",
  fahrenheit: "fahrenheit",
  kelvin: "kelvin",
  angstrom: "angstrom",
  angström: "angstrom",
  micro: "micro",
  omega: "omega ohm",
  ohm: "ohm",
  ampere: "ampere",
  ampère: "ampere",
  volt: "volt",
  watt: "watt",
  hertz: "hertz",

  // Symboles de référence
  paragraphe: "paragraph pilcrow",
  section: "section",
  alinea: "pilcrow paragraph",
  alinéa: "pilcrow paragraph",
  copyright: "copyright",
  marque: "trademark",
  "marque-deposee": "registered trademark",
  "marque-déposée": "registered trademark",
  enregistre: "registered",
  enregistré: "registered",

  // Flèches typographiques
  fleche: "arrow",
  flèche: "arrow",
  "fleche-gauche": "left arrow",
  "flèche-gauche": "left arrow",
  "fleche-droite": "right arrow",
  "flèche-droite": "right arrow",
  "fleche-haut": "up arrow",
  "flèche-haut": "up arrow",
  "fleche-bas": "down arrow",
  "flèche-bas": "down arrow",

  // Symboles divers
  coche: "check mark tick",
  validation: "check mark",
  croix: "cross multiplication",
  etoile: "star asterisk",
  étoile: "star asterisk",
  coeur: "heart",
  cœur: "heart",
  pique: "spade",
  trefle: "club clover",
  trèfle: "club clover",
  carreau: "diamond",
  note: "note musical",
  "diese-musical": "sharp musical",
  "dièse-musical": "sharp musical",
  bemol: "flat musical",
  bémol: "flat musical",
  becarre: "natural musical",
  bécarre: "natural musical",

  // Drapeaux et pays
  drapeau: "flag",
  france: "france",
  anglais: "english britain",
  americain: "american usa",
  américain: "american usa",
  espagnol: "spanish spain",
  allemand: "german germany",
  italien: "italian italy",
  japonais: "japanese japan",
  chinois: "chinese china",

  // Signes du zodiaque
  belier: "aries",
  bélier: "aries",
  taureau: "taurus",
  gemeaux: "gemini",
  gémeaux: "gemini",
  cancer: "cancer",
  lion: "leo",
  vierge: "virgo",
  balance: "libra",
  scorpion: "scorpio",
  sagittaire: "sagittarius",
  capricorne: "capricorn",
  verseau: "aquarius",
  poissons: "pisces",

  // Symboles spéciaux
  copyright: "copyright",
  marque: "trademark",
  enregistre: "registered",
  enregistré: "registered",
  paragraphe: "paragraph",
  section: "section",
  degre: "degree",
  degré: "degree",
  micro: "micro",
  alpha: "alpha",
  beta: "beta",
  bêta: "beta",
  gamma: "gamma",
  delta: "delta",
  omega: "omega",
  pi: "pi",
  sigma: "sigma",
};

// ===== Noms de caractères Unicode courants =====
const CHARACTER_NAMES = {
  // Espaces (très important !)
  0x0020: "SPACE",
  0x00a0: "NO-BREAK SPACE",
  0x2000: "EN QUAD",
  0x2001: "EM QUAD",
  0x2002: "EN SPACE",
  0x2003: "EM SPACE",
  0x2004: "THREE-PER-EM SPACE",
  0x2005: "FOUR-PER-EM SPACE",
  0x2006: "SIX-PER-EM SPACE",
  0x2007: "FIGURE SPACE",
  0x2008: "PUNCTUATION SPACE",
  0x2009: "THIN SPACE",
  0x200a: "HAIR SPACE",
  0x202f: "NARROW NO-BREAK SPACE",
  0x205f: "MEDIUM MATHEMATICAL SPACE",
  0x3000: "IDEOGRAPHIC SPACE",

  // Ponctuation générale
  0x0021: "EXCLAMATION MARK",
  0x0022: "QUOTATION MARK",
  0x0023: "NUMBER SIGN",
  0x0024: "DOLLAR SIGN",
  0x0025: "PERCENT SIGN",
  0x0026: "AMPERSAND",
  0x0027: "APOSTROPHE",
  0x0028: "LEFT PARENTHESIS",
  0x0029: "RIGHT PARENTHESIS",
  0x002a: "ASTERISK",
  0x002b: "PLUS SIGN",
  0x002c: "COMMA",
  0x002d: "HYPHEN-MINUS",
  0x002e: "FULL STOP",
  0x002f: "SOLIDUS",
  0x003a: "COLON",
  0x003b: "SEMICOLON",
  0x003c: "LESS-THAN SIGN",
  0x003d: "EQUALS SIGN",
  0x003e: "GREATER-THAN SIGN",
  0x003f: "QUESTION MARK",
  0x0040: "COMMERCIAL AT",
  0x005b: "LEFT SQUARE BRACKET",
  0x005c: "REVERSE SOLIDUS",
  0x005d: "RIGHT SQUARE BRACKET",
  0x005e: "CIRCUMFLEX ACCENT",
  0x005f: "LOW LINE",
  0x0060: "GRAVE ACCENT",
  0x007b: "LEFT CURLY BRACKET",
  0x007c: "VERTICAL LINE",
  0x007d: "RIGHT CURLY BRACKET",
  0x007e: "TILDE",

  // Ponctuation typographique
  0x2010: "HYPHEN",
  0x2011: "NON-BREAKING HYPHEN",
  0x2012: "FIGURE DASH",
  0x2013: "EN DASH",
  0x2014: "EM DASH",
  0x2015: "HORIZONTAL BAR",
  0x2016: "DOUBLE VERTICAL LINE",
  0x2017: "DOUBLE LOW LINE",
  0x2018: "LEFT SINGLE QUOTATION MARK",
  0x2019: "RIGHT SINGLE QUOTATION MARK",
  0x201a: "SINGLE LOW-9 QUOTATION MARK",
  0x201b: "SINGLE HIGH-REVERSED-9 QUOTATION MARK",
  0x201c: "LEFT DOUBLE QUOTATION MARK",
  0x201d: "RIGHT DOUBLE QUOTATION MARK",
  0x201e: "DOUBLE LOW-9 QUOTATION MARK",
  0x201f: "DOUBLE HIGH-REVERSED-9 QUOTATION MARK",
  0x2020: "DAGGER",
  0x2021: "DOUBLE DAGGER",
  0x2022: "BULLET",
  0x2023: "TRIANGULAR BULLET",
  0x2024: "ONE DOT LEADER",
  0x2025: "TWO DOT LEADER",
  0x2026: "HORIZONTAL ELLIPSIS",
  0x2027: "HYPHENATION POINT",
  0x2030: "PER MILLE SIGN",
  0x2031: "PER TEN THOUSAND SIGN",
  0x2032: "PRIME",
  0x2033: "DOUBLE PRIME",
  0x2034: "TRIPLE PRIME",
  0x2035: "REVERSED PRIME",
  0x2036: "REVERSED DOUBLE PRIME",
  0x2037: "REVERSED TRIPLE PRIME",
  0x2038: "CARET",
  0x2039: "SINGLE LEFT-POINTING ANGLE QUOTATION MARK",
  0x203a: "SINGLE RIGHT-POINTING ANGLE QUOTATION MARK",
  0x203b: "REFERENCE MARK",
  0x203c: "DOUBLE EXCLAMATION MARK",
  0x203d: "INTERROBANG",
  0x203e: "OVERLINE",
  0x2047: "DOUBLE QUESTION MARK",
  0x2048: "QUESTION EXCLAMATION MARK",
  0x2049: "EXCLAMATION QUESTION MARK",

  // Symboles monétaires
  0x0024: "DOLLAR SIGN",
  0x00a2: "CENT SIGN",
  0x00a3: "POUND SIGN",
  0x00a4: "CURRENCY SIGN",
  0x00a5: "YEN SIGN",
  0x20a0: "EURO-CURRENCY SIGN",
  0x20a1: "COLON SIGN",
  0x20a2: "CRUZEIRO SIGN",
  0x20a3: "FRENCH FRANC SIGN",
  0x20a4: "LIRA SIGN",
  0x20a5: "MILL SIGN",
  0x20a6: "NAIRA SIGN",
  0x20a7: "PESETA SIGN",
  0x20a8: "RUPEE SIGN",
  0x20a9: "WON SIGN",
  0x20aa: "NEW SHEQEL SIGN",
  0x20ab: "DONG SIGN",
  0x20ac: "EURO SIGN",
  0x20ad: "KIP SIGN",
  0x20ae: "TUGRIK SIGN",
  0x20af: "DRACHMA SIGN",
  0x20b0: "GERMAN PENNY SIGN",
  0x20b1: "PESO SIGN",
  0x20b2: "GUARANI SIGN",
  0x20b3: "AUSTRAL SIGN",
  0x20b4: "HRYVNIA SIGN",
  0x20b5: "CEDI SIGN",
  0x20b8: "TENGE SIGN",
  0x20b9: "INDIAN RUPEE SIGN",
  0x20ba: "TURKISH LIRA SIGN",
  0x20bd: "RUBLE SIGN",
  0x20be: "LARI SIGN",
  0x20bf: "BITCOIN SIGN",

  // Flèches
  0x2190: "LEFTWARDS ARROW",
  0x2191: "UPWARDS ARROW",
  0x2192: "RIGHTWARDS ARROW",
  0x2193: "DOWNWARDS ARROW",
  0x2194: "LEFT RIGHT ARROW",
  0x2195: "UP DOWN ARROW",
  0x2196: "NORTH WEST ARROW",
  0x2197: "NORTH EAST ARROW",
  0x2198: "SOUTH EAST ARROW",
  0x2199: "SOUTH WEST ARROW",
  0x219a: "LEFTWARDS ARROW WITH STROKE",
  0x219b: "RIGHTWARDS ARROW WITH STROKE",
  0x21a9: "LEFTWARDS ARROW WITH HOOK",
  0x21aa: "RIGHTWARDS ARROW WITH HOOK",
  0x21b0: "UPWARDS ARROW WITH TIP LEFTWARDS",
  0x21b1: "UPWARDS ARROW WITH TIP RIGHTWARDS",
  0x21b2: "DOWNWARDS ARROW WITH TIP LEFTWARDS",
  0x21b3: "DOWNWARDS ARROW WITH TIP RIGHTWARDS",
  0x21c4: "RIGHTWARDS ARROW OVER LEFTWARDS ARROW",
  0x21c5: "UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW",
  0x21c6: "LEFTWARDS ARROW OVER RIGHTWARDS ARROW",
  0x21d0: "LEFTWARDS DOUBLE ARROW",
  0x21d1: "UPWARDS DOUBLE ARROW",
  0x21d2: "RIGHTWARDS DOUBLE ARROW",
  0x21d3: "DOWNWARDS DOUBLE ARROW",
  0x21d4: "LEFT RIGHT DOUBLE ARROW",

  // Opérateurs mathématiques
  0x00b1: "PLUS-MINUS SIGN",
  0x00d7: "MULTIPLICATION SIGN",
  0x00f7: "DIVISION SIGN",
  0x2200: "FOR ALL",
  0x2201: "COMPLEMENT",
  0x2202: "PARTIAL DIFFERENTIAL",
  0x2203: "THERE EXISTS",
  0x2204: "THERE DOES NOT EXIST",
  0x2205: "EMPTY SET",
  0x2206: "INCREMENT",
  0x2207: "NABLA",
  0x2208: "ELEMENT OF",
  0x2209: "NOT AN ELEMENT OF",
  0x220a: "SMALL ELEMENT OF",
  0x220b: "CONTAINS AS MEMBER",
  0x220f: "N-ARY PRODUCT",
  0x2211: "N-ARY SUMMATION",
  0x2212: "MINUS SIGN",
  0x2213: "MINUS-OR-PLUS SIGN",
  0x2215: "DIVISION SLASH",
  0x2217: "ASTERISK OPERATOR",
  0x2218: "RING OPERATOR",
  0x2219: "BULLET OPERATOR",
  0x221a: "SQUARE ROOT",
  0x221b: "CUBE ROOT",
  0x221c: "FOURTH ROOT",
  0x221d: "PROPORTIONAL TO",
  0x221e: "INFINITY",
  0x221f: "RIGHT ANGLE",
  0x2220: "ANGLE",
  0x2221: "MEASURED ANGLE",
  0x2222: "SPHERICAL ANGLE",
  0x2223: "DIVIDES",
  0x2224: "DOES NOT DIVIDE",
  0x2225: "PARALLEL TO",
  0x2226: "NOT PARALLEL TO",
  0x2227: "LOGICAL AND",
  0x2228: "LOGICAL OR",
  0x2229: "INTERSECTION",
  0x222a: "UNION",
  0x222b: "INTEGRAL",
  0x222c: "DOUBLE INTEGRAL",
  0x222d: "TRIPLE INTEGRAL",
  0x222e: "CONTOUR INTEGRAL",
  0x2234: "THEREFORE",
  0x2235: "BECAUSE",
  0x2236: "RATIO",
  0x2237: "PROPORTION",
  0x2248: "ALMOST EQUAL TO",
  0x2260: "NOT EQUAL TO",
  0x2261: "IDENTICAL TO",
  0x2262: "NOT IDENTICAL TO",
  0x2264: "LESS-THAN OR EQUAL TO",
  0x2265: "GREATER-THAN OR EQUAL TO",
  0x2266: "LESS-THAN OVER EQUAL TO",
  0x2267: "GREATER-THAN OVER EQUAL TO",
  0x226a: "MUCH LESS-THAN",
  0x226b: "MUCH GREATER-THAN",
  0x2282: "SUBSET OF",
  0x2283: "SUPERSET OF",
  0x2284: "NOT A SUBSET OF",
  0x2285: "NOT A SUPERSET OF",
  0x2286: "SUBSET OF OR EQUAL TO",
  0x2287: "SUPERSET OF OR EQUAL TO",
  0x2295: "CIRCLED PLUS",
  0x2296: "CIRCLED MINUS",
  0x2297: "CIRCLED TIMES",
  0x2298: "CIRCLED DIVISION SLASH",

  // Symboles divers
  0x00a9: "COPYRIGHT SIGN",
  0x00ae: "REGISTERED SIGN",
  0x2122: "TRADE MARK SIGN",
  0x2605: "BLACK STAR",
  0x2606: "WHITE STAR",
  0x260e: "BLACK TELEPHONE",
  0x2611: "BALLOT BOX WITH CHECK",
  0x2612: "BALLOT BOX WITH X",
  0x2639: "WHITE FROWNING FACE",
  0x263a: "WHITE SMILING FACE",
  0x2640: "FEMALE SIGN",
  0x2642: "MALE SIGN",
  0x2660: "BLACK SPADE SUIT",
  0x2661: "WHITE HEART SUIT",
  0x2662: "WHITE DIAMOND SUIT",
  0x2663: "BLACK CLUB SUIT",
  0x2664: "WHITE SPADE SUIT",
  0x2665: "BLACK HEART SUIT",
  0x2666: "BLACK DIAMOND SUIT",
  0x2667: "WHITE CLUB SUIT",
  0x2668: "HOT SPRINGS",
  0x2690: "WHITE FLAG",
  0x2691: "BLACK FLAG",
  0x2693: "ANCHOR",
  0x26a0: "WARNING SIGN",
  0x26a1: "HIGH VOLTAGE SIGN",
  0x2713: "CHECK MARK",
  0x2714: "HEAVY CHECK MARK",
  0x2715: "MULTIPLICATION X",
  0x2716: "HEAVY MULTIPLICATION X",
  0x2717: "BALLOT X",
  0x2718: "HEAVY BALLOT X",
  0x2764: "HEAVY BLACK HEART",
  0x27a1: "BLACK RIGHTWARDS ARROW",

  // Exposants et indices
  0x00b2: "SUPERSCRIPT TWO",
  0x00b3: "SUPERSCRIPT THREE",
  0x00b9: "SUPERSCRIPT ONE",
  0x2070: "SUPERSCRIPT ZERO",
  0x2074: "SUPERSCRIPT FOUR",
  0x2075: "SUPERSCRIPT FIVE",
  0x2076: "SUPERSCRIPT SIX",
  0x2077: "SUPERSCRIPT SEVEN",
  0x2078: "SUPERSCRIPT EIGHT",
  0x2079: "SUPERSCRIPT NINE",
  0x207a: "SUPERSCRIPT PLUS SIGN",
  0x207b: "SUPERSCRIPT MINUS",
  0x207c: "SUPERSCRIPT EQUALS SIGN",
  0x207d: "SUPERSCRIPT LEFT PARENTHESIS",
  0x207e: "SUPERSCRIPT RIGHT PARENTHESIS",
  0x2080: "SUBSCRIPT ZERO",
  0x2081: "SUBSCRIPT ONE",
  0x2082: "SUBSCRIPT TWO",
  0x2083: "SUBSCRIPT THREE",
  0x2084: "SUBSCRIPT FOUR",
  0x2085: "SUBSCRIPT FIVE",
  0x2086: "SUBSCRIPT SIX",
  0x2087: "SUBSCRIPT SEVEN",
  0x2088: "SUBSCRIPT EIGHT",
  0x2089: "SUBSCRIPT NINE",
  0x208a: "SUBSCRIPT PLUS SIGN",
  0x208b: "SUBSCRIPT MINUS",
  0x208c: "SUBSCRIPT EQUALS SIGN",
  0x208d: "SUBSCRIPT LEFT PARENTHESIS",
  0x208e: "SUBSCRIPT RIGHT PARENTHESIS",

  // Fractions
  0x00bc: "VULGAR FRACTION ONE QUARTER",
  0x00bd: "VULGAR FRACTION ONE HALF",
  0x00be: "VULGAR FRACTION THREE QUARTERS",
  0x2150: "VULGAR FRACTION ONE SEVENTH",
  0x2151: "VULGAR FRACTION ONE NINTH",
  0x2152: "VULGAR FRACTION ONE TENTH",
  0x2153: "VULGAR FRACTION ONE THIRD",
  0x2154: "VULGAR FRACTION TWO THIRDS",
  0x2155: "VULGAR FRACTION ONE FIFTH",
  0x2156: "VULGAR FRACTION TWO FIFTHS",
  0x2157: "VULGAR FRACTION THREE FIFTHS",
  0x2158: "VULGAR FRACTION FOUR FIFTHS",
  0x2159: "VULGAR FRACTION ONE SIXTH",
  0x215a: "VULGAR FRACTION FIVE SIXTHS",
  0x215b: "VULGAR FRACTION ONE EIGHTH",
  0x215c: "VULGAR FRACTION THREE EIGHTHS",
  0x215d: "VULGAR FRACTION FIVE EIGHTHS",
  0x215e: "VULGAR FRACTION SEVEN EIGHTHS",

  // Chiffres romains
  0x2160: "ROMAN NUMERAL ONE",
  0x2161: "ROMAN NUMERAL TWO",
  0x2162: "ROMAN NUMERAL THREE",
  0x2163: "ROMAN NUMERAL FOUR",
  0x2164: "ROMAN NUMERAL FIVE",
  0x2165: "ROMAN NUMERAL SIX",
  0x2166: "ROMAN NUMERAL SEVEN",
  0x2167: "ROMAN NUMERAL EIGHT",
  0x2168: "ROMAN NUMERAL NINE",
  0x2169: "ROMAN NUMERAL TEN",
  0x216a: "ROMAN NUMERAL ELEVEN",
  0x216b: "ROMAN NUMERAL TWELVE",
  0x216c: "ROMAN NUMERAL FIFTY",
  0x216d: "ROMAN NUMERAL ONE HUNDRED",
  0x216e: "ROMAN NUMERAL FIVE HUNDRED",
  0x216f: "ROMAN NUMERAL ONE THOUSAND",
};

// ===== Blocs populaires pour l'affichage initial =====
const POPULAR_BLOCKS = [
  {
    name: "Arrows",
    displayName: "Flèches",
    blockName: "Arrows",
    count: 8,
  },
  {
    name: "Emoticons",
    displayName: "Émoticônes",
    blockName: "Emoticons",
    count: 8,
  },
  {
    name: "Miscellaneous Symbols and Pictographs",
    displayName: "Pictogrammes",
    blockName: "Miscellaneous Symbols and Pictographs",
    count: 8,
  },
  {
    name: "Basic Latin",
    displayName: "Latin de base",
    blockName: "Basic Latin",
    count: 8,
  },
  {
    name: "Number Forms",
    displayName: "Nombres",
    blockName: "Number Forms",
    count: 8,
  },
  {
    name: "Dingbats",
    displayName: "Ornements",
    blockName: "Dingbats",
    count: 8,
  },
  {
    name: "Supplemental Symbols and Pictographs",
    displayName: "Pictogrammes supplémentaires",
    blockName: "Supplemental Symbols and Pictographs",
    count: 8,
  },
  {
    name: "Transport and Map Symbols",
    displayName: "Transports",
    blockName: "Transport and Map Symbols",
    count: 8,
  },
];

// ===== État de l'application =====
let allCharacters = [];
let filteredCharacters = [];
let currentBlock = "";
let emojiData = {}; // Données enrichies des emojis
let semanticTags = {}; // Tags sémantiques pour recherche avancée

// ===== Éléments DOM =====
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const blockFilter = document.getElementById("blockFilter");
const charactersGrid = document.getElementById("charactersGrid");
const statsDisplay = document.getElementById("statsDisplay");
const statsContainer = document.querySelector(".stats");
const resetButton = document.getElementById("resetButton");
const totalCharsCount = document.getElementById("totalCharsCount");
const loadingSpinner = document.getElementById("loadingSpinner");
const copyNotification = document.getElementById("copyNotification");

// ===== Gestion des paramètres URL =====
/**
 * Récupère les paramètres de l'URL
 * @returns {Object} Object contenant les paramètres (ex: {search: "coeur", block: "Emoticons"})
 */
function getURLParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    search: params.get("search") || "",
    block: params.get("block") || "",
  };
}

/**
 * Met à jour l'URL avec les paramètres de recherche actuels
 * @param {string} searchTerm - Terme de recherche
 * @param {string} blockName - Nom du bloc sélectionné
 */
function updateURL(searchTerm, blockName) {
  const params = new URLSearchParams();

  if (searchTerm) {
    params.set("search", searchTerm);
  }

  if (blockName) {
    params.set("block", blockName);
  }

  // Une recherche remplace le caractère choisi : pas de #U+XXXX
  const newURL = params.toString()
    ? `${window.location.pathname}?${params.toString()}`
    : window.location.pathname;

  // Utiliser pushState pour mettre à jour l'URL sans recharger la page
  // replaceState : pas une entrée d'historique par frappe au clavier
  window.history.replaceState(
    { search: searchTerm, block: blockName },
    "",
    newURL
  );
}

/**
 * Caractère désigné par le hash de l'URL (#U+1F600, ou #1F600)
 * @returns {Object|undefined}
 */
function getCharacterFromHash() {
  const match = window.location.hash.match(/^#(?:U\+)?([0-9A-F]{4,6})$/i);
  if (!match) return undefined;
  const codePoint = parseInt(match[1], 16);
  return allCharacters.find((c) => c.codePoint === codePoint);
}

/**
 * Inscrit le caractère choisi dans le hash, sans entrée d'historique.
 * Le choix remplace la recherche : on retire ?search et ?block.
 * @param {Object} charData
 */
function updateHash(charData) {
  const url = `${window.location.pathname}#U+${charData.hex}`;
  window.history.replaceState(null, "", url);
}

/**
 * Applique les paramètres URL au chargement de la page
 */
function applyURLParams() {
  const { search, block } = getURLParams();

  // Si des paramètres existent, les appliquer
  if (search || block) {
    if (search) {
      searchInput.value = search;
    }

    if (block) {
      blockFilter.value = block;
      currentBlock = block;
    }

    // Lancer la recherche/filtrage
    filterCharacters(search.trim(), block);
  }
}

// ===== Initialisation =====
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

async function initializeApp() {
  // Charger les données enrichies des emojis et tags sémantiques
  await Promise.all([loadEmojiData(), loadSemanticTags()]);

  populateBlockFilter();
  await generateCharacters();
  setupEventListeners();
  initFavoritesEvents(); // Initialiser les favoris
  setupSpecimen(); // Fiche du caractère sélectionné

  // Appliquer les paramètres URL s'ils existent
  const urlParams = getURLParams();
  if (urlParams.search || urlParams.block) {
    // La recherche sélectionne son premier résultat : le hash reste prioritaire
    const hashChar = getCharacterFromHash();
    applyURLParams();
    if (hashChar) {
      selectCharacter(hashChar);
      updateHash(hashChar);
    }
  } else {
    // Afficher les blocs populaires seulement si pas de paramètres URL
    displayPopularBlocks();
  }

  // Afficher le nombre total de caractères dans le footer
  updateTotalCharsCount(allCharacters.length);

  // Cacher les stats (elles ne s'affichent que lors de recherche/filtre)
  if (!urlParams.search && !urlParams.block) {
    statsContainer.classList.add("hidden");
  }

  loadingSpinner.classList.add("hidden");

  // Gérer le bouton retour du navigateur
  window.addEventListener("popstate", (event) => {
    if (event.state) {
      searchInput.value = event.state.search || "";
      blockFilter.value = event.state.block || "";
      currentBlock = event.state.block || "";
      filterCharacters(event.state.search || "", event.state.block || "");
    }
  });
}

// ===== Chargement des données emoji enrichies =====
async function loadEmojiData() {
  try {
    const response = await fetch("assets/js/emoji-data.json");
    emojiData = await response.json();
    console.log(
      `✅ Données emoji chargées : ${Object.keys(emojiData).length} emojis`
    );
  } catch (error) {
    console.error("❌ Erreur lors du chargement des données emoji:", error);
    emojiData = {}; // Fallback sur objet vide
  }
}

// ===== Chargement des tags sémantiques =====
async function loadSemanticTags() {
  try {
    const response = await fetch("assets/js/semantic-tags.json");
    semanticTags = await response.json();
    console.log(
      `✅ Tags sémantiques chargés : ${
        Object.keys(semanticTags).length
      } caractères enrichis`
    );
  } catch (error) {
    console.error("❌ Erreur lors du chargement des tags sémantiques:", error);
    semanticTags = {}; // Fallback sur objet vide
  }
}

// ===== Génération des caractères =====
function populateBlockFilter() {
  UNICODE_BLOCKS.forEach((block) => {
    const option = document.createElement("option");
    option.value = block.name;
    option.textContent = `${block.name} (U+${block.start
      .toString(16)
      .toUpperCase()}-U+${block.end.toString(16).toUpperCase()})`;
    blockFilter.appendChild(option);
  });
}

async function generateCharacters() {
  allCharacters = [];

  for (const block of UNICODE_BLOCKS) {
    for (let codePoint = block.start; codePoint <= block.end; codePoint++) {
      try {
        const char = String.fromCodePoint(codePoint);

        // Filtrer les caractères de contrôle et invalides
        if (isValidCharacter(char, codePoint)) {
          const hexCode = codePoint.toString(16).toUpperCase().padStart(4, "0");

          // Essayer d'abord les données emoji enrichies
          let charName = null;
          let emojiInfo = null;

          if (emojiData[hexCode]) {
            emojiInfo = emojiData[hexCode];
            charName = emojiInfo.name;
          } else {
            // Fallback sur les noms existants
            charName =
              CHARACTER_NAMES[codePoint] ||
              getCharacterName(codePoint, block.name);
          }

          const htmlEntity = getHtmlEntity(codePoint);

          allCharacters.push({
            char: char,
            codePoint: codePoint,
            hex: hexCode,
            decimal: codePoint,
            block: block.name,
            blockName: block.name, // Ajout pour correspondre avec POPULAR_BLOCKS
            name: charName,
            htmlEntity: htmlEntity,
            emojiGroup: emojiInfo?.group || null,
            emojiSubgroup: emojiInfo?.subgroup || null,
          });
        }
      } catch (e) {
        // Ignorer les code points invalides
        continue;
      }
    }
  }

  filteredCharacters = [...allCharacters];
}

function isValidCharacter(char, codePoint) {
  // Exclure uniquement les caractères de contrôle C0 (avant 0x0020)
  if (codePoint < 0x0020) return false;

  // Exclure les caractères de contrôle C1 (0x007F-0x009F) SAUF 0x00A0 (no-break space)
  if (codePoint >= 0x007f && codePoint <= 0x009f && codePoint !== 0x00a0)
    return false;

  // Accepter explicitement tous les espaces Unicode (très important !)
  const spaceRanges = [
    [0x0020, 0x0020], // SPACE
    [0x00a0, 0x00a0], // NO-BREAK SPACE
    [0x2000, 0x200a], // EN QUAD to HAIR SPACE
    [0x202f, 0x202f], // NARROW NO-BREAK SPACE
    [0x205f, 0x205f], // MEDIUM MATHEMATICAL SPACE
    [0x3000, 0x3000], // IDEOGRAPHIC SPACE
  ];

  for (const [start, end] of spaceRanges) {
    if (codePoint >= start && codePoint <= end) return true;
  }

  // Exclure uniquement les caractères vraiment invisibles/problématiques
  const excludedRanges = [
    [0x200b, 0x200f], // Zero width et bidirectional marks
    [0x202a, 0x202e], // Bidirectional formatting
    [0x2060, 0x2064], // Word joiner, etc.
    [0x206a, 0x206f], // Deprecated formatting
    [0xfeff, 0xfeff], // Zero width no-break space
    [0xfff9, 0xfffb], // Interlinear annotation
    [0xfe00, 0xfe0f], // Variation selectors
  ];

  for (const [start, end] of excludedRanges) {
    if (codePoint >= start && codePoint <= end) return false;
  }

  return true;
}

function getCharacterName(codePoint, blockName) {
  // Génération de noms génériques basés sur le bloc
  const hex = codePoint.toString(16).toUpperCase().padStart(4, "0");
  return `${blockName.toUpperCase()} U+${hex}`;
}

// ===== Entités HTML nommées =====
const HTML_ENTITIES = {
  0x0022: "quot",
  0x0026: "amp",
  0x0027: "apos",
  0x003c: "lt",
  0x003e: "gt",
  0x00a0: "nbsp",
  0x00a1: "iexcl",
  0x00a2: "cent",
  0x00a3: "pound",
  0x00a4: "curren",
  0x00a5: "yen",
  0x00a6: "brvbar",
  0x00a7: "sect",
  0x00a8: "uml",
  0x00a9: "copy",
  0x00aa: "ordf",
  0x00ab: "laquo",
  0x00ac: "not",
  0x00ad: "shy",
  0x00ae: "reg",
  0x00af: "macr",
  0x00b0: "deg",
  0x00b1: "plusmn",
  0x00b2: "sup2",
  0x00b3: "sup3",
  0x00b4: "acute",
  0x00b5: "micro",
  0x00b6: "para",
  0x00b7: "middot",
  0x00b8: "cedil",
  0x00b9: "sup1",
  0x00ba: "ordm",
  0x00bb: "raquo",
  0x00bc: "frac14",
  0x00bd: "frac12",
  0x00be: "frac34",
  0x00bf: "iquest",
  0x00d7: "times",
  0x00f7: "divide",
  0x2002: "ensp",
  0x2003: "emsp",
  0x2009: "thinsp",
  0x200c: "zwnj",
  0x200d: "zwj",
  0x2013: "ndash",
  0x2014: "mdash",
  0x2018: "lsquo",
  0x2019: "rsquo",
  0x201a: "sbquo",
  0x201c: "ldquo",
  0x201d: "rdquo",
  0x201e: "bdquo",
  0x2020: "dagger",
  0x2021: "Dagger",
  0x2022: "bull",
  0x2026: "hellip",
  0x2030: "permil",
  0x2032: "prime",
  0x2033: "Prime",
  0x2039: "lsaquo",
  0x203a: "rsaquo",
  0x203e: "oline",
  0x2044: "frasl",
  0x20ac: "euro",
  0x2111: "image",
  0x2118: "weierp",
  0x211c: "real",
  0x2122: "trade",
  0x2190: "larr",
  0x2191: "uarr",
  0x2192: "rarr",
  0x2193: "darr",
  0x2194: "harr",
  0x21b5: "crarr",
  0x21d0: "lArr",
  0x21d1: "uArr",
  0x21d2: "rArr",
  0x21d3: "dArr",
  0x21d4: "hArr",
  0x2200: "forall",
  0x2202: "part",
  0x2203: "exist",
  0x2205: "empty",
  0x2207: "nabla",
  0x2208: "isin",
  0x2209: "notin",
  0x220b: "ni",
  0x220f: "prod",
  0x2211: "sum",
  0x2212: "minus",
  0x2217: "lowast",
  0x221a: "radic",
  0x221d: "prop",
  0x221e: "infin",
  0x2220: "ang",
  0x2227: "and",
  0x2228: "or",
  0x2229: "cap",
  0x222a: "cup",
  0x222b: "int",
  0x2234: "there4",
  0x223c: "sim",
  0x2245: "cong",
  0x2248: "asymp",
  0x2260: "ne",
  0x2261: "equiv",
  0x2264: "le",
  0x2265: "ge",
  0x2282: "sub",
  0x2283: "sup",
  0x2284: "nsub",
  0x2286: "sube",
  0x2287: "supe",
  0x2295: "oplus",
  0x2297: "otimes",
  0x22a5: "perp",
  0x22c5: "sdot",
  0x2308: "lceil",
  0x2309: "rceil",
  0x230a: "lfloor",
  0x230b: "rfloor",
  0x2329: "lang",
  0x232a: "rang",
  0x25ca: "loz",
  0x2660: "spades",
  0x2663: "clubs",
  0x2665: "hearts",
  0x2666: "diams",
};

function getHtmlEntity(codePoint) {
  // Entité nommée si elle existe
  const namedEntity = HTML_ENTITIES[codePoint];
  if (namedEntity) {
    return `&${namedEntity};`;
  }
  // Sinon, entité numérique décimale
  return `&#${codePoint};`;
}

// ===== Vérification si un caractère est bien affiché =====
function isDisplayableCharacter(char, codePoint) {
  // APPROCHE RESTRICTIVE : On liste les plages SÛREMENT affichables
  // plutôt que d'exclure les problématiques

  const safeRanges = [
    // Latin de base et Latin-1
    [0x0020, 0x007e], // ASCII imprimable
    [0x00a0, 0x00ff], // Latin-1 supplément

    // Latin étendu (bien supporté)
    [0x0100, 0x017f], // Latin étendu-A
    [0x0180, 0x024f], // Latin étendu-B

    // IPA et modificateurs (bon support)
    [0x0250, 0x02af], // IPA
    [0x02b0, 0x02ff], // Lettres modificatives

    // Grec et Cyrillique (excellent support)
    [0x0370, 0x03ff], // Grec et copte
    [0x0400, 0x04ff], // Cyrillique
    [0x0500, 0x052f], // Cyrillique supplément

    // Runique (bon support moderne)
    [0x16a0, 0x16ff], // Runique

    // Ponctuation et symboles généraux (excellent support)
    [0x2000, 0x206f], // Ponctuation générale
    [0x2070, 0x209f], // Exposants et indices
    [0x20a0, 0x20cf], // Symboles monétaires (€$¥£)
    [0x2100, 0x214f], // Symboles lettres
    [0x2150, 0x218f], // Formes numériques (½⅓¼)
    [0x2190, 0x21ff], // Flèches
    [0x2200, 0x22ff], // Opérateurs mathématiques
    [0x2300, 0x23ff], // Symboles techniques
    [0x2460, 0x24ff], // Alphanumériques entourés
    [0x2500, 0x257f], // Symboles de boîtes
    [0x2580, 0x259f], // Blocs
    [0x25a0, 0x25ff], // Formes géométriques
    [0x2600, 0x26ff], // Symboles divers (☀☁☂)
    [0x2700, 0x27bf], // Dingbats (✂✉✏)
    [0x2900, 0x297f], // Flèches supplémentaires-B
    [0x2b00, 0x2bff], // Symboles et flèches divers

    // CJK de base (bon support)
    [0x3040, 0x309f], // Hiragana
    [0x30a0, 0x30ff], // Katakana

    // Emojis (excellent support moderne)
    [0x1f300, 0x1f5ff], // Symboles et pictogrammes
    [0x1f600, 0x1f64f], // Emoticons
    [0x1f680, 0x1f6ff], // Transport et cartes
    [0x1f900, 0x1f9ff], // Symboles supplémentaires
  ];

  // Vérifier si le caractère est dans une plage sûre
  for (const [start, end] of safeRanges) {
    if (codePoint >= start && codePoint <= end) return true;
  }

  return false;
}

// ===== Sélection aléatoire de caractères =====
function getRandomCharacters(characters, count) {
  // Filtrer d'abord les caractères affichables
  const displayable = characters.filter((charData) =>
    isDisplayableCharacter(charData.char, charData.codePoint)
  );

  console.log(
    `   🎲 Caractères affichables après filtrage: ${displayable.length} sur ${characters.length}`
  );

  // Créer une copie pour ne pas modifier l'original
  const shuffled = [...displayable];

  // Algorithme de Fisher-Yates pour mélanger
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Retourner les N premiers
  return shuffled.slice(0, count);
}

// ===== Affichage des caractères =====
let currentDisplayLimit = 500; // Limite initiale d'affichage
const DISPLAY_INCREMENT = 200; // Nombre de caractères à ajouter à chaque clic
const NNBSP = " "; // espace fine insécable
const NBSP = " "; // espace insécable

/**
 * Espaces Unicode : abréviation affichée à la place du glyphe (invisible)
 * et sécabilité (une espace insécable empêche le retour à la ligne)
 */
const SPACES = {
  0x0020: { abbr: "ESP", nobreak: false },
  0x00a0: { abbr: "INS", nobreak: true },
  0x2000: { abbr: "QUAD ½", nobreak: false },
  0x2001: { abbr: "QUAD", nobreak: false },
  0x2002: { abbr: "½ EM", nobreak: false },
  0x2003: { abbr: "EM", nobreak: false },
  0x2004: { abbr: "⅓ EM", nobreak: false },
  0x2005: { abbr: "¼ EM", nobreak: false },
  0x2006: { abbr: "⅙ EM", nobreak: false },
  0x2007: { abbr: "CHIFFRE", nobreak: true },
  0x2008: { abbr: "PONCT", nobreak: false },
  0x2009: { abbr: "FINE", nobreak: false },
  0x200a: { abbr: "ULTRAFINE", nobreak: false },
  0x202f: { abbr: "FINE INS", nobreak: true },
  0x205f: { abbr: "MATH", nobreak: false },
  0x3000: { abbr: "IDÉO", nobreak: false },
};

/**
 * Indique si un caractère est un espace (invisible à l'écran)
 * @param {Object} charData
 * @returns {boolean}
 */
function isSpaceChar(charData) {
  return charData.codePoint in SPACES;
}

/**
 * Représentation visible d'une espace : une barre hachurée de sa chasse
 * réelle (le caractère lui-même) et son abréviation
 * @param {Object} charData
 * @returns {HTMLElement}
 */
function createSpaceSymbol(charData) {
  const { abbr, nobreak } = SPACES[charData.codePoint];
  const symbol = document.createElement("span");
  symbol.className = "space-symbol";
  symbol.classList.toggle("is-nobreak", nobreak);
  symbol.setAttribute("aria-hidden", "true");

  const width = document.createElement("span");
  width.className = "space-width";
  width.textContent = charData.char;

  const label = document.createElement("span");
  label.className = "space-abbr";
  label.textContent = abbr;

  symbol.append(width, label);
  return symbol;
}

/**
 * Crée une liste de cases de caractères
 * @returns {HTMLUListElement}
 */
function createCharList() {
  const list = document.createElement("ul");
  list.className = "char-list";
  return list;
}

function displayCharacters(characters, append = false) {
  // Réinitialiser la limite si on ne fait pas un append
  if (!append) {
    currentDisplayLimit = 500;
    charactersGrid.innerHTML = "";
  }

  const startIndex = append
    ? charactersGrid.querySelectorAll(".char-card").length
    : 0;
  const charsToDisplay = characters.slice(startIndex, currentDisplayLimit);

  // Supprimer le bloc "Afficher plus" existant s'il y en a un
  const existingLoadMore = charactersGrid.querySelector(
    ".load-more-container"
  );
  if (existingLoadMore) {
    existingLoadMore.remove();
  }

  if (characters.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent =
      "Essayez un autre mot, en français ou en anglais, ou un code comme 2026.";
    charactersGrid.appendChild(empty);
    return;
  }

  let list = charactersGrid.querySelector(".char-list");
  if (!list) {
    list = createCharList();
    charactersGrid.appendChild(list);
  }

  charsToDisplay.forEach((charData, index) => {
    list.appendChild(createCharacterCard(charData, startIndex + index));
  });

  // Ajouter le bouton "Afficher plus" s'il reste des caractères
  if (characters.length > currentDisplayLimit) {
    const remaining = characters.length - currentDisplayLimit;
    const next = Math.min(DISPLAY_INCREMENT, remaining);

    const loadMoreContainer = document.createElement("div");
    loadMoreContainer.className = "load-more-container";

    const loadMoreBtn = document.createElement("button");
    loadMoreBtn.type = "button";
    loadMoreBtn.className = "btn is-chip load-more-btn";
    loadMoreBtn.textContent = `Afficher ${next}${NBSP}caractères de plus`;

    loadMoreBtn.addEventListener("click", () => {
      const firstNew = list.children.length;
      currentDisplayLimit += DISPLAY_INCREMENT;
      displayCharacters(characters, true);
      // Le focus va au premier caractère ajouté
      const newCard = list.children[firstNew]?.querySelector(".char-card");
      if (newCard) {
        list
          .querySelectorAll(".char-card[tabindex='0']")
          .forEach((card) => card.setAttribute("tabindex", "-1"));
        newCard.setAttribute("tabindex", "0");
        newCard.focus();
      }
    });

    const remainingInfo = document.createElement("p");
    remainingInfo.className = "remaining-info";
    remainingInfo.textContent = `${currentDisplayLimit.toLocaleString(
      "fr-FR"
    )} affichés sur ${characters.length.toLocaleString("fr-FR")}`;

    loadMoreContainer.append(loadMoreBtn, remainingInfo);
    charactersGrid.appendChild(loadMoreContainer);
  }
}

const SEARCH_SUGGESTIONS = ["pop", "guillemet", "flèche", "cœur", "2026"];

function displayPopularBlocks() {
  charactersGrid.innerHTML = "";

  // Introduction
  const intro = document.createElement("h2");
  intro.className = "characters-title";
  intro.textContent = `En manque d’idées${NNBSP}?`;
  charactersGrid.appendChild(intro);

  // Suggestions de recherche
  const tryRow = document.createElement("p");
  tryRow.className = "try";
  tryRow.append(`Essayez${NBSP}:`);
  SEARCH_SUGGESTIONS.forEach((term) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn is-chip";
    btn.textContent = term;
    btn.addEventListener("click", () => {
      searchInput.value = term;
      clearSearchBtn.classList.add("visible");
      filterCharacters(term, currentBlock);
      searchInput.focus();
    });
    tryRow.appendChild(btn);
  });
  charactersGrid.appendChild(tryRow);

  // Une seule pioche : quelques caractères de chaque bloc populaire, mélangés
  const list = createCharList();
  const draw = () => {
    const picked = POPULAR_BLOCKS.flatMap((blockConfig) =>
      getRandomCharacters(
        allCharacters.filter((c) => c.blockName === blockConfig.blockName),
        4
      )
    );
    list.innerHTML = "";
    // 25 cases : des lignes complètes sur 5 colonnes
    getRandomCharacters(picked, 25).forEach((charData, index) => {
      list.appendChild(createCharacterCard(charData, index));
    });
  };
  draw();
  charactersGrid.appendChild(list);

  const redraw = document.createElement("button");
  redraw.type = "button";
  redraw.className = "btn is-chip redraw";
  redraw.textContent = "Piocher d’autres caractères";
  redraw.addEventListener("click", draw);
  charactersGrid.appendChild(redraw);

  // Les blocs eux-mêmes, en raccourcis vers le filtre
  const blocksRow = document.createElement("p");
  blocksRow.className = "try";
  blocksRow.append(`Parcourir un bloc${NBSP}:`);
  POPULAR_BLOCKS.forEach((blockConfig) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn is-chip";
    btn.textContent = blockConfig.displayName;
    btn.title = blockConfig.blockName;
    btn.addEventListener("click", () => {
      blockFilter.value = blockConfig.blockName;
      currentBlock = blockConfig.blockName;
      filterCharacters("", blockConfig.blockName);
      blockFilter.focus();
    });
    blocksRow.appendChild(btn);
  });
  charactersGrid.appendChild(blocksRow);
}

/**
 * Crée une case de la grille : un bouton qui copie (et affiche la fiche),
 * et, à côté (jamais dedans), un bouton étoile pour les favoris.
 */
function createCharacterCard(charData, index) {
  const item = document.createElement("li");
  item.className = "char-item";

  const card = document.createElement("button");
  card.type = "button";
  card.className = "char-card";
  if (selectedCharacter && selectedCharacter.codePoint === charData.codePoint) {
    card.classList.add("is-selected");
  }
  card.dataset.codepoint = charData.codePoint;
  card.dataset.index = index;
  // Un seul arrêt de tabulation par grille, les flèches font le reste
  card.setAttribute("tabindex", index === 0 ? "0" : "-1");
  card.setAttribute("aria-label", `Copier ${charData.name}, U+${charData.hex}`);

  let glyph;
  if (isSpaceChar(charData)) {
    glyph = createSpaceSymbol(charData);
  } else {
    glyph = document.createElement("span");
    glyph.setAttribute("aria-hidden", "true");
    glyph.textContent = charData.char;
  }

  const hex = document.createElement("span");
  hex.className = "char-hex";
  hex.setAttribute("aria-hidden", "true");
  hex.textContent = charData.hex;

  card.append(glyph, hex);
  card.addEventListener("click", () => copyToClipboard(charData));

  const favoriteBtn = document.createElement("button");
  favoriteBtn.type = "button";
  favoriteBtn.className = "favorite-btn";
  favoriteBtn.dataset.codepoint = charData.codePoint;
  // Raccourci souris : au clavier, le bouton Favori de la fiche suffit
  favoriteBtn.setAttribute("tabindex", "-1");
  favoriteBtn.setAttribute("aria-label", `Favori : ${charData.name}`);
  setFavoriteButtonState(favoriteBtn, isFavorite(charData.codePoint));
  favoriteBtn.addEventListener("click", (e) => toggleFavorite(e, charData));

  item.append(card, favoriteBtn);
  return item;
}

function setFavoriteButtonState(btn, active) {
  btn.classList.toggle("is-favorite", active);
  btn.setAttribute("aria-pressed", active ? "true" : "false");
  btn.textContent = active ? "★" : "☆";
}

// ===== Fiche « spécimen » du caractère sélectionné =====
let selectedCharacter = null;
let fontMetrics = {
  // Valeurs de repli, remplacées par la mesure réelle de la fonte
  asc: 0.88,
  desc: 0.25,
  ascender: 0.7,
  cap: 0.64,
  xheight: 0.42,
  descender: 0.22,
};

const specimen = {
  hex: document.getElementById("specimenHex"),
  block: document.getElementById("specimenBlock"),
  glyph: document.getElementById("specimenGlyph"),
  name: document.getElementById("specimenName"),
  aka: document.getElementById("specimenAka"),
  copy: document.getElementById("specimenCopy"),
  favorite: document.getElementById("specimenFavorite"),
  codes: document.getElementById("specimenCodes"),
  samples: document.querySelectorAll("[data-sample]"),
  metrics: document.querySelectorAll(".metric"),
};

function getCharTags(charData) {
  const tags = semanticTags[charData.decimal.toString(16).toUpperCase()];
  return tags || { tags: [], tagsFr: [] };
}

/**
 * Affiche un caractère dans la fiche
 * @param {Object} charData
 */
function selectCharacter(charData) {
  if (!charData) return;
  selectedCharacter = charData;
  const invisible = isSpaceChar(charData);

  specimen.hex.textContent = `U+${charData.hex}`;
  specimen.block.textContent = charData.block;
  specimen.name.textContent = charData.name;

  specimen.glyph.textContent = charData.char;
  specimen.glyph.classList.toggle("is-invisible", invisible);
  specimen.glyph.classList.toggle(
    "is-nobreak",
    invisible && SPACES[charData.codePoint].nobreak
  );
  renderSpaceWidth();

  const { tags = [], tagsFr = [] } = getCharTags(charData);
  const aka = (tagsFr.length ? tagsFr : tags).slice(0, 4).join(", ");
  specimen.aka.textContent = aka ? `Aussi${NBSP}: ${aka}` : "";

  // Le caractère est surligné dans les exemples (indispensable pour une espace)
  specimen.samples.forEach((el) => {
    el.textContent = "";
    ["Avant", "après, et la suite", ""].forEach((text, i) => {
      if (i > 0) {
        const mark = document.createElement("mark");
        mark.className = "sample-char";
        mark.classList.toggle("is-invisible", invisible);
        mark.textContent = charData.char;
        el.append(mark);
      }
      el.append(text);
    });
  });

  const utf8 = Array.from(new TextEncoder().encode(charData.char))
    .map((b) => b.toString(16).toUpperCase().padStart(2, "0"))
    .join(" ");
  const codes = [
    ["Entité HTML", charData.htmlEntity],
    ["Décimal", `&#${charData.decimal};`],
    ["CSS", `\\${charData.hex}`],
    [
      "JavaScript",
      charData.codePoint > 0xffff ? `\\u{${charData.hex}}` : `\\u${charData.hex}`,
    ],
    ["UTF-8", utf8],
  ];
  specimen.codes.innerHTML = "";
  codes.forEach(([label, value]) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "code-row";
    btn.innerHTML = `<span class="code-key"></span><span class="code-value"></span><span class="code-action">Copier<span class="visually-hidden"></span></span>`;
    btn.querySelector(".code-key").textContent = label;
    btn.querySelector(".code-value").textContent = value;
    btn.querySelector(".visually-hidden").textContent = ` le code ${label}`;
    btn.addEventListener("click", () => copyText(value, value));
    li.appendChild(btn);
    specimen.codes.appendChild(li);
  });

  updateSpecimenFavorite();

  // Case sélectionnée dans la grille
  charactersGrid.querySelectorAll(".char-card.is-selected").forEach((card) => {
    card.classList.remove("is-selected");
  });
  charactersGrid
    .querySelectorAll(`.char-card[data-codepoint="${charData.codePoint}"]`)
    .forEach((card) => card.classList.add("is-selected"));
}

function updateSpecimenFavorite() {
  if (!selectedCharacter) return;
  const active = isFavorite(selectedCharacter.codePoint);
  specimen.favorite.setAttribute("aria-pressed", active ? "true" : "false");
  specimen.favorite.innerHTML = `<span class="star" aria-hidden="true">${
    active ? "★" : "☆"
  }</span> Favori`;
}

/**
 * Affiche la chasse mesurée d'une espace dans le spécimen (en em)
 */
function renderSpaceWidth() {
  const glyph = specimen.glyph;
  if (!glyph.classList.contains("is-invisible")) {
    delete glyph.dataset.width;
    return;
  }
  const size = parseFloat(getComputedStyle(glyph).fontSize);
  const em = glyph.getBoundingClientRect().width / size;
  const value = em.toFixed(2).replace(/^0/, "").replace(/^-0/, "−");
  glyph.dataset.width = `chasse ${value} em`;
}

/**
 * Mesure les métriques réelles de la fonte d'affichage (canvas)
 */
function measureFontMetrics() {
  try {
    const size = 200;
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.font = `${size}px "Instrument Serif"`;
    const H = ctx.measureText("H");
    if (!H.fontBoundingBoxAscent) return;
    fontMetrics = {
      asc: H.fontBoundingBoxAscent / size,
      desc: H.fontBoundingBoxDescent / size,
      ascender: ctx.measureText("d").actualBoundingBoxAscent / size,
      cap: H.actualBoundingBoxAscent / size,
      xheight: ctx.measureText("x").actualBoundingBoxAscent / size,
      descender: ctx.measureText("p").actualBoundingBoxDescent / size,
    };
  } catch (e) {
    // On garde les valeurs de repli
  }
}

/**
 * Place les lignes de métriques. Avec line-height: 1, la ligne de base
 * se trouve à asc + (1 - asc - desc) / 2 depuis le haut du cadratin.
 */
function renderMetrics() {
  const m = fontMetrics;
  const baseline = m.asc + (1 - m.asc - m.desc) / 2;
  const format = (v) => v.toFixed(2).replace(/^0/, "");
  const positions = {
    ascender: [baseline - m.ascender, `${format(m.ascender)} em`],
    cap: [baseline - m.cap, `${format(m.cap)} em`],
    xheight: [baseline - m.xheight, `${format(m.xheight)} em`],
    baseline: [baseline, "0 em"],
    descender: [baseline + m.descender, `−${format(m.descender)} em`],
  };
  specimen.metrics.forEach((line) => {
    const [top, value] = positions[line.dataset.metric];
    line.style.setProperty("--top", top.toFixed(4));
    line.querySelector(".metric-value").textContent = value;
  });
}

function setupSpecimen() {
  specimen.copy.addEventListener("click", () => {
    if (selectedCharacter) copyToClipboard(selectedCharacter);
  });
  specimen.favorite.addEventListener("click", () => {
    if (!selectedCharacter) return;
    if (isFavorite(selectedCharacter.codePoint)) {
      removeFromFavorites(selectedCharacter.codePoint);
    } else {
      addToFavorites(selectedCharacter);
    }
  });

  renderMetrics();
  if (document.fonts && document.fonts.load) {
    document.fonts
      .load('200px "Instrument Serif"')
      .then(() => {
        measureFontMetrics();
        renderMetrics();
        renderSpaceWidth();
      })
      .catch(() => {});
  }

  // Caractère affiché au chargement : celui du hash (#U+XXXX),
  // sinon tiré au hasard dans les blocs populaires
  const popularBlockNames = POPULAR_BLOCKS.map((b) => b.blockName);
  const [random = allCharacters[0]] = getRandomCharacters(
    allCharacters.filter((c) => popularBlockNames.includes(c.blockName)),
    1
  );
  selectCharacter(getCharacterFromHash() || random);

  // Hash modifié à la main (ou lien interne) : on suit
  window.addEventListener("hashchange", () => {
    selectCharacter(getCharacterFromHash());
  });
}

// ===== Copie dans le presse-papier =====
async function copyText(text, shown) {
  try {
    await navigator.clipboard.writeText(text);
    showCopyNotification(shown);
  } catch (err) {
    console.error("Erreur lors de la copie:", err);
    // Repli pour les navigateurs plus anciens
    fallbackCopyToClipboard(text, shown);
  }
}

/**
 * Copie un caractère et l'affiche dans la fiche
 * @param {Object} charData
 */
async function copyToClipboard(charData) {
  if (charData.codePoint !== undefined) {
    const full =
      allCharacters.find((c) => c.codePoint === charData.codePoint) || charData;
    selectCharacter(full);
    updateHash(full);
  }
  await copyText(charData.char, charData.char);
}

function fallbackCopyToClipboard(text, shown = text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.select();

  try {
    document.execCommand("copy");
    showCopyNotification(shown);
  } catch (err) {
    console.error("Repli : erreur lors de la copie", err);
  }

  document.body.removeChild(textArea);
}

let copyNotificationTimer = null;

function showCopyNotification(shown) {
  const charSpan = copyNotification.querySelector(".copied-char");
  const textSpan = copyNotification.querySelector(".copied-text");
  // Pour un lecteur d'écran, on annonce ce qui a été copié
  const label =
    selectedCharacter && selectedCharacter.char === shown
      ? selectedCharacter.name
      : shown;
  const space = [...shown].length === 1 && SPACES[shown.codePointAt(0)];
  charSpan.textContent = space ? space.abbr : shown;
  textSpan.textContent = `${label} copié${NNBSP}!`;

  copyNotification.classList.add("show");
  clearTimeout(copyNotificationTimer);
  copyNotificationTimer = setTimeout(() => {
    copyNotification.classList.remove("show");
  }, 2000);
}

// ===== Recherche et filtrage =====
function setupEventListeners() {
  searchInput.addEventListener("input", handleSearch);
  clearSearchBtn.addEventListener("click", clearSearch);
  blockFilter.addEventListener("change", handleBlockFilter);
  resetButton.addEventListener("click", resetFilters);

  // Entrée dans le champ : pas de rechargement, la recherche est déjà faite
  document.getElementById("search").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  searchInput.addEventListener("input", (e) => {
    clearSearchBtn.classList.toggle("visible", e.target.value.length > 0);
  });

  // Navigation au clavier dans la grille (flèches)
  setupGridNavigation();
}

// ===== Navigation par flèches dans la grille =====
function setupGridNavigation() {
  charactersGrid.addEventListener("keydown", (e) => {
    if (!e.target.classList.contains("char-card")) return;

    const list = e.target.closest(".char-list");
    const cards = Array.from(list.querySelectorAll(".char-card"));
    const currentIndex = cards.indexOf(e.target);
    let targetIndex = currentIndex;

    // Nombre de colonnes réel de cette grille
    const columns = window
      .getComputedStyle(list)
      .gridTemplateColumns.split(" ").length;

    switch (e.key) {
      case "ArrowRight":
        targetIndex = Math.min(currentIndex + 1, cards.length - 1);
        break;
      case "ArrowLeft":
        targetIndex = Math.max(currentIndex - 1, 0);
        break;
      case "ArrowDown":
        targetIndex = Math.min(currentIndex + columns, cards.length - 1);
        break;
      case "ArrowUp":
        targetIndex = Math.max(currentIndex - columns, 0);
        break;
      case "Home":
        targetIndex = 0;
        break;
      case "End":
        targetIndex = cards.length - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    if (targetIndex !== currentIndex && cards[targetIndex]) {
      e.target.setAttribute("tabindex", "-1");
      cards[targetIndex].setAttribute("tabindex", "0");
      cards[targetIndex].focus();
    }
  });
}

function handleSearch(e) {
  filterCharacters(e.target.value.trim(), currentBlock);
}

function handleBlockFilter(e) {
  currentBlock = e.target.value;
  filterCharacters(searchInput.value.trim(), currentBlock);
}

// ===== Fonction de traduction français → anglais pour la recherche =====
/**
 * Traduit les mots français d'un terme de recherche en leurs équivalents anglais
 * @param {string} searchTerm - Le terme de recherche à traduire
 * @returns {string} - Termes de recherche additionnels en anglais (ou chaîne vide)
 */
function translateSearchTerm(searchTerm) {
  if (!searchTerm) return "";

  const normalizedTerm = searchTerm.toLowerCase().trim();
  const words = normalizedTerm.split(/\s+/);

  const translatedTerms = new Set();

  // Rechercher d'abord le terme complet
  if (FR_TO_EN_KEYWORDS[normalizedTerm]) {
    FR_TO_EN_KEYWORDS[normalizedTerm]
      .split(/\s+/)
      .forEach((word) => translatedTerms.add(word));
  }

  // Puis chercher chaque mot individuellement
  words.forEach((word) => {
    if (FR_TO_EN_KEYWORDS[word]) {
      FR_TO_EN_KEYWORDS[word]
        .split(/\s+/)
        .forEach((translatedWord) => translatedTerms.add(translatedWord));
    }
  });

  return Array.from(translatedTerms).join(" ");
}

/**
 * Normalise une chaîne pour la comparaison : minuscules, sans accents,
 * « œ » développé, apostrophe typographique ramenée à l'apostrophe droite
 */
function normalizeForSearch(str) {
  return String(str)
    .toLowerCase()
    .replace(/œ/g, "oe")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/’/g, "'");
}

/**
 * Prépare (une seule fois) les champs normalisés d'un caractère
 */
function getSearchFields(char) {
  if (!char._search) {
    const { tags = [], tagsFr = [] } = getCharTags(char);
    char._search = {
      hex: char.hex.toLowerCase(),
      name: normalizeForSearch(char.name),
      block: normalizeForSearch(char.block),
      entity: normalizeForSearch(char.htmlEntity),
      tags: [...tags, ...tagsFr].map(normalizeForSearch),
    };
  }
  return char._search;
}

/**
 * Score d'un mot pour un caractère (plus petit = plus pertinent, 99 = aucun).
 * strict : mot issu de la traduction FR → EN, il doit commencer un mot
 * (sinon « flèche » → « arrow » trouverait « n-arrow no-break space »).
 */
function scoreWord(char, word, strict) {
  const f = getSearchFields(char);
  let best = 99;

  if (!strict) {
    const hex = word.replace(/^u\+/, "");
    if (/^[0-9a-f]{2,6}$/.test(hex)) {
      if (hex === f.hex) best = 0;
      else if (f.hex.startsWith(hex)) best = 1;
    }
    if (word === String(char.decimal)) best = Math.min(best, 1);
    if (word.startsWith("&") && f.entity.startsWith(word)) {
      best = Math.min(best, 1);
    }
  }

  const i = f.name.indexOf(word);
  if (i === 0) best = Math.min(best, 2);
  else if (i > 0 && /[\s-]/.test(f.name.charAt(i - 1))) best = Math.min(best, 3);
  else if (i > 0 && !strict) best = Math.min(best, 4);

  for (const tag of f.tags) {
    const j = tag.indexOf(word);
    if (j === 0) best = Math.min(best, 5);
    else if (j > 0 && !strict) best = Math.min(best, 6);
  }

  if (!strict && f.block.includes(word)) best = Math.min(best, 7);

  return best;
}

/**
 * Recherche : tous les mots doivent correspondre (ET),
 * résultats triés par pertinence puis par code.
 */
function searchCharacters(characters, rawTerm) {
  const term = rawTerm.trim();

  // Caractère collé tel quel
  const direct = characters.filter((c) => c.char === term);
  if (direct.length) return direct;

  const words = normalizeForSearch(term).split(/\s+/).filter(Boolean);
  const candidatesFor = (word) => {
    const translated = translateSearchTerm(word) || translateSearchTerm(normalizeForSearch(word));
    return [
      [word, false],
      ...translated
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean)
        .map((t) => [t, true]),
    ];
  };
  const wordCandidates = words.map(candidatesFor);

  const scored = [];
  for (const char of characters) {
    let total = 0;
    let matches = true;
    for (const candidates of wordCandidates) {
      let best = 99;
      for (const [candidate, strict] of candidates) {
        best = Math.min(best, scoreWord(char, candidate, strict));
        if (best === 0) break;
      }
      if (best === 99) {
        matches = false;
        break;
      }
      total += best;
    }
    if (matches) scored.push({ char, total });
  }

  scored.sort((a, b) => a.total - b.total || a.char.codePoint - b.char.codePoint);
  return scored.map((s) => s.char);
}

function filterCharacters(searchTerm, blockName) {
  let filtered = [...allCharacters];

  if (blockName) {
    filtered = filtered.filter((char) => char.block === blockName);
  }

  if (searchTerm) {
    filtered = searchCharacters(filtered, searchTerm);
  }

  filteredCharacters = filtered;

  // Mettre à jour l'URL avec les paramètres de recherche
  updateURL(searchTerm, blockName);

  // Sans filtre (ni recherche ni bloc) : blocs mis en avant
  if (!searchTerm && !blockName) {
    displayPopularBlocks();
    statsContainer.classList.add("hidden");
    statsDisplay.textContent = "";
  } else {
    displayCharacters(filteredCharacters);
    updateStats(filteredCharacters.length, searchTerm);
    // Le meilleur résultat s'affiche dans la fiche
    if (searchTerm && filteredCharacters.length) {
      selectCharacter(filteredCharacters[0]);
    }
  }
}

function clearSearch() {
  searchInput.value = "";
  clearSearchBtn.classList.remove("visible");
  filterCharacters("", currentBlock);
  searchInput.focus();
}

function resetFilters() {
  searchInput.value = "";
  clearSearchBtn.classList.remove("visible");
  blockFilter.value = "";
  currentBlock = "";
  filterCharacters("", "");
  searchInput.focus();
}

function updateStats(count, searchTerm) {
  statsContainer.classList.remove("hidden");
  if (count === 0) {
    statsDisplay.textContent = `Aucun caractère ne correspond à «${NNBSP}${searchTerm}${NNBSP}»`;
    return;
  }
  const n = count.toLocaleString("fr-FR");
  statsDisplay.textContent =
    count > 1
      ? `${n}${NBSP}caractères ${searchTerm ? "trouvés" : "dans ce bloc"}`
      : `1${NBSP}caractère ${searchTerm ? "trouvé" : "dans ce bloc"}`;
}

function updateTotalCharsCount(total) {
  totalCharsCount.textContent = `${total.toLocaleString(
    "fr-FR"
  )}${NBSP}caractères Unicode disponibles`;
}

// ===== GESTION DES FAVORIS =====

const FAVORITES_KEY = "uniclaude-favorites";
let favorites = [];

// Charger les favoris depuis localStorage
function loadFavorites() {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    favorites = stored ? JSON.parse(stored) : [];

    // Enrichir les favoris avec les données emoji si disponibles
    favorites = favorites.map((fav) => enrichFavoriteWithEmojiData(fav));

    renderFavorites();
  } catch (error) {
    console.error("Erreur lors du chargement des favoris:", error);
    favorites = [];
  }
}

// Enrichir un favori avec les données emoji
function enrichFavoriteWithEmojiData(fav) {
  const hexCode =
    fav.hex || fav.codePoint.toString(16).toUpperCase().padStart(4, "0");

  if (emojiData[hexCode]) {
    const emojiInfo = emojiData[hexCode];
    return {
      ...fav,
      name: emojiInfo.name, // Utiliser le nom enrichi
      emojiGroup: emojiInfo.group,
      emojiSubgroup: emojiInfo.subgroup,
    };
  }

  return fav; // Retourner tel quel si pas d'emoji data
}

// Sauvegarder les favoris dans localStorage
function saveFavorites() {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Erreur lors de la sauvegarde des favoris:", error);
  }
}

// Vérifier si un caractère est en favori
function isFavorite(codePoint) {
  return favorites.some((fav) => fav.codePoint === codePoint);
}

// Ajouter un caractère aux favoris
function addToFavorites(charData) {
  if (!isFavorite(charData.codePoint)) {
    favorites.unshift({
      char: charData.char,
      codePoint: charData.codePoint,
      hex: charData.hex,
      name: charData.name,
      htmlEntity: charData.htmlEntity,
    });
    saveFavorites();
    renderFavorites();
    updateFavoriteButtons();
    announceFavoriteChange(`${charData.name} ajouté aux favoris`);
    return true;
  }
  return false;
}

// Retirer un caractère des favoris
function removeFromFavorites(codePoint) {
  const favorite = favorites.find((fav) => fav.codePoint === codePoint);
  favorites = favorites.filter((fav) => fav.codePoint !== codePoint);
  saveFavorites();
  renderFavorites();
  updateFavoriteButtons();
  if (favorite) {
    announceFavoriteChange(`${favorite.name} retiré des favoris`);
  }
}

// Effacer tous les favoris
function clearAllFavorites() {
  if (favorites.length === 0) return;

  const count = favorites.length;
  if (confirm("Êtes-vous sûr de vouloir effacer tous vos favoris ?")) {
    favorites = [];
    saveFavorites();
    renderFavorites();
    updateFavoriteButtons();
    announceFavoriteChange(
      `${count} favori${count > 1 ? "s" : ""} effacé${count > 1 ? "s" : ""}`
    );
  }
}

// Afficher les favoris
function renderFavorites() {
  const favoritesSection = document.getElementById("favoritesSection");
  const favoritesGrid = document.getElementById("favoritesGrid");
  const favoritesEmpty = document.getElementById("favoritesEmpty");

  favoritesGrid.innerHTML = "";

  if (favorites.length === 0) {
    favoritesSection.classList.add("hidden");
    favoritesEmpty.hidden = false;
    return;
  }

  favoritesSection.classList.remove("hidden");
  favoritesEmpty.hidden = true;

  favorites.forEach((fav) => {
    const item = document.createElement("li");
    item.className = "favorite-item";
    item.draggable = true;
    item.dataset.codepoint = fav.codePoint;
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragover", handleDragOver);
    item.addEventListener("dragleave", handleDragLeave);
    item.addEventListener("drop", handleDrop);
    item.addEventListener("dragend", handleDragEnd);

    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "favorite-item-btn";
    copyBtn.setAttribute("aria-label", `Copier ${fav.name}, U+${fav.hex}`);
    if (isSpaceChar(fav)) {
      copyBtn.appendChild(createSpaceSymbol(fav));
    } else {
      copyBtn.textContent = fav.char;
    }
    copyBtn.addEventListener("click", () => copyToClipboard(fav));

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "remove-favorite";
    removeBtn.setAttribute("aria-label", `Retirer ${fav.name} des favoris`);
    removeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18M6 6l12 12"/></svg>`;
    removeBtn.addEventListener("click", () =>
      removeFromFavorites(fav.codePoint)
    );

    item.append(copyBtn, removeBtn);
    favoritesGrid.appendChild(item);
  });
}

// ===== GESTION DU DRAG & DROP POUR RÉORDONNER LES FAVORIS =====

let draggedElement = null;
let draggedIndex = null;

function handleDragStart(event) {
  draggedElement = event.currentTarget;
  draggedIndex = Array.from(draggedElement.parentNode.children).indexOf(
    draggedElement
  );

  // Style visuel pendant le drag
  draggedElement.classList.add("dragging");

  // Nécessaire pour Firefox
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/html", draggedElement.innerHTML);
}

function handleDragOver(event) {
  event.preventDefault(); // Nécessaire pour permettre le drop

  const dragOverElement = event.currentTarget;

  // Ne pas traiter si c'est le même élément
  if (draggedElement === dragOverElement) {
    return;
  }

  // Ajouter un indicateur visuel
  dragOverElement.classList.add("drag-over");

  event.dataTransfer.dropEffect = "move";
}

function handleDragLeave(event) {
  // Retirer l'indicateur visuel
  event.currentTarget.classList.remove("drag-over");
}

function handleDrop(event) {
  event.preventDefault();
  event.stopPropagation();

  const dropElement = event.currentTarget;
  dropElement.classList.remove("drag-over");

  // Ne pas traiter si c'est le même élément
  if (draggedElement === dropElement) {
    return;
  }

  // Calculer le nouvel index
  const dropIndex = Array.from(dropElement.parentNode.children).indexOf(
    dropElement
  );

  // Réorganiser le tableau des favoris
  const [movedItem] = favorites.splice(draggedIndex, 1);
  favorites.splice(dropIndex, 0, movedItem);

  // Sauvegarder et re-rendre
  saveFavorites();
  renderFavorites();

  // Annoncer le changement
  announceFavoriteChange(
    `${movedItem.name} déplacé en position ${dropIndex + 1}`
  );
}

function handleDragEnd(event) {
  // Nettoyer les styles
  event.currentTarget.classList.remove("dragging");

  // Nettoyer tous les indicateurs drag-over
  document.querySelectorAll(".favorite-item.drag-over").forEach((el) => {
    el.classList.remove("drag-over");
  });

  draggedElement = null;
  draggedIndex = null;
}

// Mettre à jour l'état des boutons étoile
function updateFavoriteButtons() {
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    setFavoriteButtonState(btn, isFavorite(parseInt(btn.dataset.codepoint)));
  });
  updateSpecimenFavorite();
}

// Basculer l'état favori d'un caractère
function toggleFavorite(event, charData) {
  event.stopPropagation();

  if (isFavorite(charData.codePoint)) {
    removeFromFavorites(charData.codePoint);
  } else {
    addToFavorites(charData);
  }
}

// Annoncer les changements de favoris aux lecteurs d'écran
function announceFavoriteChange(message) {
  const announcement = document.getElementById("favoritesAnnouncement");
  if (announcement) {
    announcement.textContent = message;
    // Effacer après 3 secondes pour éviter l'encombrement
    setTimeout(() => {
      announcement.textContent = "";
    }, 3000);
  }
}

// Initialiser les événements des favoris
function initFavoritesEvents() {
  // Charger les favoris au démarrage
  loadFavorites();
}
