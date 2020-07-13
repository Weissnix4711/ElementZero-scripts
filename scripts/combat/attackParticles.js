const system = server.registerSystem(0, 0);

console.log("Combat: attackParticles loaded");

system.listenForEvent("minecraft:player_attacked_entity", ({data: eventData}) => {
    const {
        player: player,
        attacked_entity: attacked
    } = eventData;

    let eventData = system.createEventData("minecraft:spawn_particle_attached_entity");
    eventData.data.effect = "minecraft:redstone_ore_dust_particle";
    eventData.data.offset = [ 0, 1, 0 ];
    eventData.data.entity = attacked;

    system.broadcastEvent("minecraft:spawn_particle_attached_entity", eventData);
});
