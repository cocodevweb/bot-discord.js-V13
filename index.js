const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });

require('dotenv').config()

client.on('ready', () => {
  console.log("Le bot est en ligne !")
})

client.login(process.env.TOKEN)
