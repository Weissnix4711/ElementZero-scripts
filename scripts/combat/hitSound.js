import {
    executeCommand
} from "ez:command";

const system = server.registerSystem(0, 0);

system.listenForEvent("minecraft:entity_hurt", ({data: eventData}) => {
    const {
        attacker,
        entity,
        cause
    } = eventData;

    const attackerName = system.getComponent(attacker, "minecraft:nameable").data.name;

    if (cause === "projectile") {
        system.executeCommand(`execute "${attackerName}" ~ ~ ~ playsound random.orb @s ~ ~ ~ 0.4 0.5`, () => {});
    }
});

system.listenForEvent("minecraft:entity_death", ({data: eventData}) => {
    const {
        killer,
        entity,
        cause
    } = eventData;

    if (killer.__identifier__ === "minecraft:player" && entity.__identifier__ === "minecraft:player") {
        const attackerName = system.getComponent(killer, "minecraft:nameable").data.name;
        const entityPosx = system.getComponent(entity, "minecraft:position").data.x;
        const entityPosy = system.getComponent(entity, "minecraft:position").data.y;
        const entityPosz = system.getComponent(entity, "minecraft:position").data.z;
        system.executeCommand(`execute "${attackerName}" ~ ~ ~ playsound ambient.weather.thunder @s ${entityPosx} ${entityPosy} ${entityPosz} 0.4 0.5 0.2`, () => {});
    }
});

console.log("Combat: hitSound loaded");
