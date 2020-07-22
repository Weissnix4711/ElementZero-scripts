/*
Custom scoreboard script.

Note: the "⭕" character is invisible, and makes each line unique.
It also changes the font, making it slightly smaller.

Made by Weissnix4711

v1.0
*/

import {
    onPlayerInitialized,
    getPlayerByNAME,
    onPlayerLeft,
    getPlayerList
} from "ez:player";

import {
    sidebar
} from "ez:scoreboard";

import {
    getBalance
} from "ez:economy";

const system = server.registerSystem(0, 0);

var interval;

onPlayerInitialized(player => {
    try {
        //first init
        let playerData = getPlayerByNAME(player.name);
        sidebar.init(playerData, "§l§fJemix §bMC", true);

        let i = 0;

        //update scoreboard every 20
        interval = setInterval(() => {
            let money = getBalance(playerData);
            let playerCount = getPlayerList().length;

            if (i >= 6) {i = 0;}
        
            sidebar.deinit(playerData);

            switch (i) {
                case 0:
                    sidebar.init(playerData, "§l§fJemix §bMC", true);
                    break;
                case 1:
                    sidebar.init(playerData, "§l§7J§femix §bMC", true);
                    break;
                case 2:
                    sidebar.init(playerData, "§l§fJ§7e§fmix §bMC", true);
                    break;
                case 3:
                    sidebar.init(playerData, "§l§fJe§7m§fix §bMC", true);
                    break;
                case 4:
                    sidebar.init(playerData, "§l§fJem§7i§fx §bMC", true);
                    break;
                case 5:
                    sidebar.init(playerData, "§l§fJemi§7x §bMC", true);
            }

            //---
            sidebar.set(playerData, 0, "⭕----------------", 0);
            sidebar.set(playerData, 1, "", 1);
            //ip
            sidebar.set(playerData, 2, "⭕§l§a♦ §fIP:", 2);
            sidebar.set(playerData, 3, "⭕§aplay.jemix.tk", 3);
            sidebar.set(playerData, 4, " ", 4);
            //discord
            sidebar.set(playerData, 5, "⭕§l§4♦ §fDiscord:", 5);
            sidebar.set(playerData, 6, "⭕§44sux6JX", 6);
            sidebar.set(playerData, 7, "  ", 7);
            //season
            sidebar.set(playerData, 8, "⭕§l§b♦ Season:", 8);
            sidebar.set(playerData, 9, "⭕§bSE1", 9);
            sidebar.set(playerData, 10, "   ", 10);
            sidebar.set(playerData, 11, "⭕---------------", 11);
            sidebar.set(playerData, 12, "    ", 12);
            //money
            sidebar.set(playerData, 13, `⭕Jems: §e${money}`, 13);
            //players
            sidebar.set(playerData, 15, `⭕Players: ${playerCount}/§b50`, 15);

            i++;
        }, 20)
    } catch(err) {
        console.log(err);
    }
})

onPlayerLeft(player => {
    try {
        //stop interval
        clearInterval(interval);
        //destroy scoreboard for player
        sidebar.deinit(getPlayerByNAME(player.name));
    } catch(err) {
        console.log(err);
    }
})