const Discord = require('discord.js');
const settings = require('../settings.json');
const prefixModel = require("../models/prefix")

module.exports.run = async (bot, message, args) => {
    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });

    if (!args) return message.channel.send('You must provide a **new prefix**!');

    if (args.length > 5) return message.channel.send('Your new prefix must be under \`5\` characters!')

    if (data) {
        await prefixModel.findOneAndRemove({
            GuildID: message.guild.id
        })
        
        message.channel.send(`The new prefix is now **\`${args}\`**`);

        let newData = new prefixModel({
            Prefix: args,
            GuildID: message.guild.id
        })
        newData.save();
    } else if (!data) {
        message.channel.send(`The new prefix is now **\`${args}\`**`);

        let newData = new prefixModel({
            Prefix: args,
            GuildID: message.guild.id
        })
        newData.save();
    }

}

module.exports.config = {
    name: "setprefix",
    description: "set the bot's prefix",
    usage: settings.prefix + "setprefix <newPrefix>",
    accessableby: "Everyone",
    aliases: ['newprefix']
}