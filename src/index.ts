/*
 * Copyright 2019 Piyush Bhangale (ionadev)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Discord from 'discord.js';
import * as fs from 'fs';
import './utils/extensions/Guild';
import "./utils/extensions/User";

const client = new Discord.Client();


client.on("ready", () => {
    console.log("[ BOT ] - Conected To Discord");
});

// @ts-ignore
client.commands = new Discord.Collection();
// @ts-ignore
client.aliases = new Discord.Collection();
//@ts-ignore
client.owners = ["365644930556755969"];

fs.readdir("./commands",(err,cmds) => {
    if(err) return console.error(err);
    cmds.forEach(cmdFile => {
        const cmdClass = require(`./commands/${cmdFile}`);
        const cmd = new cmdClass();
        // @ts-ignore
        client.commands.set(cmdFile.split(".")[0],cmd);
        cmd.aliases.forEach((a: any) => {
            // @ts-ignore
            client.aliases.set(a, cmd);
        })
    })
});

fs.readdir("./events/", (err, events) => {
    if(err) return console.error(err);
    events.forEach(eventFile => {
        const event = require(`./events/${eventFile}`);
        client.on(eventFile.split(".")[0], event.bind(null, client))
        delete require.cache[require.resolve(`./events/${eventFile}`)]
    });
});

client.login(process.env.token).then(() => console.log("[CLIENT] Logged In"));