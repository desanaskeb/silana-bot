let handler = async (m, { conn, args, command }) => {
await m.reply('*❁┇سلام سأقوم بالمغادرة بأمر من المطور وداعاً👋┇❁⁩*') 
await  conn.groupLeave(m.chat)}
handler.command = /^(out|اطلع|اخرج|برا|غادر)$/i
handler.group = true
handler.rowner = true
export default handler
