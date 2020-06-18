const jimp = require('jimp');

exports.run = (message, bot) => {
    let prefix = "!!"
    let text = message.suffix.split("|");
    if (!text[1]) return message.channel.send("`|`");
    jimp.read('./images/cah.png', (err, image) => {
        if (err) return console.log(err);
        jimp.loadFont(jimp.FONT_SANS_64_WHITE).then(font => {
            image.print(font, 70, 70, text[0], 500)
            jimp.loadFont(jimp.FONT_SANS_64_BLACK).then(font2 => {
                image.print(font2, 680, 70, text[1], 500)
                image.getBuffer(jimp.AUTO, (err, buf) => {
                    if (err) return console.log(err);
                    message.channel.sendFile(buf).catch(console.log)
                })
            })
        })
    })
}
