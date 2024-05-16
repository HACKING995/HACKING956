const { zokou } = require('../framework/zokou');
const traduire = require("../framework/traduction") ;
const { default: axios } = require('axios');
//const conf = require('../set');




zokou({nomCom:"bot",reaction:"📡",categorie:"IA"},async(dest,zk,commandeOptions)=>{

  const {repondre,ms,arg}=commandeOptions;
  
    if(!arg || !arg[0])
    {return repondre("yes I'm listening to you.")}
    //var quest = arg.join(' ');
  try{
    
    
const message = await traduire(arg.join(' '),{ to : 'en'});
 console.log(message)
fetch(`http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=${message}`)
.then(response => response.json())
.then(data => {
  const botResponse = data.cnt;
  console.log(botResponse);

  traduire(botResponse, { to: 'en' })
    .then(translatedResponse => {
      repondre(translatedResponse);
    })
    .catch(error => {
      console.error('Error when translating into French :', error);
      repondre('Error when translating into French');
    });
})
.catch(error => {
  console.error('Error requesting BrainShop :', error);
  repondre('Error requesting BrainShop');
});

  }catch(e){ repondre("oops an error : "+e)}
    
  
  });  



  zokou({ nomCom: "dalle", reaction: "📡", categorie: "IA" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  try {
    if (!arg || arg.length === 0) {
      return repondre(`Please enter the necessary information to generate the image.`);
    }

    // Regrouper les arguments en une seule chaîne séparée par "-"
    const image = arg.join('-');
    const response = await axios.get(`https://api.maher-zubair.tech/ai/dalle?q=${image}`, {
      responseType: 'arraybuffer' // Demande une réponse au format buffer
    });

    const imageBuffer = response.data; // Récupère le buffer d'image de la réponse
    let caption = '*powered by Hacking-MD*';

    // Utiliser la méthode sendMessageWithMedia pour envoyer l'image en tant que buffer
    zk.sendMessageWithMedia(dest, { buffer: imageBuffer }, { caption: caption, quoted: ms });
  } catch (error) {
    console.error('Erreur:', error.message || 'Une erreur s\'est produite');
    repondre("Oops, an error occurred while processing your request");
  }
});
  
  zokou({ nomCom: "gpt", reaction: "🌐", categorie: "IA" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  if (!arg || arg.length === 0) {
    return repondre(`Please ask a question.`);
  }

  // Regrouper les arguments en une seule chaîne séparée par "-"
  const question = arg.join(' ');
  const response = await fetch(`https://api.maher-zubair.tech/ai/chatgptv4?q=${question}`);
  const data = await response.json();

  if (!data.result) {
    return repondre(`Sorry, I couldn't find an answer to your question.`);
  }

  await repondre(data.result);
  console.log(data.completion);
});

zokou({ nomCom: "calcul", reaction: "😂", categorie: "IA" }, async (dest, zk, commandeOptions) => { const { repondre, arg, ms } = commandeOptions;

if (!arg || arg.length === 0) { return repondre(`Please insert maths calculations like 1000*2.`); }
// Regrouper les arguments en une seule chaîne séparée par "-" const cal = arg.join(' ');
const response = await fetch(`https://api.maher-zubair.tech/ai/mathssolve?q=${cal}`);
const data = await response.json();
await repondre(data.result);console.log(data.completion); 

});


zokou({ nomCom: "thomas", reaction: "🌏", categorie: "IA" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  if (!arg || arg.length === 0) {
    return repondre(`please ask a question.`);
  }

  // Regrouper les arguments en une seule chaîne séparée par "-"
  const question = arg.join(' ');
  const response = await fetch(`https://api.maher-zubair.tech/ai/chatgptv4?q=${question}`);
  const data = await response.json();

  await repondre(data.result);
  console.log(data.completion);
});

let chatActivated = false;

zokou({nomCom: "chat", reaction: "📡", categorie: "IA"}, async (dest, zk, commandeOptions) => {
  const {repondre, ms, arg} = commandeOptions;

  // Vérifier si la commande "chat" est activée
  if (arg && arg[0] === 'on') {
    chatActivated = true;
    repondre("La commande 'chat' est maintenant activée. Je peux discuter avec vous.");
    await continuerConversation(dest, zk, arg.slice(1).join(' '));
  } else if (arg && arg[0] === 'off') {
    chatActivated = false;
    repondre("La commande 'chat' est maintenant désactivée.");
  } else if (chatActivated) {
    await continuerConversation(dest, zk, arg.join(' '));
  } else {
    repondre("La commande 'chat' est désactivée. Pour l'activer, utilisez 'chat on'.");
  }
});

async function continuerConversation(dest, zk, message) {
  try {
    // Traduire le message en anglais
    const messageEnglish = await traduire(message, { to: 'en' });

    // Envoyer la requête à BrainShop
    const response = await fetch(`http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=${messageEnglish}`);
    const data = await response.json();
    const botResponse = data.cnt;

    // Traduire la réponse en français
    const translatedResponse = await traduire(botResponse, { to: 'fr' });
    zk.repondre(translatedResponse);
  } catch (e) {
    zk.repondre("Oops, une erreur est survenue : " + e);
  }
}
