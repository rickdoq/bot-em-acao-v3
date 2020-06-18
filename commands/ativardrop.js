const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `**${message.author.username}**, apenas administradores podem utilizar esse comando.`
    );
  const dropcoxinha = db.get(`dropcoxinha_${message.guild.id}`);

  const status = db.get(`dropcoxinhastatus_${message.guild.id}`);
  if (status === 1) {
    db.set(`dropcoxinha_${message.guild.id}`, 401);

    if (dropcoxinha >= 400) {
      const codigo = Math.ceil(Math.random() * 1000);
      const embed = new Discord.MessageEmbed()
        .setTitle("DROP!!")
        .setColor("DARK")
        .setDescription(
          `**CORRE QUE O DROP TÁ ATIVO.\n\nPara resgatar digite \`!!drop <código>\` o mais rápido possível e ganhe 150 coxinhas.\n\nCódigo: ${codigo}**`
        );
      db.set(`dropcodigo_${message.guild.id}`, codigo);
      db.set(`dropcoxinha_${message.guild.id}`, 1);
      db.set(`dropcoxinhastatus_${message.guild.id}`, 2);
      client.channels.cache.get("460966732400427008").send(embed);
      message.channel.send("Drop ativado.");
    }
  }
};
