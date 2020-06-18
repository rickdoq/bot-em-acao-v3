const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args, tools) => {
  const { body } = await superagent.get("http://random.dog/woof.json");
  //.get('https://dog.ceo/api/breeds/image/random');
  if(!body) return message.channel.send("Tente novamente, erro na API.")
  const link = body.url;

  
  if (!link) return message.channel.send("Tente novamente, erro na API.");

  const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Aqui está seu Dog.")
    .setImage(link);
  message.channel.send({ embed });
};
