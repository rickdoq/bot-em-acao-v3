const Discord = require("discord.js"); // Puxando a livraria Discord.js
const c = require("../config.json"); // Puxando o conteúdo do arquivo config.json
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(["KICK_MEMBERS"])) return message.channel.send("...")
  // Embed para explicar o uso do comando
  let erro = new Discord.MessageEmbed()

    .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
    .setDescription(`\`kick\` - Expulse um usuário`)
    .addField(`:hammer: **Uso**`, `\`${c.prefix}kick @user <motivo>\``)
    .addField(`:book: **Exemplo**`, `\`${c.prefix}kick @rickdoq goxtoso\``)
    .addField(`:bookmark: **Permissão**`, `\`KICK_MEMBERS\``)
    .setColor("#8c0046");
  // Puxando o usuário que o autor irá mencionar
  var membro;
  if(args[0] !== null && args[0] !== undefined){
    membro = message.mentions.members.first() || await client.users.fetch(args[0]); // Puxando do argumento zero (0)
  }else{
    return message.channel.send(erro); // Caso o autor esqueça de mencionar o membro, iremos enviar a embed de explicação
  }
  if (membro === message.member)
    return message.reply(`você não pode se kikar!`); // Caso o autor tente mencionar ele mesmo

    let membrocheck;
  var motivo = args.slice(1).join(" "); // Agora, o motivo do kick
  if (!motivo) return message.channel.send(erro); // Caso ele não escreva o motivo, iremos enviar a embed de explicação
  // Requisitando a permissão *KICK_MEMBERS* ou *EXPULSAR_MEMBROS*
  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.reply(
      `esse comando necessita da permissão: **KICK_MEMBERS**`
    );
    if(membro === message.mentions.members.first()){
      membrocheck = membro.user;
    }else{
      membrocheck = membro;
    }
  // Agora, a embed de confirmação
  let banembed = new Discord.MessageEmbed()

    .setTitle(`☑️ Confirmação`)
    .setDescription(
      `**${message.author.username}**, você realmente deseja aplicar esse kick em **${membrocheck.username}**?`
    )
    .setColor("AQUA")
    .setFooter(`Clique no emoji para confirmar ou espere 30s para cancelar!`);

  message.channel.send(banembed).then(msg => {
    // E, como quase todo arquivo, usaremos a função 'then', nomeada de 'msg'
    msg.react("👍"); // Reagindo com o emoji de legal
    // Criando um filtro, verificando quem clicou no emoji, e vendo se o ID do mesmo é compativel com o do autor
    let filtro = (reaction, usuario) =>
      reaction.emoji.name === "👍" && usuario.id === message.author.id;
    let coletor = msg.createReactionCollector(filtro, { max: 1, time: 30000 }); // Um tempo limite de 30s

    coletor.on("collect", async em => {
      // Com o coletor, iremos fazer a ação
      em.remove(message.author.id); // Removendo o clique do usuário no emoji
      if(membro === message.mentions.members.first()){
        membro = membro.user;
      }
      message.guild.members.cache.get(membro.id).kick();
      

      let embed = new Discord.MessageEmbed()

        .setTitle("<a:ban:720371836432679004> » Membro kickado!")
        .setDescription(
          "• Esse(a) recruta não soube respeitar nossas regras, levou punição <:pepepistola:678259594216341514>"
        )
      .addFields(
        {name: "🔰 • Tag do usuário", value: `${membro.username}#${membro.discriminator}`, inline: true},
        {name: "🔖 • ID do Usuário", value: `${membro.id}`, inline: true},
        {name: "<a:staff:720379499996512367> • Punido por", value: `${message.author.username}`, inline: true},
        {name: "📃 • Motivo", value: `${motivo}`}
      )
        .setColor("#ff5d52");
      var canal = client.channels.cache.get("461137488942071818"); // O canal para enviarmos a embed do kick
      canal.send(embed); // Enviando no canal a embed
      console.log(message.author);
      
    });
  });
};
exports.help = {
  name: "kick",
  aliases: ["expulsar"]
};
