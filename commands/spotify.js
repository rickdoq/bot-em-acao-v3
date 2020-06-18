const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user =
    message.mentions.users.first() ||
    message.author ||
    client.users.get(args[0]);

  if (
    user.presence.activities[0] !== undefined &&
    user.presence.activities[0] !== null &&
    user.presence.activities[0].type === 'LISTENING' &&
    user.presence.activities[0].name === "Spotify" &&
    user.presence.activities[0].assets !== null
  ) {
    let trackIMG = `https://i.scdn.co/image/${user.presence.activities[0].assets.largeImage.slice(
      8
    )}`;
    let trackURL = `https://open.spotify.com/track/${user.presence.activities[0].syncID}`;
    let trackName = user.presence.activities[0].details;
    let trackAuthor = user.presence.activities[0].state;
    let trackAlbum = user.presence.activities[0].assets.largeText;

    const embed = new Discord.MessageEmbed()
      .setAuthor(
        "Informações da Música",
        "https://cdn.discordapp.com/emojis/408668371039682560.png"
      )
      .setColor(0x1ed760)
      .setThumbnail(trackIMG)
      .addField("Nome da Música", trackName, true)
      .addField("Albúm", trackAlbum, true)
      .addField("Autor", trackAuthor, false)
      .addField("Escute você também", `[Clique Aqui](${trackURL})`);

    message.channel.send(message.author, embed);
  } else {
    message.reply(
      "Este usuário não está disponível e/ou não está ouvindo **Spotify**"
    );
  }
};
