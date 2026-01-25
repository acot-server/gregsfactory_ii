ServerEvents.recipes(event => {

    ////// Machine Recipe //////
       event.recipes.gtceu.assembly_line('transmutator')
        .itemInputs(
            '10x gtceu:chroniton_hoursglass',
            '64x gtnn:uxv_wrap_circuit',
            '64x gtnn:wrap_cosmic_smd_inductor',
            '64x gtnn:wrap_cosmic_smd_diode',
            '64x gtnn:wrap_cosmic_smd_capacitor',
            '64x gtnn:wrap_cosmic_smd_resistor',
            '64x gtnn:wrap_cosmic_smd_transistor'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 2880),
            Fluid.of('gtceu:primal_matter', 5760),
            Fluid.of('gtceu:charged_matter', 5760),
            Fluid.of('gtceu:neutral_matter', 5760)
        )
        .itemOutputs(
            'qilby_core:transmutator'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:chroniton_hoursglass')).CWUt(6144).EUt(GTValues.VA[GTValues.MAX]))
        .duration(1800)
        .EUt(GTValues.VA[GTValues.MAX]);
})
