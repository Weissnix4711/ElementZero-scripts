/*
Custom scoreboard script.

Note: the "⭕" character is invisible, and makes each line unique.
It also changes the font, making it slightly smaller.

Made by Weissnix4711

Todo: tags still broken. Comment out for now

v1.1
*/

import {
    onPlayerInitialized,
    getPlayerByNAME,
    onPlayerLeft,
    getPlayerList
} from "ez:player";

import {
    sidebar,
    list
} from "ez:scoreboard";

import {
    getBalance
} from "ez:economy";

const system = server.registerSystem(0, 0);

console.log("scoreboard.js loaded")

var interval;

onPlayerInitialized(player => {
    try {
        //first init
        let playerData = getPlayerByNAME(player.name);
        sidebar.init(playerData, "§l§fJemix §bMC", true);
        list.init(playerData, "§lJemix §bMC", false); //descending - allows to set important notifications straight to the top.

        let i = 0;

        //update scoreboard every 15
        interval = setInterval(() => {
            //variables
            let money = getBalance(playerData);
            let playerCount = getPlayerList().length;

            //tags - broken. need to fix
            //let tagsArray = system.getComponent(player, "minecraft:tag");
            //console.log(tagsArray);
            //let levelRegex= /level(.+)/;
            //let mineLevel = tagsArray.find(value => levelRegex.search(value));
            
            //static testing variables for now
            let rank = "testrank";
            let mineLevel = "1";

            //count and deinit
            if (i >= 11) {i = 0;}
            sidebar.deinit(playerData);

            //animates sidebar
            switch (i) {
                case 0: //all light
                    sidebar.init(playerData, "§l§fJemix §bMC", true);
                    break;
                case 1: //j
                    sidebar.init(playerData, "§l§7J§femix §bMC", true);
                    break;
                case 2: //e
                    sidebar.init(playerData, "§l§fJ§7e§fmix §bMC", true);
                    break;
                case 3: //m
                    sidebar.init(playerData, "§l§fJe§7m§fix §bMC", true);
                    break;
                case 4: //i
                    sidebar.init(playerData, "§l§fJem§7i§fx §bMC", true);
                    break;
                case 5: //x
                    sidebar.init(playerData, "§l§fJemi§7x §bMC", true);
                    break;
                case 6: //m
                    sidebar.init(playerData, "§l§fJemix §3M§bC", true);
                    break;
                case 7: //c
                    sidebar.init(playerData, "§l§fJemix §bM§3C", true);
                    break;
                case 8:
                    //all dark
                    sidebar.init(playerData, "§l§7Jemix §3MC", true);
                    break;
                case 9:
                    //all light
                    sidebar.init(playerData, "§l§fJemix §bMC", true);
                    break;
                case 10:
                    //all dark
                    sidebar.init(playerData, "§l§7Jemix §3MC", true);
            }

            //SIDEBAR
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
            sidebar.set(playerData, 13, `⭕§lJems: §r§e${money}`, 13);
            //players
            sidebar.set(playerData, 14, `⭕§lPlayers: §r${playerCount}/§b50`, 14);

            //LIST
            list.set(playerData, 26, "⭕§aWelcome,", 26)
            list.set(playerData, 25, `⭕§b${player.name}`, 25)
            list.set(playerData, 24, "      ", 24)

            list.set(playerData, 23, `⭕§l§4Level: §r§c${mineLevel}`, 23);
            list.set(playerData, 22, `⭕§l§2Rank: §r${rank}`, 22);
            list.set(playerData, 21, `⭕§l§6Jems: §r§e${money}`, 21)
            list.set(playerData, 20, "     ", 20)

            //rules
            list.set(playerData, 19, "⭕§l§bRules:", 19);
            list.set(playerData, 18, "⭕§dDo not hack", 18);
            list.set(playerData, 17, "⭕§dOr gltich", 17);
            list.set(playerData, 16, "⭕§dBe respectful", 16);
            list.set(playerData, 15, "⭕§dMojang's ToS", 15);

            i++;
        }, 15)
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
        list.deinit(getPlayerByNAME(player.name));
    } catch(err) {
        console.log(err);
    }
})
