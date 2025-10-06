/**
 * Script pour générer semantic-tags.json à partir d'Unicode CLDR
 *
 * Unicode CLDR contient des annotations pour les emojis et caractères
 * dans plusieurs langues, incluant anglais et français.
 *
 * Usage: node generate-semantic-tags.js
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// URLs des annotations CLDR
const CLDR_VERSION = "45"; // Version stable la plus récente
const CLDR_BASE_URL = `https://raw.githubusercontent.com/unicode-org/cldr/release-${CLDR_VERSION}/common/annotations`;

const LANGUAGES = {
  en: `${CLDR_BASE_URL}/en.xml`,
  fr: `${CLDR_BASE_URL}/fr.xml`,
};

/**
 * Télécharge un fichier depuis une URL
 */
function downloadFile(url) {
  return new Promise((resolve, reject) => {
    console.log(`📥 Téléchargement : ${url}`);

    https
      .get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          if (res.statusCode === 200) {
            console.log(`✅ Téléchargement réussi`);
            resolve(data);
          } else {
            reject(new Error(`HTTP ${res.statusCode}`));
          }
        });
      })
      .on("error", reject);
  });
}

/**
 * Parse les annotations XML du CLDR
 * Format: <annotation cp="🍌">banana | fruit</annotation>
 */
function parseAnnotations(xmlContent) {
  const annotations = {};

  // Regex pour extraire les annotations
  // <annotation cp="🍌" type="tts">banana</annotation>
  // <annotation cp="🍌">banana | fruit | food</annotation>
  const annotationRegex =
    /<annotation cp="([^"]+)"(?:\s+type="([^"]+)")?>([^<]+)<\/annotation>/g;

  let match;
  while ((match = annotationRegex.exec(xmlContent)) !== null) {
    const [_, char, type, content] = match;
    const codepoint = [...char]
      .map((c) => c.codePointAt(0).toString(16).toUpperCase())
      .join("-");

    if (!annotations[codepoint]) {
      annotations[codepoint] = {
        char: char,
        name: "",
        tags: [],
      };
    }

    if (type === "tts") {
      // Type "tts" = nom principal du caractère
      annotations[codepoint].name = content.trim();
    } else {
      // Pas de type = liste de tags séparés par |
      const tags = content
        .split("|")
        .map((tag) => tag.trim())
        .filter((tag) => tag);
      annotations[codepoint].tags = tags;
    }
  }

  return annotations;
}

/**
 * Fusionne les annotations anglaises et françaises
 */
function mergeAnnotations(enAnnotations, frAnnotations) {
  const merged = {};

  // Parcourir toutes les annotations anglaises (base)
  for (const [codepoint, enData] of Object.entries(enAnnotations)) {
    merged[codepoint] = {
      char: enData.char,
      name: enData.name,
      tags: enData.tags || [],
      tagsFr: [],
    };

    // Ajouter les tags français si disponibles
    if (frAnnotations[codepoint]) {
      merged[codepoint].tagsFr = frAnnotations[codepoint].tags || [];

      // Si pas de nom anglais, utiliser le nom français
      if (!merged[codepoint].name && frAnnotations[codepoint].name) {
        merged[codepoint].name = frAnnotations[codepoint].name;
      }
    }
  }

  // Ajouter les caractères qui n'existent que dans les annotations françaises
  for (const [codepoint, frData] of Object.entries(frAnnotations)) {
    if (!merged[codepoint]) {
      merged[codepoint] = {
        char: frData.char,
        name: frData.name,
        tags: [],
        tagsFr: frData.tags || [],
      };
    }
  }

  return merged;
}

/**
 * Filtre et nettoie les annotations
 */
function cleanAnnotations(annotations) {
  const cleaned = {};
  let count = 0;

  for (const [codepoint, data] of Object.entries(annotations)) {
    // Ne garder que si au moins 1 tag existe
    if (data.tags.length > 0 || data.tagsFr.length > 0) {
      cleaned[codepoint] = {
        char: data.char,
        tags: data.tags,
        tagsFr: data.tagsFr,
      };

      // Optionnel : ajouter le nom si présent
      if (data.name) {
        cleaned[codepoint].name = data.name;
      }

      count++;
    }
  }

  console.log(`🧹 ${count} caractères avec tags conservés`);
  return cleaned;
}

/**
 * Génère des statistiques sur les tags
 */
function generateStats(annotations) {
  let totalChars = 0;
  let totalTagsEn = 0;
  let totalTagsFr = 0;
  let charsWithBothLangs = 0;

  for (const data of Object.values(annotations)) {
    totalChars++;
    totalTagsEn += data.tags.length;
    totalTagsFr += data.tagsFr.length;

    if (data.tags.length > 0 && data.tagsFr.length > 0) {
      charsWithBothLangs++;
    }
  }

  return {
    totalChars,
    totalTagsEn,
    totalTagsFr,
    avgTagsEn: (totalTagsEn / totalChars).toFixed(1),
    avgTagsFr: (totalTagsFr / totalChars).toFixed(1),
    charsWithBothLangs,
    percentBothLangs: ((charsWithBothLangs / totalChars) * 100).toFixed(1),
  };
}

/**
 * Fonction principale
 */
async function main() {
  try {
    console.log("🚀 Génération de semantic-tags.json depuis Unicode CLDR\n");

    // Télécharger les annotations
    console.log("📥 Téléchargement des annotations...\n");
    const enXml = await downloadFile(LANGUAGES.en);
    const frXml = await downloadFile(LANGUAGES.fr);

    console.log("\n📝 Parsing des annotations...");
    const enAnnotations = parseAnnotations(enXml);
    const frAnnotations = parseAnnotations(frXml);

    console.log(
      `   - Anglais : ${Object.keys(enAnnotations).length} caractères`
    );
    console.log(
      `   - Français : ${Object.keys(frAnnotations).length} caractères`
    );

    console.log("\n🔀 Fusion des annotations...");
    const merged = mergeAnnotations(enAnnotations, frAnnotations);
    console.log(`   - Total : ${Object.keys(merged).length} caractères`);

    console.log("\n🧹 Nettoyage des données...");
    const cleaned = cleanAnnotations(merged);

    console.log("\n📊 Statistiques :");
    const stats = generateStats(cleaned);
    console.log(`   - Caractères enrichis : ${stats.totalChars}`);
    console.log(
      `   - Tags anglais total : ${stats.totalTagsEn} (moy: ${stats.avgTagsEn}/char)`
    );
    console.log(
      `   - Tags français total : ${stats.totalTagsFr} (moy: ${stats.avgTagsFr}/char)`
    );
    console.log(
      `   - Caractères bilingues : ${stats.charsWithBothLangs} (${stats.percentBothLangs}%)`
    );

    console.log("\n💾 Écriture du fichier semantic-tags.json...");
    const outputPath = path.join(__dirname, "semantic-tags.json");
    fs.writeFileSync(outputPath, JSON.stringify(cleaned, null, 2), "utf8");

    const fileSizeKB = (fs.statSync(outputPath).size / 1024).toFixed(1);
    console.log(`   - Fichier créé : ${outputPath}`);
    console.log(`   - Taille : ${fileSizeKB} KB`);

    console.log("\n✅ Génération terminée avec succès !");
    console.log("\n💡 Exemples de recherches possibles :");
    console.log('   - "fruit yellow" → 🍌 banana');
    console.log('   - "fly wing" → ✈️ airplane');
    console.log('   - "animal cat" → 🐱 cat');
    console.log('   - "fruit rouge" → 🍎 pomme (recherche en français)');
  } catch (error) {
    console.error("\n❌ Erreur :", error.message);
    process.exit(1);
  }
}

// Lancer le script
main();
