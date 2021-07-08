const settings = require('../settings.json')
const Discord = require("discord.js");
const { config } = require('../commands/player');

module.exports = bot => {
    console.log(`${bot.user.username} is online\ninvite the bot here:\n${settings.invite}`)
    bot.user.setPresence({
        status: settings.status,
        activity: {
            name: settings.name,
            description: config.desc,
            type: config.type
        }
    });
}