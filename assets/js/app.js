// ===== Configuration des blocs Unicode =====
const UNICODE_BLOCKS = [
  { name: "Latin de base", start: 0x0020, end: 0x007f },
  { name: "Latin-1 supplément", start: 0x0080, end: 0x00ff },
  { name: "Latin étendu-A", start: 0x0100, end: 0x017f },
  { name: "Latin étendu-B", start: 0x0180, end: 0x024f },
  { name: "Latin étendu additionnel", start: 0x1e00, end: 0x1eff },
  { name: "Alphabet phonétique international", start: 0x0250, end: 0x02af },
  { name: "Lettres modificatives", start: 0x02b0, end: 0x02ff },
  { name: "Diacritiques", start: 0x0300, end: 0x036f },
  { name: "Grec et copte", start: 0x0370, end: 0x03ff },
  { name: "Cyrillique", start: 0x0400, end: 0x04ff },
  { name: "Cyrillique supplément", start: 0x0500, end: 0x052f },
  { name: "Arménien", start: 0x0530, end: 0x058f },
  { name: "Hébreu", start: 0x0590, end: 0x05ff },
  { name: "Arabe", start: 0x0600, end: 0x06ff },
  { name: "Syriaque", start: 0x0700, end: 0x074f },
  { name: "Thaana", start: 0x0780, end: 0x07bf },
  { name: "Dévanagari", start: 0x0900, end: 0x097f },
  { name: "Bengali", start: 0x0980, end: 0x09ff },
  { name: "Gurmukhi", start: 0x0a00, end: 0x0a7f },
  { name: "Gujarati", start: 0x0a80, end: 0x0aff },
  { name: "Oriya", start: 0x0b00, end: 0x0b7f },
  { name: "Tamoul", start: 0x0b80, end: 0x0bff },
  { name: "Telugu", start: 0x0c00, end: 0x0c7f },
  { name: "Kannada", start: 0x0c80, end: 0x0cff },
  { name: "Malayalam", start: 0x0d00, end: 0x0d7f },
  { name: "Thaï", start: 0x0e00, end: 0x0e7f },
  { name: "Lao", start: 0x0e80, end: 0x0eff },
  { name: "Tibétain", start: 0x0f00, end: 0x0fff },
  { name: "Géorgien", start: 0x10a0, end: 0x10ff },
  { name: "Hangul Jamo", start: 0x1100, end: 0x11ff },
  { name: "Ponctuation générale", start: 0x2000, end: 0x206f },
  { name: "Exposants et indices", start: 0x2070, end: 0x209f },
  { name: "Symboles monétaires", start: 0x20a0, end: 0x20cf },
  { name: "Symboles combinatoires", start: 0x20d0, end: 0x20ff },
  { name: "Symboles lettres", start: 0x2100, end: 0x214f },
  { name: "Formes numériques", start: 0x2150, end: 0x218f },
  { name: "Flèches", start: 0x2190, end: 0x21ff },
  { name: "Opérateurs mathématiques", start: 0x2200, end: 0x22ff },
  { name: "Symboles techniques divers", start: 0x2300, end: 0x23ff },
  { name: "Caractères de contrôle", start: 0x2400, end: 0x243f },
  { name: "Reconnaissance optique caractères", start: 0x2440, end: 0x245f },
  { name: "Alphanumériques entourés", start: 0x2460, end: 0x24ff },
  { name: "Symboles de boîtes", start: 0x2500, end: 0x257f },
  { name: "Blocs", start: 0x2580, end: 0x259f },
  { name: "Formes géométriques", start: 0x25a0, end: 0x25ff },
  { name: "Symboles divers", start: 0x2600, end: 0x26ff },
  { name: "Dingbats", start: 0x2700, end: 0x27bf },
  { name: "Flèches supplémentaires-A", start: 0x27f0, end: 0x27ff },
  { name: "Braille", start: 0x2800, end: 0x28ff },
  { name: "Flèches supplémentaires-B", start: 0x2900, end: 0x297f },
  { name: "Symboles mathématiques divers-A", start: 0x27c0, end: 0x27ef },
  { name: "Symboles mathématiques divers-B", start: 0x2980, end: 0x29ff },
  {
    name: "Opérateurs mathématiques supplémentaires",
    start: 0x2a00,
    end: 0x2aff,
  },
  { name: "Symboles et flèches divers", start: 0x2b00, end: 0x2bff },
  { name: "CJK Radicaux supplément", start: 0x2e80, end: 0x2eff },
  { name: "Hiragana", start: 0x3040, end: 0x309f },
  { name: "Katakana", start: 0x30a0, end: 0x30ff },
  { name: "Bopomofo", start: 0x3100, end: 0x312f },
  { name: "Hangul compatibilité Jamo", start: 0x3130, end: 0x318f },
  { name: "CJK Symboles et ponctuation", start: 0x3000, end: 0x303f },
  { name: "Alphanumériques entourés CJK", start: 0x3200, end: 0x32ff },
  { name: "Formes de compatibilité CJK", start: 0x3300, end: 0x33ff },
  { name: "Symboles Tai Xuan Jing", start: 0x1d300, end: 0x1d35f },
  { name: "Cartes à jouer", start: 0x1f0a0, end: 0x1f0ff },
  { name: "Tuiles Mahjong", start: 0x1f000, end: 0x1f02f },
  { name: "Tuiles Dominos", start: 0x1f030, end: 0x1f09f },
  { name: "Emojis - Emoticons", start: 0x1f600, end: 0x1f64f },
  {
    name: "Emojis - Symboles et pictogrammes divers",
    start: 0x1f300,
    end: 0x1f5ff,
  },
  {
    name: "Emojis - Transport et symboles de carte",
    start: 0x1f680,
    end: 0x1f6ff,
  },
  { name: "Emojis - Symboles supplémentaires", start: 0x1f900, end: 0x1f9ff },
  { name: "Emojis - Drapeaux", start: 0x1f1e6, end: 0x1f1ff },
  { name: "Symboles alchimiques", start: 0x1f700, end: 0x1f77f },
  { name: "Formes géométriques étendues", start: 0x1f780, end: 0x1f7ff },
  { name: "Flèches supplémentaires-C", start: 0x1f800, end: 0x1f8ff },
];

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

// ===== État de l'application =====
let allCharacters = [];
let filteredCharacters = [];
let currentBlock = "";

// ===== Éléments DOM =====
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const blockFilter = document.getElementById("blockFilter");
const charactersGrid = document.getElementById("charactersGrid");
const statsDisplay = document.getElementById("statsDisplay");
const loadingSpinner = document.getElementById("loadingSpinner");
const copyNotification = document.getElementById("copyNotification");

// ===== Initialisation =====
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

async function initializeApp() {
  populateBlockFilter();
  await generateCharacters();
  setupEventListeners();
  initFavoritesEvents(); // Initialiser les favoris

  // Afficher 100 caractères aléatoires au démarrage
  const randomChars = getRandomCharacters(allCharacters, 100);
  displayCharacters(randomChars, true); // true = mode aléatoire

  updateStats(allCharacters.length, allCharacters.length);
  loadingSpinner.classList.add("hidden");
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
          const charName =
            CHARACTER_NAMES[codePoint] ||
            getCharacterName(codePoint, block.name);
          const htmlEntity = getHtmlEntity(codePoint);

          allCharacters.push({
            char: char,
            codePoint: codePoint,
            hex: codePoint.toString(16).toUpperCase().padStart(4, "0"),
            decimal: codePoint,
            block: block.name,
            name: charName,
            htmlEntity: htmlEntity,
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
function displayCharacters(characters, isRandom = false) {
  charactersGrid.innerHTML = "";

  // Afficher un titre si mode aléatoire
  if (isRandom) {
    const randomTitle = document.createElement("div");
    randomTitle.className = "random-title";
    randomTitle.style.gridColumn = "1 / -1";
    randomTitle.style.textAlign = "center";
    randomTitle.style.padding = "1rem";
    randomTitle.style.marginBottom = "1rem";
    randomTitle.innerHTML = `
      <h3 style="color: var(--primary-color-on-dark); font-size: 1.25rem; margin: 0 0 0.5rem 0; font-weight: 600;">
        🎲 Quelques caractères aléatoirement choisis pour vous
      </h3>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0;">
        Utilisez la recherche ou les filtres pour explorer les ${allCharacters.length.toLocaleString(
          "fr-FR"
        )} caractères disponibles
      </p>
    `;
    charactersGrid.appendChild(randomTitle);
  }

  // Limiter l'affichage pour de meilleures performances
  const displayLimit = isRandom ? characters.length : 500;
  const charsToDisplay = characters.slice(0, displayLimit);

  charsToDisplay.forEach((charData, index) => {
    const card = createCharacterCard(charData, index);
    charactersGrid.appendChild(card);
  });

  if (!isRandom && characters.length > displayLimit) {
    const moreInfo = document.createElement("div");
    moreInfo.className = "info-card";
    moreInfo.style.gridColumn = "1 / -1";
    moreInfo.style.textAlign = "center";
    moreInfo.style.padding = "1rem";
    moreInfo.innerHTML = `<p style="color: var(--text-muted);">Affichage limité à ${displayLimit} caractères sur ${characters.length.toLocaleString(
      "fr-FR"
    )}. Utilisez la recherche ou les filtres pour affiner.</p>`;
    charactersGrid.appendChild(moreInfo);
  }
}

function createCharacterCard(charData, index) {
  const card = document.createElement("button");
  card.className = "char-card";
  card.setAttribute("data-char", charData.char);
  card.setAttribute("data-codepoint", charData.codePoint);
  card.setAttribute("data-index", index);
  card.setAttribute("type", "button");

  // Seul le premier bouton est tabbable, les autres utilisent la navigation par flèches
  card.setAttribute("tabindex", index === 0 ? "0" : "-1");

  // Label accessible pour le bouton
  const accessibleLabel = `Copier ${charData.name}, code ${charData.hex}, entité ${charData.htmlEntity}`;
  card.setAttribute("aria-label", accessibleLabel);

  // Pour les espaces, afficher un symbole visible
  let displayChar = charData.char;
  const isSpace =
    charData.name.toLowerCase().includes("space") ||
    (charData.codePoint >= 0x2000 && charData.codePoint <= 0x200a) ||
    charData.codePoint === 0x0020 ||
    charData.codePoint === 0x00a0 ||
    charData.codePoint === 0x202f ||
    charData.codePoint === 0x205f ||
    charData.codePoint === 0x3000;

  if (isSpace) {
    // Afficher un cadre avec "␣" (symbole open box U+2423) pour visualiser l'espace
    displayChar = `<span class="space-symbol" aria-hidden="true">␣</span>`;
  }

  // Échapper l'entité HTML pour qu'elle s'affiche telle quelle
  const escapedHtmlEntity = charData.htmlEntity
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Échapper les caractères pour les attributs data
  const escapedName = charData.name
    .replace(/'/g, "\\'")
    .replace(/"/g, "&quot;");

  card.innerHTML = `
        <button
          class="favorite-btn ${
            isFavorite(charData.codePoint) ? "is-favorite" : ""
          }"
          data-codepoint="${charData.codePoint}"
          data-label-add="Ajouter ${escapedName} aux favoris"
          data-label-remove="Retirer ${escapedName} des favoris"
          aria-label="${
            isFavorite(charData.codePoint)
              ? `Retirer ${escapedName} des favoris`
              : `Ajouter ${escapedName} aux favoris`
          }"
          title="${
            isFavorite(charData.codePoint)
              ? "Retirer des favoris"
              : "Ajouter aux favoris"
          }"
          type="button"
          tabindex="0"
        >${isFavorite(charData.codePoint) ? "⭐" : "☆"}</button>
        <div class="char-display" aria-hidden="true">${displayChar}</div>
        <div class="char-info" aria-hidden="true">
            <div class="char-code">U+${charData.hex}</div>
            <div class="char-code" style="color: var(--secondary-color-on-dark);">${escapedHtmlEntity}</div>
            <div class="char-name" title="${charData.name}">${
    charData.name
  }</div>
        </div>
    `;

  // Événement pour copier le caractère
  card.addEventListener("click", () => copyToClipboard(charData));

  // Événement pour le bouton favori (empêcher la propagation)
  const favoriteBtn = card.querySelector(".favorite-btn");
  if (favoriteBtn) {
    favoriteBtn.addEventListener("click", (e) => toggleFavorite(e, charData));
  }

  return card;
}

// ===== Copie dans le presse-papier =====
async function copyToClipboard(charData) {
  try {
    await navigator.clipboard.writeText(charData.char);
    showCopyNotification(charData.char);
  } catch (err) {
    console.error("Erreur lors de la copie:", err);
    // Fallback pour les navigateurs plus anciens
    fallbackCopyToClipboard(charData.char);
  }
}

function fallbackCopyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.select();

  try {
    document.execCommand("copy");
    showCopyNotification(text);
  } catch (err) {
    console.error("Fallback: Erreur lors de la copie", err);
  }

  document.body.removeChild(textArea);
}

function showCopyNotification(char) {
  const charSpan = copyNotification.querySelector(".copied-char");
  charSpan.textContent = char;

  copyNotification.classList.add("show");

  setTimeout(() => {
    copyNotification.classList.remove("show");
  }, 2000);
}

// ===== Recherche et filtrage =====
function setupEventListeners() {
  searchInput.addEventListener("input", handleSearch);
  clearSearchBtn.addEventListener("click", clearSearch);
  blockFilter.addEventListener("change", handleBlockFilter);

  searchInput.addEventListener("input", (e) => {
    clearSearchBtn.classList.toggle("visible", e.target.value.length > 0);
  });

  // Navigation au clavier dans la grille (flèches)
  setupGridNavigation();
}

// ===== Navigation par flèches dans la grille =====
function setupGridNavigation() {
  charactersGrid.addEventListener("keydown", (e) => {
    // Ne gérer que si on est sur un bouton de caractère
    if (!e.target.classList.contains("char-card")) return;

    const cards = Array.from(
      charactersGrid.querySelectorAll(".char-card[data-index]")
    );
    const currentIndex = parseInt(e.target.getAttribute("data-index"));
    let targetIndex = currentIndex;

    // Calculer le nombre de colonnes (approximatif basé sur la largeur)
    const gridComputedStyle = window.getComputedStyle(charactersGrid);
    const gridColumnCount =
      gridComputedStyle.gridTemplateColumns.split(" ").length;

    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        targetIndex = Math.min(currentIndex + 1, cards.length - 1);
        break;

      case "ArrowLeft":
        e.preventDefault();
        targetIndex = Math.max(currentIndex - 1, 0);
        break;

      case "ArrowDown":
        e.preventDefault();
        targetIndex = Math.min(
          currentIndex + gridColumnCount,
          cards.length - 1
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        targetIndex = Math.max(currentIndex - gridColumnCount, 0);
        break;

      case "Home":
        e.preventDefault();
        targetIndex = 0;
        break;

      case "End":
        e.preventDefault();
        targetIndex = cards.length - 1;
        break;

      default:
        return; // Ne rien faire pour les autres touches
    }

    // Déplacer le focus et mettre à jour les tabindex
    if (targetIndex !== currentIndex && cards[targetIndex]) {
      // Retirer le tabindex de l'élément actuel
      e.target.setAttribute("tabindex", "-1");

      // Ajouter le tabindex au nouvel élément et focus
      cards[targetIndex].setAttribute("tabindex", "0");
      cards[targetIndex].focus();
    }
  });
}

function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase().trim();
  filterCharacters(searchTerm, currentBlock);
}

function handleBlockFilter(e) {
  currentBlock = e.target.value;
  const searchTerm = searchInput.value.toLowerCase().trim();
  filterCharacters(searchTerm, currentBlock);
}

function filterCharacters(searchTerm, blockName) {
  let filtered = [...allCharacters];

  // Filtrer par bloc
  if (blockName) {
    filtered = filtered.filter((char) => char.block === blockName);
  }

  // Filtrer par terme de recherche
  if (searchTerm) {
    filtered = filtered.filter((char) => {
      const matchesChar = char.char.toLowerCase().includes(searchTerm);
      const matchesHex = char.hex.toLowerCase().includes(searchTerm);
      const matchesDecimal = char.decimal.toString().includes(searchTerm);
      const matchesName = char.name.toLowerCase().includes(searchTerm);
      const matchesBlock = char.block.toLowerCase().includes(searchTerm);
      const matchesHtmlEntity = char.htmlEntity
        .toLowerCase()
        .includes(searchTerm);

      return (
        matchesChar ||
        matchesHex ||
        matchesDecimal ||
        matchesName ||
        matchesBlock ||
        matchesHtmlEntity
      );
    });
  }

  filteredCharacters = filtered;
  displayCharacters(filteredCharacters);
  updateStats(filteredCharacters.length, allCharacters.length);
}

function clearSearch() {
  searchInput.value = "";
  clearSearchBtn.classList.remove("visible");
  filterCharacters("", currentBlock);
}

function updateStats(displayed, total) {
  statsDisplay.textContent = `${displayed.toLocaleString("fr-FR")} caractère${
    displayed > 1 ? "s" : ""
  } affiché${displayed > 1 ? "s" : ""} sur ${total.toLocaleString("fr-FR")}`;
}

// ===== GESTION DES FAVORIS =====

const FAVORITES_KEY = "uniclaude-favorites";
let favorites = [];

// Charger les favoris depuis localStorage
function loadFavorites() {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    favorites = stored ? JSON.parse(stored) : [];
    renderFavorites();
  } catch (error) {
    console.error("Erreur lors du chargement des favoris:", error);
    favorites = [];
  }
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

  if (favorites.length === 0) {
    favoritesSection.classList.add("hidden");
    favoritesEmpty.style.display = "block";
    favoritesGrid.innerHTML = "";
    return;
  }

  favoritesSection.classList.remove("hidden");
  favoritesEmpty.style.display = "none";

  favoritesGrid.innerHTML = favorites
    .map((fav) => {
      // Vérifier si c'est un espace
      const isSpace =
        fav.name.toLowerCase().includes("space") ||
        (fav.codePoint >= 0x2000 && fav.codePoint <= 0x200a) ||
        fav.codePoint === 0x0020 ||
        fav.codePoint === 0x00a0 ||
        fav.codePoint === 0x202f ||
        fav.codePoint === 0x205f ||
        fav.codePoint === 0x3000;

      // Afficher un symbole visible pour les espaces
      const displayChar = isSpace
        ? `<span class="space-symbol" aria-hidden="true">␣</span>`
        : fav.char;

      // Échapper l'entité HTML pour affichage
      const escapedHtmlEntity = fav.htmlEntity
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      // Échapper les attributs
      const escapedName = fav.name.replace(/'/g, "\\'").replace(/"/g, "&quot;");

      return `
    <div class="favorite-item" role="listitem">
      <button
        class="favorite-item-btn"
        onclick="copyToClipboard({char: '${fav.char.replace(
          /'/g,
          "\\'"
        )}', name: '${escapedName}'})"
        title="Cliquer pour copier ${fav.name}"
        aria-label="Copier ${fav.name}"
      >
        <div class="favorite-char">${displayChar}</div>
        <div class="favorite-info">
          <div class="favorite-code">U+${fav.hex}</div>
          <div class="favorite-code" style="color: var(--secondary-color-on-dark);">${escapedHtmlEntity}</div>
          <div class="favorite-name" title="${fav.name}">${fav.name}</div>
        </div>
      </button>
      <button
        class="remove-favorite"
        onclick="event.stopPropagation(); removeFromFavorites(${fav.codePoint})"
        aria-label="Retirer ${fav.name} des favoris"
        title="Retirer des favoris"
        type="button"
      >×</button>
    </div>
  `;
    })
    .join("");
}

// Mettre à jour l'état des boutons étoile
function updateFavoriteButtons() {
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    const codePoint = parseInt(btn.dataset.codepoint);
    if (isFavorite(codePoint)) {
      btn.classList.add("is-favorite");
      btn.setAttribute("aria-label", btn.dataset.labelRemove);
      btn.textContent = "⭐";
    } else {
      btn.classList.remove("is-favorite");
      btn.setAttribute("aria-label", btn.dataset.labelAdd);
      btn.textContent = "☆";
    }
  });
}

// Basculer l'état favori d'un caractère
function toggleFavorite(event, charData) {
  event.stopPropagation(); // Empêcher la copie du caractère

  const btn = event.currentTarget;

  if (isFavorite(charData.codePoint)) {
    removeFromFavorites(charData.codePoint);
  } else {
    addToFavorites(charData);
    // Animation
    btn.classList.add("adding");
    setTimeout(() => btn.classList.remove("adding"), 400);
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
