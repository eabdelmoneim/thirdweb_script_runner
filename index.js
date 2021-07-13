require("http").createServer((req, res) => res.end("Avocados are tasty🥑")).listen(process.env.PORT || 8080)

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`))

//client.login() //Using DISCORD_TOKEN default env variable