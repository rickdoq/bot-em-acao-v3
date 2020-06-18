const Discord = require("discord.js"); // puxando a livraria 'discord.js'
const ms = require("ms"); // puxando o NPM ms (instale utilizando: npm i ms)

exports.run = async (client, message, args) => {
  // setando a base, com async

  let Timer = args[0]; // os argumentos, no caso, o tempo (s, m ou h)
  let lembra = args.slice(1).join(" "); // Agora, o motivo do kick
  if (lembra === null) lembra = "Não foi definido.";

  if (!args[0]) {
    // caso ele nao escreva, daremos o erro
    return message.reply(`Escreva um tempo! Ex.: \`!!lembrete 10s\``);
  }

  if (args[0] <= 0) {
    // caso seja menor que zero
    return message.channel.send(`Escreva um tempo maior que zero!`);
  }

  message.channel.send(
    `📑| Irei te lembrar de: ${lembra} em: ` +
      `\`${ms(ms(Timer), { long: true })}\``
  );

  setTimeout(function() {
    // caso termine o tempo, avisaremos o membro
    message.channel.send(
      `<a:sino:720687795785695314>| **BIP BIP BIP! ${message.author}, você pediu para eu te lembrar de:** ${lembra}`
    );
  }, ms(Timer));
};

exports.help = {
  // setando o nome do arquivo, seguido do prefix
  name: "lembrete"
};
