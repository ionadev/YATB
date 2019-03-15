import * as Discord from 'discord.js';

const client = new Discord.Client();

client.on("ready", () => {
    console.log("[ BOT ] - Conected To Discord");
});

client.login(process.env.token);