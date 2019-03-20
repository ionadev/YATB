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
import {Client, Guild} from "discord.js";
import guildSettings from "../utils/enmap/guildSettings";

module.exports = async (_client: Client,guild: Guild) => {
    const defaultSettings = {
        prefix: ")",
        modLogChannel: "",
        modRole: "",
        adminRole: "",
        welcomeChannel: "",
        welcomeMessage: "Say hello to {{user}}, everyone! We all need a warm welcome sometimes :D"
    };

    guildSettings.ensure(guild.id, defaultSettings);
};