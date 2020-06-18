const Discord = require("discord.js");

const moment = require("moment");
moment.locale("pt-BR");

exports.run = (client, message, args) => {
  function checkBots(guild) {
    let botCount = 0;
    guild.members.cache.forEach(member => {
      if (member.user.bot) botCount++;
    });
    return botCount;
  }

  function checkMembers(guild) {
    let memberCount = 0;
    guild.members.cache.forEach(member => {
      if (!member.user.bot) memberCount++;
    });
    return memberCount;
  }

  let online = message.guild.members.cache.filter(a => a.presence.status == "online")
    .size;
  let ocupado = message.guild.members.cache.filter(a => a.presence.status == "dnd")
    .size;
  let ausente = message.guild.members.cache.filter(a => a.presence.status == "idle")
    .size;
  let offline = message.guild.members.cache.filter(
    a => a.presence.status == "offline"
  ).size;

  const verlvl = {
    0: `\`Sem restrições\``,
    1: `\`Baixa\``,
    2: `\`Mediana\``,
    3: `\`Alta\``,
    4: `\`Hardcore\``
  };

  let sicon = message.guild.iconURL;
  let dono = message.guild.owner.user.tag;
  let region = {
    brazil: "Brasil",
    "eu-central": "Europa Central",
    singapore: "Singapura",
    "us-central": "U.S Central",
    sydney: "Sydney",
    "us-east": "U.S Leste",
    "us-south": "U.S Sul",
    "us-west": "U.S Oeste",
    "eu-west": "Europa Ocidental",
    "vip-us-east": "VIP U.S Lest",
    london: "London",
    amsterdam: "Amsterdam",
    hongkong: "Hong Kong"
  };

  var texto = `${
    message.guild.channels.cache.filter(chan => chan.type === "text").size
  }`;
  var voz = `${
    message.guild.channels.cache.filter(chan => chan.type === "voice").size
  }`;

  var emojis;
  if (message.guild.emojis.size === 0) {
    emojis = "0";
  } else {
    emojis = message.guild.emojis.size;
  }

  var textoo = message.guild.channels.cache.filter(chan => chan.type === "text").size;
  var vozz = message.guild.channels.cache.filter(chan => chan.type === "voice").size;

  let serverembed = new Discord.MessageEmbed()

    .setAuthor(`${message.guild.name}`, message.guild.iconURL)
    .setColor("AQUA")
    .addField(
      `__**Informações**__`,
      `👑 » Proprietário: ${
        message.guild.owner
      } / \`${dono}\`\n🌎 » Região: \`${
        region[message.guild.region]
      }\`\n:open_file_folder: » Nivel de Verificação: \`${
        verlvl[message.guild.verificationLevel]
      }\`\n:laughing: » Emojis: \`${emojis}\``
    )
    .addField(
      `__**Datas**__`,
      `⚙️ » Servidor criado em: \`${moment(message.guild.createdAt).format(
        "LLL"
      )}\`\n:handshake: » Você se juntou aqui em: \`${moment(
        message.member.joinedAt
      ).format("LLL")}\`\n🚺 » Eu me juntei ao servidor em: \`${moment(
        client.joinedAt
      ).format("LLL")}\``,
      true
    )
    .addField(
      `__**Canais**__ **(${textoo + vozz})**`,
      `💬 » Texto: \`${textoo}\`\n🎤 » Voz: \`${vozz}\``
    )
    .addField(
      `__**Membros**__ **(${message.guild.memberCount})**`,
      `<:online:689727178665099267> Disponiveis: \`${online}\` │ <:dnd:689727224777408517> Ocupados: \`${ocupado}\` │ <:idle:689726690368421919> Ausentes: \`${ausente}\` │ <:offline:689726874838237277> Offlines: \`${offline}\`\n:busts_in_silhouette: » Humanos: \`${checkMembers(
        message.guild
      )}\`\n<:Akura_bot:689750025982574632> » Robôs: \`${checkBots(
        message.guild
      )}\``
    )
    .setFooter(`ID: ${message.guild.id}`);

  message.channel.send(serverembed);
};

exports.help = {
  name: "serverinfo",
  aliases: ["guildinfo"]
};
