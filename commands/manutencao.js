const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("!!")) return;
  let ownerID = "282999559385513984";
  if (message.author.id !== ownerID) return;

  var text = args.slice(0).join(" ");

  const embed = new Discord.MessageEmbed()
    .setTitle(`<:off:700334895163113534> | Manutenção`)
    .setDescription(text)
    .setColor("RED");
  message.channel.send(embed);
};
