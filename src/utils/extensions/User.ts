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

import {Client, Structures} from "discord.js";
// @ts-ignore
import  * as Enmap from 'enmap';
import userSettings from "../enmap/userSettings";

class AuthorSettingsHelper extends Enmap{
    private id: any;
    constructor(id: any){
        super(id);
    }

    // @ts-ignore
    set(key: any,value: any){
        const setting = userSettings.get(this.id);
        Object.defineProperty(setting,key,value);
        userSettings.set(this.id,setting);
    }
}

const AlteredUser = Structures.extend("User" , User => {
    class BotAuthor extends User {
        private settings: any;
        constructor(client: Client, data: any) {
            super(client, data);
            this.settings = new AuthorSettingsHelper(this.id);
        }
    }
    return BotAuthor
});

export default AlteredUser;