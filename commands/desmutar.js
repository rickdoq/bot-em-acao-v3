const fs = module.require("fs");

module.exports.run = async (client, message, args) => {
  // Check perms, self, rank, etc
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Você não tem permissão paea desmutar!");
  const toMute =
    message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!toMute) return message.channel.send("Mencione alguém!");
  if (toMute.highestRole.position >= message.member.highestRole.position)
    return message.channel.send(
      "Você não pode desmutar alguém que seja igual ou maior cargo que você!"
    );

  // Check if the user has the mutedRole
  const mutedRole = message.guild.roles.find(mR => mR.name === "Mutado");

  // If the mentioned user or ID does not have the "mutedRole" return a message
  if (!mutedRole || !toMute.roles.has(mutedRole.id))
    return message.channel.send("Esse user não está mutado.");

  // Remove the mentioned users role "mutedRole", "muted.json", and notify command sender
  await toMute.removeRole(mutedRole);
  delete client.muted[toMute.id];

  fs.writeFile("./muted.json", JSON.stringify(client.muted), err => {
    if (err) throw err;
    message.channel.send(`Você desmutou o(a) ${toMute.user.tag}!`);
  });
};
