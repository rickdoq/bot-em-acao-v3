const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setColor("DARK")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/235814777455247361/5c93dcb5a5700758fafd368503e74f48.png?size=2048"
    )
    .setTitle(
      "**<:policiaaa:685304639578570763> __SIGA O POLICIAL__ <:policiaaa:685304639578570763>**"
    )
    .setDescription(
      "\n\n<:twich:708358771377831987> » [Twitch](https://www.twitch.tv/policiaemacao)\n\n<:youtube:708358629597773865> » [Youtube](https://www.youtube.com/channel/UCVbfzQpLsx4DhEfrSxvj2vw)\n\n<:insta:708358872301305946> » [Instagram](https://instagram.com/PoliciaEmAcaoES)\n\n<a:twitter:708358948859805797> » [Twitter](https://twitter.com/PoliciaEmAcaoES)"
    );
  message.channel.send(embed);
};
