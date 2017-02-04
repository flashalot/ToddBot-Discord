const commando = require('discord.js-commando')
const bot = new commando.Client();
const cred = require("./bot_token.json")

//custom command groups
bot.registry.registerGroups([
        ['random', 'Random shit'],
        ['memes', 'Make Memes Great Again']
  //      ['Tools', 'Tools for todd'],
  //      ['Sound', 'SoundBoard']
])
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

// Are you on?
bot.on('message', (message) => {
    if(message.content == 'tyler') {
       // message.reply('pong');
        message.channel.sendMessage('The name is todd');
    }
});

bot.login(cred.token)