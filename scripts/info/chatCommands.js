/*
Adds a few chat commands. Easily customisable.

v1
*/

import {
    getPlayerByNAME
} from "ez:player";

import {
    onChat
} from "ez:chat";

const system = server.registerSystem(0, 0);
console.log("chatCommands.js loaded");

//commands
let suicide = ".suicide";
let info = ".info";

onChat((cmdObject) => {
    if (cmdObject.content == suicide) {
        system.executeCommand(`kill "${cmdObject.sender}"`, () => {});
    }

    let player = getPlayerByNAME(cmdObject.sender);
    let playerName = player.name;
    let playerXuid = player.xuid;
    let playerUuid = player.uuid;
    let infoMessage = `§r§k§6||§r§eWelcome to...§r§k§6||\n§r§k§6||§r§4  Mine9 SMP  §r§k§6||\n§r§b-----------------\n\n§r§4Whitelist only!\n§r§eSee our website for more details\n§r§6mine9.ddns.net`

    if (cmdObject.content == info) {
        system.executeCommand(`tellraw "${playerName}" {"rawtext":[{"text":"${infoMessage}"}]}`, () => {});
    }
});
