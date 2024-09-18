const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*ادخل الرسالة*\n\n*📌مثال:*\n*${usedPrefix + command} هذا الأمر ${usedPrefix}ملصق لا يعمل*`;
  if (text.length < 10) throw `*⚠️يجب أن تحتوي الرسالة على 10 أحرف على الأقل لإرسال تقرير!*`;
  if (text.length > 1000) throw `*❌طويل جدا فقط 1000 حرفا مسموح به!!*`;
  const teks = `*╭───❮ إبلاغ ❯*\n*│*\n*│ مـن:* wa.me/${m.sender.split`@`[0]}\n*│*\n*│*\n*│ الرسالة:* ${text}\n*╰────────────⦁*`;
  conn.reply('967781994494@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('967736249487@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`*✅ تم إرسال تقرير إلى مطور هذا الروبوت. إذا كانت هذه مزحة أو خطأ سيتم تجاهلها وسيتم تقييدك من استخدام البوت*`);
};
handler.help = ['reporte', 'request'];
handler.tags = ['info'];
handler.command = /^(report|request|reporte|تقرير|بلاغ|ابلاغ|تبليغ)$/i;
export default handler;
