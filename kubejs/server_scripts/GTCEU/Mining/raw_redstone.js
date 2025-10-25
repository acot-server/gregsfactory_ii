ServerEvents.recipes(event => {

    event.remove({ id: 'regions_unexplored:raw_redstone_block'});
    
    event.recipes.gtceu.macerator('rgu_raw_redstone')
        .itemInputs(
            'regions_unexplored:raw_redstone_block'
        )
        .itemOutputs(
            '10x gtceu:crushed_redstone_ore'
        )
        .chancedOutput(
            'gtceu:cinnabar_gem', 1400, 0
        )
        .chancedOutput(
            'gtceu:tiny_chromium_dust', 800, 0
        )
        .duration(400)
        .EUt(2);
})
