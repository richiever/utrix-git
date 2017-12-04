const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = 'u$'

client.on('message', msg => {
  if (msg.content === `${prefix}help) {
    msg.reply('this bot is still in pre-alpha, with only this command so far.');
  }
});

client.login('token');
