const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("!!")) return;
  if (!message.member.hasPermission("ADMINISTRATOR")) return;

  let user = message.mentions.members.first() || message.author;
  
  let valueint = parseInt(args[1]);

  if (isNaN(args[1])) return;
  db.set(`booster_${message.guild.id}_${user.id}`, args[1]);
  db.set(`boostertime_${message.guild.id}_${user.id}`, Date.now());

  let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(
      `O booster foi colocado no ${user} no valor de ${args[1]}x com duração de 30 dias. `
    );
  message.channel.send(moneyEmbed);
};

module.exports.help = {
  name: "boost",
  aliases: ["bst"]
};