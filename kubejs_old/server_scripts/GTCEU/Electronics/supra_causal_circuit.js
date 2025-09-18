ServerEvents.recipes(event => {
    
    event.recipes.gtceu.assembly_line('supracausal_processor')
        .itemInputs(
            '32x qilby_core:ultra_stabilized_chroniton',
            '16x qilby_core:transparent_aluminium_plate',
            '64x qilby_core:wetware_smd_resistor',
            '64x qilby_core:wetware_smd_diode',
            '64x qilby_core:wetware_smd_transistor',
            '64x qilby_core:wetware_smd_capacitor',
            '64x qilby_core:wetware_smd_inductor',
            '16x qilby_core:infinity_hi_pow_integrated_circuit',
            '4x qilby_core:supracausal_circuit_board',
            '8x gtceu:uiv_field_generator',
            '4x gtceu:uiv_sensor',
            '4x gtceu:uiv_emitter'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:dark_energy', 5760),
            Fluid.of('qilby_core:transparent_aluminium', 5760),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 576)
        )
        .itemOutputs(
            '32x qilby_core:supracausal_processor'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:ultra_stabilized_chroniton')).CWUt(32768).EUt(GTValues.VA[GTValues.UIV]))
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembly_line('supracausal_processor_assembly')
        .itemInputs(
            '32x qilby_core:ultra_stabilized_chroniton',
            '16x qilby_core:transparent_aluminium_plate',
            '64x qilby_core:wetware_smd_resistor',
            '64x qilby_core:wetware_smd_diode',
            '64x qilby_core:wetware_smd_transistor',
            '64x qilby_core:wetware_smd_capacitor',
            '64x qilby_core:wetware_smd_inductor',
            '4x qilby_core:supracausal_processor',
            '32x qilby_core:infinity_hi_pow_integrated_circuit',
            '64x qilby_core:fine_runic_stelarite_wire',
            '8x gtceu:uxv_field_generator',
            '4x gtceu:uxv_sensor',
            '4x gtceu:uxv_emitter'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:dark_energy', 5760),
            Fluid.of('qilby_core:transparent_aluminium', 5760),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 576)
        )
        .itemOutputs(
            '16x qilby_core:supracausal_processor_assembly'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:supracausal_processor')).CWUt(65536).EUt(GTValues.VA[GTValues.UXV]))
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UXV]);

    event.recipes.gtceu.assembly_line('supracausal_supercomputer')
        .itemInputs(
            '32x qilby_core:ultra_stabilized_chroniton',
            '16x qilby_core:transparent_aluminium_plate',
            '64x qilby_core:wetware_smd_resistor',
            '64x qilby_core:wetware_smd_diode',
            '64x qilby_core:wetware_smd_transistor',
            '64x qilby_core:wetware_smd_capacitor',
            '64x qilby_core:wetware_smd_inductor',
            '4x qilby_core:supracausal_processor_assembly',
            '32x qilby_core:infinity_hi_pow_integrated_circuit',
            '64x qilby_core:fine_runic_stelarite_wire',
            '8x gtceu:uxv_field_generator',
            '4x gtceu:uxv_sensor',
            '4x gtceu:uxv_emitter'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:dark_energy', 5760),
            Fluid.of('qilby_core:transparent_aluminium', 5760),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 576)
        )
        .itemOutputs(
            '8x qilby_core:supracausal_processor_computer'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:supracausal_processor_assembly')).CWUt(131072).EUt(GTValues.VA[GTValues.UXV]))
        .duration(1000)
        .EUt(GTValues.VA[GTValues.OpV]);

    event.recipes.gtceu.assembly_line('supracausal_mainframe')
        .itemInputs(
            '32x qilby_core:ultra_stabilized_chroniton',
            '16x qilby_core:transparent_aluminium_plate',
            '64x qilby_core:wetware_smd_resistor',
            '64x qilby_core:wetware_smd_diode',
            '64x qilby_core:wetware_smd_transistor',
            '64x qilby_core:wetware_smd_capacitor',
            '64x qilby_core:wetware_smd_inductor',
            '4x qilby_core:supracausal_processor_computer',
            '32x qilby_core:infinity_hi_pow_integrated_circuit',
            '64x qilby_core:fine_runic_stelarite_wire',
            '8x gtceu:opv_field_generator',
            '4x gtceu:opv_sensor',
            '4x gtceu:opv_emitter'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:dark_energy', 5760),
            Fluid.of('qilby_core:transparent_aluminium', 5760),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 576)
        )
        .itemOutputs(
            '4x qilby_core:supracausal_processor_mainframe'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:supracausal_processor_computer')).CWUt(262144).EUt(GTValues.VA[GTValues.UXV]))
        .duration(1000)
        .EUt(GTValues.VA[GTValues.OpV]);

});