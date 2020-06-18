const db = require("quick.db"); // Puxando a nossa Database *Instale utilizando: npm i quick.db --save
const Discord = require("discord.js"); // puxando a livraria Discord.js

exports.run = async (client, message, args) => {
  let user = message.author;

  let money = db.get(`money_${message.guild.id}_${message.author.id}`);
  // Puxando da Database, a quantia de 'money' do usuário

  var numeroaposta = parseInt(args[0]); // Definindo uma variável para o número que o usuário vai apostar
  if (!numeroaposta)
    return message.reply("escreva uma quantia que deseja apostar!"); // Caso o usuário não escreva nada
  if (isNaN(numeroaposta))
    return message.reply("isso não é um número :thinking:"); // Caso ele não coloque um número
  if (numeroaposta > 999)
    return message.reply("coloque um valor abaixo de 999.");
  if (numeroaposta > money) {
    // Caso o número que o usuário deseja apostar seja maior que o que ele possui na database
    return message.channel.send(`:x: Você não possui **R$ ${numeroaposta}**`);
  }

  if (message.content.includes("-")) {
    // Caso o usuário tente botar um - (menos) no número (isso pode gerar um bug, que mesmo ele perdendo, irá ganhar, pois menos + menos é mais (+))
    return message.reply(`hmmmm, quer abusar safadenho?`);
  }
  var random = Math.floor(Math.random() * (5 - 2) + 2); // Um sistema randômico
  if (random === 4) {
    // caso esse sistema caia em 4, o usuário terá ganhado

    message.channel.send(
      `:white_check_mark: Você apostou **R$ ${numeroaposta}** e **GANHOU**!`
    ); // fazendo uma conta, puxando o 'money' que o usuário tinha no começo mais o que ele ganhou
    db.add(`money_${message.guild.id}_${user.id}`, numeroaposta); // adicionando na conta do usuário o que ele apostou
  } else {
    // caso o número randômico não caia em três (3)

    message.channel.send(
      `:x: Você apostou **R$ ${numeroaposta}** e **PERDEU**!`
    ); // fazendo uma conta, puxando o 'money' que ele começou menos o que ele perdeu na aposta
    db.subtract(`money_${message.guild.id}_${user.id}`, numeroaposta); // removendo o que ele apostou
  }
};

exports.help = {
  name: "apostar",
  aliases: []
};
