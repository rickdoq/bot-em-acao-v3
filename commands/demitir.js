const db = require("quick.db"); // Puxando a nossa Database *Instale utilizando: npm i quick.db --save

exports.run = async (client, message, args) => {
  var user = message.author;
  var conta = await db.get(`money_${message.guild.id}_${user.id}`); // puxando o 'money' armazenado na database

  //essa função, custará 3500 para ser efetuada!
  if (conta < 3500)
    return message.reply("para pedir demissão, você necessita de **R$ 3500**!"); // caso o usuário não possua, daremos o erro

  var emprego = await db.get(`trabaio_${message.author.id}`); // Puxando o 'trabaio', no caso, o trabalho que o usuário escolheu no outro arquivo

  if (emprego === null) {
    // caso o 'trabaio' seja null, ou seja, sem, iremos avisar que ele precisa ter um emprego
    message.channel.send("Você não possui um emprego para demissão...");
  }
  if (emprego === 1) {
    // No arquivo para escolher um trabalho, definimos que 1 é igual à um Programador... Então, vamos fazer uma mensagem bonita
    message.channel
      .send(
        `Olá **${message.author.username}**, você realmente deseja largar a vida de Programador? Saiba: Você pagará **R$ 3500**`
      )
      .then(msg => {
        msg.react("✅").then(() => msg.react("❌")); // Com a função 'then', definimos duas reações

        const filter = (reaction, user) => {
          // puxamos um filtro para o usuário que clicou
          return (
            ["✅", "❌"].includes(reaction.emoji.name) &&
            user.id === message.author.id
          ); // verificamos se o ID do usuário que clicou, é igual ao do autor do comando
        };

        msg
          .awaitReactions(filter, { max: 1 }) // retornando com a reação que puxamos acima

          .then(collected => {
            // mais uma função 'then', nomeada de 'collected' para definirmos que foi coletado

            const reaction = collected.first();

            if (reaction.emoji.name === "✅") {
              // caso o usuário clique no emoji referente à correto, iremos fazer a ação
              message.reply("você pediu demissão com sucesso!");

              db.subtract(`trabaio_${message.author.id}`, 1); // removendo do 'trabaio' da database, que é definido como Programador

              db.subtract(`money_${message.guild.id}_${user.id}`, 3500); // removendo do 'money' da database
            } else {
              // ou, caso o usuário clique no outro emoji, referente à errado, iremos cancelar
              message.reply("cancelado com sucesso.");
            }
          });
      });
  }
  if (emprego === 2) {
    // agora, o emprego dois, que é o Designer
    message.channel
      .send(
        `Olá **${message.author.username}**, você realmente deseja sair do mundo Designer? Saiba: Você terá que pagar **R$ 3500**`
      )
      .then(msg => {
        msg.react("✅").then(() => msg.react("❌")); // com a função tem denovo, iremos adicionar as mesmas reações

        const filter = (reaction, user) => {
          // criando um filtro sobre quem clicou
          return (
            ["✅", "❌"].includes(reaction.emoji.name) &&
            user.id === message.author.id
          ); // e verificando se o id do usuário que clicou, é igual ao id do usuário que puxou o comando
        };

        msg
          .awaitReactions(filter, { max: 1 }) // retornando com as reações
          .then(collected => {
            // e mais uma função then, que vai ser como o collected acima
            const reaction = collected.first();

            if (reaction.emoji.name === "✅") {
              // caso o usuário clique no emoji referente à correto, iremos fazer a ação
              message.reply("você pediu demissão com sucesso!");
              db.subtract(`trabaio_${message.author.id}`, 2); // removendo do 'trabaio', na database que define o emprego Designer (2)
              db.subtract(`money_${message.guild.id}_${user.id}`, 3500); // removendo do 'money' na database
            } else {
              // caso ele clique no outro emoji, daremos como cancelado
              message.reply("cancelado com sucesso.");
            }
          });
      });
  }

  if (emprego === 3) {
    message.channel
      .send(
        `Olá **${message.author.username}**, você realmente deseja largar a vida de Streamer? Saiba: Você pagará **R$ 3500**`
      )
      .then(msg => {
        msg.react("✅").then(() => msg.react("❌")); // Com a função 'then', definimos duas reações

        const filter = (reaction, user) => {
          // puxamos um filtro para o usuário que clicou
          return (
            ["✅", "❌"].includes(reaction.emoji.name) &&
            user.id === message.author.id
          ); // verificamos se o ID do usuário que clicou, é igual ao do autor do comando
        };

        msg
          .awaitReactions(filter, { max: 1 }) // retornando com a reação que puxamos acima

          .then(collected => {
            // mais uma função 'then', nomeada de 'collected' para definirmos que foi coletado

            const reaction = collected.first();

            if (reaction.emoji.name === "✅") {
              // caso o usuário clique no emoji referente à correto, iremos fazer a ação
              message.reply("você pediu demissão com sucesso!");

              db.subtract(`trabaio_${message.author.id}`, 3); // removendo do 'trabaio' da database, que é definido como Programador

              db.subtract(`money_${message.guild.id}_${user.id}`, 3500); // removendo do 'money' da database
            } else {
              // ou, caso o usuário clique no outro emoji, referente à errado, iremos cancelar
              message.reply("cancelado com sucesso.");
            }
          });
      });
  }

  if (emprego === 4) {
    message.channel
      .send(
        `Olá **${message.author.username}**, você realmente deseja largar a vida de Lixeiro? Saiba: Você pagará **R$ 3500**`
      )
      .then(msg => {
        msg.react("✅").then(() => msg.react("❌")); // Com a função 'then', definimos duas reações

        const filter = (reaction, user) => {
          // puxamos um filtro para o usuário que clicou
          return (
            ["✅", "❌"].includes(reaction.emoji.name) &&
            user.id === message.author.id
          ); // verificamos se o ID do usuário que clicou, é igual ao do autor do comando
        };

        msg
          .awaitReactions(filter, { max: 1 }) // retornando com a reação que puxamos acima

          .then(collected => {
            // mais uma função 'then', nomeada de 'collected' para definirmos que foi coletado

            const reaction = collected.first();

            if (reaction.emoji.name === "✅") {
              // caso o usuário clique no emoji referente à correto, iremos fazer a ação
              message.reply("você pediu demissão com sucesso!");

              db.subtract(`trabaio_${message.author.id}`, 4); // removendo do 'trabaio' da database, que é definido como Programador

              db.subtract(`money_${message.guild.id}_${user.id}`, 3500); // removendo do 'money' da database
            } else {
              // ou, caso o usuário clique no outro emoji, referente à errado, iremos cancelar
              message.reply("cancelado com sucesso.");
            }
          });
      });
  }
};

exports.help = {
  name: "demissão",
  aliases: ["demissao"]
};
