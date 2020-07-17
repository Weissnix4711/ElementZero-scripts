/*
Displays health bar above player's head.
Uses scoreboard objectives and the belowname display option.

v1
*/

import {
    getPlayerByNAME
} from "ez:player";

import {
    executeCommand
} from "ez:command";

const system = server.registerSystem(0, 0);

function percentage(healthNow, healthMax)
{
  return (healthNow/healthMax);
}

system.listenForEvent("minecraft:entity_hurt", ({data: eventData}) => {
    const {
        attacker,
        damage,
        entity
    } = eventData;

    if (entity.__identifier__ !== "minecraft:player") {return}

    const healthMax = system.getComponent(entity, "minecraft:health").data.max;
    const healthBefore = system.getComponent(entity, "minecraft:health").data.value;
    const healthNow = healthBefore - damage;
    let healthPercentage = percentage(healthNow, healthMax);
    const entityName = system.getComponent(entity, "minecraft:nameable").data.name;

    if (healthPercentage < 0) {healthPercentage = 0}

    system.executeCommand(`scoreboard objectives remove "${entityName}HB"`, () => {});
    system.executeCommand(`scoreboard objectives add "${entityName}HB" dummy "Health: ${healthPercentage}"`, () => {});
    system.executeCommand(`execute @a[name="${entityName}"] ~ ~ ~ scoreboard players add @s "${entityName}HB" 0`, () => {});
    system.executeCommand(`scoreboard objectives setdisplay belowname "${entityName}HB"`, () => {});
})

console.log("playerHealthBar.js loaded");
