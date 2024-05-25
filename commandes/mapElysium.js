const { zokou } = require('../framework/zokou');

/*zokou(
    {
        nomCom: '',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);*/
zokou(
    {
        nomCom: 'map',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (arg[0] === 'FA')  {
           // const lien = '';
            const msg = `DISTRICT: *🌉𝗠𝗘𝗧𝗥𝗢𝗣𝗢𝗟𝗜𝗧𝗔𝗡𝗜𝗔🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔
💠 *40𝗸𝗺*: Av. Foster ( *Hôpital🏨💰* ) 
🚸 *39𝗸𝗺*: Av. Collins  (*Parking🚘⭐*) 
💠 *38𝗸𝗺*: Av. Neo *(Poisson bleu🐠🍽️💰)*
💠 *37𝗸𝗺*: Av. Fortune *(Jacob & Co🔑)*
🚸 *36𝗸𝗺*: Av. Métropolitain *(Business CO🏢)* 
◼️ *35𝗸𝗺*: Av. Richman
🚸 *34𝗸𝗺*: Av. Freetown *(National Bank🏦⭐)*
💠 *33𝗸𝗺*: Av. Sapphire *(Memorata👛🛍️💰)*
♻️ *32𝗸𝗺*: Av. Sparks *(Apparts🏠)*
🚸 *31𝗸𝗺*: Av. Eternity *(Supermarché🛒)*
💠 *30𝗸𝗺*: Av. Delnorth *(Neo Biomedical🔬⭐)*
🚸 *29𝗸𝗺*: Av Métro liberty *(Lucids cars🚘💰)*
💠 *28𝗸𝗺*:Av. Métro (*Station🚅💰*) 
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🌐🚓: Présence de la police🥇
🌐🚗: Traffic🥇

🌃DISTRICT:*💋𝗔𝗡𝗚𝗘𝗟𝗦 𝗩𝗜𝗖𝗘🍹*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🚸 *27𝗸𝗺*: Av Trillions *(Vice Gym🏋🏽‍♂️)* 
🚸 *26𝗸𝗺*: Av. Véronica *(Carshop🛠️💰)*
💠 *25𝗸𝗺*: Av. Loksfort (*EFood🍕💰*) 
🚸 *24𝗸𝗺*: Av.Vegas *(Little Nevada🎰⭐)*
🚸 *23𝗸𝗺*: Av. EVO (*EVOstyle👕🛍️💰*) 
🚸 *22𝗸𝗺*: Av. Dixies *(Supermarché🛒)*
🚸 *21𝗸𝗺*: Av. Staples *(Cinema*🍿🎞️🙂) 
◼️ *20𝗸𝗺*: Av. Liberty town
💠 *19𝗸𝗺*: Av. Luxury *(Club Venus🪩🍸🙂⭐)*
◼️ *18𝗸𝗺*: Av. Freeland
🚸 *17𝗸𝗺*: Av. Shine (*Stage🎤🙂)*
◼️ *16𝗸𝗺*: Av. Red miles
♻️ *15𝗸𝗺*: Av. Xnes *(Apparts🏠)*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🌐🚓: Présence de la police🥈
🌐🚗: Traffic🥈

 🌃DISTRICT: *🎡𝗠𝗔𝗥𝗜𝗡𝗔🌊*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🚸 *14𝗸𝗺*: Av.Tropicana *(Supermarché🛒)*
💠 *13𝗸𝗺*: Av. Center *(Race stage🏁💰)*
◼️ *12𝗸𝗺*: Av. St Veronica💋
🚸 *11𝗸𝗺*: Av. Midland *(Playground🏀🙂)*
◼️ *10𝗸𝗺*: Av. Square💋
🚸 *9𝗸𝗺*: Av. Marquette *(Joytown🎢🎠🙂)*
◼️ *8𝗸𝗺*: Av. Sins 💋
🚸 *7𝗸𝗺*: Av.Reds *(Red Paradise👠🔞💋)*
◼️ *6𝗸𝗺*: Av.Maryland💋
♻️ *5𝗸𝗺*: Av Seattle *(Appart🏠)*
💠 *4𝗸𝗺*: Av Pleasure *(Red Corridor💋🔞)*
💠 *3𝗸𝗺*: Av Flores *(Plaza Beach🎡🍹🙂)*
◼️ *2-0𝗸𝗺*: Marina *(Long Beach🌊🚤)*
═══════════
🌐🚓: Présence police🥈
🌐🚗: Traffic🥉
💋: *Territoire EXOTICS*`;
           // zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   repondre(msg);
        } else if (arg[0] === 'ZT')  {
        // const lien = '';
            const msg = `🚸DISTRICT: *RUNTOWN*🚧 niv🥈
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ 
☢️: *Tout le district est radioactif à cause d'un gaz toxique généré par les spores des plantes GAÏA🪻* 

🚸 *40𝗸𝗺*: *Ex Labo NEO biomédical🔍🏭*
🚸 *39𝗸𝗺*: *Jardin Botanique🪻* ☢️ 
▪ *38𝗸𝗺*: Av. Birgham☢️
▪ *37𝗸𝗺*: Av. Royal Fall☢️
🚸 *36-35𝗸𝗺*: *Tunnel🔘*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
▪ *34𝗸𝗺*: Av. Splint☢️
▪ *33𝗸𝗺*: Av. Shelter☢️
▪ *32𝗸𝗺*: Av. Neva☢️
▪ *31𝗸𝗺*: Av. St george☢️
═══════════
🥈: Présence de Dangers (Élevé ⚠️) 
🪻: Spore GAÏA 

 🚸  DISTRICT: *FALLEN CITY*🚧 niv🥈
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
▪ *30𝗸𝗺*: Av. ArkTown
🚸 *29𝗸𝗺*: *Parking Station(🚘⚙️🛢️)*
▪ *28𝗸𝗺*: Av. Templer DC
▪ *27𝗸𝗺*: Av. Starples
🚸 *26𝗸𝗺*: *Hôpital🏥* (🔍) 
▪ *25𝗸𝗺*: Av. Mirimore
▪ *24𝗸𝗺*: Av. Arizona
🚸 *23𝗸𝗺*: *Ex Centre commercial🏬* (🔍) 
▪ *22𝗸𝗺*: Av. Dillimore
▪ *21𝗸𝗺*: Av. Rochester
🚸 *20𝗸𝗺*: *Charlestown Universty🏫* (🔍) 
▪ *19𝗸𝗺*: Av. St graal
▪ *18𝗸𝗺*: Av. Seattles
🚸 *17𝗸𝗺*: *Station détruite🚝*(⚙️) 
═══════════
 🥈: Présence de Dangers (Élevé ⚠️) 
 🔍: Point de recherche 

 🚸 DISTRICT: *LAST HOPE🚧* 
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
▪ *16𝗸𝗺*: Av. Foster Clark
▪ *15𝗸𝗺*: Av. Libéral 
🚸 *14𝗸𝗺*: *Pont Last Brigde* (Rivière en dessous 6km) 
💠 *Point D'extraction*(milieu du pont) 
🚸 *13𝗸𝗺*: *Pont Last Brigde* (Rivière en dessous 6km) 
▪ *12𝗸𝗺*: Av. Ayla 
▪ *11𝗸𝗺*: Av municipale
💠 *10𝗸𝗺*: *Camp HOPE👥* (🏠) 
▪ *9𝗸𝗺*: Av. Flint North
▔▔▔▔▔▔▔▔▔▔▔
🥉: Présence de Dangers (Faible❗) 

🚸DISTRICT: *DOOMSDAY*🚧 niv🥇
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
▪ *8𝗸𝗺*: Av. Sharpen
▪ *7𝗸𝗺*: Av. Doomclay
▪ *6𝗸𝗺*: Av. Valserveil
▪ *5𝗸𝗺*: Av. Wiccan 
🚸 *4𝗸𝗺*: *Vielle Banque nationale🏦*(🔍💰)
▪ *3𝗸𝗺*: Av. Flint
▪ *2𝗸𝗺*: Av. Greenland
🚸 *1km*:  *Docks*🚢(⚙️) 
═══════════
🥇: Présence de Dangers (Extreme‼️⚠️) 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                             💠ΞLYSIUM2162`;
           // zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   repondre(msg);
        } else if (arg[0] === 'NM')  {
    // const lien = '';
            const msg = `🥉 ZONE 1: *LIBERTY RAVEN🚧♻️*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
💠 *35𝗸𝗺*: *Point de déplacement💠*
 💠 *34𝗸𝗺*: Bases🏠👥
 💠 *33𝗸𝗺*:  *Camp services⚙️* 
- *▪️Laboratoire🔬*
- *▪️Bureau du camp🌐*
🚸 *32km*: Camp
💠 *31km*: portail de sortie🚧
🚸 *30𝗸𝗺*: Chemin buissons🌲
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🌐⚠️:*Présence de soldats impériaux,En cas d'infection🦠 Vous serez abattu*. 
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

🥉 ZONE 2: *𝗙𝗢𝗥𝗘́𝗧 𝗗𝗘𝗖𝗛𝗨𝗘*🍁
 ░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
▪ *29𝗸𝗺*: Forêt🍁🪵🪨
▪ *28𝗸𝗺*: Forêt🍁🪵🪨 
▪ *27𝗸𝗺*:  Forêt🍁🪵🪨
▪ *26𝗸𝗺*: Forêt🍁🪵🪨
═══════════ forêt profonde 
▪ *25𝗸𝗺*: Forêt🍁🪵🪨
▪ *24𝗸𝗺*: Forêt🍁🪵🪨
▪ *23𝗸𝗺*: Forêt🍁🪵🪨
▪ *22𝗸𝗺*: Forêt🍁🪵🪨
💠 *21km* :Tour Radio Détruite🗼⚙️  
▪ *20𝗸𝗺*: Forêt🍁🪵🪨🌿
▪ *19𝗸𝗺*: Forêt🍁🪵🪨
🚸 *18km*: Vielle cabane🏚️🔎 
▪  *17-14km:* Lac🌊

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
 🥉: Présence de dangers(faible❗) 
🪵: Ressource de bois
🪨: Ressource de pierres
⚙️: Matériaux de fer


    🥈  ZONE 3: *𝗙𝗢𝗥𝗘𝗧 𝗠𝗬𝗦𝗧𝗘𝗥𝗜𝗘𝗨𝗦𝗘🍁⚠️*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
▪ *13𝗸𝗺*: Forêt🍁🪵🪨
▪ *12km*: Forêt🍁🪵🪨 
🚸 *11km: Ex laboratoire NEO bio🔬🔎⚠️*
▪ *10𝗸𝗺*: Forêt🍁🪵🪨 
▪ *9𝗸𝗺*: Forêt🍁🪵🪨🌿
💠 *8km* Centrale ⚡🔋
💠 *7km* :Tour Radio Détruite🗼⚙️ 
▪ *6𝗸𝗺*: Forêt🍁🪵🪨
▪ *5𝗸𝗺*: Forêt🍁🪵🪨🌿  
🚸 *4km*: Point de chute Vaiseau🛸 ⚙️ 
▪ *3𝗸𝗺*: Forêt🍁🪵🪨 
▪ *2𝗸𝗺*: Forêt🍁🪵🪨🌿 
🚸 *1km* :*Zone d'activité suspecte*⚠️🔍 
▪ *Fin de la forêt*: Forêt🍁🪵🪨🌿 
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
 🥈: Présence de Dangers (Élevé ⚠️) 
⚡:Source Générateur
🌿: Plante verte
🪵: Ressource de bois
🪨: Ressource de pierres
🔎: Site de Recherche 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                            💠ΞLYSIUM2162`;
           // zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   repondre(msg);
        } else if (arg[0] === 'DT')  {
     // const lien = '';
            const msg = `DISTRICT: *㊗️𝗔𝗦𝗜𝗔 𝗧𝗢𝗪𝗡🏮*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
💠 *25𝗸𝗺*: Av. Takuem *(Hôpital🏨💰)* 
◾ *24𝗸𝗺*: Av. Red Asian
💠 *23𝗸𝗺*: 🅰️rena💀(Bientôt) 
🚸 *22𝗸𝗺*: ⚠️ *Av. Shoguna🐉* 
💠 *21𝗸𝗺*: Av. Tenzo *(Wasami🍱💰)* 
💠 *20𝗸𝗺*: Av. Taoku *(Sakura House🌸💰)*
♻️ *19𝗸𝗺*: Av. Kento *(Home👥🏠)*
◼️ *18𝗸𝗺*: Av. Red dragon
💠 *17𝗸𝗺*: Av. Union *(Gym🏋🏽‍♂️💪🏼💰)*
◼️ *16𝗸𝗺*: Av. Jing'An Temple
💠 *15𝗸𝗺*: Av. Jing'An *(Station🚅*💰) 
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
⚠️🐉: Territoire des Yakuzas
🌐🚓: Présence de la Police🥉
🌐🚗: Traffic🥉(voie dégagée des voitures uniquement sur les côtés à 5m et peut de passant) 


 DISTRICT:*🌇CENTRE-VILLE⛓️*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
💠 *14𝗸𝗺*: Av. Helwood *(Car shop🔧💰)*
◼️ *13𝗸𝗺*: Av. Black corn
🚸 *12𝗸𝗺*: *⚠️PunkTown💀🕸️*
💠 *11𝗸𝗺*: Av. Koln *(Doc Bar🍻🙂)*
◼️ *10𝗸𝗺*: Av. Collins *(Grand market🏪)*
💠 *9𝗞𝗺*: Av. Tenessy *(Black Market💰⭐)*
═════════════════
◼️ *8𝗸𝗺*: Av. Malestorm south
♻️ *7𝗸𝗺*: Av. Dexter *(House👥🏠)*
◼️ *6𝗸𝗺*: Av. Hell entrance '
🚸 *5𝗸𝗺*: *⚠️Av. Ganton💀*
◼️ *4𝗸𝗺*: Av. Central
◼️ *3𝗸𝗺*: Av. Central creek
◼️ *2-0𝗸𝗺*: *Docks🚢⚓*

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
 *⚠️Territoire de GANGS*: 
💀 *Ganton*: Territoire des MZ 
🕸️ *Punktown*: Territoire des Démons

🌐⚓ *DOCKS*: 20km jusqu'à FALLEN ANGELES/MARINA. 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                               💠ΞLYSIUM2162`;
           // zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   repondre(msg);
        } else {
            repondre('map introuvable');
        }
    }
);


/*zokou(
    {
        nomCom: 'map',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (arg[0] === '')  {
            //const lien = '';
            const msg = ``;
            //zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   repondre(msg);
        }
    }
);*/
