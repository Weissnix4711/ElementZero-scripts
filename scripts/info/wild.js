/*
Adds .wild command to teleport you to a random location!

Made by Nick and Weissnix4711

v1.1
*/

import {
    getPlayerByNAME
} from "ez:player";

import {
    onChat
} from "ez:chat";

const system = server.registerSystem(0, 0);
console.log("wild.js loaded");

let wild = ['.wild'];

onChat((cmdObject) => {
    try {
		if (cmdObject.content === wild[0]) {
			let player = getPlayerByNAME(cmdObject.sender);
			let playerName = player.name;
            //this below uses the spreadplayers command to teleport the player to a random location, you can change the numbers to change the places where it will teleport players
            system.executeCommand(`execute @a[name="${playerName}",tag=wild] ~ ~ ~ spreadplayers 10000 10000 300 500 @s`, () => {});
            system.executeCommand(`execute @a[name="${playerName}",tag=wild] ~ ~ ~ effect @s slow_falling 30 1 true`, () => {});
            system.executeCommand(`execute @a[name="${playerName}",tag=wild] ~ ~ ~ tag @s remove wild`, () => {});
            setTimeout(() => {
                system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ tag add @s wild`, () => {});
            }, 120);
        }
    } catch(err) {
        console.error(err);
    }
});