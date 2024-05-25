const { zokou } = require('../framework/zokou');
const { getData } = require('../bdd/uffiche');
const s = require("../set");

const dbUrl = s.DB;


zokou(
  {
    nomCom: 'uf1',
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
        let mesg = `*𝗨𝗙 𝗢𝗖 𝗧𝗘𝗔𝗠𝗦🛡️⚽*
░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e1}: SoloMoe A KÏNGS⚜️
◇ *Fonds💶*: ${data.e2} €
◇ *UF coins🪙*: ${data.e3} UFC🪙
◇ *Division🏆*: ${data.e4}
◇ *Trophées*: ${data.e5}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e6}: Atsushi KÏNGS⚜️
◇ *Fonds💶*: ${data.e7} €
◇ *UF coins🪙*: ${data.e8} UFC🪙
◇ *Division🏆*: ${data.e9}
◇ *Trophées*: ${data.e10}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e11}:  Nash
◇ *Fonds💶*: ${data.e12} €
◇ *UF coins🪙*: ${data.e13} UFC🪙
◇ *Division🏆*: ${data.e14}
◇ *Trophées*: ${data.e15}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e16}: Aether GENESIS 
◇ *Fonds💶*: ${data.e17} €
◇ *UF coins🪙*: ${data.e18} UFC🪙
◇ *Division🏆*: ${data.e19}
◇ *Trophées*: ${data.e20}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e21}: Kemael 
◇ *Fonds💶*: ${data.e22} €
◇ *UF coins🪙*: ${data.e23} UFC🪙
◇ *Division🏆*: ${data.e24}
◇ *Trophées*: ${data.e25}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e26}: Damian KÏNGS⚜️
◇ *Fonds💶*: ${data.e27} €
◇ *UF coins🪙*: ${data.e28} UFC🪙
◇ *Division🏆*: ${data.e29}
◇ *Trophées*: ${data.e30}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e31}: Vanitas Gold KÏNGS⚜️
◇ *Fonds💶*: ${data.e32} €
◇ *UF coins🪙*: ${data.e33} UFC🪙
◇ *Division🏆*: ${data.e34}
◇ *Trophées*: ${data.e35}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e36}: Tempest Grimm
◇ *Fonds💶*: ${data.e37} €
◇ *UF coins🪙*: ${data.e38} UFC🪙
◇ *Division🏆*: ${data.e39}
◇ *Trophées*: ${data.e40}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *UF🥅🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/deaabdb35244f2bf06cbb.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
       // const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "SoloMoe":
      colonnesJoueur = {
        equipe: "e1",
        fonds: "e2",
        uf_coins: "e3",
        division: "e4",
        trophees: "e5",
      };
        break;
              
      case "Atsushi":
      colonnesJoueur = {
        equipe: "e6",
        fonds: "e7",
        uf_coins: "e8",
        division: "e9",
        trophees: "e10",
      };
        break;              
                    
      case "Nash":
      colonnesJoueur = {
        equipe: "e11",
        fonds: "e12",
        uf_coins: "e13",
        division: "e14",
        trophees: "e15",
      };
        break;              
                    
      case "Aether":
      colonnesJoueur = {
        equipe: "e16",
        fonds: "e17",
        uf_coins: "e18",
        division: "e19",
        trophees: "e20",
      };
        break;              
                    
      case "Kemael":
      colonnesJoueur = {
        equipe: "e21",
        fonds: "e22",
        uf_coins: "e23",
        division: "e24",
        trophees: "e25",
      };
        break;              
                    
      case "Damian":
      colonnesJoueur = {
        equipe: "e26",
        fonds: "e27",
        uf_coins: "e28",
        division: "e29",
        trophees: "e30",
      };
        break;              
                    
      case "Vanitas":
      colonnesJoueur = {
        equipe: "e31",
        fonds: "e32",
        uf_coins: "e33",
        division: "e34",
        trophees: "e35",
      };
        break;              
                    
      case "Tempest":
      colonnesJoueur = {
        equipe: "e36",
        fonds: "e37",
        uf_coins: "e38",
        division: "e39",
        trophees: "40",
      };
        break; 
              
            default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE uffiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 1`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE uffiche
            SET ${colonneObjet} = $1
            WHERE id = 1
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Équipe/Division*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

zokou(
  {
    nomCom: 'uf2',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('2');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*𝗨𝗙 𝗢𝗖 𝗧𝗘𝗔𝗠𝗦🛡️⚽*
░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e1}: Ainz Ooal KÏNGS⚜️
◇ *Fonds💶*: ${data.e2} €
◇ *UF coins🪙*: ${data.e3} UFC🪙
◇ *Division🏆*: ${data.e4}
◇ *Trophées*: ${data.e5}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e6}: Killer
◇ *Fonds💶*: ${data.e7} €
◇ *UF coins🪙*: ${data.e8} UFC🪙
◇ *Division🏆*: ${data.e9}
◇ *Trophées*: ${data.e10}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e11}:  White KÏNGS⚜️
◇ *Fonds💶*: ${data.e12} €
◇ *UF coins🪙*: ${data.e13} UFC🪙
◇ *Division🏆*: ${data.e14}
◇ *Trophées*: ${data.e15}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e16}: Goldy SHOGUN 
◇ *Fonds💶*: ${data.e17} €
◇ *UF coins🪙*: ${data.e18} UFC🪙
◇ *Division🏆*: ${data.e19}
◇ *Trophées*: ${data.e20}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e21}: Abdiel 
◇ *Fonds💶*: ${data.e22} €
◇ *UF coins🪙*: ${data.e23} UFC🪙
◇ *Division🏆*: ${data.e24}
◇ *Trophées*: ${data.e25}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e26}: Adorieru KAMADO
◇ *Fonds💶*: ${data.e27} €
◇ *UF coins🪙*: ${data.e28} UFC🪙
◇ *Division🏆*: ${data.e29}
◇ *Trophées*: ${data.e30}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e31}: Thanatos Gold KÏNGS⚜️
◇ *Fonds💶*: ${data.e32} €
◇ *UF coins🪙*: ${data.e33} UFC🪙
◇ *Division🏆*: ${data.e34}
◇ *Trophées*: ${data.e35}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e36}: Covid SAMA
◇ *Fonds💶*: ${data.e37} €
◇ *UF coins🪙*: ${data.e38} UFC🪙
◇ *Division🏆*: ${data.e39}
◇ *Trophées*: ${data.e40}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *UF🥅🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/deaabdb35244f2bf06cbb.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
       // const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Ainz":
      colonnesJoueur = {
        equipe: "e1",
        fonds: "e2",
        uf_coins: "e3",
        division: "e4",
        trophees: "e5",
      };
        break;
              
      case "Killer":
      colonnesJoueur = {
        equipe: "e6",
        fonds: "e7",
        uf_coins: "e8",
        division: "e9",
        trophees: "e10",
      };
        break;              
                    
      case "White":
      colonnesJoueur = {
        equipe: "e11",
        fonds: "e12",
        uf_coins: "e13",
        division: "e14",
        trophees: "e15",
      };
        break;              
                    
      case "Goldy":
      colonnesJoueur = {
        equipe: "e16",
        fonds: "e17",
        uf_coins: "e18",
        division: "e19",
        trophees: "e20",
      };
        break;              
                    
      case "Abdiel":
      colonnesJoueur = {
        equipe: "e21",
        fonds: "e22",
        uf_coins: "e23",
        division: "e24",
        trophees: "e25",
      };
        break;              
                    
      case "Adorieru":
      colonnesJoueur = {
        equipe: "e26",
        fonds: "e27",
        uf_coins: "e28",
        division: "e29",
        trophees: "e30",
      };
        break;              
                    
      case "Thanatos":
      colonnesJoueur = {
        equipe: "e31",
        fonds: "e32",
        uf_coins: "e33",
        division: "e34",
        trophees: "e35",
      };
        break;              
                    
      case "Covid":
      colonnesJoueur = {
        equipe: "e36",
        fonds: "e37",
        uf_coins: "e38",
        division: "e39",
        trophees: "40",
      };
        break; 
              
            default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE uffiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 2`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE uffiche
            SET ${colonneObjet} = $1
            WHERE id = 2
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Équipe/Division*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

/*zokou(
  {
    nomCom: 'uf3',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('3');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*𝗨𝗙 𝗢𝗖 𝗧𝗘𝗔𝗠𝗦🛡️⚽*
░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e1}: 
◇ *Fonds💶*: ${data.e2} €
◇ *UF coins🪙*: ${data.e3} UFC🪙
◇ *Division🏆*: ${data.e4}
◇ *Trophées*: ${data.e5}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e6}: 
◇ *Fonds💶*: ${data.e7} €
◇ *UF coins🪙*: ${data.e8} UFC🪙
◇ *Division🏆*: ${data.e9}
◇ *Trophées*: ${data.e10}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e11}: 
◇ *Fonds💶*: ${data.e12} €
◇ *UF coins🪙*: ${data.e13} UFC🪙
◇ *Division🏆*: ${data.e14}
◇ *Trophées*: ${data.e15}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e16}:  
◇ *Fonds💶*: ${data.e17} €
◇ *UF coins🪙*: ${data.e18} UFC🪙
◇ *Division🏆*: ${data.e19}
◇ *Trophées*: ${data.e20}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e21}:  
◇ *Fonds💶*: ${data.e22} €
◇ *UF coins🪙*: ${data.e23} UFC🪙
◇ *Division🏆*: ${data.e24}
◇ *Trophées*: ${data.e25}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e26}: 
◇ *Fonds💶*: ${data.e27} €
◇ *UF coins🪙*: ${data.e28} UFC🪙
◇ *Division🏆*: ${data.e29}
◇ *Trophées*: ${data.e30}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e31}: 
◇ *Fonds💶*: ${data.e32} €
◇ *UF coins🪙*: ${data.e33} UFC🪙
◇ *Division🏆*: ${data.e34}
◇ *Trophées*: ${data.e35}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e36}: 
◇ *Fonds💶*: ${data.e37} €
◇ *UF coins🪙*: ${data.e38} UFC🪙
◇ *Division🏆*: ${data.e39}
◇ *Trophées*: ${data.e40}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *UF🥅🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/deaabdb35244f2bf06cbb.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
    //    const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "":
      colonnesJoueur = {
        equipe: "e1",
        fonds: "e2",
        uf_coins: "e3",
        division: "e4",
        trophees: "e5",
      };
        break;
              
      case "":
      colonnesJoueur = {
        equipe: "e6",
        fonds: "e7",
        uf_coins: "e8",
        division: "e9",
        trophees: "e10",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e11",
        fonds: "e12",
        uf_coins: "e13",
        division: "e14",
        trophees: "e15",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e16",
        fonds: "e17",
        uf_coins: "e18",
        division: "e19",
        trophees: "e20",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e21",
        fonds: "e22",
        uf_coins: "e23",
        division: "e24",
        trophees: "e25",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e26",
        fonds: "e27",
        uf_coins: "e28",
        division: "e29",
        trophees: "e30",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e31",
        fonds: "e32",
        uf_coins: "e33",
        division: "e34",
        trophees: "e35",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e36",
        fonds: "e37",
        uf_coins: "e38",
        division: "e39",
        trophees: "40",
      };
        break; 
              
            default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE uffiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 3`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE uffiche
            SET ${colonneObjet} = $1
            WHERE id = 3
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Équipe/Division*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });*/

/*zokou(
  {
    nomCom: 'uf4',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('3');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*𝗨𝗙 𝗢𝗖 𝗧𝗘𝗔𝗠𝗦🛡️⚽*
░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e1}: 
◇ *Fonds💶*: ${data.e2} €
◇ *UF coins🪙*: ${data.e3} UFC🪙
◇ *Division🏆*: ${data.e4}
◇ *Trophées*: ${data.e5}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e6}: 
◇ *Fonds💶*: ${data.e7} €
◇ *UF coins🪙*: ${data.e8} UFC🪙
◇ *Division🏆*: ${data.e9}
◇ *Trophées*: ${data.e10}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e11}: 
◇ *Fonds💶*: ${data.e12} €
◇ *UF coins🪙*: ${data.e13} UFC🪙
◇ *Division🏆*: ${data.e14}
◇ *Trophées*: ${data.e15}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e16}:  
◇ *Fonds💶*: ${data.e17} €
◇ *UF coins🪙*: ${data.e18} UFC🪙
◇ *Division🏆*: ${data.e19}
◇ *Trophées*: ${data.e20}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e21}:  
◇ *Fonds💶*: ${data.e22} €
◇ *UF coins🪙*: ${data.e23} UFC🪙
◇ *Division🏆*: ${data.e24}
◇ *Trophées*: ${data.e25}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e26}: 
◇ *Fonds💶*: ${data.e27} €
◇ *UF coins🪙*: ${data.e28} UFC🪙
◇ *Division🏆*: ${data.e29}
◇ *Trophées*: ${data.e30}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e31}: 
◇ *Fonds💶*: ${data.e32} €
◇ *UF coins🪙*: ${data.e33} UFC🪙
◇ *Division🏆*: ${data.e34}
◇ *Trophées*: ${data.e35}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e36}: 
◇ *Fonds💶*: ${data.e37} €
◇ *UF coins🪙*: ${data.e38} UFC🪙
◇ *Division🏆*: ${data.e39}
◇ *Trophées*: ${data.e40}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *UF🥅🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/deaabdb35244f2bf06cbb.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
      //  const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "":
      colonnesJoueur = {
        equipe: "e1",
        fonds: "e2",
        uf_coins: "e3",
        division: "e4",
        trophees: "e5",
      };
        break;
              
      case "":
      colonnesJoueur = {
        equipe: "e6",
        fonds: "e7",
        uf_coins: "e8",
        division: "e9",
        trophees: "e10",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e11",
        fonds: "e12",
        uf_coins: "e13",
        division: "e14",
        trophees: "e15",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e16",
        fonds: "e17",
        uf_coins: "e18",
        division: "e19",
        trophees: "e20",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e21",
        fonds: "e22",
        uf_coins: "e23",
        division: "e24",
        trophees: "e25",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e26",
        fonds: "e27",
        uf_coins: "e28",
        division: "e29",
        trophees: "e30",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e31",
        fonds: "e32",
        uf_coins: "e33",
        division: "e34",
        trophees: "e35",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e36",
        fonds: "e37",
        uf_coins: "e38",
        division: "e39",
        trophees: "40",
      };
        break; 
              
            default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE uffiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 4`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE uffiche
            SET ${colonneObjet} = $1
            WHERE id = 4
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Équipe/Division*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });*/

/*zokou(
  {
    nomCom: 'uf5',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('3');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*𝗨𝗙 𝗢𝗖 𝗧𝗘𝗔𝗠𝗦🛡️⚽*
░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e1}: 
◇ *Fonds💶*: ${data.e2} €
◇ *UF coins🪙*: ${data.e3} UFC🪙
◇ *Division🏆*: ${data.e4}
◇ *Trophées*: ${data.e5}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e6}: 
◇ *Fonds💶*: ${data.e7} €
◇ *UF coins🪙*: ${data.e8} UFC🪙
◇ *Division🏆*: ${data.e9}
◇ *Trophées*: ${data.e10}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e11}: 
◇ *Fonds💶*: ${data.e12} €
◇ *UF coins🪙*: ${data.e13} UFC🪙
◇ *Division🏆*: ${data.e14}
◇ *Trophées*: ${data.e15}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e16}:  
◇ *Fonds💶*: ${data.e17} €
◇ *UF coins🪙*: ${data.e18} UFC🪙
◇ *Division🏆*: ${data.e19}
◇ *Trophées*: ${data.e20}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e21}:  
◇ *Fonds💶*: ${data.e22} €
◇ *UF coins🪙*: ${data.e23} UFC🪙
◇ *Division🏆*: ${data.e24}
◇ *Trophées*: ${data.e25}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e26}: 
◇ *Fonds💶*: ${data.e27} €
◇ *UF coins🪙*: ${data.e28} UFC🪙
◇ *Division🏆*: ${data.e29}
◇ *Trophées*: ${data.e30}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e31}: 
◇ *Fonds💶*: ${data.e32} €
◇ *UF coins🪙*: ${data.e33} UFC🪙
◇ *Division🏆*: ${data.e34}
◇ *Trophées*: ${data.e35}

░░░░░░░░░░░
▔▔▔▔▔◇▔
◇ ${data.e36}: 
◇ *Fonds💶*: ${data.e37} €
◇ *UF coins🪙*: ${data.e38} UFC🪙
◇ *Division🏆*: ${data.e39}
◇ *Trophées*: ${data.e40}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *UF🥅🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/deaabdb35244f2bf06cbb.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
  //      const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
          
          *switch (joueur) {
    case "":
      colonnesJoueur = {
        equipe: "e1",
        fonds: "e2",
        uf_coins: "e3",
        division: "e4",
        trophees: "e5",
      };
        break;
              
      case "":
      colonnesJoueur = {
        equipe: "e6",
        fonds: "e7",
        uf_coins: "e8",
        division: "e9",
        trophees: "e10",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e11",
        fonds: "e12",
        uf_coins: "e13",
        division: "e14",
        trophees: "e15",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e16",
        fonds: "e17",
        uf_coins: "e18",
        division: "e19",
        trophees: "e20",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e21",
        fonds: "e22",
        uf_coins: "e23",
        division: "e24",
        trophees: "e25",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e26",
        fonds: "e27",
        uf_coins: "e28",
        division: "e29",
        trophees: "e30",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e31",
        fonds: "e32",
        uf_coins: "e33",
        division: "e34",
        trophees: "e35",
      };
        break;              
                    
      case "":
      colonnesJoueur = {
        equipe: "e36",
        fonds: "e37",
        uf_coins: "e38",
        division: "e39",
        trophees: "40",
      };
        break; 
              
            default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE uffiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 5`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE uffiche
            SET ${colonneObjet} = $1
            WHERE id = 5
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Équipe/Division*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });*/
