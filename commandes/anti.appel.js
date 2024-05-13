const { zokou } = require("../framework/zokou");
const delay = time => new Promise(res => setTimeout(res, time));

zokou({
  nomCom: "anti-call",
  categorie: "General",
  reaction: "🚫"
}, async (origineMessage, zk, commandeOptions) => {
  const { repondre, mentionner } = commandeOptions;

  if (!origineMessage.isGroup) {
    // Traitement si vous êtes mentionné individuellement sur votre compte WhatsApp personnel
    const mentionedUsers = origineMessage.mentions.map(mention => mention.jid);
    const bannedUsers = [];

    for (const user of mentionedUsers) {
      // Envoyer un message mentionnant l'utilisateur et son bannissement.
      await zk.envoyerMessage(origineMessage, { text: `You are banned and blocked for calling the bot.`, mentions: [user] });

      // Ajouter l'utilisateur à la liste des utilisateurs bannis.
      bannedUsers.push(user);

      // Délai d'une seconde avant d'appliquer le bannissement.
      await delay(1000);

      // Mettre à jour le statut de l'utilisateur comme banni et lui donner un avertissement.
      global.db.data.users[user].banned = true;
      global.db.data.users[user].warning = 1;

      // Bloquer l'utilisateur pour qu'il ne puisse pas envoyer de messages au bot.
      await zk.updateBlockStatus(user, "block");
    }

    if (bannedUsers.length === 0) {
      repondre("No mentioned users were found.");
    } else {
      const bannedUserMentions = bannedUsers.map(user => mentionner(user)).join(", ");
      repondre(`The following users have been banned and blocked for calling the bot: ${bannedUserMentions}`);
    }
  } else {
    // Traitement si la commande est utilisée dans un groupe
    const participants = origineMessage.participants;
    const mentionedUsers = origineMessage.mentions.map(mention => mention.jid);
    const bannedUsers = [];

    for (const participant of participants) {
      if (mentionedUsers.includes(participant.jid)) {
        // Envoyer un message mentionnant l'utilisateur et son bannissement.
        await zk.envoyerMessage(origineMessage, { text: `You are banned and blocked for calling the bot.`, mentions: [participant.jid] });

        // Ajouter l'utilisateur à la liste des utilisateurs bannis.
        bannedUsers.push(participant.jid);

        // Délai d'une seconde avant d'appliquer le bannissement.
        await delay(1000);

        // Mettre à jour le statut de l'utilisateur comme banni et lui donner un avertissement.
        global.db.data.users[participant.jid].banned = true;
        global.db.data.users[participant.jid].warning = 1;

        // Bloquer l'utilisateur pour qu'il ne puisse pas envoyer de messages au bot.
        await zk.updateBlockStatus(participant.jid, "block");

        // Retirer l'utilisateur du groupe.
        await zk.groupParticipantsUpdate(origineMessage.chatId, [participant.jid], "remove");
      }
    }

    if (bannedUsers.length === 0) {
      repondre("No mentioned users were found in the group.");
    } else {
      const bannedUserMentions = bannedUsers.map(user => mentionner(user)).join(", ");
      repondre(`The following users have been banned and blocked for calling the bot: ${bannedUserMentions}`);
    }
  }
});
