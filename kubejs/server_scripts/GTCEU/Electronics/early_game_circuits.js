ServerEvents.recipes( event => {
    let ram = 'gtceu:ram_chip';
    let smd_d = 'gtceu:smd_diode';
    let smd_da = 'gtceu:advanced_smd_diode';
    let nor = 'gtceu:nor_memory_chip';
    // Increase tier of Micro- family circuits to HV
    event.remove({ id: 'gtceu:circuit_assembler/processor_mv_soldering_alloy' });
    event.remove({ id: 'gtceu:circuit_assembler/processor_mv' });
    event.remove({ id: 'gtceu:circuit_assembler/processor_assembly_hv_soldering_alloy' });
    event.remove({ id: 'gtceu:circuit_assembler/processor_assembly_hv' });
    event.remove({ id: 'gtceu:circuit_assembler/workstation_ev'});
    event.remove({ id: 'gtceu:circuit_assembler/workstation_ev_soldering_alloy'});

    const c_assembler = event.recipes.gtceu.circuit_assembler;
    c_assembler('new_microproc')
        .itemInputs(
            'gtceu:plastic_printed_circuit_board',
            'gtceu:cpu_chip',
            '4x #gtceu:resistors',
            '4x #gtceu:capacitors',
            '4x #gtceu:transistors',
            '4x gtceu:fine_red_alloy_wire'
        )
        .itemOutputs('2x gtceu:micro_processor')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.HV])
        .cleanroom(CleanroomType.CLEANROOM);

    c_assembler('new_microasm')
        .itemInputs(
            'gtceu:plastic_printed_circuit_board',
            '2x gtceu:micro_processor',
            '4x #gtceu:inductors',
            '8x #gtceu:capacitors',
            `4x ${ram}`,
            '8x gtceu:fine_red_alloy_wire'
        )
        .itemOutputs('2x gtceu:micro_processor_assembly')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV])
        .cleanroom(CleanroomType.CLEANROOM);

    c_assembler('new_mircocomp')
        .itemInputs(
            'gtceu:plastic_printed_circuit_board',
            '2x gtceu:micro_processor_assembly',
            '4x #gtceu:diodes',
            `4x ${ram}`,
            '16x gtceu:fine_electrum_wire',
            '16x gtceu:elementium_bolt'
        )
        .itemOutputs(
            '2x gtceu:micro_processor_computer'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV]);

    // Create MV-EV circuit
    c_assembler('integrated_mainframe')
        .itemInputs(
            '2x gtceu:terrasteel_frame',
            '4x gtceu:advanced_integrated_circuit',
            '8x #gtceu:inductors',
            '16x #gtceu:capacitors',
            `8x ${ram}`,
            '8x gtceu:manganese_phosphide_single_wire'
        )
        .itemOutputs('qilby_core:integrated_mainframe')
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .cleanroom(CleanroomType.CLEANROOM);


    // Rebalance Nanocomputers
    event.remove({id: 'gtceu:circuit_assembler/nano_computer_iv'});
    event.remove({id: 'gtceu:circuit_assembler/nano_computer_iv_soldering_alloy'});
    event.remove({id: 'gtceu:circuit_assembler/nano_computer_iv_asmd_soldering_alloy'});
    event.remove({id: 'gtceu:circuit_assembler/nano_computer_iv_asmd'});

    c_assembler('new_nanocomp')
        .itemInputs(
            'gtceu:epoxy_printed_circuit_board',
            '2x gtceu:nano_processor_assembly',
            `8x ${smd_d}`,
            `4x ${nor}`,
            `16x ${ram}`,
            '16x gtceu:fine_electrum_wire'
        )
        .itemOutputs('2x gtceu:nano_processor_computer')
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    c_assembler('new_nanocomp_advdiode')
        .itemInputs(
            'gtceu:epoxy_printed_circuit_board',
            '2x gtceu:nano_processor_assembly',
            `2x ${smd_da}`,
            `4x ${nor}`,
            `16x ${ram}`,
            '16x gtceu:fine_electrum_wire'
        )
        .itemOutputs('2x gtceu:nano_processor_computer')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);
    // Rebalance Q-computers
    event.remove({id: 'gtceu:circuit_assembler/quantum_computer_luv_soldering_alloy'});
    event.remove({id: 'gtceu:circuit_assembler/quantum_computer_luv_asmd'});
    event.remove({id: 'gtceu:circuit_assembler/quantum_computer_luv'});
    event.remove({id: 'gtceu:circuit_assembler/quantum_computer_luv_asmd_soldering_alloy'});
    c_assembler('new_qcomp')
        .itemInputs(
            'gtceu:fiber_reinforced_printed_circuit_board',
            '2x gtceu:quantum_processor_assembly',
            `8x ${smd_d}`,
            `4x ${nor}`,
            `16x ${ram}`,
            '32x gtceu:fine_platinum_wire'
        )
        .itemOutputs('2x gtceu:quantum_processor_computer')
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM);

    c_assembler('new_qcomp_advdiode')
        .itemInputs(
            'gtceu:fiber_reinforced_printed_circuit_board',
            '2x gtceu:quantum_processor_assembly',
            `2x ${smd_da}`,
            `4x ${nor}`,
            `16x ${ram}`,
            '32x gtceu:fine_platinum_wire'
        )
        .itemOutputs('2x gtceu:quantum_processor_computer')
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM);
});
