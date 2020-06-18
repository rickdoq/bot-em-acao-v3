const Discord = require("discord.js");
const c = require("../config.json");

exports.run = (client, message, args) => {
  var infu = "https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png";

  var replies = ["Sim", "Claro", "Não", "Talvez", "E o que você acha?"];
  var result = Math.floor(Math.random() * replies.length);

  var duvida = args.slice(0).join(" ");

  let embed = new Discord.MessageEmbed()

    .setColor("GOLD")
    .addField(`:thinking: » **Dúvida**`, `${duvida}`)
    .addField(`:person_tipping_hand: » Resposta`, `${replies[result]}`);

  message.channel.send(embed);
};

exports.help = {
  name: "duvida",
  aliases: ["pergunta", "dúvida"]
};
