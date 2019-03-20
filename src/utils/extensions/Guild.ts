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

import {Structures,Client} from "discord.js";
// @ts-ignore
import * as Enmap from 'enmap';
import guildSettings from "../enmap/guildSettings";

class GuildSettingsHelper extends Enmap{
    private id: any;
    constructor(id:any){
        super(id);
        this.id = id;
    }

    // @ts-ignore
    set(key: any,value: any){
        const setting = guildSettings.get(this.id);
        Object.defineProperty(setting,key,value);
        guildSettings.set(this.id,setting);
    }
}

const AlteredGuild = Structures.extend("Guild", Guild => {
    class BotGuild extends Guild {
        private settings: any;
        constructor(client: Client, data: any){
            super(client, data);
            this.settings = new GuildSettingsHelper(this.id);
        }
    }
    return BotGuild;
});

export default AlteredGuild;