const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("!!")) return;

  let user = message.author;

  let timeout = 86400000;
  let amount = 200;
  
  let boost = db.get(`booster_${message.guild.id}_${user.id}`);  
  
  if(boost === null){
    boost = 1;
  }
  
  let valortotal = amount * boost;

  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));

    let timeEmbed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `🕰|**VOCÊ JÁ COLETOU HOJE.**\n\n⏱️|**TENTE NOVAMENTE EM:** ${time.hours}h ${time.minutes}m ${time.seconds}s `
      );
    message.channel.send(timeEmbed);
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
         .setColor("#FFFFFF")
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/685640365784432660/699780828598894642/Screenshot_20200414-064513-1.jpg"
      )
      .setDescription(
        `**✨|DAILY COLETADO, VOCÊ RECEBEU** ${valortotal} **COXINHAS**`
      );
    message.channel.send(moneyEmbed);
    db.add(`money_${message.guild.id}_${user.id}`, valortotal);
    db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
  }
};

module.exports.help = {
  name: "daily",
  aliases: ["day"]
};
