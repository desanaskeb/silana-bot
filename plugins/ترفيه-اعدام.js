//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `*منشن الشخص​*`

conn.reply(m.chat, `*تم شنق ● @${who.split`@`[0]} بنجاح 😬👻*`, m, { mentions: [who] })

}
handler.help = ['kill <@tag>']
handler.tags = ['fun']
handler.command = ['اعدام', 'إعدام', 'شنق', 'موت'] 
handler.group = true

export default handler

/* let handler = async (m, { conn, command, text }) => {
  if (!text) throw `*منشن الشخص​*`
let kill = `*تم شنق ● ${text} بنجاح 😬👻*`.trim()
m.reply(kill, null, { mentions: conn.parseMention(kill) })}
handler.help = ['kill <@tag/reply>']
handler.tags = ['fun']
handler.command = ['اعدام', 'إعدام', 'شنق', 'موت'] 
export default handler
*/