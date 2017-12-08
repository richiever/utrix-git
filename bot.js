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
    if (message.content == `${prefix}purge`) {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.fetchMessages()
           .then(function(list){
                message.channel.bulkDelete(list);
            }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
    }
}


return;
 }
});
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
