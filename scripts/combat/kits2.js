import {
    getPlayerByNAME
} from "ez:player";

import {
    onChat
} from "ez:chat";

import {
	onPlayerInitialized
} from "ez:player";

const system = server.registerSystem(0, 0);
console.log("kits2.js loaded");

//A kit system made by nickg two, it has 7 kits. With special features like only allowing 1 kit per player, to see what kits are availible, type .kit in chat. for staff wanting to use the staff kit, make sure you have the staff tag (/tag @s add staff)

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
			system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s arrow 64 `, () => {});
			system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s bow 1 `, () => {});
			system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s cooked_beef 16 `, () => {});
			system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s chainmail_helmet 1 `, () => {});
			system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s chainmail_chestplate 1 `, () => {});
			system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s chainmail_leggings 1 `, () => {});
			system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s chainmail_boots 1 `, () => {});
			system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ say §b@s has chosen kit Archer! `, () => {});
			system.executeCommand(`execute @a[name="${playerName}",scores={kit=1}] ~ ~ ~ say §b@s has already picked a kit! `, () => {});
			system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ scoreboard players set @s kit 1`,{});
        }
			if (cmdObject.content === kit2[0]) {
				let player = getPlayerByNAME(cmdObject.sender);
				let playerName = player.name;
				system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s iron_pickaxe 1 `, () => {});
				system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s iron_helmet 1 `, () => {});
				system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s iron_chestplate 1 `, () => {});
				system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s iron_leggings 1 `, () => {});
				system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s iron_boots 1 `, () => {});
				system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s stone_shovel 1 `, () => {});
				system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s torch 32 `, () => {});
				system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s cooked_beef 16 `, () => {});
				system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ say §b@s has chosen kit Miner! `, () => {});
				system.executeCommand(`execute @a[name="${playerName}",scores={kit=1}] ~ ~ ~ say §b@s has already picked a kit! `, () => {});
				system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ scoreboard players set @s kit 1`,{});
	}
	if (cmdObject.content === kit3[0]) {
		let player = getPlayerByNAME(cmdObject.sender);
		let playerName = player.name;
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s iron_axe 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s crafting_table 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s leather_chestplate 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s leather_leggings 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s leather_boots 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s wood 10 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s leather_helmet 32 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s cooked_beef 16 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ say §b@s has chosen kit Lumberjack! `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=1}] ~ ~ ~ say §b@s has already picked a kit! `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ scoreboard players set @s kit 1`,{});
	} 
	if (cmdObject.content === kit4[0]) {
		let player = getPlayerByNAME(cmdObject.sender);
		let playerName = player.name;
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s stone_sword 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s iron_helmet 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s iron_chestplate 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s iron_leggings 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s iron_boots 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s shield 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s cooked_beef 16 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ say §b@s has chosen kit Warrior! `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=1}] ~ ~ ~ say §b@s has already picked a kit! `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ scoreboard players set @s kit 1`,{});

	}
	if (cmdObject.content === kit5[0]) {
		let player = getPlayerByNAME(cmdObject.sender);
		let playerName = player.name;
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s blaze_rod 3 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s enchanting_table 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s book 7 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s ender_pearl 5 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s brewing_stand 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s cooked_beef 16 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ say §b@s has chosen kit Mage! `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=1}] ~ ~ ~ say §b@s has already picked a kit! `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ scoreboard players set @s kit 1`,{});
	}
	if (cmdObject.content === kit6[0]) {
		let player = getPlayerByNAME(cmdObject.sender);
		let playerName = player.name;
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s tnt 5 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s flint_and_steel 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s fire_charge 7 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s iron_pickaxe 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s leather_chestplate 1 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ give @s cooked_beef 16 `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ say §b@s has chosen kit Demolitionist! `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=1}] ~ ~ ~ say §b@s has already picked a kit! `, () => {});
		system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ scoreboard players set @s kit 1`,{});
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

onPlayerInitialized(player => {
	let playerName = player.name
	system.executeCommand(`scoreboard objectives add kit dummy`,{});
	system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ scoreboard players add @s kit 0`,{});
	system.executeCommand(`execute @a[name="${playerName}",scores={kit=0}] ~ ~ ~ title @s title Make sure to do .kit, n§b@s`,{});
	
	
})