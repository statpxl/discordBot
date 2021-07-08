const Discord = require('discord.js');
const settings = require('../settings.json');

module.exports.run = async (bot, message, args) => {
    message.channel.send(settings.invite)
}
module.exports.config = {
    name: "invite",
    description: "invite the bot to your server",
    usage: settings.prefix + "invite",
    accessableby: "Everyone",
    aliases: ['inv']
}