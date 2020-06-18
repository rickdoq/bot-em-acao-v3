const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("!!")) return;
  if (!message.member.hasPermission("ADMINISTRATOR")) return;

  let user = message.mentions.members.first() || message.author;

  if (isNaN(args[1])) return;
  db.add(`money_${message.guild.id}_${user.id}`, args[1]);
  let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);

  let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(
      `Adicionou ${args[1]} coxinhas\n\nNovo saldo na carteira: ${bal}`
    );
  message.channel.send(moneyEmbed);
};

module.exports.help = {
  name: "add",
  aliases: ["am"]
};
