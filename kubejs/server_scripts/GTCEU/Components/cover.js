ServerEvents.recipes(event => {

    event.remove({id: 'gtceu:assembler/cover_infinite_water'})

    event.recipes.gtceu.assembler('cover_infinite_water_lv')
        .itemInputs(
            '2x gtceu:lv_electric_pump',
            'minecraft:cauldron',
            '#gtceu:circuits/lv'
        )
        .itemOutputs(
            'gtceu:infinite_water_cover'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);
});