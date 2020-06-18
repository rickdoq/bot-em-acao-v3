const Discord = require("discord.js");
const c = require("../config.json");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(`apenas administradores podem utilizar esse comando!`);

  let erro = new Discord.MessageEmbed()

    .setTitle(`INFORMAÇÃO`)
    .setDescription(`*Deixe-me criar uma enquete*`)
    .addField(`:hammer: **Uso**`, `\`${c.prefix}enquete <enquete>\``, true)
    .addField(
      `:book: **Exemplo**`,
      `\`${c.prefix}enquete Querem um carin?\``,
      true
    )
    .addField(`:bookmark: **Permissão**`, `\`ADMINISTRATOR\``)
    .addField(
      `:twisted_rightwards_arrows: **Alternativas**`,
      `\`${c.prefix}votação\``
    )
    .setColor("DARK");

  let mensg = args.join(" ");
  if (!mensg) {
    message.channel.send(erro);
    return undefined;
  }

  const embed = new Discord.MessageEmbed()

    .setTitle(`📊 ENQUETE`)
    .setDescription(`${mensg}`)
    .setColor("RANDOM")
    .setFooter(
      `Responsável: ${message.author.username}`,
      message.author.displayAvatarURL
    );

  var canal = message.guild.channels.cache.get(
    db.get(`idenquete_${message.guild.id}`)
  );
  if (!canal)
    return message.reply(
      `esse Discord não possui um canal definido para enquetes. Caso você seja um Administrador, defina utilizando a sintaxe: \`d!setenquete\``
    );

  canal
    .send(embed)
    .then(function(msg) {
     msg.react("690709866397827154"); // checked
     msg.react("690709934102282281"); // unchecked

      message.channel.send(
        `${message.author}, enquete enviada ao ${canal}! :mailbox_with_no_mail:`
     );
    })
    .catch(function(error) {
      console.log(error);
    });
};

exports.help = {
  name: "enquete",
  aliases: ["votação", "votacao"]
};
