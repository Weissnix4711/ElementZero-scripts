/*
A system that allows players to get economy money for doing in game jobs, such as hunting, mining and farming.
Current stats is a bit of a mess, updates coming soon

Made by nickg two

v1
*/

import {
    getBalance,
    updateBalance
} from "ez:economy";

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

let info = ['.jobs'];
let farmer = ['.job farmer'];
let hunter = ['.job hunter'];
let miner = ['.job miner'];

onChat((cmdObject) => {
    try {
        if (cmdObject.content === info[0]) {
            let player = getPlayerByNAME(cmdObject.sender);
            let playerName = player.name;
            system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§bYou get money for doing jobs! to pick a job, do .job hunter, .job farmer and .job miner"}]}`, () => {});
        }
        if (cmdObject.content === farmer[0]) {
            let player = getPlayerByNAME(cmdObject.sender);
            let playerName = player.name;
            system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ say §b@s has joined job Farmer! `, () => {});
            system.executeCommand(`execute @a[name="${playerName}",scores={job=1}] ~ ~ ~ say §b@s is already in this job! `, () => {});
            system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ scoreboard players set @s job 1`,{});
        }
        if (cmdObject.content === hunter[0]) {
            let player = getPlayerByNAME(cmdObject.sender);
            let playerName = player.name;
            system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ say §b@s has joined job Hunter! `, () => {});
            system.executeCommand(`execute @a[name="${playerName}",scores={job=2}] ~ ~ ~ say §b@s is already in this job! `, () => {});
            system.executeCommand(`execute @a[name="${playerName}"]  ~ ~ ~ scoreboard players set @s job 2`,{});
	}
	if (cmdObject.content === miner[0]) {
            let player = getPlayerByNAME(cmdObject.sender);
            let playerName = player.name;
            system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ say §b@s has joined job Miner! `, () => {});
            system.executeCommand(`execute @a[name="${playerName}",scores={job=3}] ~ ~ ~ say §b@s is already in this job! `, () => {});
            system.executeCommand(`execute @a[name="${playerName}"]  ~ ~ ~ scoreboard players set @s job 3`,{});
	}
    } catch(err) {
        console.error(err);
    }
});

system.listenForEvent("minecraft:entity_death", ({data: eventData}) => {
    const {
        killer,
        entity,
        cause
    } = eventData;

    //this listens if a certain entity is killed, and gives the according amount of money, along with a coustomizeable message

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:chicken") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 1 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:cow") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 2 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:pig") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 1 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) §6bacon time boiz"}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:cod") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 3 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) §6Fisherman!"}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:creeper") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 4 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) §4KABOOM"}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:drowned") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 1 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:elder_guardian") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 40 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) §eMiniboss!!"}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:ender_dragon") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 100 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) §4Bro nice job-nick"}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:enderman") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 4 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:ghast") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 4 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:husk") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 2 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:magma_cube") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 4 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:phantom") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 4 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:rabbit") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 1 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:salmon") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 1 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:sheep") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 1 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:silverfish") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 2 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:skeleton") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 2 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:slime") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 1 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) §bcash machine"}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:spider") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 1 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:squid") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 8 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) §2nick for admin 2020"}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:stray") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 3 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:tropicalfish") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 1 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:wither") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 70 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) §6beacon time boiz"}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:wither_skeleton") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 5 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}"] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter)"}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:zombie") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 2 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}"] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter)"}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:zombie_pigman") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 5 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job!(hunter) §4NOW RUN LIKE HECK"}]}`, () => {});
    }

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:zombie_villager") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        system.executeCommand(`update-balance @a[name="${attackerName}",scores={job=2}] 5 yeet`, () => {});
        system.executeCommand(`execute @a[name="${attackerName}",scores={job=2}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing your job! (hunter) "}]}`, () => {});
    }
    }
);

onPlayerInitialized(player => {
    let playerName = player.name
    system.executeCommand(`scoreboard objectives add job dummy`,{});
    system.executeCommand(`execute @a[name="${playerName}"] ~ ~ ~ scoreboard players add @s job 0`,{});
    system.executeCommand(`execute @a[name="${playerName}",scores={job=0}] ~ ~ ~ title @s actionbar pssst, do .job`,{});
})

//this below is miner and farmer jobs, has alot of work to do

system.listenForEvent("minecraft:player_destroyed_block", ({data: eventData}) => {
    const {
        player: entity,
        block_identifier: block,
    } = eventData
    let entityName = system.getComponent(entity, "minecraft:nameable" ).data.name

    const farm = {
        "minecraft:wheat": block,
        "minecraft:potatoes": block,
        "minecraft:beetroot": block,
        "minecraft:carrots": block,
        "minecraft:melon_stem": block,
        "minecraft:pumpkin_stem": block
    }
    if (block in farm) {
        system.executeCommand(`execute @a[name="${entityName}",scores={job=1}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing a job! (farmer) "}]}`, () => {});
        system.executeCommand(`update-balance @a[name="${entityName}",scores={job=1}] 1 yeet`, () => {});
    }
    const Blocks = {
        "minecraft:iron_ore" : block,
        "minecraft:gold_ore": block,
        "minecraft:diamond_ore": block,
        "minecraft:lapis_ore": block,
        "minecraft:redstone_ore": block,
        "minecraft:lit_redstone_ore": block,
        "minecraft:coal_ore": block,
        "minecraft:emerald_ore": block,
        "minecraft:quartz_ore": block,
        "minecraft:nether_gold_ore": block,
    }
    if (block in Blocks) {
        system.executeCommand(`execute @a[name="${entityName}",scores={job=3}] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou got some money for doing a job! (miner) "}]}`, () => {});
        system.executeCommand(`update-balance @a[name="${entityName}",scores={job=3}] 2 yeet`, () => {});
    }
});

console.log("Jobs.js loaded");
