ServerEvents.recipes(ev => {
<<<<<<< HEAD
    // MV Casing
    ev.remove('gtceu:shaped/casing_mv');
    ev.remove('gtceu:assembler/casing_mv');
=======
    ev.remove('gtceu:shaped/casing_mv');
    ev.remove('gtceu:assembler/casing_mv');

>>>>>>> 5c7f133 (change material for MV hull)
    ev.shaped(
        'gtceu:mv_machine_casing',
        [ 'PPP'
        , 'PWP'
        , 'PPP'],
        {
            P: '#forge:plates/terra_steel',
            W: '#forge:tools/wrench'
        }
    );
    ev.recipes.gtceu.assembler('new_mv_casing')
        .itemInputs('8x #forge:plates/terra_steel')
        .itemOutputs('gtceu:mv_machine_casing')
        .circuit(8)
        .EUt(16)
        .duration(50);

    // Cetane boosted diesel (for rockets)
    ev.remove('gtceu:mixer/cetane_diesel_from_biodiesel');
    ev.remove('gtceu:mixer/cetane_diesel_from_diesel');
    ev.recipes.gtceu.mixer('new_cetane_biodiesel')
        .inputFluids(
            Fluid.of('gtceu:bio_diesel', 1000),
            Fluid.of('gtceu:tetranitromethane', 40)
        )
        .outputFluids(
            Fluid.of('gtceu:cetane_boosted_diesel', 750)
        )
        .EUt(120)
        .duration(40);
    ev.recipes.gtceu.mixer('new_cetane_diesel')
        .inputFluids(
            Fluid.of('gtceu:diesel', 1000),
            Fluid.of('gtceu:tetranitromethane', 40)
        )
        .outputFluids(
            Fluid.of('gtceu:cetane_boosted_diesel', 1000)
        )
        .EUt(120)
        .duration(40);
});

ServerEvents.tags('item', ev => {
    ev.add('forge:ingots/terra_steel', '#forge:ingots/terrasteel');
    ev.add('forge:nuggets/terra_steel', '#forge:nuggets/terrasteel');
    ev.add('forge:storage_blocks/terra_steel', '#forge:storage_blocks/terrasteel');
});
