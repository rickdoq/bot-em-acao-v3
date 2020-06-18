const Discord = require("discord.js");
const Canvas = require("canvas");
const db = require("quick.db");

const applyText = (canvas, text) => {
  const ctx = canvas.getContext("2d");

  // Declare a base size of the font
  let fontSize = 35;

  do {
    // Assign the font to the context and decrement it so it can be measured again
    ctx.font = `${(fontSize -= 10)}px sans-serif`;
    // Compare pixel width of the text to the canvas minus the approximate avatar size
  } while (ctx.measureText(text).width > canvas.width - 10);

  // Return the result to use in the actual canvas
  return ctx.font;
};

exports.run = async (client, message, args) => {
  const member = message.member;

  let money = db.get(`money_${message.guild.id}_${message.author.id}`);
  if (!money) money = 0;
  let bank = db.get(`bank_${message.guild.id}_${message.author.id}`);
  if (!bank) bank = 0;

  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext("2d");

  // Since the image takes time to load, you should await it
  const background = await Canvas.loadImage(
    "https://cdn.glitch.com/cf90482e-a6dc-4703-af34-698262238b8d%2F20200605_120933_0000.png?v=1591379408201"
  );
  // This uses the canvas dimensions to stretch the image onto the entire canvas
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  // Use helpful Attachment class structure to process the file for you

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // Add an exclamation point here and below
  ctx.font = applyText(canvas, `${member.displayName}`);
  ctx.fillStyle = "BLACK";
  ctx.fillText(
    `${member.displayName}`,
    canvas.width / 1.63,
    canvas.height / 5.4
  );

  ctx.font = applyText(canvas, `${money}`);
  ctx.fillStyle = "BLACK";
  ctx.fillText(`${money}`, canvas.width / 1.63, canvas.height / 2.2);

  ctx.font = applyText(canvas, `${bank}`);
  ctx.fillStyle = "BLACK";
  ctx.fillText(`${bank}`, canvas.width / 1.63, canvas.height / 1.35);

  // Pick up the pen
  ctx.beginPath();
  // Start the arc to form a circle
  ctx.arc(160, 123, 90, 0, Math.PI * 2, true);
  // Put the pen down
  ctx.closePath();
  // Clip off the region you drew on
  ctx.clip();

  ctx.beginPath();
  ctx.strokeStyle = "#ffffff";
  ctx.lineCap = "round";
  ctx.moveTo(15, 10);
  ctx.lineTo(10, 10);
  ctx.lineWidth = 120;
  ctx.stroke();
  
  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
  // Draw a shape onto the main canvas
  ctx.drawImage(avatar, 60, 30, 200, canvas.height / 1.3);
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
