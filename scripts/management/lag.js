import {
    getPlayerByNAME
} from "ez:player";

import {
    onChat
} from "ez:chat";

const system = server.registerSystem(0, 0);
console.log("lag.js loaded");

let f = ['.f'];
let lag = ['.lag'];

onChat((cmdObject) => {
    try {
        if (cmdObject.content === f[0]) {
			system.executeCommand(`execute @a ~ ~ ~ say f`, () => {});
        }
		if (cmdObject.content === lag[0]) {
		let player = getPlayerByNAME(cmdObject.sender);
		let playerName = player.name;
		system.executeCommand(`execute @a[name="${playerName}",tag=staff] ~ ~ ~ difficulty p`, () => {});
		system.executeCommand(`execute @a[name="${playerName}",tag=staff] ~ ~ ~ difficulty n`, () => {});	
		system.executeCommand(`execute @a[name="${playerName}",tag=staff] ~ ~ ~ kill @e [type=item]`, () => {});
		system.executeCommand(`execute @a[name="${playerName}",tag=staff] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§blag cleared"}]}`, () => {});
        }
    } catch(err) {
        console.error(err);
    }
});