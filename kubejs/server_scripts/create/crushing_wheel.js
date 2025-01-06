ServerEvents.recipes(event => {
    //Raw Rubber Pulp
    event.recipes.create.crushing('3x gtceu:raw_rubber_dust', 'gtceu:rubber_log');
    event.recipes.create.crushing('gtceu:raw_rubber_dust', 'gtceu:rubber_sapling');

})