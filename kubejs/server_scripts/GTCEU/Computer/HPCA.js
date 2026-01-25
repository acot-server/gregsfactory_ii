ServerEvents.recipes(event => {
    event.remove({id: 'gtceu:assembly_line/high_performance_computing_array'})
    event.remove({id: 'gtceu:scanner/1_x_gtceu_computer_monitor_cover'})
    event.remove({id: 'gtceu:assembler/computer_casing'})
    event.remove({id: 'gtceu:assembler/advanced_computer_casing'})
    event.remove({id: 'gtceu:assembler/computer_heat_vent'})
    event.remove({id: 'gtceu:assembler/hpca_empty_component'})

    event.recipes.gtceu.assembler('new_hpca')
        .itemInputs(
            '8x #gtceu:circuits/hv',
            '8x gtceu:mv_field_generator',
            'gtceu:computer_monitor_cover',
            '64x gtceu:mercury_barium_calcium_cuprate_double_wire',
            '16x gtceu:normal_optical_pipe'
        )
        .inputFluids(
            Fluid.of('gtceu:pcb_coolant', 4000)
        )
        .itemOutputs('gtceu:high_performance_computation_array')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.HV]);
        
    event.recipes.gtceu.assembler('new_computer_casing')
        .itemInputs(
            'gtceu:aluminium_frame',
            '6x gtceu:aluminium_plate',
            '#gtceu:circuits/mv',
            '32x gtceu:fine_cobalt_wire',
            '32x gtceu:fine_copper_wire',
            '2x gtceu:gold_single_wire'
        )
        .itemOutputs('2x gtceu:computer_casing')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.assembler('new_advanced_computer_casing')
        .itemInputs(
            'gtceu:computer_casing',
            '#gtceu:circuits/hv',
            '64x gtceu:fine_cobalt_wire',
            '64x gtceu:fine_electrum_wire',
            '4x gtceu:mercury_barium_calcium_cuprate_single_wire'
        )
        .itemOutputs('gtceu:advanced_computer_casing')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.HV]);
        
    event.recipes.gtceu.assembler('new_computer_heat_vent')
        .itemInputs(
            'gtceu:stainless_steel_frame',
            '2x gtceu:hv_electric_motor',
            '2x gtceu:stainless_steel_rotor',
            '16x gtceu:stainless_steel_tiny_fluid_pipe',
            '16x gtceu:copper_plate',
            'gtceu:magnesium_diboride_single_wire'
        )
        .itemOutputs('2x gtceu:computer_heat_vent')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.assembler('new_hpca_empty_component')
        .itemInputs(
            'gtceu:computer_casing',
            '#gtceu:circuits/lv',
            'gtceu:data_stick'
        )
        .itemOutputs('gtceu:hpca_empty_component')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.MV]);

});
