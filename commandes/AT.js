const { smd, tlang, prefix } = require('../lib');
const { zokou } = require('../framework/zokou');

zokou({
    nomCom: "getall",
    desc: "get jid of all members of groups/pm chats/all groups.",
    type: "owner",
    fromMe: true,
    use: "[ members / user / groups ]",
    usage: "get jids of groups, personal chats, also members of group, so that used them for forward cmd!",
    filename: __filename,
    public: false,
}, async (dest, zk, commandeOptions) => {
    try {
        let str = "";
        let cd = commandeOptions.text.split(" ")[0];
        if (cd === "members" || cd === "member") {
            if (!zk.isGroup) return dest.sendMessage(zk.chat, { text: tlang("group") }, { quoted: zk });
            const participants = zk.metadata.participants || {};
            for (let i of participants) { str += `📍 ${i.id}\n`; }
            str ? dest.sendMessage(zk.chat, { text: `*「 LIST OF GROUP MEMBER'S JID 」*\n\n` + str }, { quoted: zk }) : dest.sendMessage(zk.chat, { text: "*Request Denied!*" }, { quoted: zk });
        } else if (cd == "user" || cd == "pm" || cd == "pc") {
            let anu = await zk.store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v);
            for (let i of anu) { str += `📍 ${i.id}\n`; }
            str ? dest.sendMessage(zk.chat, { text: `*「 LIST OF PERSONAL CHAT JIDS 」*\n\nTotal ${anu.length} users are text in personal chat.\n\n` + str }, { quoted: zk }) : dest.sendMessage(zk.chat, { text: "*Request Denied!*" }, { quoted: zk });
        } else if (cd == "group" || cd == "groups" || cd == "gc") {
            n = await zk.bot.groupFetchAllParticipating();
            const c = Object.entries(n).slice(0).map(t => t[1]);
            for (var i of c.map(t => t.id)) { str += `📍 ${i}\n`; }
            str ? dest.sendMessage(zk.chat, { text: `*「 LIST OF GROUP CHAT JIDS 」*\n\n` + str }, { quoted: zk }) : dest.sendMessage(zk.chat, { text: "*Request Denied!*" }, { quoted: zk });
        } else return await dest.sendMessage(zk.chat, { text: `*Use ${prefix}getall pc| gc| member!*` }, { quoted: zk });
    } catch (e) { dest.error(`${e}\n\nCommand getall`, e); }
});
