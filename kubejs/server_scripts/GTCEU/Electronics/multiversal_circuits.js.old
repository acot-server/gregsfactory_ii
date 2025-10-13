ServerEvents.recipes(event => {
    
    event.recipes.gtceu.assembly_line('multiversal_processor')
        .itemInputs(
            '64x qilby_core:ultra_stabilized_chroniton',
            '32x qilby_core:transparent_aluminium_plate',
            '64x qilby_core:supracausal_smd_resistor',
            '64x qilby_core:supracausal_smd_diode',
            '64x qilby_core:supracausal_smd_transistor',
            '64x qilby_core:supracausal_smd_inductor',
            '64x qilby_core:supracausal_smd_capacitor',
            '8x qilby_core:supracausal_processor',
            '32x qilby_core:infinity_hi_pow_integrated_circuit',
            '64x qilby_core:fine_stellarite_wire',
            '16x gtceu:uxv_field_generator',
            '8x gtceu:uxv_sensor',
            '8x gtceu:uxv_emitter',
            '8x qilby_core:supracausal_circuit_board'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:dark_energy', 5760),
            Fluid.of('qilby_core:transparent_aluminium', 5760),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 576)
        )
        .itemOutputs(
            '48x qilby_core:multiversal_processor'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:supracausal_processor_mainframe')).CWUt(2048).EUt(GTValues.VA[GTValues.OpV]))
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UXV]);

    event.recipes.gtceu.assembly_line('multiversal_processor_assembly')
        .itemInputs(
            '64x qilby_core:ultra_stabilized_chroniton',
            '32x qilby_core:transparent_aluminium_plate',
            '64x qilby_core:supracausal_smd_resistor',
            '64x qilby_core:supracausal_smd_diode',
            '64x qilby_core:supracausal_smd_transistor',
            '64x qilby_core:supracausal_smd_inductor',
            '64x qilby_core:supracausal_smd_capacitor',
            '8x qilby_core:supracausal_processor_assembly',
            '8x qilby_core:multiversal_processor',
            '48x qilby_core:infinity_hi_pow_integrated_circuit',
            '64x qilby_core:fine_stellarite_wire',
            '24x gtceu:uxv_field_generator',
            '16x gtceu:uxv_sensor',
            '16x gtceu:uxv_emitter'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:dark_energy', 5760),
            Fluid.of('qilby_core:transparent_aluminium', 5760),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 576)
        )
        .itemOutputs(
            '24x qilby_core:multiversal_processor_assembly'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:multiversal_processor')).CWUt(4096).EUt(GTValues.VA[GTValues.OpV]))
        .duration(1000)
        .EUt(GTValues.VA[GTValues.OpV]);

    event.recipes.gtceu.assembly_line('multiversal_supercomputer')
        .itemInputs(
            '64x qilby_core:ultra_stabilized_chroniton',
            '32x qilby_core:transparent_aluminium_plate',
            '64x qilby_core:supracausal_smd_resistor',
            '64x qilby_core:supracausal_smd_diode',
            '64x qilby_core:supracausal_smd_transistor',
            '64x qilby_core:supracausal_smd_inductor',
            '64x qilby_core:supracausal_smd_capacitor',
            '8x qilby_core:supracausal_processor_computer',
            '8x qilby_core:multiversal_processor',
            '48x qilby_core:infinity_hi_pow_integrated_circuit',
            '64x qilby_core:fine_stellarite_wire',
            '24x gtceu:uxv_field_generator',
            '16x gtceu:uxv_sensor',
            '16x gtceu:uxv_emitter'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:dark_energy', 5760),
            Fluid.of('qilby_core:transparent_aluminium', 5760),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 576)
        )
        .itemOutputs(
            '12x qilby_core:multiversal_supercomputer'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:multiversal_processor_assembly')).CWUt(8192).EUt(GTValues.VA[GTValues.OpV]))
        .duration(1000)
        .EUt(GTValues.VA[GTValues.MAX]);
});