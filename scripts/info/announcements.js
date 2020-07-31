/*
Send random announcements at intervals using `/tellraw` command.
Makes sure next message is not the same as the last.

v1
*/

import {
    getPlayerList
} from "ez:player";

let system = server.registerSystem(0, 0);
let lastNo = 0;

//CHANGE ME

//Note: You can use colour codes, emojis and newline '\n' characters here.
let messages = [
    "§l§4[!] §6To kill a mob, hit it until it dies.",
    "§l§4[!] §6Does anyone actually read these?",
    "§l§4[!] §6You will die if you run out of health.",
    "§l§4[!] §6Mitochondria is the powerhouse of the cell",
    "§l§4[!] §6Welcome to Joe's Crab Shack!",
    "§l§4[!] §6Press spacebar/\uE084/\uE000/\uE020 to jump."
];
//Time between messages (in ticks)
let cycleTime = 600;

//INTERVAL

let i = setInterval(() => {
    try {
        //Do not run if 0 players online
        if (getPlayerList().length <= 0) {
            return;
        }
        //Generate and display message
        let msg = randomMsg();
        system.executeCommand(`tellraw @a {"rawtext":[{"text":"${msg}"}]}`, () => {});
    } catch(err) {
        console.error(err);
    }
}, cycleTime);

//RANDOM

function randomMsg() {
    //Random number between 0 and messages.length
    let r = 0;
    while (lastNo === r) {
        r = Math.floor(Math.random() * (messages.length));
    }
    lastNo = r;
    return messages[r];
}