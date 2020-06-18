const Discord = require("discord.js");
const Canvas = require("canvas");
const db = require("quick.db");

const applyText = (canvas, text) => {
  const ctx = canvas.getContext("2d");

  // Declare a base size of the font
  let fontSize = 80;

  do {
    // Assign the font to the context and decrement it so it can be measured again
    ctx.font = `${(fontSize -= 10)}px sans-serif`;
    // Compare pixel width of the text to the canvas minus the approximate avatar size
  } while (ctx.measureText(text).width > canvas.width - 280);

  // Return the result to use in the actual canvas
  return ctx.font;
};

exports.run = async (client, message, args) => {
  const member = message.member;

  let money = db.get(`xpinfo_${message.author.id}`);
  if (!money) money = 0;
  let bank = db.get(`levelinfo_${message.author.id}`);
  if (!bank) bank = 0;

  const canvas = Canvas.createCanvas(1200, 800);
  const ctx = canvas.getContext("2d");

  // Since the image takes time to load, you should await it
  const background = await Canvas.loadImage(
    "https://cdn.glitch.com/01949cdd-4d30-4bf8-a02d-f1e3c772635f%2F1591656570390.png?v=1591656701189"
  );
  // This uses the canvas dimensions to stretch the image onto the entire canvas
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  // Use helpful Attachment class structure to process the file for you

  /*if (message.author.id === "282999559385513984") {
    const backpupu = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/694893191018577960/720315904801636482/159180704925.png"
    );
    ctx.drawImage(backpupu, 0, 0, canvas.width, canvas.height);
    
    const pupu = await Canvas.loadImage(
      "https://cdn.glitch.com/01949cdd-4d30-4bf8-a02d-f1e3c772635f%2F1591806755997.png?v=1591808225669"
      );
    ctx.drawImage(pupu, 375, 250, 500, 500)
  }*/

  const tela = await Canvas.loadImage(
    "https://cdn.glitch.com/01949cdd-4d30-4bf8-a02d-f1e3c772635f%2F1591732641089.png?v=1591732843656"
  );
  ctx.drawImage(tela, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // Add an exclamation point here and below
  /* ctx.font = applyText(canvas, `${member.displayName}`);
  ctx.fillStyle = "BLACK";
  ctx.fillText(
    `${member.displayName}`,
    canvas.width / 1.63,
    canvas.height / 5.4
  );*/

  let bio = await db.get(`bioinfo_${message.author.id}`);
  if (!bio) bio = `Hey, você pode mudar essa texto.\nUse "!!bio"`;

  ctx.font = applyText(canvas, `${bio}`);
  ctx.fillStyle = "WHITE";
  ctx.fillText(`${bio}`, 73, 730);

  ctx.font = applyText(canvas, `${money}`);
  ctx.fillStyle = "WHITE";
  ctx.fillText(`${money}`, canvas.width / 2.7, canvas.height / 7.7);

  ctx.font = applyText(canvas, `${bank}`);
  ctx.fillStyle = "WHITE";
  ctx.fillText(`${bank}`, canvas.width / 1.23, canvas.height / 7.7);

  if (message.member.roles.cache.has("690603560873754714")) {
    const staff = await Canvas.loadImage(
      "https://cdn.glitch.com/01949cdd-4d30-4bf8-a02d-f1e3c772635f%2Fstaff.png?v=1591713395615"
    );
    ctx.drawImage(staff, 1000, 565, 65, 65);
  }

  if (message.member.roles.cache.has("710187345433067530")) {
    const bolsa = await Canvas.loadImage(
      "https://cdn.glitch.com/01949cdd-4d30-4bf8-a02d-f1e3c772635f%2Fbolsa.png?v=1591715426085"
    );
    ctx.drawImage(bolsa, 1100, 565, 65, 65);
  }

  if (message.member.roles.cache.has("719623652542513153")) {
    const bug = await Canvas.loadImage(
      "https://cdn.glitch.com/01949cdd-4d30-4bf8-a02d-f1e3c772635f%2Fbug.png?v=1591716070609"
    );
    ctx.drawImage(bug, 900, 565, 65, 65);
  }

  if (message.member.roles.cache.has("694891652027908167")) {
    const dev = await Canvas.loadImage(
      "https://cdn.glitch.com/01949cdd-4d30-4bf8-a02d-f1e3c772635f%2Fdevs.png?v=1591716313091"
    );
    ctx.drawImage(dev, 800, 565, 65, 65);
  }

  if (message.member.roles.cache.has("388924817002201088")) {
    const sub = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/694893191018577960/719959254710091836/2-1.png"
    );
    ctx.drawImage(sub, 700, 565, 60, 60);
  }

  if (message.member.roles.cache.has("652632082727567411")) {
    const nitro = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/694893191018577960/720008078518386758/1591720693762.png"
    );
    ctx.drawImage(nitro, 600, 565, 65, 65);
  }

  //=============== CARGOS

  if (message.member.roles.cache.has("685510211011739711")) {
    const tenente = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/694893191018577960/722189995665915925/1592103920519.png"
    );
    ctx.drawImage(tenente, 1050, 687, 100, 100);
  }

  if (message.member.roles.cache.has("685511514865926164")) {
    const capitao = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/694893191018577960/722180645035704380/1591978860265.png"
    );
    ctx.drawImage(capitao, 970, 687, 200, 100);
  }

  if (message.member.roles.cache.has("685511626463510549")) {
    const major = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/694893191018577960/722180645538758747/1591979002383.png"
    );
    ctx.drawImage(major, 970, 687, 200, 100);
  }

  if (message.member.roles.cache.has("685511670868606980")) {
    const tencoronel = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/694893191018577960/722180646113640508/1591979064267.png"
    );
    ctx.drawImage(tencoronel, 970, 687, 200, 100);
  }

  if (message.member.roles.cache.has("685511707803516929")) {
    const coronel = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/694893191018577960/722180646591660134/1591979123775.png"
    );
    ctx.drawImage(coronel, 970, 687, 200, 100);
  }

  // Pick up the pen
  ctx.beginPath();
  // Start the arc to form a circle
  ctx.arc(133, 108, 100, 0, Math.PI * 2, true);
  // Put the pen down
  ctx.closePath();
  // Clip off the region you drew on
  ctx.clip();

  ctx.beginPath();
  ctx.strokeStyle = "#ffffff";
  ctx.lineCap = "round";
  ctx.moveTo(5, 10);
  ctx.lineTo(10, 10);
  ctx.lineWidth = 10;
  ctx.stroke();

  const avatar = await Canvas.loadImage(
    member.user.displayAvatarURL({ format: "jpg" })
  );
  // Draw a shape onto the main canvas
  ctx.drawImage(avatar, 30, 5, 230, 200);
  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "testezinho.png"
  );

  message.channel.send(attachment);
};

exports.help = {
  name: "test",
  aliases: []
};
