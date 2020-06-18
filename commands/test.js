const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let member = message.mentions.users.first() || message.author;
  var reais = await db.get(`money_${message.guild.id}_${message.author.id}`);
  if (reais === null) reais = 0;

  var rep = await db.fetch(`rep_${member.id}`);
  if (rep === null) rep = 0;

  var emprego = await db.get(`trabaio_${member.id}`);
  if (emprego === null) emprego = `Desempregado`;
  if (emprego === 1) emprego = "Programador";
  if (emprego === 2) emprego = "Designer";
  if (emprego === 3) emprego = "Streamer";
  if (emprego === 4) emprego = "Lixeiro";

  var desc = await db.get(`desc_${member.id}`);
  if (desc === null) desc = "Nenhuma biografia definida";

  const level = "0";

  var Jimp = require("jimp");

  let usuario = message.author.username;

  if ("aaaa" > 9000000000) {
    message.reply(`a`); // caso o membro nao escreva algo para por na imagem
  } else {
    if ("aaaa" > 90000000000) {
      // caso os caracteres sejam maior que 50
      message.reply(
        `você ultrapassou o limite de 50 caracteres. Você não quer uma edição feia ne?`
      );
    } else {
      if (message.member.hasPermission("ATTACH_FILES")) {
        // requisitando a permissao: ATTACH_FILES
        var authorMessage = message;
        message.channel.send("Processando...").then(message => {
          // uma brincadeira, q iremos excluir essa mensagem e por outra
          // imagem que puxaremos, no caso, do Laranjo
          let mask = Jimp.read('https://i.imgur.com/552kzaW.png')
          Jimp.read(
            `https://cdn.discordapp.com/attachments/694893191018577960/707268777451978752/IMG_20200505_132346.png`,
            function(err, image) {
              if (err)
                message.channel.send("Ocorreu um erro ao criar a imagem."); // caso ocorra um erro ao criar a imagem
              Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function(font) {
                // setando o tipo da fonte
                image.print(font, 220, 40, `LEVEL: ${level}`, 320);
                image.print(font, 75, 40, `REP: ${rep}`, 320);
                image.print(font, 50, 500, `BIOGRAFIA: ${desc}`, 700);
                image.print(font, 500, 40, `XP: ${reais}`, 320); // mexendo no local da fonte
                var aguardeMessage = message; // criando umaa nova mensagem
                image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                  // mudando para PNG a imagem e botando um buffer
                  const attachment = new Discord.Attachment(
                    buffer,
                    "perfil.png"
                  ); // o nome da imagem gerada
                  message.channel.send(attachment).then(message => {
                    // e por fim, a imagem
                    aguardeMessage.delete(); // deletando a mensagem do inicio
                  });
                });
              });
            }
          );
        });
      } else {
        message.channel.send(
          "Eu não tenho a permissão necessária para fazer isso. `ATTACH_FILES`"
        ); // caso o bot nao possua permissao
      }
    }
  }
};
