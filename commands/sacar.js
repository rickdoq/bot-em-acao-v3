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
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`);

    db.subtract(`bank_${message.guild.id}_${user.id}`, money);
    db.add(`money_${message.guild.id}_${user.id}`, money);
    let embed5 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`💰| Você sacou toda as suas coxinhas.`);
    message.channel.send(embed5);
  } else {
    let embed2 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`🔰|Diga um valor para sacar.`);

    if (!args[0]) {
      return message.channel.send(embed2);
    }
    let embed3 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`🔰|Você não pode sacar coxinhas negativas.`);

    if (message.content.includes("-")) {
      return message.channel.send(embed3);
    }
    let embed4 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`🔰|Você não tem coxinha no banco.`);

    if (member2 < args[0]) {
      return message.channel.send(embed4);
    }

    let embed5 = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`Você acabou de sacar ${args[0]} coxinhas do seu banco.`);

    message.channel.send(embed5);
    db.subtract(`bank_${message.guild.id}_${user.id}`, args[0]);
    db.add(`money_${message.guild.id}_${user.id}`, args[0]);
  }
};

module.exports.help = {
  name: "withdraw",
  aliases: ["wd"]
};
