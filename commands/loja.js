const Discord = require("discord.js"); // puxando a livraria 'discord.js'
const db = require("quick.db");

exports.run = async (client, message, args) => {
  // setando a base

  const user = message.author;
  let money = await db.get(`money_${message.guild.id}_${user.id}`);

  const um = message.guild.roles.cache.get("685517768191377441");
  const dois = message.guild.roles.cache.get("685527475450806272");
  const tres = message.guild.roles.cache.get("685518314952196165");

  const quatro = message.guild.roles.cache.get("685518245565956197");
  const cinco = message.guild.roles.cache.get("685518435161210894");
  const seis = message.guild.roles.cache.get("692388383388860506");

  const sete = message.guild.roles.cache.get("692388515098656788");
  const oito = message.guild.roles.cache.get("692388397846888489");
  const nove = message.guild.roles.cache.get("690611554084716628");

  const dj = message.guild.roles.cache.get("685551605575188498");
  const rico = message.guild.roles.cache.get("719990227904626759");
  const milionario = message.guild.roles.cache.get("719990490384040046");

  const description =
    "**Para poder ver mais sobre os itens disponíveis, clique na reação de acordo com o desejado:\n\n🅱️ | Cores Básicas: 15k Coxinhas\n💎 | Cores Especiais: 50k Coxinhas\n🚀 | Booster de Coxinhas\n🏷️ | Tags\n🛠️ | Utilidades**";

  let embed = new Discord.MessageEmbed()
    .setTitle(`Loja`)
    .setColor("RED")
    .setDescription(description);
  message.channel.send({ embed }).then(msg => {
    // evento para reagir a mensagem
    msg.react("🅱️").then(r => {
      // economia

      // uteis
      msg.react("💎").then(r => {
        // entretenimento
        msg.react("🚀").then(r => {
          // Boost
          msg.react("🏷️").then(r => {
            // tag
            msg.react("🛠️").then(r => {
              // Utilidades
            });
          });
        });
      });
    });
    // filtros de cada reação, para configurar a informação do autor
    const UtilidadesFilter = (reaction, user) =>
      reaction.emoji.name === "🅱️" && user.id === message.author.id;
    const EntretenimentoFilter = (reaction, user) =>
      reaction.emoji.name === "💎" && user.id === message.author.id;
    const BackFilter = (reaction, user) =>
      reaction.emoji.name === "⏪" && user.id === message.author.id;
    const BoosterFilter = (reaction, user) =>
      reaction.emoji.name === "🚀" && user.id === message.author.id;
    const TagsFilter = (reaction, user) =>
      reaction.emoji.name === "🏷️" && user.id === message.author.id;
    const UtilsFilter = (reaction, user) =>
      reaction.emoji.name === "🛠️" && user.id === message.author.id;

    // coletores de cada reação, para ver confirmar tal membro
    const Utilidades = msg.createReactionCollector(UtilidadesFilter);
    const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
    const Back = msg.createReactionCollector(BackFilter);
    const Booster = msg.createReactionCollector(BoosterFilter);
    const Tags = msg.createReactionCollector(TagsFilter);
    const Utils = msg.createReactionCollector(UtilsFilter);

    Utilidades.on("collect", r2 => {
      // criando um evento, caso o membro clique nessa reação, e todos são iguais!
      embed = new Discord.MessageEmbed()
        .setTitle("🅱️ | Básicas:")
        .addField("**Valor:**", "**`15k coxinhas`**")
        .addField("**1. Cor »**", "<@&685517768191377441>")
        .addField("**2. Cor »**", "<@&685527475450806272>")
        .addField("**3. Cor »**", "<@&685518314952196165>")
        .addField("**4. Cor »**", "<@&685518245565956197>")
        .addField("**5. Cor »**", "<@&685518435161210894>")
        .addField("**6. Cor »**", "<@&692388383388860506>")
        .setColor("RED");

      msg.edit(embed);
      msg.reactions.removeAll(embed).then(r => {
        msg.react("1️⃣").then(r => {
          // 1
          msg.react("2️⃣").then(r => {
            // 2
            msg.react("3️⃣").then(r => {
              // 3
              msg.react("4️⃣").then(r => {
                // 4
                msg.react("5️⃣").then(r => {
                  // 5
                  msg.react("6️⃣").then(r => {
                    // 6
                    msg.react("⏪").then(r => {
                      // inicio
                    });
                  });
                });
              });
            });
          });
        });
      });
    });

    Entretenimento.on("collect", r2 => {
      embed = new Discord.MessageEmbed()
        .setTitle("💎 | Especiais:")
        .addField("**Valor:**", "**`50k coxinhas`**")
        .addField("**7. Cor »**", "<@&692388515098656788>")
        .addField("**8. Cor »**", "<@&692388397846888489>")
        .addField("**9. Cor »**", "<@&690611554084716628>")
        .setColor("PURPLE");

      msg.edit(embed);
      msg.reactions.removeAll(embed).then(r => {
        msg.react("7️⃣").then(r => {
          // 7
          msg.react("8️⃣").then(r => {
            // 8
            msg.react("9️⃣").then(r => {
              // 9
              msg.react("⏪").then(r => {
                // inicio
              });
            });
          });
        });
      });
    });

    Back.on("collect", r2 => {
      embed = new Discord.MessageEmbed()
        .setTitle(`Loja`)
        .setColor("RED")
        .setDescription(description);

      msg.edit(embed);
      msg.reactions.removeAll(embed).then(r2 => {
        msg.react("🅱️").then(r2 => {
          // uteis
          msg.react("💎").then(r2 => {
            msg.react("🚀").then(r => {
              // Boost
              msg.react("🏷️").then(r => {
                // tag
                msg.react("🛠️").then(r => {
                  // Utilidades
                });
              });
            });
          });
        });
      });
    });

    Booster.on("collect", r2 => {
      embed = new Discord.MessageEmbed()
        .setTitle("🚀 | Booster de Coxinhas:")
        .addField("**Duração:**", "**`30 dias`**", true)
        .addField("**Valor:**", "**`15k coxinhas`**", true)
        .addField("**💸. Booster »**", "1.8x")
        .setColor("PURPLE");

      msg.edit(embed);
      msg.reactions.removeAll(embed).then(r => {
        msg.react("💸").then(r => {
          // Booster 1.8x
          msg.react("⏪").then(r => {
            // inicio
          });
        });
      });
    });

    Tags.on("collect", r2 => {
      embed = new Discord.MessageEmbed()
        .setTitle("🏷️ | Tags:")
        .addField("**🎵. DJ »**", "25k Coxinhas")
        .addField("**💰. Rico**", "150k Coxinhas")
        .addField("**🤑. Milionário**", "650k Coxinhas")
        .setColor("PURPLE");

      msg.edit(embed);
      msg.reactions.removeAll(embed).then(r => {
        msg.react("🎵").then(r => {
          // Booster 1.8x
          msg.react("💰").then(r => {
            // Rico
            msg.react("🤑").then(r => {
              // Milionario
              msg.react("⏪").then(r => {
                // inicio
              });
            });
          });
        });
      });
    });

    Utils.on("collect", r2 => {
      embed = new Discord.MessageEmbed()
        .setTitle("🛠️ | Utilidades:")
        .addField("**📛. Troca de nick »**", "2.5k Coxinhas")
        .setColor("PURPLE");

      msg.edit(embed);
      msg.reactions.removeAll(embed).then(r => {
        msg.react("📛").then(r => {
          msg.react("⏪").then(r => {
            // inicio
          });
        });
      });
    });

    const CancelarFilter = (reaction, user) =>
      reaction.emoji.name === "❌" && user.id === message.author.id;

    const Cor1Filter = (reaction, user) =>
      reaction.emoji.name === "1️⃣" && user.id === message.author.id;
    const Cor2Filter = (reaction, user) =>
      reaction.emoji.name === "2️⃣" && user.id === message.author.id;
    const Cor3Filter = (reaction, user) =>
      reaction.emoji.name === "3️⃣" && user.id === message.author.id;

    const Cor4Filter = (reaction, user) =>
      reaction.emoji.name === "4️⃣" && user.id === message.author.id;
    const Cor5Filter = (reaction, user) =>
      reaction.emoji.name === "5️⃣" && user.id === message.author.id;
    const Cor6Filter = (reaction, user) =>
      reaction.emoji.name === "6️⃣" && user.id === message.author.id;

    const Cor7Filter = (reaction, user) =>
      reaction.emoji.name === "7️⃣" && user.id === message.author.id;
    const Cor8Filter = (reaction, user) =>
      reaction.emoji.name === "8️⃣" && user.id === message.author.id;
    const Cor9Filter = (reaction, user) =>
      reaction.emoji.name === "9️⃣" && user.id === message.author.id;

    const Booster18Filter = (reaction, user) =>
      reaction.emoji.name === "💸" && user.id === message.author.id;
    const DJFilter = (reaction, user) =>
      reaction.emoji.name === "🎵" && user.id === message.author.id;
    const RicoFilter = (reaction, user) =>
      reaction.emoji.name === "💰" && user.id === message.author.id;
    const MilionarioFilter = (reaction, user) =>
      reaction.emoji.name === "🤑" && user.id === message.author.id;
    const NickFilter = (reaction, user) =>
      reaction.emoji.name === "📛" && user.id === message.author.id;

    // coletores de cada reação, para ver confirmar tal membro
    const Cor1 = msg.createReactionCollector(Cor1Filter);
    const Cor2 = msg.createReactionCollector(Cor2Filter);
    const Cor3 = msg.createReactionCollector(Cor3Filter);

    const Cor4 = msg.createReactionCollector(Cor4Filter);
    const Cor5 = msg.createReactionCollector(Cor5Filter);
    const Cor6 = msg.createReactionCollector(Cor6Filter);

    const Cor7 = msg.createReactionCollector(Cor7Filter);
    const Cor8 = msg.createReactionCollector(Cor8Filter);
    const Cor9 = msg.createReactionCollector(Cor9Filter);

    const Booster18 = msg.createReactionCollector(Booster18Filter);
    const DJ = msg.createReactionCollector(DJFilter);
    const Rico = msg.createReactionCollector(RicoFilter);
    const Milionario = msg.createReactionCollector(MilionarioFilter);
    const Nick = msg.createReactionCollector(NickFilter);

    const Cancelar = msg.createReactionCollector(CancelarFilter);

    Cancelar.on("collect", r3 => {
      embed = new Discord.MessageEmbed()
        .setTitle("Cancelar")
        .setDescription("Pronto, sua compra foi cancelada.")
        .setColor("RED");
      msg.edit(embed);
      msg.reactions.removeAll(embed).then(r3 => {
        msg.react("⏪");
      });
    });

    Cor1.on("collect", r3 => {
      if (money >= 15000) {
        embed = new Discord.MessageEmbed()
          .setTitle("Cor")
          .setDescription("Cor comprada com sucesso.")
          .setColor("BLUE");
        msg.edit(embed);

        db.add(`money_${message.guild.id}_${user.id}`, "-15000");
        message.member.roles.add(um);
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para comprar a cor."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    Cor2.on("collect", r3 => {
      if (money >= 15000) {
        embed = new Discord.MessageEmbed()
          .setTitle("Cor")
          .setDescription("Cor comprada com sucesso.")
          .setColor("BLUE");
        msg.edit(embed);

        db.add(`money_${message.guild.id}_${user.id}`, "-15000");
        message.member.roles.add(dois);
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para comprar a cor."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    Cor3.on("collect", r3 => {
      if (money >= 15000) {
        embed = new Discord.MessageEmbed()
          .setTitle("Cor")
          .setDescription("Cor comprada com sucesso.")
          .setColor("BLUE");
        msg.edit(embed);

        db.add(`money_${message.guild.id}_${user.id}`, "-15000");
        message.member.roles.add(tres);
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para comprar a cor."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    Cor4.on("collect", r3 => {
      if (money >= 15000) {
        embed = new Discord.MessageEmbed()
          .setTitle("Cor")
          .setDescription("Cor comprada com sucesso.")
          .setColor("BLUE");
        msg.edit(embed);

        db.add(`money_${message.guild.id}_${user.id}`, "-25000");
        message.member.roles.add(quatro);
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para comprar a cor."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    Cor5.on("collect", r3 => {
      if (money >= 15000) {
        embed = new Discord.MessageEmbed()
          .setTitle("Cor")
          .setDescription("Cor comprada com sucesso.")
          .setColor("BLUE");
        msg.edit(embed);

        db.add(`money_${message.guild.id}_${user.id}`, "-25000");
        message.member.roles.add(cinco);
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para comprar a cor."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    Cor6.on("collect", r3 => {
      if (money >= 15000) {
        embed = new Discord.MessageEmbed()
          .setTitle("Cor")
          .setDescription("Cor comprada com sucesso.")
          .setColor("BLUE");
        msg.edit(embed);

        db.add(`money_${message.guild.id}_${user.id}`, "-25000");
        message.member.roles.add(seis);
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para comprar a cor."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    Cor7.on("collect", r3 => {
      if (money >= 50000) {
        embed = new Discord.MessageEmbed()
          .setTitle("Cor")
          .setDescription("Cor comprada com sucesso.")
          .setColor("BLUE");
        msg.edit(embed);

        db.add(`money_${message.guild.id}_${user.id}`, "-50000");
        message.member.roles.add(sete);
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para comprar a cor."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    Cor8.on("collect", r3 => {
      if (money >= 50000) {
        embed = new Discord.MessageEmbed()
          .setTitle("Cor")
          .setDescription("Cor comprada com sucesso.")
          .setColor("BLUE");
        msg.edit(embed);

        db.add(`money_${message.guild.id}_${user.id}`, "-50000");
        message.member.roles.add(oito);
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para comprar a cor."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    Cor9.on("collect", r3 => {
      if (money >= 50000) {
        embed = new Discord.MessageEmbed()
          .setTitle("Cor")
          .setDescription("Cor comprada com sucesso.")
          .setColor("BLUE");
        msg.edit(embed);

        db.add(`money_${message.guild.id}_${user.id}`, "-50000");
        message.member.roles.add(nove);
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para comprar a cor."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    Booster18.on("collect", r3 => {
      if (money >= 15000) {
        const boosteratual = db.get(`booster_${message.guild.id}_${user.id}`);
        
        if(boosteratual > 1.8){
          embed = new Discord.MessageEmbed()
          .setTitle("Boost")
          .setDescription("Seu boost atual é maior que o boost de 1.8x, sua compra foi cancelada.")
          .setColor("BLUE");
        msg.edit(embed);
        }else{
          embed = new Discord.MessageEmbed()
          .setTitle("Boost")
          .setDescription("Booster de 1.8x comprado com sucesso.")
          .setColor("BLUE");
          msg.edit(embed);
          
          db.add(`money_${message.guild.id}_${user.id}`, "-15000");
          db.set(`booster_${message.guild.id}_${user.id}`, 1.8);
          db.set(`boostertime_${message.guild.id}_${user.id}`, Date.now());
        }
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para comprar o boost."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    DJ.on("collect", r3 => {
      if (money >= 25000) {
        embed = new Discord.MessageEmbed()
          .setTitle("Tag")
          .setDescription("Tag de <@&685551605575188498> comprada com sucesso.")
          .setColor("BLUE");
        msg.edit(embed);

        db.add(`money_${message.guild.id}_${user.id}`, "-25000");
        message.member.roles.add(dj);
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para comprar a tag."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    Rico.on("collect", r3 => {
      if (money >= 150000) {
        let desc = "";
        let boostatual = db.get(`booster_${message.guild.id}_${user.id}`);
        if (boostatual <= 5) {
          desc =
            "Tag de <@&719990227904626759> comprada com sucesso. Você ganhou um boost permanente de 5x!!";
        } else {
          desc = "Tag de <@&719990227904626759> comprada com sucesso.";
        }
        embed = new Discord.MessageEmbed()
          .setTitle("Tag")
          .setDescription(desc)
          .setColor("BLUE");
        msg.edit(embed);

        db.add(`money_${message.guild.id}_${user.id}`, "-150000");
        message.member.roles.add(rico);
        if (boostatual <= 5) {
          db.set(`booster_${message.guild.id}_${user.id}`, 5);
          db.set(
            `boostertime_${message.guild.id}_${user.id}`,
            99999999999999999
          );
        }
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para comprar a tag."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    Milionario.on("collect", r3 => {
      if (money >= 650000) {
        let desc = "";
        let boostatual = db.get(`booster_${message.guild.id}_${user.id}`);
        if (boostatual <= 5.1) {
          desc =
            "Tag de <@&719990490384040046> comprada com sucesso. Você ganhou um boost permanente de 5.1x!!";
        } else {
          desc = "Tag de <@&719990490384040046> comprada com sucesso";
        }
        embed = new Discord.MessageEmbed()
          .setTitle("Tag")
          .setDescription(desc)
          .setColor("BLUE");
        msg.edit(embed);

        db.add(`money_${message.guild.id}_${user.id}`, "-650000");
        message.member.roles.add(milionario);

        if (boostatual <= 5.1) {
          db.set(`booster_${message.guild.id}_${user.id}`, 5.1);
          db.set(
            `boostertime_${message.guild.id}_${user.id}`,
            99999999999999999
          );
        }
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para comprar a tag."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    Nick.on("collect", r3 => {
      if (money >= 2500) {
        message.channel.send("Diga o seu novo nick.");
        const nick = new Discord.MessageCollector(
          message.channel,
          m => m.author.id === message.author.id,
          { max: 1 }
        );
        nick.on("collect", message => {
          message.channel.send(`Deseja confirmar?: \`${message}\``).then(r => {
            r.react("☑️").then(r1 => {
              r.react("🇽")
            });
            const CertoFilter = (reaction, user) =>
              reaction.emoji.name === "☑️" && user.id === message.author.id;
            const ErradoFilter = (reaction, user) =>
              reaction.emoji.name === "🇽" && user.id === message.author.id;

            const Certo = r.createReactionCollector(CertoFilter);
            const Errado = r.createReactionCollector(ErradoFilter);

            Certo.on("collect", r2 => {
              r.edit("Seu novo nick: " + message.content);
              message.member.setNickname(message.content);
              db.add(`money_${message.guild.id}_${user.id}`, "-2500");
              r.reactions.removeAll(embed);
            });
            Errado.on("collect", r2 =>{
              r.edit("Você cancelou sua troca de nick.");
              r.reactions.removeAll(embed);
            });
          });
        });
      } else {
        embed = new Discord.MessageEmbed()
          .setTitle("Erro")
          .setDescription(
            "Pelo visto você não tem o valor da coxinha para trocar de nick."
          )
          .setColor("RED");
        msg.edit(embed);
      }
    });

    // SÓ VAMOS
  });
};
exports.help = {
  // setando o nome do arquivo, seguido do prefix
  name: "loja"
};
