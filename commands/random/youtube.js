const commando = require('discord.js-commando')

class YoutubeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'youtube',
            group: 'random',
            memberName: 'youtube',
            description: 'Returns a youtube link'
        });
    }

    async run(message, args){
        //im fuckin lazy sue me get trolled bitchs
        //but will due it right soon 
        message.reply("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

    }
}
module.exports = YoutubeCommand