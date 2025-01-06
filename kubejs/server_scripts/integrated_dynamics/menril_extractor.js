ServerEvents.recipes(event => {
    event.recipes.gtceu.extractor('liquid_menril')
        .itemInputs(
            'integrateddynamics:menril_log' 
        )
        .outputFluids('integrateddynamics:menril_resin')
        .duration(10)
        .EUt(16);

    event.recipes.gtceu.fluid_solidifier('crystalized_menril_block')
        .notConsumable('gtceu:block_casting_mold')
        .inputFluids(
            Fluid.of('integrateddynamics:menril_resin', 1000)
        )
        .itemOutputs('integrateddynamics:crystalized_menril_block')
        .duration(10)
        .EUt(16);
});