const commando = require('discord.js-commando')
const bot = new commando.Client();
const cred = require("./bot_token.json")

//custom command groups
bot.registry.registerGroups([
        ['random', 'Random shit'],
  //      ['Tools', 'Tools for todd'],
  //      ['Sound', 'SoundBoard']
])
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

// Test message
bot.on('message', (message) => {
    if(message.content == 'ping') {
       // message.reply('pong');
        message.channel.sendMessage('pong');
    }
});

bot.login(cred.token)