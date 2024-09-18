let handler = async (m, { conn, command, text }) => {
let love = `*✨💜 نسبة الحب 💜✨*
*نسبة حب ${text} لك ✨💜* *${Math.floor(Math.random() * 100)}%* *من 100%*
*اتمنى لكما سعادة دائمة*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love <@tag/reply>']
handler.tags = ['fun']
handler.command = /^(الحب)$/i
export default handler
