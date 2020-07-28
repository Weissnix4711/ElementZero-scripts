/*
Rank system, with chat command. Commands editable below, in section VARIABLES.

Regex is used for any subCommands.

Check ranksConfig.js for configuration details.

v1
*/

import config from './ranksConfig.js';

import {
    getPlayerByNAME,
    onPlayerInitialized
} from "ez:player";

import {
    onChat
} from "ez:chat";

const system = server.registerSystem(0, 0);

//ummm.. this works, idk why. but it doesn't without.
//leave it alone
const ranksConfig = config;

//===============
//== VARIABLES ==
//===============

var baseCommand = ".rank";
var setRegex = /set (.+) (.+)/;
var removeRegex = /remove (.+)/;
var infoMessage = "Rank system.\nMade by Weissnix4711\n\nDo .rank set <player name> <rank name>\n\nEdit the config to include your own ranks.";

//===================
//== CHAT COMMANDS ==
//===================

onChat((cmdObject) => {
    try {
        //if does not begin with baseCommand, return
        if (!cmdObject.content.startsWith(baseCommand)) {
            return;
        }

        //if exactly baseCommand, show info
        if (cmdObject.content === baseCommand) {
            system.executeCommand(`tellraw @a[name="${cmdObject.sender}"] {"rawtext":[{"text":"${infoMessage}"}]}`, () => {})
            return;
        }

        let subRegex = new RegExp(`${baseCommand} (.+)`);
        let match = cmdObject.content.match(subRegex);
        let subCommand = match[1];

        //Set sub-command
        if (setRegex.test(subCommand)) {
            //set arguments
            let args = subCommand.match(setRegex);
            let playerName = args[1];
            let rank = args[2];
            //run function
            setRank(cmdObject.sender, playerName, rank);
        }
        //Remove sub-command
        if (removeRegex.test(subCommand)) {
            let playerName = subCommand.match(removeRegex)[1];
            //run function remove rank
            removeRank(cmdObject.sender, playerName);
        }

    } catch(err) {
        console.error(err)
    }
});

//===============
//== FUNCTIONS ==
//===============

//get rank
function rank(playerName, callback) {
    system.executeCommand(`tag "${playerName}" list`, (result) => {
        let message = result.data.statusMessage;
        let rankRegex= /.*rank-.+/;
        let tags = message.substring(message.indexOf(":")+1,message.length).trim().split(", ");
        let uncleaned = tags.find(function (value) {if (rankRegex.test(value)) {return value}});
        let rank = uncleaned.match(/\u00A7a(.+)\u00A7r/)[1];
        callback(rank)
    });
}

//SET RANK
export function setRank(sender, playerName, rank) {
    try {
        console.log(`Ranks: Try to set ${playerName}'s rank to ${rank}.`)

        let customName = eval(`ranksConfig.${rank}.prefix`);

        //set prefix and level tag
        system.executeCommand(`execute @a[name="${sender}",tag=staff] ~ ~ ~ execute @a[name="${playerName}"] ~ ~ ~ custom-name set prefix @s "${customName}"`, () => {});
        system.executeCommand(`execute @a[name="${sender}",tag=staff] ~ ~ ~ execute @a[name="${playerName}"] ~ ~ ~ tag @s add "rank-${rank}"`, () => {});

        //particles
        for (let i = 0; i < eval(`ranksConfig.${rank}.particles`).length; i++) {
            let p = eval(`ranksConfig.${rank}.particles[i]`);
            system.executeCommand(`execute @a[name="${sender}",tag=staff] ~ ~ ~ execute @a[name="${playerName}"] ~ ~ ~ tag @s add "p${p}"`, () => {});
        }

        console.log("Ranks: Done!")
    } catch(err) {
        console.error(err);
    }
}

//REMOVE RANK
export function removeRank(sender, playerName) {
    try {
        console.log(`Ranks: Try to remove rank from ${playerName}.`)

        //remove custom name
        system.executeCommand(`execute @a[name="${sender}",tag=staff] ~ ~ ~ execute @a[name="${playerName}"] ~ ~ ~ custom-name clear @s`, (blah) => {console.log(JSON.stringify(blah))});

        rank(playerName, function(rank) {
            //remove current rank
            system.executeCommand(`execute @a[name="${sender}",tag=staff] ~ ~ ~ execute @a[name="${playerName}"] ~ ~ ~ tag @s remove "${rank}"`, () => {});
            //remove particles from current rank
            let pureRankName = rank.match(/rank-(.+)/)[1];
            let particleTagsArray = eval(`ranksConfig.${pureRankName}.particles`);
            for (let i = 0; i < particleTagsArray.length; i++) {
                let p = eval(`ranksConfig.${pureRankName}.particles`)[i];
                let q = `p${p}`;
                system.executeCommand(`execute @a[name="${sender}",tag=staff] ~ ~ ~ execute @a[name="${playerName}"] ~ ~ ~ tag @s remove "${q}"`, () => {});
            }

            console.log("Ranks: Done!")
        });
    } catch(err) {
        console.error(err);
    }
}

console.log("ranks.js loaded");