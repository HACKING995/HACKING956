const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
  let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
  let { cm } = require(__dirname + "/../framework//zokou");
  var coms = {};
  var mode = "public";

  if (s.MODE.toLowerCase() !== "yes") {
    mode = "private";
  }

  cm.map(async (com, index) => {
    if (!coms[com.categorie])
      coms[com.categorie] = [];
    coms[com.categorie].push(com.nomCom);
  });

  moment.tz.setDefault('Etc/GMT');

  // Créer une date et une heure en GMT
  const temps = moment().format('HH:mm:ss');
  const date = moment().format('DD/MM/YYYY');

  let infoMsg = `
╭━━⊱「${s.BOT}」⊱━━╮  
╰━━━━━━━━━━━━━━━╯
  *New version* : ${day}
╭──────────────
|❏│   _Préfix_ : ${s.PREFIXE}
|❏│   _Proprio_ : ${s.OWNER_NAME}
|❏│   _Mode_ : ${mode}
|❏│   _Commands_ : ${cm.length}
|❏│   _Date_ : ${date}
|❏│   _Heure_ : ${temps}
|❏│   _Mémoire_ : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
|❏│   _Plateforme_ : ${os.platform()}
|❏│   _Développer_ : Thomas
|❏│   & MD-hacker
  ╰───────────────
╰─────✧THO-BOT✧─────◆ \n\n`;

  // Obtenir les catégories disponibles
  const categories = {
    "IA": "🤖",
    "General": "🌐",
    "Group": "👥",
    "Mods": "🔧",
    "User": "👤",
    "Search": "🔍",
    "Fun": "😄",
    "Conversion": "🔄",
    "Audio-Edit": "🎵",
    "Image-Edit": "🖼️",
    "Game": "🎮",
    "Recherche": "🔎",
    "Hentai": "🔞",
    "Heroku": "⚙️",
    "Download": "⬇️",
    "Logo": "🎨",
    "Reaction": "🤣",
    "stickcmd": "📎",
    "tts": "🗣️",
    "Weeb": "🌸"
  };

  // Vérifier si une catégorie a été fournie dans la commande
  const categorieDemandee = commandeOptions.commandeArgs[0]; // Supposons que la catégorie soit fournie en tant que premier argument de la commande

  let menuMsg = `
👋 Hello how are you ${nomAuteurMessage} 👋
`;

  // Vérifier si une catégorie a été demandée
  if (categorieDemandee && categories.hasOwnProperty(categorieDemandee)) {
    // Afficher les commandes de la catégorie demandée
    menuMsg += `*Liste des commandes de HACKING-MD dans la catégorie ${categorieDemandee}:*\n`;

    for (const cmd of coms[categorieDemandee]) {
      menuMsg += `*|❏│ ${cmd}*\n`;
    }
  } else {
    // Afficher toutes les catégories et commandes
    menuMsg += "*Liste des commandes de HACKING-MD:*\n";

    for (const cat in coms) {
      menuMsg += `╭━━⊱ 「*${cat}*」⊱━━╮`;
      for (const cmd of coms[cat]) {
        menuMsg += `
*|❏│ ${cmd}*`;
      }
      menuMsg += `
 ╰━━━━━━Veuillez noter que le code que vous avez fourni semble être incomplet et présente des erreurs de syntaxe. Voici une version mise à jour du code en supposant que vous souhaitez afficher les catégories avec leurs icônes correspondantes :

```javascript
const categories = {
  "IA": "🤖",
  "General": "🌐",
  "Group": "👥",
  "Mods": "🔧",
  "User": "👤",
  "Search": "🔍",
  "Fun": "😄",
  "Conversion": "🔄",
  "Audio-Edit": "🎵",
  "Image-Edit": "🖼️",
  "Game": "🎮",
  "Recherche": "🔎",
  "Hentai": "🔞",
  "Heroku": "⚙️",
  "Download": "⬇️",
  "Logo": "🎨",
  "Reaction": "🤣",
  "stickcmd": "📎",
  "tts": "🗣️",
  "Weeb": "🌸"
};

console.log("Voici les catégories avec leurs icônes correspondantes :");
for (const categorie in categories) {
  console.log(`${categories[categorie]} ${categorie}`);
}
