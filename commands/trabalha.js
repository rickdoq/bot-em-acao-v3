const db = require("quick.db"); // Puxando a nossa DataBase. *Instale utilizando: npm i quick.db --save
const Discord = require("discord.js"); // Puxando a livraria Discord.js
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
  
  if (
    message.author.id != "282999559385513984" &&
    message.author.id != "442093644657197067" &&
    message.author.id != "404313882757169153"
  )
    return message.channel.send(
      "Errou o comando ae hein filhão."
    );
  
  message.reply(`Você trabalhou de ${args[0]} e ganhou ${args[1]} coxinhas`);

};

exports.help = {
  name: "emprego",
  aliases: ["trabalho"]
};
