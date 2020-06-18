const Discord = require("discord.js");
const c = require("../config.json");

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `**${message.author.username}**, apenas administradores podem utilizar esse comando.`
    );
  
  const channel = args[0].replace(/\D/g,'');
  if(client.channels.cache.get(channel) !== undefined){
    var fala = args.slice(1).join(" ");
    if (!fala) return message.reply(`escreva o que quer que eu repita.`);
    client.channels.cache.get(channel).send(fala)
  }else{
    var fala = args.slice(0).join(" ");
    if (!fala) return message.reply(`escreva o que quer que eu repita.`);
    message.channel.send(fala);
  }

  

  
  message.delete();
};
exports.help = {
  name: "say",
  aliases: ["falar"]
};
