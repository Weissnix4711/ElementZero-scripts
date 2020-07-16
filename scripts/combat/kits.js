/*
A kit system made by nickg two, it has 7 kits. 

Features:
- Optional only 1 kit per player
- See which kits are available (.kit list)
- Staff only kits
- Fully customisable
- Support for kit groups
- Give the player any items you want, provided they are spawnable with commands. This includes addon items.

For the staff kits, make sure you have the staff tag (/tag @s add staff)
*/

import {
    getPlayerByNAME
} from "ez:player";

import {
    onChat
} from "ez:chat";

import {
    onPlayerInitialized
} from "ez:player";

import config from './kitsConfig';

const system = server.registerSystem(0, 0);

console.log("kits2.js loaded");

infoCommand = ['info', 'help'];
getCommand = ['get', 'buy', 'redeem', 'purchase'];

onChat((cmdObject) => {
    try {
        let player = getPlayerByNAME(cmdObject.sender);
        let playerName = player.name;

        if (!cmdObject.content.startsWith(".kit") {return};
        const command = cmdObject.content.search(/\.kit (.+) .*/);

        //info command
        if (infoCommand.includes(command)) {
            system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ tellraw @s {"rawtext":[{"text":"== Kits ==\nAvailable kits are: ${Object.keys(config)} script made by Nickg two and Cynical"}]}`, () => {});
        }
        
        //redeem kit
        else if (getCommand.includes(command)) {
            const kitGroup = cmdObject.content.search(/\.kit .+ (.+) .+/);
            const kitName = cmdObject.content.search(/\.kit .+ .+ (.+)/);

            //list through every item and give it to player
            for (i = 0; i < eval(`config.${kitGroup}.${kitName}.items.length`); i++) {
                let itemName = eval(`config.${kitGroup}.${kitName}.items[i].name`);
                let itemAmount = eval(`config.${kitGroup}.${kitName}.items[i].amount`);
                system.executeCommand(`give "${playerName}" ${itemName} ${itemAmount}`, () => {});
            }
        }

        else {
            //invalid command
            system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ tellraw @s {"rawtext":[{"text":"Kits: error. Invalid subcommand. Run .kit info for more information."}]}`, () => {});
        }

    } catch(err) {
        console.error(err);
    }
});

onPlayerInitialized(player => {
    let playerName = player.name
    system.executeCommand(`scoreboard objectives add kit dummy`,{});
    system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ scoreboard players add @s kit 0`,{});
    system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ title @s title Make sure to do .kit, n§b@s`,{});
})