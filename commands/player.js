const Discord = require('discord.js');
const settings = require('../settings.json');
const superagent = require('superagent')

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let arg = userArgs[1];
    api = superagent.get('https://api.hypixel.net/player?name='+arg+'&key='+settings.hypixelAPI).end((err, res) => {
        if (err) {
        return message.channel.send(err);
        }
        else {
            console.log(api.success)
        }
    })
}

module.exports.config = {
    name: "player",
    description: "",
    usage: settings.prefix + "player <IGN>",
    accessableby: "Everyone",
    aliases: ['p']
}