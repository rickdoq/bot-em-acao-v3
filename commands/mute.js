const Discord = require("discord.js");
const c = require("../config.json"); // Puxando o conteúdo do arquivo config.json
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission(["KICK_MEMBERS"])) return message.channel.send("...")
  //!tempmute @user 1s/m/h/d
  let embedchannel = "461137488942071818";
  
  let muterole = message.guild.roles.cache.find(role => role.name === "😔・Muted");
  //let muterole = message.guild.roles.cache.find(role => role.name === "muted");
  
  let erro = new Discord.MessageEmbed()
    .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
    .setDescription(`\`mute\` - Silencie um usuário`)
    .addField(`:hammer: **Uso**`, `\`${c.prefix}mute @user <tempo> <motivo>\``)
    .addField(`:book: **Exemplo**`, `\`${c.prefix}mute @rickdoq 10m Postando vídeo de anime denovo\``)
    .addField(`:bookmark: **Permissão**`, `\`MANAGE_MESSAGES\``)
    .setColor("#8c0046");

    var membro;
  if(args[0] !== null && args[0] !== undefined){
    membro = message.mentions.members.first() || await client.users.fetch(args[0]); // Puxando do argumento zero (0)
  }else{
    return message.channel.send(erro); // Caso o autor esqueça de mencionar o membro, iremos enviar a embed de explicação
  }
  
  var motivo = args.slice(2).join(" "); // Agora, o motivo do mute
  if (!motivo) return message.channel.send(erro); // Caso ele não escreva o motivo, iremos enviar a embed de explicação
  
  //start of create role
  /*if (!muterole) {
    try {
      muterole = await message.guild.createRole({
        name: "😔・Muted",
        color: "#000000",
        permissions: []
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }*/
  //end of create role
  let mutetime = args[1];
  if (!mutetime) return message.reply("Diga um tempo!");
  if(membro === message.mentions.members.first()){
    membro.roles.add(muterole.id);
  }else{
    membro = message.guild.members.cache.get(membro.id);
    membro.roles.add(muterole.id);
  }

  
  message.reply(`<@${membro.id}> foi mutado por ${ms(ms(mutetime))}.`);
  
  let embed = new Discord.MessageEmbed()

        .setTitle("<a:ban:720371836432679004> » Membro mutado!")
        .setDescription(
          "• Esse(a) recruta não soube respeitar nossas regras, levou punição <:pepepistola:678259594216341514>"
        )
      .addFields(
        {name: "🔰 • Tag do usuário", value: `${membro.user.username}#${membro.user.discriminator}`, inline: true},
        {name: "🔖 • ID do Usuário", value: `${membro.user.id}`, inline: true},
        {name: "<a:staff:720379499996512367> • Punido por", value: `${message.author.username}`, inline: true},
        {name: "<a:relogio:720380953582764033> • Tempo", value: `${ms(ms(mutetime))}`},
        {name: "📃 • Motivo", value: `${motivo}`}
      )
        .setColor("#ff5d52");
      var canal = bot.channels.cache.get(embedchannel); // O canal para enviarmos a embed do kick
      canal.send(embed); // Enviando no canal a embed

  setTimeout(function() {
    if(membro.roles.cache.find(r => r.id === muterole.id)){
        membro.roles.remove(muterole.id);
        let embedunmute = new Discord.MessageEmbed()
    
            .setTitle("<a:ban:720371836432679004> » Membro desmutado!")
            .setDescription(
              "• Esse(a) recruta não soube respeitar nossas regras, levou punição <:pepepistola:678259594216341514>"
            )
          .addFields(
            {name: "🔰 • Tag do usuário", value: `${membro.user.username}#${membro.user.discriminator}`, inline: true},
            {name: "🔖 • ID do Usuário", value: `${membro.user.id}`, inline: true},
            {name: "<a:staff:720379499996512367> • Punido por", value: `${message.author.username}`, inline: true},
            {name: "📃 • Motivo", value: `Tiramos a mordaça da boca do usuário, agora ele pode falar novamente! Esperamos que ele não cometa o mesmo erro novamente`}
          )
            .setColor("#ff5d52");
          var canal = bot.channels.cache.get(embedchannel); // O canal para enviarmos a embed do kick
          canal.send(embedunmute); // Enviando no canal a embed
    }
    
  }, ms(mutetime));

  //end of module
};
