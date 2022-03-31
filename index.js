const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });

require('dotenv').config()

client.on('ready', () => {
  console.log("Le bot est en ligne !")
})

client.on("messageCreate", message => {
  if (message.author.bot) return
  const prefix = process.env.PREFIX;
  if (!message.content.startsWith(prefix)) return
  const args = message.content.split(" ");
  const commandName = args.shift().slice(prefix.length)
  try{
    const commandFile = require('./commands/' + commandName + ".js")
    commandFile.run(message, client)
  } catch (e) {
    console.log(e)
  }
})

client.login(process.env.TOKEN)
