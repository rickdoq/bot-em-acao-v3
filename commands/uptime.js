exports.run = (client, message) => {
  var milliseconds = parseInt((client.uptime % 1000) / 100),
    seconds = parseInt((client.uptime / 1000) % 60),
    minutes = parseInt((client.uptime / (1000 * 60)) % 60),
    hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  message.channel.send(
    ":chart_with_upwards_trend: Já faz ** " +
      hours +
      " **horas, **" +
      minutes +
      "** minutos e **" +
      seconds +
      "." +
      milliseconds +
      "** segundos que estou online!"
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "uptime",
  description: "Shows how long the bot has been online for.",
  usage: "uptime"
};
