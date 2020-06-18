const Discord = require ("discord.js")
const db = require ("quick.db")

exports.run = (client, message, args) => {
   var fala = args.slice(0).join(" ");
  if(!fala) return message.channel.send(`<@${message.author.id}>, **você deve colocar:** \n"!!bio <nova descrição>"`)
  
  
  const embed = new Discord.MessageEmbed()
  .setTitle("Biografia")
  .setDescription(`Biografia de <@${message.author.id}> foi mudada para: ${fala}`)
  .setColor("DARK");
  message.channel.send(embed)
  db.set(`bioinfo_${message.author.id}`, fala)
}