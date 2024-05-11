const { zokou } = require("../framework/zokou");
const delay = time => new Promise(res => setTimeout(res, time));

zokou({
  nomCom: "anti-call",
  categorie: "User",
  avant: "before",
  admin: true,
  botAdmin: true,
  reaction: "🚫"
}, async (origineMessage, zk, commandeOptions) => {
  const { repondre, mentionner } = commandeOptions;

  if (!origineMessage.isGroup) {
    repondre("Cette commande ne peut être utilisée que dans un groupe.");
    return;
  }

  const participants = origineMessage.participants;
  const mentionedUsers = origineMessage.mentions.map(mention => mention.jid);
  const banUsers = [];

  for (const participant of participants) {
    if (mentionedUsers.includes(participant.jid)) {
      // Send a message mentioning the user and their ban.
      await zk.envoyerMessage(origineMessage, { text: `You are banned + blocked for calling the bot`, mentions: [participant.jid] });

      // Add the user to the bannedUsers array.
      bannedUsers.push(participant.jid);

      // Delay for 1 second before applying the ban.
      await delay(1000);

      // Update the user's status to banned and give them a warning.
      global.db.data.users[participant.jid].banned = true;
      global.db.data.users[participant.jid].warning = 1;

      // Block the user from sending messages to the bot.
      await zk.updateBlockStatus(participant.jid, "block");

      // Remove the user from the group.
      await zk.groupParticipantsUpdate(origineMessage.chatId, [participant.jid], "remove");
    }
  }

  if (banUser.length === 0) {
    repondre("Aucun utilisateur mentionné n'a été trouvé dans le groupe.");
  } else {
    const banUserMentions = bannedUsers.map(user => mentionner(user)).join(", ");
    repondre(`Les utilisateurs suivants ont été bannis et bloqués pour avoir appelé le bot : ${bannedUserMentions}`);
  }
});