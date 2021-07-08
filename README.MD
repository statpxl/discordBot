# Statpxl Discord Bot

*currrently very basic, help, invite, and ping command. more coming soontm*

## Prerequisites

* Node.js + npm https://nodejs.org/
* Discord.js https://discord.js.org/
* Discord bot application https://discord.dev/

## Getting Started

After cloning the repository, open your terminal and type, it should install all packages:
```
npm i
```
You will need to change `settings.example.json` to `settings.json`.
* Most of the information there is optional, such as invite, status, type, name, and desc (will have __OPTIONAL). I do recommend having it though, changes to it might cause errors.
* "invite" is just the bot's invite URL - "status" can be "dnd", "online", or "idle" - "type" can be "PLAYING", "WATCHING", or "LISTENING" - "name" is the activity name (ex.***watching** !help* / "!help" would be the name) - "desc" is the activity description.

To self-host the bot run `node .` in the bot directory.