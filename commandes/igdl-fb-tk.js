const { zokou } = require('../framework/zokou');
const fs = require('fs');
const getFBInfo = require("@xaviabot/fb-downloader");
const axios = require('axios');

zokou({ nomCom: "igdl", categorie: "Download" }, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  let link = arg.join(' ');

  if (!arg[0]) {
    repondre('Veuillez insérer un lien vidéo Instagram');
    return;
  }

  try {
    let igvid = await axios.get('https://vihangayt.me/download/instagram?url=' + link);

    if (igvid.data.data.data[0].type === 'video') {
      zk.sendMessage(dest, { video: { url: igvid.data.data.data[0].url }, caption: "ig video downloader powered by *Hacking-Md*", gifPlayback: false }, { quoted: ms });
    } else {
      zk.sendMessage(dest, { image: { url: igvid.data.data.data[0].url }, caption: "ig image downloader powered by *Hacking-Md*" });
    }
  } catch (e) {
    repondre("Erreur survenue lors du téléchargement\n" + e);
  }
});

zokou({
  nomCom: "fbdl",
  categorie: "Download",
  reaction: "📽️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Insérez un lien vidéo public Facebook !');
    return;
  }

  const queryURL = arg.join(" ");

  try {
    getFBInfo(queryURL)
      .then((result) => {
        let caption = `
        Titre: ${result.title}
        Lien: ${result.url}
      `;
        zk.sendMessage(dest, { image: { url: result.thumbnail }, caption: caption }, { quoted: ms });
        zk.sendMessage(dest, { video: { url: result.hd }, caption: 'Facebook video downloader powered by *Hacking-MD*' }, { quoted: ms });
      })
      .catch((error) => {
        console.log("Error:", error);
        repondre('Essayez fbdl2 avec ce lien');
      });
  } catch (error) {
    console.error('Erreur lors du téléchargement de la vidéo :', error);
    repondre('Erreur lors du téléchargement de la vidéo.', error);
  }
});

zokou({ nomCom: "tiktok", categorie: "Download", reaction: "🎵" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe, repondre } = commandeOptions;

  if (!arg[0]) {
    repondre(`Comment utiliser cette commande :\n${prefixe}tiktok lien_video_tiktok`);
    return;
  }

  const videoUrl = arg.join(" ");

  try {
    let data = await axios.get('https://vihangayt.me/download/tiktok?url=' + videoUrl);
    let tik = data.data.data;

    const caption = `
Author: ${tik.author}
Description: ${tik.desc}
    `;

    zk.sendMessage(dest, { video: { url: tik.links[0].a }, caption: caption }, { quoted: ms });
  } catch (error) {
    console.error('Erreur lors du téléchargement de la vidéo :', error);
    repondre('Erreur lors du téléchargement de la vidéo.', error);
  }
});

zokou({
  nomCom: "fbdl2",
  categorie: "Download",
  reaction: "📽️"
},
async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Insert a public facebook video link! !');
    return;
  }

  const queryURL = arg.join(" ");

  try {
     getFBInfo(queryURL)
    .then((result) => {
       let caption = `
        titre: ${result.title}
        Lien: ${result.url}
      `;
       zk.sendMessage(dest,{image : { url : result.thumbnail}, caption : caption},{quoted : ms}) ;
       zk.sendMessage(dest, { video: { url: result.sd  }, caption: 'facebook video downloader powered by *Hacking-MD*' }, { quoted: ms });
      
    })
    .catch((error) => {console.log("Error:", error)
                      repondre(error)});


   
  } catch (error) {
    console.error('Erreur lors du téléchargement de la vidéo :', error);
    repondre('Erreur lors du téléchargement de la vidéo.' , error);
  }
});


