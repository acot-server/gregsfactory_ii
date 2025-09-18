ServerEvents.recipes(event => {

    event.recipes.gtceu.polymerizer('transparent_aluminium')
        .itemInputs(
            'gtceu:neutronium_dust'
        )
        .circuit(10)
        .inputFluids(
            Fluid.of('gtceu:aluminium', 5760),
            Fluid.of('gtceu:trinium', 144),
            Fluid.of('gtceu:polytetrafluoroethylene', 57600)
        )
        .outputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 28800)
        )
        .duration(1500)
        .EUt(GTValues.VA[GTValues.UHV]);
});