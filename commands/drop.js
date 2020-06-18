const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  const dropcoxinha = db.get(`dropcoxinhastatus_${message.guild.id}`);

  const codigo = db.get(`dropcodigo_${message.guild.id}`);
  if (parseInt(args[0]) === codigo) {
    if (dropcoxinha === 2) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Drop`)
        .setDescription(
          `**Parabéns <@${message.author.id}>, você resgatou o drop e ganhou 150 coxinhas.**`
        )
        .setColor("DARK");
      message.channel.send(embed);
      db.add(`money_${message.guild.id}_${message.author.id}`, 150);
      db.set(`dropcoxinhastatus_${message.guild.id}`, 1);
    } else {
      message.channel.send("Que pena, já resgataram o drop.");
    }
  } else {
    message.channel.send("Utilize `!!drop <código>`");
  }
};
