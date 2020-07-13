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
    const entityData = system.getComponent(attacker, "minecraft:nameable").data.name;
    const entityName = getPlayerByNAME(entityData);

    if (healthPercentage < 0) {healthPercentage = 0}

    system.executeCommand(`scoreboard objectives remove "${entityName}HealthBar"`, () => {});
    system.executeCommand(`scoreboard objectives add "${entityName}HealthBar" dummy "Health: ${healthPercentage}"`, () => {});
    system.executeCommand(`scoreboard players "${entityName}" "${entityName}HealthBar" 0`, () => {});
    system.executeCommand(`scoreboard objectives setdisplay belowname "${entityName}HealthBar"`, () => {});
})

console.log("Combat: mobHealthBar loaded");
