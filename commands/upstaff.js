const Discord = require("discord.js");

exports.run = (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR"))
    return;

        let mensagem;
        let nick;
        let cargoantigo;
        let cargoatual;
        let membro;
        let roleantigo;
        let rolenovo;
        const filter = m => m.author.id === message.author.id;

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
                
                message.reply("Mencione o cargo antigo:");
                message.channel.awaitMessages(filter3, {max:1}).then(collected3 => {
                    const response3 = collected3.first();
                    cargoantigo = response3.content;

                    const filter4 = m4 => m4.author.id === message.author.id;

                    message.reply("Mencione o cargo novo: ");
                    message.channel.awaitMessages(filter4, {max:1}).then(collected4 => {
                        const response4 = collected4.first();
                        cargoatual = response4.content;

                        roleantigo = cargoantigo.replace(/[\\<>@#&!]/g, "");
                        rolenovo = cargoatual.replace(/[\\<>@#&!]/g, "");
                        membro.roles.remove(roleantigo);
                        membro.roles.add(rolenovo);

                        if(mensagem.toLowerCase() == "padrão"){
                          mensagem = "Parabéns pela promoção, continue sempre se esforçando que uma hora você será recompensado.";
                        }

                        const embedStaff = new Discord.MessageEmbed()
                        .setTitle("<a:festa:717023028499841024> **Staff Promovido**")
                        .setColor("#0099ff")
                        .addFields(
                            {name: "<a:bananadance:717024499190595584> **Mensagem:**", value: mensagem},
                            {name: "🏷 **Nick:**", value: nick, inline: true},
                            {name: "🗃 **Cargo Antigo:**", value: cargoantigo, inline: true},
                            {name: "📥 **Cargo Atual:**", value: cargoatual, inline: true},
                        )
                        .setThumbnail(avatar2.displayAvatarURL());

                        client.channels.cache
                        .get("716746840560631849")
                        .send(embedStaff)
                        .then(msg => {
                          msg.react("☑️");
                        });

                    });
                });
            });
        });



/*
  const usuario = message.mentions.members.first();
  const embed = new Discord.MessageEmbed()
    .setTitle(`<a:festa:717023028499841024> » Staff Promovido`)
    .setThumbnail(usuario.user.displayAvatarURL)
    .setDescription(
      `ㅤ
**<a:bananadance:717024499190595584>・Mensagem:
Parabéns pela promoção, continue sempre se esforçando que uma hora você será recompensado.
🏷・Nick:
${args[0]}
🗃・Cargo Antigo:
${args[1]}
📥・Cargo Atual:
${args[2]}**`
    )
    .setColor("RANDOM");
  //client.channels.cache
 //   .get("716746840560631849")
  //  .send(embed)
   // .then(msg => {
  //    msg.react("☑️");
   // });
  message.channel.send(embed)
  */
};
