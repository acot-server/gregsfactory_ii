ServerEvents.recipes(event => {

    event.remove({id: 'jei:/gtnn/nasa_workbench/tier_1_rocket'})

    event.recipes.gtceu.assembler('rocket_t1')
        .itemInputs(
            'ad_astra:steel_engine',
            'ad_astra:rocket_nose_cone',
            '4x ad_astra:rocket_fin',
            '8x gtnn:heavy_plate_t1'
        )
        .inputFluids(
            Fluid.of('gtceu:stainless_steelr', 576)
        )
        .itemOutputs(
            'ad_astra:tier_1_rocket'
        )
        .duration(12000)
        .EUt(GTValues.VA[GTValues.MV]);
    });