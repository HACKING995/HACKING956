const { zokou } = require('../framework/zokou');
const axios = require('axios');

zokou({ nomCom: "dalle2", reaction: "📡", categorie: "IA" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  try {
    if (!arg || arg.length === 0) {
      return repondre(`Please enter the necessary information to generate the image.`);
    }

    const text2i = await genimage(arg);

    let caption = '*powered by Hacking-MD*';

    zk.sendMessageWithMedia(dest, { buffer: text2i }, { caption: caption, quoted: ms });
  } catch (error) {
    console.error('Error:', error.message || 'An error occurred');
    if (error.response) {
      console.error('Status code:', error.response.status);
      console.error('Response data:', error.response.data);
    }
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
      'accept': '*/*'
    }
  });

  return response.data;
}
