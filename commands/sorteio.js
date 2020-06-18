const { RichEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
  if (!(message.author.id == "282999559385513984")) {
    return message.channel.send(`sem perm`);
  }

  let item = args.join(" ");

  const msg = await message.channel.send(
    `Sorteio rolando, 5k de membros no servidor.\nCaso queira participar clique na reação:`
  );
  await msg.react("🤖");

  const filter = (r, u) => r.me && u.id === message.author.id; // criamos o filtro do collector
  const collector = msg.createReactionCollector(filter, {
    max: 50,
    time: 5000
  }); // O time é o tempo do sorteio.
  // max é o máximo de pessoas que vai reagir, caso passe desse numero o coletor ira finalizar

  collector.on("end", async collected => {
    const ganhador =
        collected.size === 0
          ? "Ninguem ganhou o sorteio."
          : collected
              .first()
              .users.filter(user => !user.bot)
              .random(),
      /*Procuramos se alguem reagiu. (?) = Caso a condição seja verdadeira ou seja ninguem reagiu. (:) = Caso não seja verdadeira. E também filtramos se o usuário é um bot. Caso seja ele não ira contar.*/

      pessoas =
        collected.size === 0
          ? "Ninguem participou"
          : collected.first().users.filter(user => !user.bot).size;
    /*Procuramos se alguem reagiu. (?) = Caso a condição seja verdadeira ou seja ninguem reagiu. (:) = Caso não seja verdadeira. E também filtramos se o usuário é um bot. Caso seja ele não ira contar.*/

    await msg.edit(
      `Ganhador: ${ganhador}. Participantes: ${pessoas}\n Sorteio de: ${item}`
    );
  });
};
