const Discord = require("discord.js"); // Puxando a livraria Discord.js

exports.run = (client, message, args) => {
  var canal = client.channels.cache.get("461137488942071818"); // Puxando o canal aonde iremos enviar que o usuário tomou um warn
  // Requisitando a permissão de Administrador
  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.reply(`apenas administradores podem utilizar esse comando!`);
  // Puxando o usuário que iremos dar o Warn
  var membro =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]); // puxando do argumento zero (0)
  if (!membro) return message.reply(`mencione um usuário!`); // caso ele não mencione ninguém
  if (membro === message.member)
    return message.reply(`Mencione alguém que não seja você mesmo!`); // caso ele mencione a si memso

  var motivo = args.slice(1).join(" "); // Puxando o motivo do warn
  if (!motivo) return message.reply(`Escreva alguma coisa para esse warn`); // Caso ele não escreva o motivo

  // Embed do Warn, enviado no canal
  let embedi = new Discord.MessageEmbed()

    .setTitle(`:hammer: Warn`)
    .setColor("DARK")
    .setThumbnail(membro.user.displayAvatarURL)
    .setDescription(
      `**● ☹️ » Tive que dar o warn, espero que ele aprenda com o seu erro.\n● 👤 » \`${membro.user.username}\` \n● 🚔 » ${message.author.username}!\n● 📄 » Motivo: ${motivo}**`
    );
  // Enviando no privado do usuário
  let embed = new Discord.MessageEmbed()

    .setTitle(`:warning: Warn`)
    .setDescription(`${motivo}`)
    .setFooter(`Staff responsável: ${message.author.username}`);

  membro.send(embed); // Enviando pro usuário
  canal.send(embedi); // Enviando no canal
  message.reply(`Warn aplicado com sucesso! :thumbsup:`);
};

exports.help = {
  name: "warn",
  aliases: ["aviso"]
};
