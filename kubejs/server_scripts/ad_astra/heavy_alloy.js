ServerEvents.recipes(event => {

    event.remove({id: 'gtceu:assembler/heavy_ingot_t1'})

    event.recipes.gtceu.assembler('heavy_ingot_t1')
        .itemInputs(
            'gtceu:dense_brass_plate',
            'gtceu:dense_aluminium_plate',
            'gtceu:dense_steel_plate'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('gtceu:stainless_steel', 72)
        )
        .itemOutputs(
            'gtnn:heavy_ingot_t1'
        )
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV]);
    });