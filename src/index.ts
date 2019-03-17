import * as Discord from 'discord.js';

const client = new Discord.Client();
const PREFIX = "!";

client.on("ready", () => {
    console.log("[ BOT ] - Conected To Discord");
});

client.on('message', (msg: Discord.Message) => {
    if(msg.author.bot) return;
    if(msg.content.indexOf(PREFIX) !== 0) return;
    const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
});

client.login(process.env.token);