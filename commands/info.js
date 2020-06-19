const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
.setTitle(`Badges do Perfil`)
.setDescription(`Talvez muitos já tenham visto que no perfil aparece umas badges, porém muitos não sabem o significado.\nEntão estou trazendo aqui o significado de todas as badges:\n\n**<:capitao:723269895856586799> - Este badge é para quem tem o cargo de Capitão.\n<:tcoronel:723270160143614023> - Este badge é para quem tem o cargo de Tenente-Coronel.\n<:coronel:723270318629847060> - Este badge é para quem tem o cargo Coronel.\n\`Easter Egg\` - Este badge é um Easter Egg.\n<:sub:723195844509302805> - Este badge é para quem é Sub na Twitch.\n<:nitroperfil:723195981121716325> - Este badge é para quem der nitro no servidor.\n<:bolsa:723194962350440449> - Este badge é para quem realizou o registro do Bolsa Família.\n<:bughunter:723195052922503200> - Este badge é para quem reportou um Bug válido.\n<:dev:723195147504058439> - Este badge é para quem é desenvolvedor do bot.\n👮 - Este badge é para quem é Staff.**`)
.setColor(`DARK`);
message.channel.send(embed)
};

module.exports.help = {
  name: "profile",
  aliases: ["pro"]
};
