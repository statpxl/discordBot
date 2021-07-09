const Discord = require('discord.js');
const settings = require('./settings.json');
const mongoose = require('mongoose');
const prefix = require('./models/prefix');

const bot = new Discord.Client({ disableEveryone: true });

mongoose.connect(settings.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm") return;

    const data = await prefix.findOne({
        GuildID: message.guild.id
    });

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ') + 1);

    if (data) {
        const prefix = data.Prefix;

        if (!message.content.startsWith(prefix)) return;
        let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(bot, message, args)
    } else if (!data) {
        const prefix = settings.prefix;
        
        if (!message.content.startsWith(prefix)) return;
        let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(bot, message, args)
    }
})

bot.login(settings.token);