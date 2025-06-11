ServerEvents.recipes(event => {
    event.recipes.create.compacting('gtceu:firebricks', '4x gtceu:fireclay_dust').heated();
    event.recipes.create.compacting('gtceu:wood_plate', '2x gtceu:wood_dust')
})