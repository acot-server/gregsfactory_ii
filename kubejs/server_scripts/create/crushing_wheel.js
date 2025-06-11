ServerEvents.recipes(event => {
    //Raw Rubber Pulp
    event.recipes.create.crushing('3x gtceu:raw_rubber_dust', 'gtceu:rubber_log');
    event.recipes.create.crushing('gtceu:raw_rubber_dust', 'gtceu:rubber_sapling');
    event.recipes.create.crushing('gtceu:coal_dust', 'minecraft:coal');
    event.recipes.create.crushing('gtceu:charcoal_dust', 'minecraft:charcoal');
})