const Discord = require("discord.js")

exports.run = (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle("<a:boost:722248809010167918> Nitro Booster <a:boost:722248809010167918>")
.setDescription("• 2.5xp na Loritta\n• Call exclusiva\n• Cor exclusiva\n• Cores especiais\n• Permissão GarticMod\n• Cargo DJ\n• Enviar imagens no <#460966732400427008>\n• Permissão Alterar apelido \n• Comandos Loritta em qualquer chat \n• Boost de 3x nas coxinhas\n• Bagde exclusiva no !!perfil")
.setColor("DARK");
message.channel.send(embed)
}