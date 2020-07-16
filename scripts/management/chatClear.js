import {
    getPlayerByNAME
} from "ez:player";

import {
    onChat
} from "ez:chat";

const system = server.registerSystem(0, 0);

console.log("chatClear.js loaded");

let clearHelp = ['.cc help'];
let clear = ['.cc'];

onChat((cmdObject) => {
    try {
        if (cmdObject.content === clearHelp[0]) {
            system.executeCommand(`say Chat clearing commands are only for those that have the "staff" tag, and to clear the chat, type .cc`, () => {});
        } else if (cmdObject.content === clear[0]) {
            let player = getPlayerByNAME(cmdObject.sender);
            let playerName = player.name;
            for (i = 0; i < 30; i++) {
                system.executeCommand(`execute @a[name="${playerName}",tag=staff] ~ ~ ~ tellraw @a {"text":" "}`, () => {});
            }
            system.executeCommand(`execute @a[name="$playerName}",tag=staff] ~ ~ ~ say §bChat Cleared!`, () => {});
        }
    } catch(err) {
        console.error(err);
    }
});
