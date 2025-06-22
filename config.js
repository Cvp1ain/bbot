/*

 Base Created By captain
 Whatsapp : +923101136915
*/

const fs = require('fs')

//settings bot
global.owner = "923135067520"
global.namabot = "𝐄𝐯𝐢𝐥 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐕𝟓"
global.namaowner = "captain"
global.linkTele = "t.me//DanzModss17"
global.numberbot = "-" // Masukin Nomer Yang Ada di Database Dsni
global.reply = "https://files.catbox.moe/n44mu9.jpg"
global.reply2 = "https://files.catbox.moe/n44mu9.jpg"
global.status = true
global.prefa = ["", "!", ".", ",", "🐤", "🗿"]; // Not Change!!

// Settings Event
global.welcome = true
global.antispam = true
global.autoread = false
global.owneroff = true
global.delayPushkontak = 6000 // Ubah Aja Sakarepmu

// Payment
global.dana = "-"
global.gopay = "-"
global.ovo = "-"
global.qris = fs.readFileSync("./allmedia/qris.jpg")
global.namadana = "-"
global.namagopay = "-"
global.namaovo = "-" 

// Cpanel
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "ptla_bWNQIJpKJkPERlnQs8p2UUIZUYrTF0mESeTO7UM1z" //ptla
global.capikey = "ptlc_e5HDwnIfiUDyDNst8501HOu0aeuSWxMmxKFWRyOjc" //ptlc

// Ubah aja Ni Buat Cmd Proses, dan done
global.linkOwner = "923101136915"
global.linkGrup = "-"

// Message
global.mess = {
    owner: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐃𝐈𝐓𝐎𝐋𝐀𝐊 ❗ ]*\nFitur Ini Hanya Digunakan Oleh Owner",
    group: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐃𝐈𝐓𝐎𝐋𝐀𝐊 ❗ ]*\nFitur Ini Hanya Di Dalam Group",
    private: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐃𝐈𝐓𝐎𝐋𝐀𝐊 ❗ ]*\nFitur Ini Hanya Digunakan Di Private Chat",
    reseller: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐃𝐈𝐓𝐎𝐋𝐀𝐊 ❗ ]*\nFitur Ini Hanya Digunakan Oleh Reseller",
    murbug: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐃𝐈𝐓𝐎𝐋𝐀𝐊 ❗ ]*\nFitur Ini Hanya Digunakan Oleh Pengguna Murbug",
    premium: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐃𝐈𝐓𝐎𝐋𝐀𝐊 ❗ ]*\nFitur Ini Hanya Digunakan Oleh Pengguna Premium", 
    admin: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐃𝐈𝐓𝐎𝐋𝐀𝐊 ❗ ]*\nFitur Ini Khusus Untuk Admin",
    botadmin: "*[ 𝐀𝐊𝐒𝐄𝐒 𝐃𝐈𝐓𝐎𝐋𝐀𝐊 ❗ ]*\nBot Harus Menjadi Admin Terlebih Dahulu",
}

// Nama Sticker 
global.packname = 'Whatsapp Bot 𝐄𝐯𝐢𝐥 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐕𝟓'
global.author = '\n\n\n\n\n\nDanzModss'

// End Settings

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
