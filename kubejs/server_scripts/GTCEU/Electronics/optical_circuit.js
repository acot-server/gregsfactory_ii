ServerEvents.recipes(event => {

    event.recipes.gtceu.circuit_assembler('optical_processor')
        .itemInputs(
            'qilby_core:rushu_printed_circuit_board',
            'qilby_core:optical_coputation_circuit',
            '8x qilby_core:perfect_optic_fiber',
            '4x qilby_core:perfect_nano_merger',
            '8x qilby_core:hi_pulse_converter',
            '4x qilby_core:perfect_nano_splitter'
        )
        .itemOutputs(
            '12x qilby_core:optical_processor'
        )
        .duration(150)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.circuit_assembler('optical_processor_assembly')
        .itemInputs(
            'qilby_core:rushu_printed_circuit_board',
            '4x qilby_core:optical_processor',
            '8x qilby_core:perfect_optic_fiber',
            '4x qilby_core:perfect_nano_merger',
            '8x qilby_core:hi_pulse_converter',
            '4x qilby_core:perfect_nano_splitter'
        )
        .itemOutputs(
            '6x qilby_core:optical_processor_assembly'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembly_line('optical_processor_supercompter')
        .itemInputs(
            'qilby_core:rushu_printed_circuit_board',
            '4x qilby_core:optical_processor_assembly',
            '16x qilby_core:perfect_optic_fiber',
            '8x qilby_core:perfect_nano_merger',
            '16x qilby_core:hi_pulse_converter',
            '8x qilby_core:perfect_nano_splitter'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 1152),
            Fluid.of('gtceu:polybenzimidazole', 576),
            Fluid.of('qilby_core:pure_glass', 1152)
        )
        .itemOutputs(
            '3x qilby_core:optical_processor_computer'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:optical_processor_assembly')).CWUt(1536).EUt(GTValues.VA[GTValues.UHV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line('optical_processor_mainframe')
        .itemInputs(
            'gtceu:neutronium_frame',
            'qilby_core:rushu_printed_circuit_board',
            '2x qilby_core:optical_processor_computer',
            '64x qilby_core:perfect_optic_fiber',
            '32x qilby_core:perfect_nano_merger',
            '64x qilby_core:hi_pulse_converter',
            '32x qilby_core:perfect_nano_splitter',
            '64x gtceu:polybenzimidazole_foil',
            '64x gtceu:polybenzimidazole_foil',
            '64x gtceu:ram_chip',
            '16x gtceu:ruthenium_trinium_americium_neutronate_double_wire',
            '8x gtceu:trinium_plate'

        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:polybenzimidazole', 1440),
            Fluid.of('qilby_core:pure_glass', 1152)
        )
        .itemOutputs(
            'qilby_core:optical_processor_mainframe'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:optical_processor_computer')).CWUt(3072).EUt(GTValues.VA[GTValues.UHV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV]);

});
