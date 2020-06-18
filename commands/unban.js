const Discord = require("discord.js"); // Puxando a livraria Discord.js
const c = require("../config.json"); // Puxando o conteúdo do arquivo config.json
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("...")
    if(!args[0]) return message.channel.send("Digite um ID válido."); 
    //This if() checks if we typed anything after "!unban"

    let bannedMember;
    //This try...catch solves the problem with the await
    try{                                                            
        bannedMember = await client.users.fetch(args[0])
    }catch(e){
        if(!bannedMember) return message.channel.send("Isso não é um ID válido.")
    }

    //Check if the user is not banned
    try {
            await message.guild.fetchBan(args[0])
        } catch(e){
            message.channel.send('Este usuário não está banido.');
            return;
        }

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "..."

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Não tenho permissão para fazer isso")
    message.delete()
    try {
        message.guild.members.unban(bannedMember, {reason: reason});
        message.channel.send(`${bannedMember.tag} foi desbanido.`);
        let embed = new Discord.MessageEmbed()

        .setTitle("<a:ban:720371836432679004> » Membro desbanido!")
        .setDescription(
          "• Esse(a) recruta teve a piedade a seu favor, retorne das cinzas <a:pihappy:717026826584719390>"
        )
      .addFields(
        {name: "🔰 • Tag do usuário", value: `${bannedMember.tag}`, inline: true},
        {name: "🔖 • ID do Usuário", value: `${bannedMember.id}`, inline: true},
        {name: "<a:staff:720379499996512367> • Desbanido por", value: `${message.author.username}`, inline: true}
      )
        .setColor("#ff5d52");
      var canal = client.channels.cache.get("461137488942071818"); // O canal para enviarmos a embed do ban
      canal.send(embed); // Enviando no canal a embed
    } catch(e) {
        console.log(e.message)
    }
};
exports.help = {
  name: "unban",
  aliases: ["desbanir"]
};
