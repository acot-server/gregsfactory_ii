ServerEvents.recipes(event => {
    // So that beacon 
    event.recipes.create.cutting(
        'gtceu:nether_star_lens',
        'gtceu:nether_star_block'
    ).processingTime(600);
    // Make eye of ender accessible in MV
    event.remove({id: 'gtceu:chemical_bath/eye_of_ender'});
    event.recipes.gtceu.chemical_bath('eye_of_ender_mv')
        .itemInputs('minecraft:ender_pearl')
        .inputFluids(Fluid.of('gtceu:blaze', 144))
        .itemOutputs('minecraft:ender_eye')
        .EUt(120)
        .duration(50);
})
