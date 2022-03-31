module.exports = {
  name: "ping",
  run: (message, client) => {
    message.channel.send("Pong !")
  }
}