const { zokou } = require("../framework/zokou");
const delay = (time) => new Promise((res) => setTimeout(res, time));

const antiCall = {
  nomCom: "anti-call",
  categorie: "User",
  reaction: "🚫",
  before: async (m, { bot }) => {
    let botSettings = global.db.data.settings[this.user.jid] || {};

    if (m.isBaileys) return;
    if (!botSettings.antiCall) return;

    const messageType = {
      40: '📞 You missed a voice call, and the call has been missed.',
      41: '📹 You missed a video call, and the call has been missed.',
      45: '📞 You missed a group voice call, and the call has been missed.',
      46: '📹 You missed a group video call, and the call has been missed.',
    }[m.messageStubType];

    if (messageType) {
      await this.sendMessage(m.chat, {
        text: `You are banned + blocked for calling the bot`,
        mentions: [m.sender],
      });

      await delay(1000);

      global.db.data.users[m.sender].banned = true;
      global.db.data.users[m.sender].warning = 1;

      await this.updateBlockStatus(m.sender, 'block');

      if (m.isGroup) {
        await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    } else {
      console.log({
        messageStubType: m.messageStubType,
        messageStubParameters: m.messageStubParameters,
        type: m.messageStubType,
      });
    }
  },
};

zokou(antiCall, async (origineMessage, zk, commandeOptions) => {
  const { repondre, mentionner } = commandeOptions;
  // Ajouter ici la logique de la commande "anti-call"
});

export const disabled = false;
