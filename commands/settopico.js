const Discord = require("discord.js");
const c = require("../config.json");

exports.run = async (client, message, args) => {
  if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send(
      `Hey **${message.author.username}**, eu necessito da permissão \`MANAGE_CHANNELS\``
    );
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send(
      `Hey **${message.author.username}**, apenas usuários com a permissão \`MANAGE_CHANNELS\` podem utilizar esse comando.`
    );

  message.channel
    .send(`🔄 **»** Mencione um canal para que eu crie uma descrição.`)
    .then(m => {
      let cl = message.channel
        .createMessageCollector(x => x.author.id == message.author.id, {
          max: 1
        })
        .on("collect", c => {
          const canal = c.mentions.channels.first();
          m.delete(180000);

          if (!canal) {
            message.channel.send(`🚫 **»** Não consegui encontrar esse canal.`);
          } else {
            message.channel
              .send(
                `🔄 **»** Escreva o que deseja aparecer na descrição do canal ${canal}`
              )
              .then(a => {
                let cp = message.channel
                  .createMessageCollector(
                    x => x.author.id == message.author.id,
                    { max: 1 }
                  )
                  .on("collect", c => {
                    const desc = c.content;

                    message.channel.send(
                      `☑️ **»** Feeeito! Adicionei um topic ao canal ${canal}`
                    );
                    canal.setTopic(desc);
                  });
              });
          }
        });
    });
};

exports.help = {
  name: "settipico",
  aliases: ["settopic"]
};
