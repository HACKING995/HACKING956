const { zokou } = require('../framework/zokou');
const  axios  = require('axios');

zokou({ nomCom: "dalle2", reaction: "📡", categorie: "IA" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  try {
    if (!arg || arg.length === 0) {
      return repondre(`Please enter the necessary information to generate the image.`);
    }

    // Regrouper les arguments en une seule chaîne séparée par "-"
    
   let text2i = await genimage(arg)
    
    let caption = '*powered by Hacking-MD*';

    // Utiliser la méthode sendMessageWithMedia pour envoyer l'image en tant que buffer
    zk.sendMessageWithMedia(dest, { buffer: text2i }, { caption: caption, quoted: ms });
  } catch (error) {
    console.error('Erreur:', error.message || 'Une erreur s\'est produite');
    repondre("Oops, an error occurred while processing your request");
  }
});


async function genimage(args) {
const data = {
  model: "majicmixRealistic_v4",
  prompt: args,
  negative_prompt: "Do not put text or writing on the picture",
  style: "anime",
  sampler: "DPM++ 2M Karras"
};

const response = await axios.post('https://api.onesytex.my.id/api/text2image/generate-image', data, {
  headers: {
    'accept': '*/*',
    'Content-Type': 'application/json'
  }
})

return response.data
}
