const { zokou } = require("../framework/zokou");
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const fs = require('fs');
const yt = require("../framework/dl/ytdl-core.js");
const ffmpeg = require("fluent-ffmpeg");
const yts1 = require("youtube-yts");

zokou({
  nomCom: "play2",
  categorie: "Search",
  reaction: "💿"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("quelle chanson veux-tu.");
    return;
  }

  try {
    let topo = arg.join(" ");
    const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const urlElement = videos[0].url;

      let infoMess = {
        image: { url: videos[0].thumbnail },
        caption: `*Song Name:* ${videos[0].title}
*Uploaded:* ${videos[0].ago}
*Author:* ${videos[0].author.name}
*URL:* ${videos[0].url}

*Choose format:*
1. MP3
2. MP4

_*Downloading...*_\n\n`
      };

      const yt_play = await yts1(urlElement);
      const texto1 = `╭━━⊱🌟 Y O U T U B E 🌟⊱━━╮
    
  🪩 Channel: ${yt_play[0].author.name}
  📃 Title: ${yt_play[0].title}
  ⏰ Duration: ${secondString(yt_play[0].duration.seconds)}
  🎴 Views: ${yt_play[0].views}
  🔗 Link: ${yt_play[0].url}
⊱─━⊱༻ⓅⓇⒾⓃⒸⒺⒷⓄⓉ༺⊰━─⊰`;

      zk.envoyerMessage(origineMessage, { image: { url: yt_play[0].thumbnail }, caption: texto1 });

      if (commandeOptions.nomCom === 'play') {
        try {
          zk.react(origineMessage, "🎧");
          const q = '160kbps';
          const v = yt_play[0].url;
          const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
          const dl_url = await yt.audio[q].download();
          const ttl = await yt.title;
          const size_Api = await yt?.size;
          const sizeApi = size_Api?.replace('MB', '')?.replace('GB', '')?.replace('KB', '')
          const ses = await getBuffer(dl_url);
          const fileSizeInBytes = ses.byteLength;
          const fileSizeInKB = fileSizeInBytes / 1024;
          const fileSizeInMB = fileSizeInKB / 500;
          const size = fileSizeInMB.toFixed(2);
          if (size >= limit_a2) {
            zk.envoyerMessage(origineMessage, { text: `${dl_url}*` });
            return;
          }
          if (size >= limit_a1 && size <= limit_a2) {
            zk.envoyerMessage(origineMessage, { document: ses, mimetype: 'audio/mpeg', fileName: ttl + `.mp3` });
            return;
          } else {
            zk.react(origineMessage, '✅');
            zk.envoyerMessage(origineMessage, { audio: ses, mimetype: 'audio/mpeg', fileName: ttl + `.mp3` });
            return;
          }
        } catch {
          try {
            let info = await ytdl.getInfo(yt_play[0].videoId);
            let format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
            let buff = ytdl.downloadFromInfo(info, { format: format });
            let bufs = [];
            buff.on('data', chunk => { bufs.push(chunk) });
            buff.on('end', async () => {
              let buff = Buffer.concat(bufs);
              zk.envoyerMessage(origineMessage, { audio: buff, fileName: yt_play[0].title + '.mp3', mimetype: 'audio/mpeg' });
            });
          } catch {
            await YTDL.mp3(yt_play[0].url).then(async (s) => {
              await zk.envoyerMessage(origineMessage, { audio: fs.readFileSync(s.path), mimetype: "audio/mpeg", fileName: `${s.meta.title || "-"}.mp3` });
              await fs.unlinkSync(s.path);
            });
          }
        }
      }
    } else {
      repondre("Aucun résultat trouvé.");
    }
  } catch (error) {
    repondre("Une erreur s'est produite lors de la recherche.");
  }
});