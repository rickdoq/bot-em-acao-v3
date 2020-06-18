const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("Blits Game!")
    .setDescription(
      `===========================\nPlayer: <@${message.author.id}>\n===========================\n                   🚕\n🚓   🚓  🚧\n  - - - - - - - - - - - - - - - - - - - - - - - - - - - - \n                   🚧\n                   🚧\n============================\nPontos: 0`
    )
    .setColor("DARK");
  message.channel.send(embed);
};
