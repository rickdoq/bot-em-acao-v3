const db = require("quick.db"); // Puxando a nossa DataBase. *Instale utilizando: npm i quick.db --save
const Discord = require("discord.js"); // Puxando a livraria Discord.js

exports.run = async (client, message, args) => {
  var emprego = await db.get(`trabaio_${message.author.id}`); // Puxando o 'trabaio', que iremos utilizar para definir na DB o trabalho dos usuários
  if (emprego === 1)
    return message.reply(`você já tem um emprego! 💻 Programador`); // Caso o usuário tenha 1 (um) registrado na DB, ele será reconhecido como Programador
  if (emprego === 2)
    return message.reply(`você já tem um emprego! 🖌️ Designer`); // Ou, caso o usuário, tenha 2 (dois) registrado na DB, ele será reconhecido como Designer
  if (emprego === 3)
    return message.reply(`você já tem um emprego! 🎥 Streamer`); // Ou, caso o usuário, tenha 3 (três) registrado na DB, ele será reconhecido como Designer
  if (emprego === 4) return message.reply(`você já tem um emprego! 🗑 Lixeiro`); // Ou, caso o usuário, tenha 4 (quatro) registrado na DB, ele será reconhecido como Designer
  const Programador = 1;
  const Designer = 2;
  const Streamer = 3;
  const Lixeiro = 4;
  let embed = new Discord.MessageEmbed() // Criando uma embed
    .setDescription(
      `Escolha o seu emprego, clicando no emoji correspondente.\n\n💻 = Programador\n🖌️ = Designer\n🎥 = Streamer\n🗑 = Lixeiro`
    )
    .setColor("#03fc7b");

  message.channel.send(embed).then(msg => {
    // definindo a função 'then' como 'msg'

    msg
      .react("💻")
      .then(() => msg.react("🖌️"))
      .then(() => msg.react("🎥"))
      .then(() => msg.react("🗑"));

    const filter = (reaction, user) => {
      // Criando um filtro para quem clicou no emoji
      return (
        ["💻", "🖌️", "🎥", "🗑"].includes(reaction.emoji.name) &&
        user.id === message.author.id
      ); // caso o ID do usuário que clicou, seja igual ao do que puxou, iremos fazer a ação
    };
    msg
      .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] }) // retornnando com as reações
      .then(collected => {
        // mais uma função 'then', definida como 'collected'
        const reaction = collected.first();

        if (reaction.emoji.name === "💻") {
          // Caso o usuário clique no emoji referente à Programador
          message.reply("parabéns! Você ingressou como um 💻 Programador");
          db.add(`trabaio_${message.author.id}`, Programador); // iremos adicionar 1 (um) na DB, que iremos usar como Programador
        }

        if (reaction.emoji.name === "🖌️") {
          // Agora, caso o usuário clique no outro emoji, referente à Designer
          message.reply("parabéns! Você se tornou um 🖌️ Designer");
          db.add(`trabaio_${message.author.id}`, Designer); // iremos adicionar 2 (dois) na DB, que iremos definir como Designer
        }

        if (reaction.emoji.name === "🎥") {
          // Caso o usuário clique no emoji referente à Programador
          message.reply("parabéns! Você ingressou como um 🎥 Streamer");
          db.add(`trabaio_${message.author.id}`, Streamer); // iremos adicionar 1 (um) na DB, que iremos usar como Programador
        }

        if (reaction.emoji.name === "🗑") {
          // Caso o usuário clique no emoji referente à Programador
          message.reply("parabéns! Você ingressou como um 🗑 Lixeiro");
          db.add(`trabaio_${message.author.id}`, Lixeiro); // iremos adicionar 1 (um) na DB, que iremos usar como Programador
        }
      });
  });
};

exports.help = {
  name: "emprego",
  aliases: ["trabalho"]
};
