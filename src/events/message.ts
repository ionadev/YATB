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

import {Client, Message} from "discord.js";
const PREFIX = ")";

module.exports = async (client: Client, msg: Message) => {
    if(msg.author.bot) return;
    const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
    // @ts-ignore
    const cmdName = args.shift().toLowerCase();
    // @ts-ignore
    const cmd = client.commands.get(cmdName) || client.aliases.get(cmdName);
    if (!cmd) return null;
};