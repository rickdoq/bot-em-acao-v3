const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();
const config = require("./config.json");
const ms = require("parse-ms");

const discord_token = config.token;
const prefix = config.prefix;

client.on("ready", () => {
  /*client.channels.cache
    .get("685640365784432660")
    .send("**AVISO AUTOMÁTICO:**\n\n`🔰| ESTOU ONLINE`");*/
  var tabela = [
    { name: "bandidos sendo presos.", type: "WATCHING" },
    { name: `Meu programador: RickDOQ#5026`, type: "LISTENING" },
    { name: `sons de viatura.`, type: "LISTENING" },
    { name: `comandos no !!ajuda`, type: "PLAYING" },
    { name: "pupu chei de sal", type: "LISTENING" },
    { name: "bugs sendo corrigidos.", type: "WATCHING" },
    { name: `o Ironia taxando o Rick`, type: "LISTENING" },
    { name: "o Lonely gadando.", type: "WATCHING" },
    { name: "álcool em gel nos membros.", type: "PLAYING" },
    { name: "Polícia 24hrs.", type: "WATCHING" },
{ name: "na Discloud.", type: "WATCHING" },
    { name: "Aparentemente maconha né seu policial? ", type: "LISTENING" },
    { name: "Dexter deletando memes.", type: "WATCHING" }
  ];

  // ============== MANUTENÇÃO =======================
  // var tabela = [
  //    { name: "🔔 EM MANUTENÇÃO", type: "STREAMING" },
  //    { name: "🔕 EM MANUTENÇÃO", type: "STREAMING" }
  //  ];

  function setStatus() {
    let altstatus = tabela[Math.floor(Math.random() * tabela.length)];
    client.user.setActivity({
      name: altstatus.name,
      game: altstatus,
      type: altstatus.type
    });
  }
  setStatus();
  setInterval(() => setStatus(), 10000);
});

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
});
// Every 5 seconds check the "muted.json" file to see when a users mute is up

app.get("/", (request, response) => {
  console.log("Ping received!");
  response.sendStatus(200);
});

// This keeps the bot running 24/7
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("message", message => {
  if (message.author.bot) return;

  //  ============ DROP SYSTEM ======================
  const db = require("quick.db");

  const dropcoxinha = db.get(`dropcoxinha_${message.guild.id}`);
  if (!dropcoxinha) {
    db.add(`dropcoxinha_${message.guild.id}`, 1);
  }
  const status = db.get(`dropcoxinhastatus_${message.guild.id}`);
  if (status === 1) {
    if (dropcoxinha >= 400) {
      const codigo = Math.ceil(Math.random() * 1000);
      const embed = new Discord.MessageEmbed()
        .setTitle("DROP!!")
        .setColor("DARK")
        .setDescription(
          `**CORRE QUE O DROP TÁ ATIVO.\n\nPara resgatar digite \`!!drop <código>\` o mais rápido possível e ganhe 150 coxinhas.\n\nCódigo: ${codigo}**`
        );
      db.set(`dropcodigo_${message.guild.id}`, codigo);
      db.set(`dropcoxinha_${message.guild.id}`, 1);
      db.set(`dropcoxinhastatus_${message.guild.id}`, 2);
      client.channels.cache.get("460966732400427008").send(embed);
    } else {
      db.add(`dropcoxinha_${message.guild.id}`, 1);
    }
  }

  //////////////////////////////// Teste de verificação do boost - INICIO ////////////////////////////////

  const boostuser = message.author;
  const timeoutboost = 2.592e9;
  const booststatus = db.get(`booster_${message.guild.id}_${boostuser.id}`);
  const boosttime = db.get(`boostertime_${message.guild.id}_${boostuser.id}`);

  const boostersub = db.get(`boostersub_${message.guild.id}_${boostuser.id}`);
  const boosternitro = db.get(
    `boosternitro_${message.guild.id}_${boostuser.id}`
  );

  const cargotwitch = "388924817002201088";
  const cargonitro = "652632082727567411";

  if (
    !message.member.roles.cache.get(cargotwitch) &&
    booststatus === 2 &&
    boostersub === 1
  ) {
    message.reply("Seu sub acabou e você voltou para 1x de boost.");
    db.set(`booster_${message.guild.id}_${boostuser.id}`, 1);
    db.set(`boostertime_${message.guild.id}_${boostuser.id}`, null);
    db.set(`boostersub_${message.guild.id}_${boostuser.id}`, 0);
  }

  if (
    !message.member.roles.cache.get(cargonitro) &&
    booststatus === 3 &&
    boosternitro === 1
  ) {
    message.reply("Seu nitro acabou e você voltou para 1x de boost.");
    db.set(`booster_${message.guild.id}_${boostuser.id}`, 1);
    db.set(`boostertime_${message.guild.id}_${boostuser.id}`, null);
    db.set(`boosternitro_${message.guild.id}_${boostuser.id}`, 0);
  }

  // Checa se o usuário tem o cargo de Subscriber e se não tem o cargo de Booster
  if (
    message.member.roles.cache.get(cargotwitch) &&
    booststatus != "2" &&
    !message.member.roles.cache.get(cargonitro)
  ) {
    message.reply(
      "Você tem o cargo de subscriber da twitch e ganhou 2x de boost até seu sub acabar."
    );
    db.set(`booster_${message.guild.id}_${boostuser.id}`, 2);
    db.set(`boostertime_${message.guild.id}_${boostuser.id}`, Date.now());
    db.set(`boostersub_${message.guild.id}_${boostuser.id}`, 1);
  }

  // Checa se o usuário tem cargo de booster
  if (message.member.roles.cache.get(cargonitro) && booststatus != "3") {
    message.reply(
      "Você tem o cargo de nitro e ganhou 3x de boost até seu nitro acabar."
    );
    db.set(`booster_${message.guild.id}_${boostuser.id}`, 3);
    db.set(`boostertime_${message.guild.id}_${boostuser.id}`, Date.now());
    db.set(`boosternitro_${message.guild.id}_${boostuser.id}`, 1);
  }

  if (booststatus != "1" && booststatus !== null) {
    if (boosttime !== null && timeoutboost - (Date.now() - boosttime) < 0) {
      db.set(`booster_${message.guild.id}_${boostuser.id}`, 1);
      db.set(`boostertime_${message.guild.id}_${boostuser.id}`, null);

      message.reply("Acabou seu boost :(");
    }
  }

  //////////////////////////////// Teste de verificação do boost - FIM ////////////////////////////////

  // ============== XP & LEVEL SYSTEM =============

  const xp = db.get(`xpinfo_${message.author.id}`);
  if (!xp) {
    db.set(`xpinfo_${message.author.id}`, 0);
  }
  const level = db.get(`levelinfo_${message.author.id}`);
  if (!level) {
    db.set(`levelinfo_${message.author.id}`, 0);
  }

  db.add(`xpinfo_${message.author.id}`, 2); /**/
  const novo = level + 1;
  /*const meta = db.get(`meta_${message.author.id}`)
if (!meta) { db.set(`meta_${message.author.id}`,2) }
  if (xp >= m
      db.add(`levelinfo_${message.author.id}`, 1);
      const embed1 = new Discord.MessageEmbed()
        .setTitle(`Parabéns`)
        .setDescription(
          `**Você acabou de subir de level.\nLevel atual: ${novo}**`
        )
        .setColor("DARK");
      db.set(`xpinfo_${message.author.id}`, 0);
      message.channel.send(embed1);
    const novameta = meta * 2;
    db.set(`meta_${message.author.id}`, novameta)
  }*/

  if (message.content.indexOf(prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    if (!message.author.id === "442093644657197067")
      return message.channel.send(
        "Estou arrumando uns parafusos, volto de 18:15."
      );
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
    message.reply("O comando digitado não existe o/");
  }
});

//const AntiSpam = require("discord-anti-spam");
//const antiSpam = new AntiSpam({
// warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
// kickThreshold: 7, // Amount of messages sent in a row that will cause a ban.
//banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
// maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
//  warnMessage: "{@user}, por favor não faça spam.", // Message that will be sent in chat upon warning a user.
// kickMessage: "**{user_tag}** foi kick por spamming.", // Message that will be sent in chat upon kicking a user.
//  banMessage: "**{user_tag}** foi banido por spamming.", // Message that will be sent in chat upon banning a user.
//maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
//  maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
//  maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
//  exemptPermissions: ["ADMINISTRATOR"], // Bypass users with any of these permissions.
//  ignoreBots: true, // Ignore bot messages.
//  verbose: true, // Extended Logs from module.
//  ignoredUsers: [] // Array of User IDs that get ignored.
// And many more options... See the documentation.
// });

// var antispam1 = require("discord-spam-protector");

// antispam1(client, {
//   warnBuffer: 7, //Maximum amount of messages allowed to send in the interval time before getting warned.
//  maxBuffer: 10, // Maximum amount of messages allowed to send in the interval time before getting banned.
// interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
//  warningMessage: "pare de fazer spamming.", // Warning message send to the user indicating they are going to fast.
//  banMessage: "foi banido por spamming, eu avisei.", // Ban m

client.on("messageDelete", async message => {
  let logs = await message.guild.fetchAuditLogs({ type: 72 });
  let entry = logs.entries.first();

  let embed = new Discord.MessageEmbed()
    .setTitle("**MENSAGEM DELETADA**")
    .setColor("#fc3c3c")
    .addField("Author", message.author.tag, true)
    .addField("Canal", message.channel, true)
    .addField("Mensagem", message.content)
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

  let channel = client.channels.cache.get("722147859184746656");
  channel.send({ embed });
});

client.login(discord_token);
