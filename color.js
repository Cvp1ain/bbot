/*

 Base Created By Erlangga & DanzModsss
 Whatsapp : +6285880393403
 Telegram : t.me/DanzMods17
 
 Bot Created By Dzaky Developer
 Whatsapp : +6285855777749
 Telegram : t.me/DzakyyShadow
 
  ( don't delete the creator's name, please respect it!! )
  
            Kata Kata Hari Ini
      - "Bila kegagalan itu hujan, dan keberhasilan bagaikan matahari, maka butuh keduanya untuk melihat pelangi"
      
      - "Kesuksesan berawal dari misi dan tantangan, bukan berawal dari zona nyaman"
  
      ~DanzModss 12/04/2025
*/


const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
  return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const Lognyong = (text, color) => {
  return !color ? chalk.yellow('[ ! ] ') + chalk.green(text) : chalk.yellow('=> ') + chalk.keyword(color)(text)
}

module.exports = {
  color,
  bgcolor,
  Lognyong
}
