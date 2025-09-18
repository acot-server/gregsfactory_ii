ServerEvents.recipes(event => {

    event.recipes.gtceu.circuit_assembler('enigmatic_processor')
        .itemInputs(
            'qilby_core:shukrute_printed_circuit_board',
            '2x gtceu:highly_advanced_soc',
            '16x qilby_core:quantum_smd_resistor',
            '8x qilby_core:quantum_smd_transistor',
            '16x qilby_core:quantum_smd_diode',
            '12x qilby_core:quantum_smd_capacitor'
        )
        .itemOutputs(
            '12x qilby_core:enigmatic_processor'
        )
        .duration(150)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.circuit_assembler('enigmatic_processor_assembly')
        .itemInputs(
            'qilby_core:shukrute_printed_circuit_board',
            '3x qilby_core:enigmatic_processor',
            '16x qilby_core:quantum_smd_resistor',
            '8x qilby_core:quantum_smd_transistor',
            '32x gtceu:ram_chip',
            '16x qilby_core:quantum_smd_diode'
        )
        .itemOutputs(
            '6x qilby_core:enigmatic_processor_assembly'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembly_line('enigmatic_processor_supercompter')
        .itemInputs(
            'qilby_core:shukrute_printed_circuit_board',
            '4x qilby_core:enigmatic_processor_assembly',
            '16x qilby_core:quantum_smd_diode',
            '14x qilby_core:quantum_smd_transistor',
            '16x qilby_core:quantum_smd_resistor',
            '16x qilby_core:quantum_smd_inductor',
            '12x qilby_core:quantum_smd_capacitor',
            '24x gtca:radon_polymer_plate',
            '8x gtca:quantum_alloy_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 1152),
            Fluid.of('gtca:radon_polymer', 576)
        )
        .itemOutputs(
            '3x qilby_core:enigmatic_processor_computer'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:enigmatic_processor_assembly')).CWUt(512).EUt(GTValues.VA[GTValues.UV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.assembly_line('enigmatic_processor_mainframe')
        .itemInputs(
            'gtceu:neutronium_frame',
            '2x qilby_core:enigmatic_processor_computer',
            '16x qilby_core:quantum_smd_diode',
            '14x qilby_core:quantum_smd_transistor',
            '16x qilby_core:quantum_smd_resistor',
            '16x qilby_core:quantum_smd_inductor',
            '12x qilby_core:quantum_smd_capacitor',
            '64x gtca:radon_polymer_plate',
            '64x gtceu:ram_chip',
            '16x gtceu:ruthenium_trinium_americium_neutronate_double_wire',
            '8x gtca:quantum_alloy_plate'

        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtca:radon_polymer', 1440)
        )
        .itemOutputs(
            'qilby_core:enigmatic_processor_mainframe'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:enigmatic_processor_computer')).CWUt(2048).EUt(GTValues.VA[GTValues.UV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV]);

});
