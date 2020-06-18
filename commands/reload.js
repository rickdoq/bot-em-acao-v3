const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (client, message, args) => {
  if (message.author.id !== "282999559385513984")
    return message.channel.send(";-;");
  try {
    await message.channel.send("Estou reiniciando...");
    fs.readdir("./commands/", (err, files) => {
      message.channel.send("Reiniciei meus comandos com sucesso :)");
      const comandosBEABÁ = files.length;
      if (err) return console.error(err);
      console.log("Recarreguei " + comandosBEABÁ + " comandos");
      files.forEach(file => {
        delete require.cache[require.resolve(`./${file}`)];
      });
    });
    process.exit(1);
  } catch (e) {
    console.log(e);
  }
};

exports.help = {
  name: "reload",
  aliases: ["reiniciar"]
};
