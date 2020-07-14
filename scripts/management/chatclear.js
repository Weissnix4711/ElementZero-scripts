import {
    getPlayerByNAME
} from "ez:player";

import {
    onChat
} from "ez:chat";

const system = server.registerSystem(0, 0);
console.log("chatclear.js loaded");

let clear = ['.cc help'];
let chat = ['.cc'];

onChat((cmdObject) => {
    try {
        if (cmdObject.content === clear[0]) {
			system.executeCommand(`say Chat clearing commands are only for those that have the "staff" tag, and to clear the chat, type .cc`, () => {});
        }
		if (cmdObject.content === chat[0]) {
			let player = getPlayerByNAME(cmdObject.sender);
			let playerName = player.name;
			system.executeCommand(`execute @a[name="${playerName}",tag=staff] ~ ~ ~ say    
-
-
-
-
-
-

-
-

-
-
-
-

-
-

-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
=-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-

-
-
-
-

-
-
-

-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-

-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
  §bChat Cleared`, () => {});
        }
    } catch(err) {
        console.error(err);
    }
});