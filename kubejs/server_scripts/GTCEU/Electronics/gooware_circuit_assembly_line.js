ServerEvents.recipes(event => {

    //gooware circuits
    event.recipes.gtceu.circuit_assembly_line('enigma_circuits')
        .itemInputs(
            '16x qilby_core:shukrute_printed_circuit_board',
            '4x gtnn:warp_highly_advanced_soc',
            '4x gtnn:wrap_ilc_chip',
            '6x gtnn:iv_wrap_circuit',
            '12x gtceu:ruthenium_trinium_americium_neutronate_single_wire',
            '48x gtceu:fine_tritanium_wire'
        )
        .inputFluids(
            Fluid.of('qilby_core:wakfu', 72)
        )
        .itemOutputs(
            '64x gtnn:gooware_processor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:wetware_processor_mainframe')).EUt(GTValues.VA[GTValues.UV]).duration(420));

    event.recipes.gtceu.circuit_assembly_line('enigma_assembly')
        .itemInputs(
            'gtnn:wetware_wrap_printed_circuit_board',
            '32x gtnn:gooware_processor',
            '12x gtnn:wrap_advanced_smd_inductor',
            '24x gtnn:wrap_advanced_smd_capacitor',
            '32x gtnn:warp_ram_chip',
            'gtnn:warp_highly_advanced_soc'
        )
        .inputFluids(
            Fluid.of('qilby_core:wakfu', 72)
        )
        .itemOutputs(
            '64x gtnn:gooware_assembly'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:gooware_processor')).EUt(GTValues.VA[GTValues.UHV]).duration(420));

    event.recipes.gtceu.circuit_assembly_line('enigma_supercomputer')
        .itemInputs(
            '4x gtnn:wetware_wrap_printed_circuit_board',
            '32x gtnn:gooware_assembly',
            '18x gtnn:wrap_advanced_smd_inductor',
            '32x gtnn:wrap_advanced_smd_capacitor',
            '48x gtnn:warp_ram_chip',
            '4x gtnn:warp_highly_advanced_soc'
        )
        .inputFluids(
            Fluid.of('qilby_core:wakfu', 72)
        )
        .itemOutputs(
            '64x gtnn:gooware_computer'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:gooware_assembly')).EUt(GTValues.VA[GTValues.UEV]).duration(420));


    event.recipes.gtceu.circuit_assembly_line('enigma_mainframe')
        .itemInputs(
            '12x gtnn:wetware_wrap_printed_circuit_board',
            '32x gtnn:gooware_computer',
            '24x gtnn:wrap_advanced_smd_inductor',
            '48x gtnn:wrap_advanced_smd_capacitor',
            '64x gtnn:warp_ram_chip',
            '12x gtnn:warp_highly_advanced_soc'
        )
        .inputFluids(
            Fluid.of('qilby_core:wakfu', 72)
        )
        .itemOutputs(
            '64x gtnn:gooware_mainframe'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UIV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:gooware_computer')).EUt(GTValues.VA[GTValues.UIV]).duration(420));

    //optical circuits

})