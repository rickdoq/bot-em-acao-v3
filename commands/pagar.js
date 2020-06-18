const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("!!")) return;
  
  let check = /^\d+$/.test(args[1]);
  
  if(check === false) return message.reply("insira um valor numérico inteiro válido!");

  let user = message.mentions.members.first();

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`);

  let embed1 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`🔰| MENCIONE O USUÁRIO QUE VAI PAGAR`);

  if (!user) {
    return message.channel.send(embed1);
  }
  let embed2 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`🔰| COLOQUE O VALOR QUE VAI PAGAR.`);

  if (!args[1]) {
    return message.channel.send(embed2);
  }
  let embed3 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`🔰| VOCÊ NÃO PODE PAGAR COXINHA NEGATIVA!`);

  if (message.content.includes("-")) {
    return message.channel.send(embed3);
  }
  let embed4 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`🔰| VOCÊ NÃO TEM TODO ESSE DINHEIRO.`);

  if (member < args[1]) {
    return message.channel.send(embed4);
  }

  let embed5 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(
      `🏧| Você pagou o ${user.user.username} a quantia de ${args[1]} coxinhas`
    );

  message.channel.send(embed5);
  db.add(`money_${message.guild.id}_${user.id}`, args[1]);
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1]);
};

module.exports.help = {
  name: "pay",
  aliases: [""]
};
