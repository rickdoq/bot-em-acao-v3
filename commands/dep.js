const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("!!")) return;

  let check = /^\d+$/.test(args[0]);
  
  if(check === false && args[0] !== "all") return message.reply("insira um valor numérico inteiro válido!");
  
  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`);
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`);

  if (args[0] == "all") {
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`);
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`);

    let embedbank = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription("Você não tem coxinha para depositar.");

    if (money === 0) return message.channel.send(embedbank);

    db.add(`bank_${message.guild.id}_${user.id}`, money);
    db.subtract(`money_${message.guild.id}_${user.id}`, money);
    let embed5 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `🏦| **Você depositou todas as suas coxinhas no banco.**`
      );
    message.channel.send(embed5);
  } else {
    let embed2 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`🏧| Diga um valor para depositar.`);

    if (!args[0]) {
      return message.channel.send(embed2).catch(err => console.log(err));
    }
    let embed3 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`Você não pode depositar valor negativo.`);

    if (message.content.includes("-")) {
      return message.channel.send(embed3);
    }
    let embed4 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`🚫 Você não tem coxinha para depositar.`);

    if (member < args[0]) {
      return message.channel.send(embed4);
    }

    let embed5 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `🏦| **Você depositou ${args[0]} coxinhas no seu banco.**`
      );

    message.channel.send(embed5);
    db.add(`bank_${message.guild.id}_${user.id}`, args[0]);
    db.subtract(`money_${message.guild.id}_${user.id}`, args[0]);
  }
};
module.exports.help = {
  name: "deposit",
  aliases: ["dep"]
};
