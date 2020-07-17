import {
    getPlayerByNAME
} from "ez:player";

import {
    onChat
} from "ez:chat";

const system = server.registerSystem(0, 0);
console.log("wild.js loaded");

let wild = ['.wild'];

//a .wild command to teleport you to a random location! made by nickg two

onChat((cmdObject) => {
    try {
		if (cmdObject.content === wild[0]) {
			let player = getPlayerByNAME(cmdObject.sender);
			let playerName = player.name;
            let playerXuid = player.xuid;
            //this below uses the spreadplayers command to teleport the player to a random location, you can change the numbers to change the places where it will teleport players
            system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ spreadplayers 10000 10000 300 500 @s`, () => {});
            system.executeCommand(`gamerule falldamage false`, () => {});
            //this below waits 1 second before executing the command to turn fall damage back on, change the time to you likings
            setTimeout(function(){ system.executeCommand(`gamerule falldamage true`, () => {}); }, 1000);
        }
    } catch(err) {
        console.error(err);
    }
});