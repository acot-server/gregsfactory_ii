ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line('opt_assembly_line')
        .itemInputs(
            '64x gtceu:blacklight',
            '8x gtceu:uhv_field_generator',
            'qilby_core:dark_matter_frame',
            '16x qilby_core:enigmatic_super_capacitor',
            '#gtceu:circuits/uev',
            'hexcasting:lens',
            'hexcasting:lens',
            'hexcasting:artifact',
            '64x gtceu:normal_optical_pipe'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:polybenzimidazole', 1440),
            Fluid.of('qilby_core:dark_energy', 1440)
        )
        .itemOutputs(
            'gtceu:optical_assembly_line'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:assembly_line')).CWUt(8192).EUt(GTValues.VA[GTValues.UEV]))
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.alloy_blast_smelter('pure_liquid_glass')
        .itemInputs(
            '16x gtceu:borosilicate_glass_dust',
            '32x gtceu:glass_dust',
            '4x gtceu:neutronium_dust',
            '10x qilby_core:stasis_dust'
        )
        .outputFluids(
            Fluid.of('qilby_core:pure_glass', 288)
        )
        .blastFurnaceTemp(12000)
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.fluid_solidifier('optical_circuit_board')
        .notConsumable('gtceu:plate_casting_mold')
        .inputFluids(
            Fluid.of('qilby_core:pure_glass', 576)
        )
        .itemOutputs(
            'qilby_core:optical_circuit_board'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)

    event.recipes.gtceu.optical_assembler('hi_pulse_converter')
        .itemInputs(
            '2x qilby_core:optical_circuit_board',
            '4x gtceu:uhv_emitter',
            '4x gtceu:uhv_sensor',
            '64x gtceu:fine_borosilicate_glass_wire'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:pure_glass', 576)
        )
        .itemOutputs(
            '16x qilby_core:hi_pulse_converter'
        )
        .CWUt(4096)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)

    event.recipes.gtceu.optical_assembler('optical_fiber')
        .itemInputs(
            '2x qilby_core:optical_circuit_board',
            '64x ae2:quartz_fiber',
            '16x ae2:orange_smart_dense_cable',
            '16x ae2:red_smart_dense_cable'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:pure_glass', 576)
        )
        .itemOutputs(
            '64x qilby_core:perfect_optic_fiber'
        )
        .CWUt(1024)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)

    event.recipes.gtceu.optical_assembler('optical_merger')
        .itemInputs(
            '2x qilby_core:optical_circuit_board',
            '64x gtceu:fine_borosilicate_glass_wire',
            '64x gtceu:fine_borosilicate_glass_wire',
            '4x gtceu:gravi_star'
        )
        .circuit(3)
        .inputFluids(
            Fluid.of('qilby_core:pure_glass', 576)
        )
        .itemOutputs(
            '32x qilby_core:perfect_nano_merger'
        )
        .CWUt(2048)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)

    event.recipes.gtceu.optical_assembler('optical_splitter')
        .itemInputs(
            '2x qilby_core:optical_circuit_board',
            '64x gtceu:fine_borosilicate_glass_wire',
            '64x gtceu:fine_borosilicate_glass_wire',
            '4x gtceu:gravi_star'
        )
        .circuit(4)
        .inputFluids(
            Fluid.of('qilby_core:pure_glass', 576)
        )
        .itemOutputs(
            '32x qilby_core:perfect_nano_splitter'
        )
        .CWUt(2048)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)

    event.recipes.gtceu.optical_assembler('optical_wafer_plate')
        .itemInputs(
            '8x qilby_core:extreme_hi_pow_integrated_circuit',
            '2x qilby_core:hi_pulse_converter',
            '2x qilby_core:perfect_nano_merger',
            '2x qilby_core:perfect_nano_splitter',
            '12x qilby_core:perfect_optic_fiber',
            'qilby_core:optical_circuit_board'
        )
        .inputFluids(
            Fluid.of('qilby_core:pure_glass', 576)
        )
        .itemOutputs(
            '8x qilby_core:optical_coputation_circuit'
        )
        .CWUt(2048)
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(100)
});