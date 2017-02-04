const commando = require('discord.js-commando')

function defineLenny(number) {
    if (number == 1) {
        return "( ͡° ͜ʖ ͡°)"; 
    }
    if (number == 2) {
        return "¯\_(ツ)_/¯"; 
    }
    if (number == 3) {
        return "(ง ͠° ͟ل͜ ͡°)ง";
    }
    if (number == 4) {
        return "༼ つ ◕_◕ ༽つ";
    }
    if (number == 5) {
        return "ʕ•ᴥ•ʔ";
    }
}


class LennyCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lenny',
            group: 'memes',
            memberName: 'lenny',
            description: 'Rolls a Die'
        });
    }

    async run(message, args){
        var lnum = Math.floor(Math.random() * 6) +1;
        var lmsg = defineLenny(lnum)
        message.reply(lmsg);

    }
}
module.exports = LennyCommand