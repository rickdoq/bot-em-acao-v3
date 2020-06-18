const Discord = require("discord.js")

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
.setTitle("<a:money:722249314042249246> Twitch Sub <a:money:722249314042249246>")
.setDescription("• 1.7xp na Loritta\n• Duas calls Exclusivas \n• Chat exclusivo \n• Emotes para usar aonde quiser (Discord e Twitch) \n• Não ver anúncios (Twitch)\n• Boost de 2x de coxinhas\n• Bagde exclusiva no `!!perfil`")
.setColor("DARK");
message.channel.send(embed)
console.log("FUNCIONANDO")
}
