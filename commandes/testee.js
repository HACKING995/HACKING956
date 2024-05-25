const { zokou } = require('../framework/zokou');
const { getData } = require('../bdd/northdiv');
const s = require("../set");

const dbUrl = s.DB;

zokou(
  {
    nomCom: 'northainz👤',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
    let client;
    try {
        const data = await getData('8');
        if (!arg || arg.length === 0) {
            // Affichage des données de l'utilisateur
            const mesg = `*🔷𝗡Ξ𝗢 𝗔𝗟𝗟 𝗦𝗧𝗔𝗥𝗦🌟*
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
            zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/c9a177ecb800fe17c8e88.jpg' }, caption: mesg }, { quoted: ms });
        } else {
          //  const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
            const proConfig = {
                connectionString: dbUrl,
                ssl: {
                    rejectUnauthorized: false,
                },
            };

            const { Pool } = require('pg');
            const pool = new Pool(proConfig);
            client = await pool.connect();

            if (superUser) { 
                let colonnesJoueur = {
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

                let updates = []; // Tableau pour stocker les mises à jour à effectuer

                for (let i = 0; i < arg.length; i += 3) {
                    let object = arg[i];
                    let signe = arg[i + 1];
                    let valeur = arg[i + 2];
                    let texte = arg.slice(i + 2).join(' '); // Récupérer tout le texte restant

                    let colonneObjet = colonnesJoueur[object];
                    let newValue;
                  let oldValue;

                    if (signe === '+' || signe === '-') {
                        // Mise à jour de la valeur en ajoutant ou soustrayant
                      const querySelect = `SELECT ${colonneObjet} FROM northdiv WHERE id = 8`;
                            const result = await client.query(querySelect);
                            oldValue = result.rows[0][colonneObjet];
                            
                        newValue = `${oldValue} ${signe} ${valeur}`;
                    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
                        // Mise à jour de la valeur en remplaçant ou supprimant
                        if (signe === 'add') {
                            // Ajout de texte
                            const querySelect = `SELECT ${colonneObjet} FROM northdiv WHERE id = 8`;
                            const result = await client.query(querySelect);
                            const oldValue = result.rows[0][colonneObjet];
                            newValue = `${oldValue} ${texte}`;
                        } else if (signe === 'supp') {
                // Suppression de texte
                const querySelect = `SELECT ${colonneObjet} FROM northdiv WHERE id = 8`;
                const result = await client.query(querySelect);
                const oldValue = result.rows[0][colonneObjet];
                // Créer une expression régulière pour correspondre au texte avec des espaces autour
                const regex = new RegExp(`\\b${texte}\\b`, 'g');
                newValue = oldValue.replace(regex, '').trim(); 
                        } else if (signe === '=') {
                            // Remplacement de texte
                            newValue = texte;
                        }
                    } else {
                        console.log("Signe invalide.");
                        repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
                        return;
                    }

                    // Ajouter la mise à jour au tableau
                    updates.push({ colonneObjet, newValue, oldValue });
                }

                try {
                    await client.query('BEGIN'); // Début de la transaction

                    for (const update of updates) {
                      if (signe === ('add' || 'supp')) {
                        const queryUpdate = `UPDATE northdiv SET ${update.colonneObjet} = $1 WHERE id = 8`;
                        await client.query(queryUpdate, [update.newValue]);
                      }  else if (signe === ('+' || '-')) {
                         const query = `UPDATE northdiv SET ${update.colonneObjet} = ${update.oldValue} ${signe} ${valeur} WHERE id = 8`;
            await client.query(query);
                    } else ( signe === '=') {
                        const query = `
            UPDATE northdiv
            SET ${update.colonneObjet} = $1
            WHERE id = 8
            `;

            await client.query(query, [texte]);
                      }
                    }                   

                    await client.query('COMMIT'); // Fin de la transaction

                    console.log(`Données du joueur mises à jour`);
                    const messages = updates.map(update => `⚙ OBJECT: ${update.colonneObjet}\n💵 VALEUR: ${update.newValue}`).join('\n');
                    await repondre(`Données du joueur mises à jour pour:\n${messages}`);
                } catch (error) {
                    await client.query('ROLLBACK'); // Annulation de la transaction en cas d'erreur
                    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
                    repondre(`Une erreur est survenue lors de la mise à jour des données. Veuillez réessayer.`);
                } finally {
                    client.release(); // Libération des ressources
                }
            } else {
                repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');
            }
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
        repondre(`Une erreur est survenue. Veuillez réessayer.`);
    } finally {
        if (client) {
            client.release(); // Libération des ressources en cas d'erreur
        }
    }
  }
);
