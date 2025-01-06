ServerEvents.recipes(event => {
    event.recipes.create.mixing([Fluid.of('gtceu:rubber', 648), 'gtceu:tiny_sulfur_dust'], ['gtceu:sulfur_dust', '15x gtceu:raw_rubber_dust']).heated();
    event.recipes.create.mixing('gtceu:red_alloy_dust', ['gtceu:copper_dust', '6x minecraft:redstone'])
    //Raw Rubber Pulp
    event.recipes.create.crushing('3x gtceu:raw_rubber_dust', 'gtceu:rubber_log');
    event.recipes.create.crushing('gtceu:raw_rubber_dust', 'gtceu:rubber_sapling');

})