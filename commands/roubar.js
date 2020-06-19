const db = require("quick.db");
const Discord = require("discord.js");
const ms = require("parse-ms");

exports.run = async (client, message, args, config) => {
 /* if (
    message.author.id != "282999559385513984" &&
    message.author.id != "442093644657197067" &&
    message.author.id != "404313882757169153" &&
    message.author.id != "339110027929321484" // Frezzy
  )
    return message.channel.send(
      "❌ Você não tem permissão para usar esse comando."
    );*/

  let timeout = 10800000;

  let user1 = message.mentions.members.first();
  let user = message.author;
  let targetuser = await db.fetch(`money_${message.guild.id}_${user1.id}`); // fetch mentioned users balance
  let author = await db.fetch(`money_${message.author.id}_${user.id}`); // fetch authors balance

  let roubar = db.get(`roubar_${message.guild.id}_${user.id}`);

  if (roubar !== null && timeout - (Date.now() - roubar) > 0) {
    let time = ms(timeout - (Date.now() - roubar));

    let timeEmbed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `🕰|**VOCÊ JÁ ROUBOU HOJE.**\n\n⏱️|**TENTE NOVAMENTE EM:** ${time.hours}h ${time.minutes}m ${time.seconds}s `
      );
    message.channel.send(timeEmbed);
  } else {
    if (!user1) {
      return message.channel.send("Descupe, mencione alguém.");
    }
    if (targetuser < 250) {
      // if the authors balance is less than 250, return this.
      return message.channel.send(
        ":x: Seu alvo precisa ter ao menos 250 coxinhas"
      );
    }

    if (targetuser < 0) {
      // if mentioned user has 0 or less, it will return this.
      return message.channel.send(
        `:x: ${user1.user.username} não tem coxinha.`
      );
    }

    let random = Math.floor(Math.random() * 200) + 1; // random number 200-1, you can change 200 to whatever you'd like

    let embed = new Discord.MessageEmbed()
      .setDescription(
        `${message.author} você roubo o ${user1} e saiu com ${random} coxinhas!`
      )
      .setColor("GREEN")
      .setTimestamp();
    message.channel.send(embed);

    db.subtract(`money_${message.guild.id}_${user1.id}`, random);
    db.add(`money_${message.guild.id}_${user.id}`, random);
    db.set(`roubar_${message.guild.id}_${user.id}`, Date.now());
  }
};
