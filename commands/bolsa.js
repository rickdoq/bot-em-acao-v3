const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if (!message.member.roles.cache.has("710187345433067530"))
    return message.channel.send(
      `**Hey, você ainda não realizou o seu <#710181676260524083>.**`
    );

  let user = message.author;

  let timeout = 604800000;
  let amount = 500;

  let daily = await db.fetch(`bolsafamilia_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));

    let timeEmbed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `🕰|**VOCÊ JÁ RECEBEU SEU BOLSA FAMÍLIA, ESPERE ATÉ OS PRÓXIMOS PAGAMENTOS.**`
      );
    message.channel.send(timeEmbed);
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
      .setColor("DARK")
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/694893191018577960/718419870869487667/15913550188571689202849630606087.jpg"
      )
      .setDescription(
        `**✨|BOLSA FAMÍLIA COLETADO, VOCÊ RECEBEU** ${amount} **COXINHAS**`
      );
    message.channel.send(moneyEmbed);
     db.add(`money_${message.guild.id}_${user.id}`, amount);
    db.set(`bolsafamilia_${message.guild.id}_${user.id}`, Date.now());
  }
};

module.exports.help = {
  name: "daily",
  aliases: ["day"]
};
