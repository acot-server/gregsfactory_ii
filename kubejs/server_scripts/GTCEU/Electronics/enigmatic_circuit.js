ServerEvents.recipes(event => {

    event.recipes.gtceu.circuit_assembler('enigmatic_processor')
        .itemInputs(
            'qilby_core:shukrute_printed_circuit_board',
            '2x gtceu:highly_advanced_soc',
            '12x gtceu:fine_indium_tin_barium_titanium_cuprate_wire',
            '8x gtceu:naquadah_alloy_bolt'
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
            '12x gtceu:advanced_smd_inductor',
            '16x gtceu:advanced_smd_capacitor',
            '32x gtceu:ram_chip',
            '24x gtceu:fine_indium_tin_barium_titanium_cuprate_wire'
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
            '12x gtceu:advanced_smd_diode',
            '48x gtceu:nor_memory_chip',
            '44x gtceu:fine_indium_tin_barium_titanium_cuprate_wire',
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
            '64x gtceu:advanced_smd_diode',
            '64x gtceu:advanced_smd_capacitor',
            '64x gtceu:advanced_smd_inductor',
            '64x gtceu:advanced_smd_resistor',
            '64x gtceu:advanced_smd_transistor',
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
        .stationResearch(b => b.researchStack(Item.of('qilby_core:enigmatic_processor_mainframe')).CWUt(2048).EUt(GTValues.VA[GTValues.UV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV]);

});
