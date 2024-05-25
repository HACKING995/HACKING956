const { zokou } = require('../framework/zokou');
const { getData } = require('../bdd/fichetest');
const s = require("../set");

const dbUrl = s.DB;


zokou(
  {
    nomCom: 'fichetest👤',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('1');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*🔷𝗡Ξ𝗢 𝗔𝗟𝗟 𝗦𝗧𝗔𝗥𝗦🌟*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *🧠Talent RP(𝗤𝗶): ${data.e10}⛦*                       
 *📊Note Saison passée: ${data.e11}⏫*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  *💫Awards*: ${data.e16}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(20 max)*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/5c45243eab76575302242.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
        //const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
    let colonnesJoueur;
          
          switch (joueur) {
    case "White":
      colonnesJoueur = {
        pseudo: "e1",
        division: "e2",
        classe: "e3",
        rang_exp: "e4",
        golds: "e5",
        neocoins: "e6",
        gift_box: "e7",
        coupons: "e8",
        neopass: "e9",
        talent: "e10",
        note: "e11",
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }

    let updates = arg.slice(1).join(' ').split(',');

    updates.forEach(update => {
        let [object, signe, valeur] = update.trim().split(' ');

        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

        // Construct and execute the update query for each update
        if (colonneObjet && (signe === '+' || signe === '-' || signe === '=')) {
            const query = `UPDATE fichetest SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 1`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour pour ${object}`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
        } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
        }
    });
} else {
    console.log("Le message ne correspond pas au format attendu.");
    repondre(`Le format du message est incorrect.`);
}
