"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
    console.log("[ BOT ] - Conected To Discord");
});
client.login(process.env.token);
//# sourceMappingURL=index.js.map