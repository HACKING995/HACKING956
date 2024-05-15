
const { zokou } = require('../framework/zokou');
const cheerio = require('cheerio');
const axios = require('axios');

zokou({ nomCom: "tiktok2", categorie: "Download", reaction: "🎵" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, prefixe, repondre } = commandeOptions;

  if (!arg[0]) {
    repondre(`Comment utiliser cette commande :\n ${prefixe}tiktok tiktok_video_link`);
    return;
  }

  const videoUrl = arg.join(" ");

  async function tiktokdlF(url) {
    if (!/tiktok/.test(url)) {
      return `_*Thomas TIKTOK DL*_\n\n*_Collez un lien TikTok._*\n\n*_Exemple:_* _${prefixe}tiktok Lien ici_`;
    }

    const gettoken = await axios.get('https://tikdown.org/id');
    const $ = cheerio.load(gettoken.data);
    const token = $('#download-form > input[type=hidden]:nth-child(2)').attr('value');
    const param = { url: url, _token: token };

    const { data } = await axios.post('https://tikdown.org/getAjax?', new URLSearchParams(param), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36'
      }
    });

    const getdata = cheerio.load(data.html);
    if (data.status) {
      return {
        status: true,
        author: getdata('div.author-username > h3').text(),
        desc: getdata('div.desc').text(),
        thumbnail: getdata('img').attr('src'),
        video: getdata('div.download-links > div:nth-child(1) > a').attr('href'),
        audio: getdata('div.download-links > div:nth-child(2) > a').attr('href')
      };
    } else {
      return { status: false };
    }
  }

  const result = await tiktokdlF(videoUrl);

  if (result.status) {
    const caption = `
Auteur : ${result.author}
Description : ${result.desc}
      `;

    zk.sendMessage(dest, { video: { url: result.video }, caption: caption }, { quoted: ms });
  } else {
    zk.sendMessage(dest, `Échec du téléchargement de la vidéo TikTok. Veuillez vous assurer que l'URL fournie est valide.`, { quoted: ms });
  }
});

zokou({ nomCom: "tiktokstalk", categorie: "Downloader" }, async (dest, zk, commandeOptions) => {
  const { arg, ms, repondre } = commandeOptions;

  if (!arg[0]) {
    repondre(`✳️ Entrez le nom d'utilisateur d'un utilisateur TikTok`);
    return;
  }

  const username = arg[0].trim();
  const fg = require('api-dylux');

  try {
    const res = await fg.ttStalk(username);

    const txt = `
┌──「 *TIKTOK STALK* 」
▢ *🔖 Nom :* ${res.name}
▢ *🔖 Nom d'utilisateur :* ${res.username}
▢ *👥 Abonnés :* ${res.followers}
▢ *🫂 Abonnements :* ${res.following}
▢ *📌 Description :* ${res.desc}

▢ *🔗 Lien* : https://www.tiktok.com/${res.username}
└────────────`;

    zk.sendMessage(dest, { url: res.profile, caption: txt }, { quoted: ms });
  } catch (error) {
    zk.sendMessage(dest, `Une erreur s'est produite lors de la récupération des informations du profil TikTok. Veuillez réessayer.`, { quoted: ms });
  }
});
