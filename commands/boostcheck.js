const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("!!")) return;
  if (!message.member.hasPermission("ADMINISTRATOR")) return;

  let user = message.mentions.members.first() || message.author;

  let quantboost = db.get(`booster_${message.guild.id}_${user.id}`);
  const timeoutboost = 2.592e+9;
  const boosttime = db.get(`boostertime_${message.guild.id}_${user.id}`);
  
  const cargotwitch = '388924817002201088';
  const cargonitro = '652632082727567411';
  
  const boostersub = db.get(`boostersub_${message.guild.id}_${user.id}`);
  const boosternitro = db.get(`boosternitro_${message.guild.id}_${user.id}`);

  
  let time = ms(timeoutboost - (Date.now() - boosttime));
  
  if (quantboost === null){
     quantboost = 1;
  }

  if (quantboost === 1) {
      
      let moneyEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `O booster do ${user} atualmente é de ${quantboost}x `
        );
      message.channel.send(moneyEmbed);
      
    }else if(boosternitro === 1){
      let moneyEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `O booster do ${user} atualmente é de ${quantboost}x pela duração de seu nitro. `
        );
      message.channel.send(moneyEmbed);
    }
  else if(boostersub === 1){
    let moneyEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `O booster do ${user} atualmente é de ${quantboost}x pela duração de seu sub. `
        );
      message.channel.send(moneyEmbed);
  }else{
      let moneyEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `O booster do ${user} atualmente é de ${quantboost}x durante ${time.days}d ${time.minutes}m ${time.seconds}s `
        );
      message.channel.send(moneyEmbed);
    }
  
};

module.exports.help = {
  name: "boost",
  aliases: ["bst"]
};
