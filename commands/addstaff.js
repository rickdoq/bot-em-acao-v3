const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return;

        let mensagem;
        let nick;
        let cargoantigo;
        let membro;
        let role;
        const filter = m => m.author.id === message.author.id;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não tem permissão para executar este comando");

        message.reply("Informe a Mensagem:");
        message.channel.awaitMessages(filter, {max:1}).then(collected => {
            const response = collected.first();
            mensagem = response.content;


            const filter2 = m2 => m2.author.id === message.author.id;
        
            message.reply("Mencione o membro promovido:");
            message.channel.awaitMessages(filter2, {max:1}).then(collected2 => {
                const response2 = collected2.first();
                nick = response2.content;
                let avatar2 = response2.mentions.users.first();
                membro = response2.mentions.members.first();
                


                const filter3 = m3 => m3.author.id === message.author.id;
                
                message.reply("Mencione o cargo:");
                message.channel.awaitMessages(filter3, {max:1}).then(collected3 => {
                    const response3 = collected3.first();
                    cargoantigo = response3.content;


                    if(mensagem.toLowerCase() == "padrão"){
                      mensagem = "Seja bem vindo a equipe da staff, esperamos que nos ajude e modere sempre.";
                    }
                    role = cargoantigo.replace(/[\\<>@#&!]/g, "");
                    membro.roles.add(role);

                        const embedStaff = new Discord.MessageEmbed()
                        .setTitle("<a:carltondance:717024628824080406> **Novo Staff**")
                        .setColor("#0099ff")
                        .addFields(
                            {name: "<a:pihappy:717026826584719390> **Mensagem:**", value: mensagem},
                            {name: "🏷 **Nick:**", value: nick, inline: true},
                            {name: "💼 **Cargo Inicial:**", value: cargoantigo, inline: true}
                        )
                        .setThumbnail(avatar2.displayAvatarURL());

                        client.channels.cache
                        .get("716746840560631849") // Canal 2 server de testes, remover comentário qdo mudar
                        .send(embedStaff)
                        .then(msg => {
                          msg.react("☑️");
                        });

                    
                });
            });
        });


    /*
  const usuario = message.mentions.members.first();
  const role = args[1].replace(/[\\<>@#&!]/g, "");
  console.log(role);
  usuario.roles.add(role);

  const embed = new Discord.MessageEmbed()
    .setTitle(`<a:carltondance:717024628824080406> » Novo staff`)
    .setThumbnail(usuario.user.displayAvatarURL)
    .setDescription(
      `ㅤ
**<a:pihappy:717026826584719390>・Mensagem:
Seja bem vindo a equipe da staff, esperamos que nos ajude e modere sempre.
🏷・Nick:
${args[0]}
💼・Cargo Inicial:
${args[1]}**`
    )
    .setColor("RANDOM");
  client.channels.cache
    .get("717180343345479791") // Canal 2 server de testes, remover comentário qdo mudar
    .send(embed)
    .then(msg => {
      msg.react("☑️");
    });
    */
};
