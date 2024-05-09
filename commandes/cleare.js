const { zokou } = require("../framework/zokou");

zokou({ nomCom: "clear", categorie: "General", reaction: "🎚" }, async (dest, zk, com) => {

}, async (message, match) => {
  try {
    // Effacer tous les messages de la conversation
    await message.clearChat(message.jid);
    await message.send("_Cleared_");
  } catch (error) {
    console.error("Error:", error.message || "An error occurred");
    await message.send("Oops, an error occurred while clearing the chat.");
  }
});
