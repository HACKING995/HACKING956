const axios = require('axios');
const { zokou } = require("../framework/zokou");

zokou({
  nomCom: "dalle2",
  description: "Génère une image en utilisant l'API Photoleap",
  usage: "generate-image <nom de l'image>",
  categorie: "IA",
  reaction: "✨"
}, async (origineMessage, zk, commandeOptions) => {
  const { repondre, arguments } = commandeOptions;

  if (arguments.length === 0) {
    repondre("Veuillez spécifier un nom pour l'image à générer.");
    return;
  }

  const imageName = arguments.join(" ");

  try {
    // Appel à l'API Photoleap pour générer l'image
    const response = await axios.get(`https://api.maher-zubair.tech/ai/photoleap?q=${encodeURIComponent(imageName)}`);

    // Vérifier si la réponse contient une URL d'image
    if (response.data && response.data.success) {
      const imageUrl = response.data.url;

      // Envoyer l'image générée dans le chat
      await zk.envoyerMessage(origineMessage, { image: imageUrl });
    } else {
      repondre("Une erreur s'est produite lors de la génération de l'image.");
    }
  } catch (error) {
    console.error(error);
    repondre("Une erreur s'est produite lors de la génération de l'image.");
  }
});
