const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  

  let bank = db.all().filter(a => a.ID.startsWith("money", { sort: ".data" }));
  bank.sort((a, b) => (a.data < b.data) ? 1 : -1);
  let content = " ";
  let count = 10;
  let start = 0;

  for (var i = 0; i < count; i++) {
    let usertest = bot.users.cache.get(bank[i].ID.split("_")[2]);
    
    // Coloquei essa droga de if aqui pq tem um corno registrado no banco de dados q tá undefined(provavelmente saiu do server) e tá quebrando o código
    if (typeof usertest !== "undefined") {
      let user = bot.users.cache.get(bank[i].ID.split("_")[2]).username;
      if(start+1 <= 3){
        content += `<a:rico:722121780671676466>・ ${user} ~ ${bank[i].data}$\n`;
      }else{
        content += `${start + 1}・ ${user} ~ ${bank[i].data}$\n`;
      }
      start++;
      
    }
    if(typeof usertest === "undefined"){
      count++;
    }
    
  }

  const embed = new Discord.MessageEmbed()
    .setTitle("<a:patrao:722122856376434729> » Top membros com money na carteira", message.guild.iconURL)
    .setDescription(content)
    .setColor(0x51267);

  message.channel.send(embed);
  
};
