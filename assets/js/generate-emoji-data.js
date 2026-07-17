#!/usr/bin/env node

/**
 * Script de génération des données emoji enrichies
 * Télécharge emoji-test.txt depuis unicode.org et génère emoji-data.json
 *
 * Usage: node assets/js/generate-emoji-data.js
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// URL du fichier emoji-test.txt (dernière version)
const EMOJI_TEST_URL = "https://unicode.org/Public/emoji/latest/emoji-test.txt";
const OUTPUT_FILE = path.join(__dirname, "emoji-data.json");

console.log("🦄 UniClaude - Générateur de données emoji");
console.log("==========================================\n");

/**
 * Télécharge le contenu d'une URL
 */
function downloadFile(url) {
  return new Promise((resolve, reject) => {
    console.log(`📥 Téléchargement de ${url}...`);

    https
      .get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          // Suivre les redirections
          return downloadFile(response.headers.location)
            .then(resolve)
            .catch(reject);
        }

        if (response.statusCode !== 200) {
          reject(new Error(`Erreur HTTP: ${response.statusCode}`));
          return;
        }

        let data = "";
        response.on("data", (chunk) => (data += chunk));
        response.on("end", () => {
          console.log("✅ Téléchargement terminé\n");
          resolve(data);
        });
      })
      .on("error", reject);
  });
}

/**
 * Parse une ligne du fichier emoji-test.txt
 * Format: codepoints ; status # emoji version [count] (emoji) name
 * Exemple: 1F44B ; fully-qualified # 👋 E0.6 waving hand
 */
function parseEmojiLine(line) {
  // Ignorer les commentaires et lignes vides
  if (!line || line.startsWith("#") || line.trim() === "") {
    return null;
  }

  // Format: codepoint(s) ; status # emoji version name
  const match = line.match(
    /^([0-9A-F ]+)\s*;\s*(\S+)\s*#\s*(\S+)\s+(E\d+\.\d+)\s+(.+)$/
  );

  if (!match) {
    return null;
  }

  const [, codepoints, status, emoji, version, name] = match;

  // Prendre seulement les emojis "fully-qualified" (les plus standards)
  if (status !== "fully-qualified") {
    return null;
  }

  // Le premier codepoint est le plus important (base emoji sans modificateurs)
  const baseCodepoint = codepoints.trim().split(" ")[0];

  return {
    codepoint: baseCodepoint,
    fullCodepoints: codepoints.trim().split(" "),
    emoji: emoji,
    name: name.trim(),
    version: version,
    status: status,
  };
}

/**
 * Parse le fichier emoji-test.txt et extrait les groupes
 */
function parseEmojiTestFile(content) {
  const lines = content.split("\n");
  const emojiData = {};
  let currentGroup = "";
  let currentSubgroup = "";

  console.log("📝 Parsing du fichier emoji-test.txt...");

  for (const line of lines) {
    const trimmed = line.trim();

    // Détecter les groupes
    if (trimmed.startsWith("# group:")) {
      currentGroup = trimmed.replace("# group:", "").trim();
      continue;
    }

    // Détecter les sous-groupes
    if (trimmed.startsWith("# subgroup:")) {
      currentSubgroup = trimmed.replace("# subgroup:", "").trim();
      continue;
    }

    // Parser les lignes d'emoji
    const emoji = parseEmojiLine(trimmed);
    if (emoji) {
      // Un emoji "simple" (un seul codepoint, éventuellement suivi du
      // sélecteur de variante FE0F) est indexé par ce codepoint de base,
      // comme un caractère Unicode classique.
      // Une séquence (drapeau, carnation, ZWJ...) partage souvent son
      // premier codepoint avec d'autres séquences : l'indexer par ce seul
      // codepoint de base écraserait ces entrées entre elles ainsi que
      // l'emoji simple correspondant. On l'indexe donc par la séquence
      // complète pour éviter toute collision.
      const isSimple =
        emoji.fullCodepoints.length === 1 ||
        (emoji.fullCodepoints.length === 2 &&
          emoji.fullCodepoints[1] === "FE0F");
      const key = isSimple
        ? emoji.codepoint
        : emoji.fullCodepoints.join("-");

      emojiData[key] = {
        name: emoji.name,
        emoji: emoji.emoji,
        group: currentGroup,
        subgroup: currentSubgroup,
        version: emoji.version,
        fullCodepoints: emoji.fullCodepoints,
      };
    }
  }

  console.log(`✅ ${Object.keys(emojiData).length} emojis parsés\n`);
  return emojiData;
}

/**
 * Sauvegarde les données dans un fichier JSON
 */
function saveToFile(data, filePath) {
  console.log(`💾 Sauvegarde dans ${filePath}...`);

  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, json, "utf8");

  const stats = fs.statSync(filePath);
  const sizeKB = (stats.size / 1024).toFixed(2);

  console.log(`✅ Fichier créé (${sizeKB} KB)\n`);
}

/**
 * Fonction principale
 */
async function main() {
  try {
    // Télécharger le fichier
    const content = await downloadFile(EMOJI_TEST_URL);

    // Parser les données
    const emojiData = parseEmojiTestFile(content);

    // Sauvegarder dans un fichier JSON
    saveToFile(emojiData, OUTPUT_FILE);

    // Afficher quelques exemples
    console.log("📊 Exemples de données générées:");
    console.log("=================================");
    const examples = ["1F44B", "1F600", "2764", "1F525"];
    examples.forEach((code) => {
      if (emojiData[code]) {
        console.log(
          `${emojiData[code].emoji} U+${code}: ${emojiData[code].name}`
        );
        console.log(
          `   Groupe: ${emojiData[code].group} > ${emojiData[code].subgroup}`
        );
        console.log(`   Version: ${emojiData[code].version}\n`);
      }
    });

    console.log("🎉 Génération terminée avec succès !");
  } catch (error) {
    console.error("❌ Erreur:", error.message);
    process.exit(1);
  }
}

// Exécuter le script
main();
