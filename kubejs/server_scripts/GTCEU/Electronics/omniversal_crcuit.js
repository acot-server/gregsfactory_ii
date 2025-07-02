ServerEvents.recipes(event => {
    
    event.recipes.gtceu.assembly_line('omniversal_processor')
        .itemInputs(
            '64x qilby_core:ultra_stabilized_chroniton',
            '64x qilby_core:transparent_aluminium_plate',
            '8x qilby_core:supracausal_processor_mainframe',
            '8x qilby_core:multiversal_processor',
            '8x qilby_core:multiversal_processor_assembly',
            '12x qilby_core:multiversal_supercomputer',
            '64x qilby_core:infinity_hi_pow_integrated_circuit',
            '64x qilby_core:fine_fabric_of_reality_wire',
            '64x gtceu:opv_field_generator',
            '32x gtceu:opv_sensor',
            '32x gtceu:opv_emitter'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:dark_energy', 5760),
            Fluid.of('qilby_core:transparent_aluminium', 5760),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 576)
        )
        .itemOutputs(
            '64x qilby_core:omniversal_processor'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:multiversal_supercomputer')).CWUt(524288).EUt(GTValues.VA[GTValues.MAX]))
        .duration(1000)
        .EUt(GTValues.VA[GTValues.OpV]);

    event.recipes.gtceu.assembly_line('omniversal_processor_assembly')
        .itemInputs(
            '64x qilby_core:ultra_stabilized_chroniton',
            '64x qilby_core:transparent_aluminium_plate',
            '8x qilby_core:omniversal_processor',
            '8x qilby_core:multiversal_processor',
            '8x qilby_core:multiversal_processor_assembly',
            '12x qilby_core:multiversal_supercomputer',
            '64x qilby_core:infinity_hi_pow_integrated_circuit',
            '64x qilby_core:fine_fabric_of_reality_wire',
            '64x gtceu:opv_field_generator',
            '32x gtceu:opv_sensor',
            '32x gtceu:opv_emitter'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:dark_energy', 5760),
            Fluid.of('qilby_core:transparent_aluminium', 5760),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 576)
        )
        .itemOutputs(
            '64x qilby_core:omniversal_processor_assembly'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:omniversal_processor')).CWUt(524288).EUt(GTValues.VA[GTValues.MAX]))
        .duration(1000)
        .EUt(GTValues.VA[GTValues.MAX]);

    event.recipes.gtceu.assembly_line('omniversal_supercomputer')
        .itemInputs(
            '64x qilby_core:ultra_stabilized_chroniton',
            '64x qilby_core:transparent_aluminium_plate',
            '8x qilby_core:omniversal_processor',
            '8x qilby_core:omniversal_processor_assembly',
            '8x qilby_core:multiversal_processor_assembly',
            '12x qilby_core:multiversal_supercomputer',
            '64x qilby_core:infinity_hi_pow_integrated_circuit',
            '64x qilby_core:fine_fabric_of_reality_wire',
            '64x gtceu:opv_field_generator',
            '32x gtceu:opv_sensor',
            '32x gtceu:opv_emitter'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:dark_energy', 5760),
            Fluid.of('qilby_core:transparent_aluminium', 5760),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 576)
        )
        .itemOutputs(
            '64x qilby_core:omniversal_supercomputer'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:omniversal_processor_assembly')).CWUt(524288).EUt(GTValues.VA[GTValues.MAX]))
        .duration(1000)
        .EUt(GTValues.VA[GTValues.MAX]*4);
});