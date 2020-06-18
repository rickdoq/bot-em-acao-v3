const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  if (
    message.author.id != "282999559385513984" &&
    message.author.id != "442093644657197067" &&
    message.author.id != "404313882757169153"
  )
    return message.channel.send(
      "❌ Você não tem permissão para usar esse comando."
    );
  message.channel.send("Diga o seu novo nick.");
  const nick = new Discord.MessageCollector(
    message.channel,
    m => m.author.id === message.author.id,
    { time: 15000 }
  );
  nick.on("collect", message => {
    message.channel.send(`Deseja confirmar?: \`${message}\``).then(r => {
      r.react("☑️");
    });
  });
  const CertoFilter = (reaction, user) =>
    reaction.emoji.name === "☑️" && user.id === message.author.id;

  const Certo = Discord.createReactionCollector(CertoFilter);

  Certo.on("collect", r1 => {
    r1.edit("Nick trocado.");
  });
};
