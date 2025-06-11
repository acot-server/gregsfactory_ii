ServerEvents.recipes( event => {
    const casm = event.recipes.gtceu.circuit_assembler;
    const asli = event.recipes.gtceu.assembly_line;

    const nand = 'gtceu:nand_memory_chip';
    const nor = 'gtceu:nor_memory_chip';
    const ram = 'gtceu:ram_chip';
    const smd_d = 'gtceu:advanced_smd_diode';
    const fw = mat => `gtceu:fine_${mat}_wire`;

    // Rebalance Crystal supercomputers
    event.remove({id: 'gtceu:circuit_assembler/crystal_computer_zpm'});
    event.remove({id: 'gtceu:circuit_assembler/crystal_computer_zpm_soldering_alloy'});
    casm('new_crystalcomp')
        .itemInputs(
            'gtceu:multilayer_fiber_reinforced_printed_circuit_board',
            '2x gtceu:crystal_processor_assembly',
            `4x ${ram}`,
            `32x ${nor}`,
            `64x ${nand}`,
            `32x ${fw('niobium_titanium')}`
        )
        .itemOutputs('2x gtceu:crystal_processor_computer')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.remove({id: 'gtceu:assembly_line/wetware_super_computer_uv'});
    event.remove({id: 'gtceu:research_station/1_x_gtceu_wetware_processor_assembly'});
    asli('new_wetware_computer')
        .itemInputs(
            'gtceu:wetware_printed_circuit_board',
            '2x gtceu:wetware_processor_assembly',
            `8x ${smd_d}`,
            `16x ${nor}`,
            `32x ${ram}`,
            `24x ${fw('yttrium_barium_cuprate')}`,
            '32x gtceu:polybenzimidazole_foil',
            '4x gtceu:europium_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 1152)
        )
        .itemOutputs('2x gtceu:wetware_processor_computer')
        .stationResearch( b => b
            .researchStack(Item.of('gtceu:wetware_processor_assembly'))
            .CWUt(64)
            .EUt(GTValues.VA[GTValues.ZPM])
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.remove({id: 'gtceu:assembly_line/crystal_mainframe_uv'});
    asli('new_crystal_mainframe')
        .itemInputs(
            '2x gtceu:hsse_frame',
            '2x gtceu:crystal_processor_computer',
            `32x ${ram}`,
            '2x gtceu:hpic_chip',
            '8x gtceu:niobium_titanium_single_wire',
            '8x gtceu:advanced_smd_inductor',
            '16x gtceu:advanced_smd_capacitor',
            '8x gtceu:advanced_smd_diode'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 1440))
        .itemOutputs('gtceu:crystal_processor_mainframe')
        .stationResearch( b => b
            .researchStack(Item.of('gtceu:crystal_processor_computer'))
            .CWUt(32)
            .EUt(GTValues.VA[GTValues.LuV])
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.remove({id: 'gtceu:research_station/1_x_gtceu_wetware_processor_computer'});
    event.remove({id: 'gtceu:assembly_line/wetware_mainframe_uhv'});
    asli('new_wetware_mainframe')
        .itemInputs(
            '2x gtceu:tritanium_frame',
            '2x gtceu:wetware_processor_computer',
            '32x gtceu:advanced_smd_diode',
            '32x gtceu:advanced_smd_capacitor',
            '32x gtceu:advanced_smd_transistor',
            '32x gtceu:advanced_smd_resistor',
            '32x gtceu:advanced_smd_inductor',
            '64x gtceu:polybenzimidazole_foil',
            '32x gtceu:ram_chip',
            '16x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire',
            '8x gtceu:europium_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:polybenzimidazole', 1152)
        )
        .itemOutputs('gtceu:wetware_processor_mainframe')
        .stationResearch( b => b
            .researchStack(Item.of('gtceu:wetware_processor_computer'))
            .CWUt(512)
            .EUt(GTValues.VA[GTValues.ZPM])
        )
        .duration(2000)
        .EUt(GTValues.VA[GTValues.ZPM]);
});
