const Discord = require('discord.js');
const settings = require('../settings.json');

module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send('Pinging...');
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. Web Socket is ${Math.round(bot.ws.ping)}ms`);
};

module.exports.config = {
    name: "ping",
    description: "get the bot's ping",
    usage: settings.prefix + "ping",
    accessableby: "Everyone",
    aliases: ['inv']
}