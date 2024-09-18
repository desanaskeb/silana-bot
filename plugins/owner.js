import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/967781994494

*instagram:*\ninstagram.com/alkaser_0_0

*youtube:*\nyoutube.com/@alkaser_0_0

*telegram:*\nhttps://t.me/J_8_D


`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(المطور|مطور)$/i
handler.limit = false

export default handler
