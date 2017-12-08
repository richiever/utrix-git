const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const prefix = 'u$'
client.on('message', message => {
    if (message.content === `${prefix}ping`) {
    	message.channel.send('PONG!');
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
