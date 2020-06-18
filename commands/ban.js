const Discord = require("discord.js"); // Puxando a livraria Discord.js
const c = require("../config.json"); // Puxando o conteúdo do arquivo config.json
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("...")
  // Embed para explicar o uso do comando
  let erro = new Discord.MessageEmbed()

    .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
    .setDescription(`\`ban\` - Aplique um banimento`)
    .addField(`:hammer: **Uso**`, `\`${c.prefix}ban @user <motivo>\``)
    .addField(`:book: **Exemplo**`, `\`${c.prefix}ban @rickdoq goxtoso\``)
    .addField(`:bookmark: **Permissão**`, `\`BAN_MEMBERS\``)
    .setColor("#8c0046");
  // Puxando o usuário que o autor irá mencionar
  var membro;
  if(args[0] !== null && args[0] !== undefined){
    membro = message.mentions.members.first() || await client.users.fetch(args[0]); // Puxando do argumento zero (0)
  }else{
    return message.channel.send(erro); // Caso o autor esqueça de mencionar o membro, iremos enviar a embed de explicação
  }
  if (membro === message.member)
    return message.reply(`você não pode se banir!`); // Caso o autor tente mencionar ele mesmo

    let membrocheck;

    

  var motivo = args.slice(1).join(" "); // Agora, o motivo do banimento
  if (!motivo) return message.channel.send(erro); // Caso ele não escreva o motivo, iremos enviar a embed de explicação
  // Requisitando a permissão *BAN_MEMBERS* ou *BANIR_MEMBROS*
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply(
      `esse comando necessita da permissão: **BAN_MEMBERS**`
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
      `**${message.author.username}**, você realmente deseja aplicar esse banimento em **${membrocheck.username}**?`
    )
    .setColor("AQUA")
    .setFooter(`Clique no emoji para confirmar ou espere 30s para cancelar!`);

  let banembeddepois = new Discord.MessageEmbed()
    .setTitle(`☑️ Confirmado`)
    .setDescription(
      `Bye Bye`
    )
    .setColor("AQUA")
    .setFooter(`Membro banido`);

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

      
      await message.guild.members.ban(membro) // Bans the user

      if(membro === message.mentions.members.first()){
        membro = membro.user;
      }


      let embed = new Discord.MessageEmbed()

        .setTitle("<a:ban:720371836432679004> » Membro banido!")
        .setDescription(
          "• Esse(a) recruta não soube respeitar nossas regras, IP cancelado <:ip:721414463269371953>"
        )
      .addFields(
        {name: "🔰 • Tag do usuário", value: `${membro.username}#${membro.discriminator}`, inline: true},
        {name: "🔖 • ID do Usuário", value: `${membro.id}`, inline: true},
        {name: "<a:staff:720379499996512367> • Banido por", value: `${message.author.username}`, inline: true},
        {name: "📃 • Motivo", value: `${motivo}`}
      )
        .setColor("#ff5d52");
      var canal = client.channels.cache.get("461137488942071818"); // O canal para enviarmos a embed do ban
      //var log = client.channels.cache.get("685236269759987713");
      msg.edit(banembeddepois);
      canal.send(embed); // Enviando no canal a embed
    });
  });
};
exports.help = {
  name: "ban",
  aliases: ["banir", "punir"]
};
