const fs = require("fs"); // npm i fs
const { readdirSync } = require('fs');
const Discord = require('discord.js');

var files = fs.readdirSync('./commands');
files.forEach(file => {
    delete require.cache[require.resolve(`./${file}`)]
})
message.channel.send(`Reloaded ${files.length} commands.`)
 