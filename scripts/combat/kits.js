import {
    getPlayerByNAME
} from "ez:player";

import {
    onChat
} from "ez:chat";

const system = server.registerSystem(0, 0);
console.log("kits.js loaded");

let test = ['.kit'];
let kita = ['.kit archer'];
let kit2 = ['.kit miner'];
let kit3 = ['.kit lumberjack'];
let kit4 = ['.kit warrior'];
let kit5 = ['.kit mage'];
let kit6 = ['.kit demolitionist'];
let kit7 = ['.kit staff'];

onChat((cmdObject) => {
    try {
        if (cmdObject.content === test[0]) {
			let player = getPlayerByNAME(cmdObject.sender);
			let playerName = player.name;
			system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§bKits are: .kit archer, .kit miner, .kit lumberjack, .kit warrior, .kit mage, §a(.kit staff)§b and .kit demolitionist---kit script made by Nickg two and Cynical"}]}`, () => {});
        }
		if (cmdObject.content === kita[0]) {
			 let player = getPlayerByNAME(cmdObject.sender);
			let playerName = player.name;
			system.executeCommand(`give "${playerName}" arrow 64 `, () => {});
			system.executeCommand(`give "${playerName}" bow 1 `, () => {});
			system.executeCommand(`give "${playerName}" cooked_beef 16 `, () => {});
			system.executeCommand(`give "${playerName}" chainmail_helmet 1 `, () => {});
			system.executeCommand(`give "${playerName}" chainmail_chestplate 1 `, () => {});
			system.executeCommand(`give "${playerName}" chainmail_leggings 1 `, () => {});
			system.executeCommand(`give "${playerName}" chainmail_boots 1 `, () => {});
			system.executeCommand(`say "${playerName}" §b has chosen kit Archer! `, () => {});
        }
			if (cmdObject.content === kit2[0]) {
				let player = getPlayerByNAME(cmdObject.sender);
				let playerName = player.name;
				system.executeCommand(`give "${playerName}" iron_pickaxe 1 `, () => {});
				system.executeCommand(`give "${playerName}" iron_helmet 1 `, () => {});
				system.executeCommand(`give "${playerName}" iron_chestplate 1 `, () => {});
				system.executeCommand(`give "${playerName}" iron_leggings 1 `, () => {});
				system.executeCommand(`give "${playerName}" iron_boots 1 `, () => {});
				system.executeCommand(`give "${playerName}" stone_shovel 1 `, () => {});
				system.executeCommand(`give "${playerName}" torch 32 `, () => {});
				system.executeCommand(`give "${playerName}" cooked_beef 16 `, () => {});
				system.executeCommand(`say "${playerName}" §bhas chosen kit Miner! `, () => {});
	}
	if (cmdObject.content === kit3[0]) {
		let player = getPlayerByNAME(cmdObject.sender);
		let playerName = player.name;
		system.executeCommand(`give "${playerName}" iron_axe 1 `, () => {});
		system.executeCommand(`give "${playerName}" crafting_table 1 `, () => {});
		system.executeCommand(`give "${playerName}" leather_chestplate 1 `, () => {});
		system.executeCommand(`give "${playerName}" leather_leggings 1 `, () => {});
		system.executeCommand(`give "${playerName}" leather_boots 1 `, () => {});
		system.executeCommand(`give "${playerName}" wood 10 `, () => {});
		system.executeCommand(`give "${playerName}" leather_helmet 32 `, () => {});
		system.executeCommand(`give "${playerName}" cooked_beef 16 `, () => {});
		system.executeCommand(`say "${playerName}" §bhas chosen kit Lumberjack! `, () => {});
	} 
	if (cmdObject.content === kit4[0]) {
		let player = getPlayerByNAME(cmdObject.sender);
		let playerName = player.name;
		system.executeCommand(`give "${playerName}" stone_sword 1 `, () => {});
		system.executeCommand(`give "${playerName}" iron_helmet 1 `, () => {});
		system.executeCommand(`give "${playerName}" iron_chestplate 1 `, () => {});
		system.executeCommand(`give "${playerName}" iron_leggings 1 `, () => {});
		system.executeCommand(`give "${playerName}" iron_boots 1 `, () => {});
		system.executeCommand(`give "${playerName}" shield 1 `, () => {});
		system.executeCommand(`give "${playerName}" cooked_beef 16 `, () => {});
		system.executeCommand(`say "${playerName}" §bhas chosen kit Warrior! `, () => {});

	}
	if (cmdObject.content === kit5[0]) {
		let player = getPlayerByNAME(cmdObject.sender);
		let playerName = player.name;
		system.executeCommand(`give "${playerName}" blaze_rod 3 `, () => {});
		system.executeCommand(`give "${playerName}" enchanting_table 1 `, () => {});
		system.executeCommand(`give "${playerName}" book 7 `, () => {});
		system.executeCommand(`give "${playerName}" ender_pearl 5 `, () => {});
		system.executeCommand(`give "${playerName}" brewing_stand 1 `, () => {});
		system.executeCommand(`give "${playerName}" cooked_beef 16 `, () => {});
		system.executeCommand(`say "${playerName}" §bhas chosen kit Mage! `, () => {});
	}
	if (cmdObject.content === kit6[0]) {
		let player = getPlayerByNAME(cmdObject.sender);
		let playerName = player.name;
		system.executeCommand(`give "${playerName}" tnt 5 `, () => {});
		system.executeCommand(`give "${playerName}" flint_and_steel 1 `, () => {});
		system.executeCommand(`give "${playerName}" fire_charge 7 `, () => {});
		system.executeCommand(`give "${playerName}" iron_pickaxe 1 `, () => {});
		system.executeCommand(`give "${playerName}" leather_chestplate 1 `, () => {});
		system.executeCommand(`give "${playerName}" cooked_beef 16 `, () => {});
		system.executeCommand(`say "${playerName}" §bhas chosen kit Demolitionist! `, () => {});
	}
	if (cmdObject.content === kit7[0]) {
		let player = getPlayerByNAME(cmdObject.sender);
		let playerName = player.name;
		system.executeCommand(`execute @a[name="${playerName}",tag=staff] ~ ~ ~ give @s command_block 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",tag=staff] ~ ~ ~ give @s redstone block 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",tag=staff] ~ ~ ~ gamemode c `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",tag=staff] ~ ~ ~ give @s diamond_sword 1 `, () => {});
	}
} catch(err) {
        console.error(err);
    }
});