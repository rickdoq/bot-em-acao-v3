const Discord = require("discord.js");
const util = require("util");
const db = require("quick.db");

exports.run = async (client, message, args, tools) => {
  if (message.author.id != "282999559385513984" && message.author.id != "442093644657197067")
    return message.channel.send(
      "❌ Você não tem permissão para usar esse comando."
    );
  let code = args.join(" ");
  if (!code)
    return message.channel.send("Especifique o code que você deseja executar.");
  try {
    let resultado = await eval(code);
    if (typeof resultado !== "string") {
      resultado = require("util").inspect(resultado);
    }
    message.channel.send(`**📥 Code:**\n \`\`\`js\n${resultado}\`\`\``);
  } catch (err) {
    message.channel.send(`**📤 Erro:**\n \`\`\`js\n${err}\`\`\``);
  }
};
