const Discord = require("discord.js"); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => {
  // setando a base
  // avisando sobre a embed de ajuda na DM
  message.reply(" **CHEQUE SEU PRIVADO.**");

  let embed = new Discord.MessageEmbed()
    .setTitle(`Ajuda dos Comandos`)
    .setColor("RED")
    .setDescription(
      "**Para poder ver mais, selecione um emoji para ver cada categoria.\n\n⭐| Economia:\n`!!trabalhar`, `!!dep`, `!!sacar`...\n🤖| Úteis:\n`!!ping`, `!!uptime`, `!!lembrete` ...\n👮| Moderação:\n`Apenas Staff` ...**"
    );
  message.author.send({ embed }).then(msg => {
    // evento para reagir a mensagem
    msg.react("⭐").then(r => {
      // economia
      msg.react("🤖").then(r => {
        // uteis
        msg.react("👮").then(r => {
          // entretenimento
          msg.react("🔙").then(r => {
            // inicio
          });
        });
      });
    });
    // filtros de cada reação, para configurar a informação do autor
    const UtilidadesFilter = (reaction, user) =>
      reaction.emoji.name === "⭐" && user.id === message.author.id;
    const ModeraçãoFilter = (reaction, user) =>
      reaction.emoji.name === "🤖" && user.id === message.author.id;
    const EntretenimentoFilter = (reaction, user) =>
      reaction.emoji.name === "👮" && user.id === message.author.id;
    const BackFilter = (reaction, user) =>
      reaction.emoji.name === "🔙" && user.id === message.author.id;
    // coletores de cada reação, para ver confirmar tal membro
    const Utilidades = msg.createReactionCollector(UtilidadesFilter);
    const Moderação = msg.createReactionCollector(ModeraçãoFilter);
    const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
    const Back = msg.createReactionCollector(BackFilter);

    Utilidades.on("collect", r2 => {
      // criando um evento, caso o membro clique nessa reação, e todos são iguais!
      embed = new Discord.MessageEmbed()
        .setTitle("⭐ Economia")
        .addField("**!!trabalhar**", "**`Trabalhe para ganhar coxinhas.`**")
        .addField("**!!dep**", "**`Deposite sua coxinha.`**")
        .addField("**!!sacar**", "**`Saque sua coxinha.`**")
        .addField("**!!pagar**", "**`Pague usuário.`**")
        .addField("**!!ricos**", "**`Top 10 ricos do servidor.`**")
        .addField("**!!ricoscarteira**", "**`Top 10 ricos com dinheiro na carteira do servidor.`**")
        .addField("**!!daily**", "**`Ganhe diário.`**")
        .addField("**!!info**", "**`Veja info de economia de um user.`**")
        .addField("**!!saldo**", "**`Veja o seu saldo atual.`**")
        .addField("**!!emprego**", "**`Pegue um emprego para trabalhar.`**")
        .addField("**!!demitir**", "**`Saia do seu emprego atual.`**")
        .addField("**!!apostar**", "**`Aposte e veja sua sorte.`**")
        .addField("**!!bolsa**", "**`Resgate seu bolsa família(requer cadastro).`**")
        .addField("**!!loja**", "**`Abre a loja.`**")
        .setColor("ORANGE");

      msg.edit(embed);
    });

    Moderação.on("collect", r2 => {
      embed = new Discord.MessageEmbed()
        .setTitle("🤖 Úteis")
        .addField("**!!ping**", "**`Veja meu ping com o servidor`**")
        .addField("**!!lembrete**", "**`Eu te lembro em algo que precisa`**")
        .addField("**!!cat**", "**`Veja um gato fofo`**")
        .addField("**!!dog**", "**`Veja um cachorro fofo`**")
        .addField("**!!botinfo**", "**`Veja as infos sobre o bot.`**")
        .setColor("GREY");
      msg.edit(embed);
    });

    Entretenimento.on("collect", r2 => {
      embed = new Discord.MessageEmbed()
        .setTitle("👮 Moderação")
        .addField("**!!ban**", "**`Bana um usuário.`**")
        .addField("**!!kick**", "**`Kick um usuário.`**")
        .addField("**!!mute**", "**`Silencie um usuário.`**")
        .addField("**!!unban**", "**`Remove o banimento de um usuário.`**")
        .addField("**!!unmute**", "**`Remove o silenciamento de um usuário.`**")
        .setColor("BLUE");

      msg.edit(embed);
    });

    Back.on("collect", r2 => {
      embed = new Discord.MessageEmbed()
        .setTitle(`Ajuda dos Comandos`)
        .setColor("RED")
        .setDescription(
          "**Para poder ver mais, selecione um emoji para ver cada categoria.\n\n⭐| Economia:\n`!!trabalhar`, `!!dep`, `!!sacar`...\n🤖| Úteis:\n`!!ping`, `!!uptime`, `!!lembrete` ...\n👮| Moderação:\n`EM BREVE` ...**"
        );

      msg.edit(embed);
    });
  });
};
exports.help = {
  // setando o nome do arquivo, seguido do prefix
  name: "ajuda"
};