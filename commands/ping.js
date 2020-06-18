exports.run = async (client, message) => {
  const ms = await message.channel.send("Ping?");
  const clientms = ms.createdTimestamp - message.createdTimestamp;
  ms.edit(
    "**🚻 Seu ping 🏓:** " +
      clientms +
      "ms / 🛰 **Ping do bot com Server:**" +
      Math.floor(client.ws.ping) +
      "ms"
  );
};
