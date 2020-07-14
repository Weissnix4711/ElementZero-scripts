const system = server.registerSystem(0, 0);

console.log("Combat: attackParticles loaded");

system.listenForEvent("minecraft:player_attacked_entity", ({data: eventData}) => {
    const {
        player: player,
        attacked_entity: attacked
    } = eventData;

    let particleEventData = system.createEventData("minecraft:spawn_particle_attached_entity");
    particleEventData.data.effect = "minecraft:redstone_ore_dust_particle";
    particleEventData.data.offset = [ 0, 1, 0 ];
    particleEventData.data.entity = attacked;

    system.broadcastEvent("minecraft:spawn_particle_attached_entity", particleEventData);
});
