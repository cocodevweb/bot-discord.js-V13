const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "ping",
  run: (message, client) => {
    const initialEmbed = new MessageEmbed().setDescription("Pinping...").setColor("RANDOM")
    message.channel.send({ embeds: [initialEmbed] }).then(msg => {
      const ping = message.createdTimestamp - message.createdTimestamp
      const pingEmbed = new MessageEmbed().setDescription(`Ping : ${ping}ms`).setColor("RANDOM")
      msg.edit({embeds: [pingEmbed]})
    })
  }
}
