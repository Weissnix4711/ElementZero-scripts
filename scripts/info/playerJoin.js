/*
Shows a personalised greeting message for each player when they join.
Uses scorebaords to keep track of old and new players.

Also sends a global message when a new player joins.

v1
*/

import {
    onPlayerInitialized
} from "ez:player";

const system = server.registerSystem(0, 0);

onPlayerInitialized(player => {
    let playerName = player.name;

    //messages
    let greetingTitle = `§aWelcome to\n§eMine9 SMP\n§b@s`;
    let greetingMessage = `§d${playerName} just joined Mine9 Factions for the first time!!`;
    let welcomeBackMessage = `§aWelcome back\n§b@s`;

    //execute commands
    system.executeCommand(`scoreboard objectives add old dummy`,{});
    system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ scoreboard players add @s old 0`,{});
    system.executeCommand(`execute @a[name="${playerName}",scores={old=0}] ~ ~ ~ title @s title ${greetingTitle}`,{});
    system.executeCommand(`execute @a[name="${playerName}",scores={old=0}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"${greetingMessage}"}]}`,{});
    system.executeCommand(`execute @a[name="${playerName}",scores={old=1}] ~ ~ ~ title @s title ${welcomeBackMessage}`,{});
    system.executeCommand(`execute @a[name="${playerName}",scores={old=0}] ~ ~ ~ scoreboard players set @s old 1`,{});
})

console.log("playerJoin.js loaded");
