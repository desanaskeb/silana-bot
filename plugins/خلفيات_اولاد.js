const dir = [
  'https://telegra.ph/file/6b93e81e810b7ff50087d.jpg', 
  'https://telegra.ph/file/8a191a2d73d7aae40dbd8.jpg',     
  'https://telegra.ph/file/bda68f9d804841d81621f.jpg', 
  'https://telegra.ph/file/d55c34fe5d40910fe577b.jpg',     
  'https://telegra.ph/file/7926255ec4c2c26ed08c1.jpg', 
  'https://telegra.ph/file/6eafd4202f117d3c7876d.jpg', 
  'https://telegra.ph/file/f5533a7572764c3431416.jpg', 
  'https://telegra.ph/file/44c663b8ff7fa1c379b89.jpg', 
  'https://telegra.ph/file/81d34c0f5b95de9edbb4b.jpg', 
  'https://telegra.ph/file/f85f294ced501af7a031f.jpg', 
  'https://telegra.ph/file/1b0b294d74a3015bec932.jpg', 
  'https://telegra.ph/file/ffab39f2db27da6a0012e.jpg', 
  'https://telegra.ph/file/a81243e205cbc7a0082e5.jpg', 
  'https://telegra.ph/file/f1d09cf313a6798305227.jpg', 
  'https://telegra.ph/file/a936ce5b9abe79f790af1.jpg', 
  'https://telegra.ph/file/b7cf6499f94e115fd15cb.jpg', 
  'https://telegra.ph/file/f51b1f620430ac5ee2b48.jpg', 
  'https://telegra.ph/file/d9dccd9500a1a63b0b2b9.jpg', 
  'https://telegra.ph/file/453f98a4095ecb32476d4.jpg', 
  'https://telegra.ph/file/37dd7e59e94b734fc3040.jpg', 
  'https://telegra.ph/file/657fc266f578de5b96bb8.jpg', 
  'https://telegra.ph/file/00b839871b6adf720bc32.jpg', 
  'https://telegra.ph/file/1c61984cafff3f8e2b932.jpg', 
  'https://telegra.ph/file/7333f55eb4de60f77403f.jpg', 
  'https://telegra.ph/file/7333f55eb4de60f77403f.jpg', 
  'https://telegra.ph/file/9ff0cfa037f3d6f1cc279.jpg', 
  'https://telegra.ph/file/9881691257cc6430010a7.jpg', 
  'https://telegra.ph/file/1db9fb3c90f2f937692da.jpg', 
  'https://telegra.ph/file/9801e87655e0fbbee4165.jpg', 
  'https://telegra.ph/file/7a3739de697c83a93b575.jpg', 
  'https://telegra.ph/file/7a3739de697c83a93b575.jpg', 
  'https://telegra.ph/file/c3ed86127b0eb4832f3c5.jpg', 
  'https://telegra.ph/file/012e9afa608dc26f49835.jpg',
  'https://telegra.ph/file/200073a15f114375c71e3.jpg', 
  'https://telegra.ph/file/6f9002e61e86de4441044.jpg', 
  'https://telegra.ph/file/87aae2b989fd9a06b5a31.jpg', 
  'https://telegra.ph/file/1e0deef3e797aefb4c5b1.jpg', 
  'https://telegra.ph/file/0e7e3ca22261132c0a278.jpg', 
  'https://telegra.ph/file/43a5c234733e859ee5892.jpg', 
  'https://telegra.ph/file/1fd32490492d2a9d2b62b.jpg', 
  'https://telegra.ph/file/3e1e776a4c11ee2cc0d20.jpg', 
  'https://telegra.ph/file/3b9a91c6d05622d96c650.jpg',
  'https://telegra.ph/file/ee20b0d6938fc576cf5ff.jpg',
  'https://telegra.ph/file/84a25faf1d877768a21a8.jpg',
  'https://telegra.ph/file/84a25faf1d877768a21a8.jpg',
  'https://telegra.ph/file/76bc870f69767c787a5dd.jpg',
  'https://telegra.ph/file/58f56cbb5a4b3c7d9d651.jpg',
  'https://telegra.ph/file/d78e2eb35bd8566457a9b.jpg',
  'https://telegra.ph/file/f1d09cf313a6798305227.jpg', 
  'https://telegra.ph/file/1a260afdd326f177dfadb.jpg', 
  'https://telegra.ph/file/a4f619f9771868c797e8e.jpg',
  'https://telegra.ph/file/c701ca77035bc7b686187.jpg',
  'https://telegra.ph/file/c265ff67a4cbbb366214e.jpg',
  'https://telegra.ph/file/f05399d47b5cca9018615.jpg',
  'https://telegra.ph/file/d0bb38956a67d6089948c.jpg',
  'https://telegra.ph/file/222be5fc3ec649f7d9bbd.jpg',
  'https://telegra.ph/file/955515dbde93c2c6ca8ce.jpg',
  'https://telegra.ph/file/1dc580dd8eaf328eba38b.jpg', 
  'https://telegra.ph/file/e0d6df7bf89710c0a727f.jpg',
  'https://telegra.ph/file/14253355c194971a516bb.jpg', 
  'https://telegra.ph/file/d63ceb8dce51aeb46ef47.jpg',
  'https://telegra.ph/file/026be4ca078db9426daf2.jpg',
  'https://telegra.ph/file/8ab387297aac01120f657.jpg',
  'https://telegra.ph/file/6f5ff5348ae15c9a18695.jpg',
  'https://telegra.ph/file/f1d09cf313a6798305227.jpg',
  'https://telegra.ph/file/c87467684ef8db806117b.jpg',
  'https://telegra.ph/file/f6820981c81e840a6d49d.jpg',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '*⎔↞┃افـتـارات اولاد فـخـامـه⚡️┃*', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['خلفية-اولاد', 'اولاد2'] 
export default handler
