ServerEvents.recipes(event => {


    ////// Machine Recipe //////

    event.shaped(
        'gtceu:eliaforge',
        ['AWA', 'CSC', 'WCW'],
        {
            A: '#gtceu:circuits/opv',
            W: 'qilby_core:sigma_super_capacitor',
            C: '#gtceu:circuits/uxv',
            S: 'gtceu:advanced_computer_casing'
        }
    ).id('gtceu:shaped/eliaforge')

    event.recipes.gtceu.eliaforge('opv_elecric_motor')
        .itemInputs(
            '64x gtceu:iv_electric_motor',
            '64x qilby_core:fine_stellarite_wire',
            '4x gtceu:normal_laser_pipe',
            'qilby_core:infinity_hi_pow_integrated_circuit'
        )
        .inputFluids(
            Fluid.of('qilby_core:stellarite', 8000)
        )
        .itemOutputs(
            '8x gtceu:opv_electric_motor'
        )
        .CWUt(256)
        .duration(500)
        .EUt(GTValues.VA[GTValues.OpV]);

    event.recipes.gtceu.eliaforge('opv_elecric_pump')
        .itemInputs(
            '64x gtceu:iv_electric_pump',
            '64x qilby_core:stellarite_ring',
            '4x gtceu:normal_laser_pipe',
            'qilby_core:infinity_hi_pow_integrated_circuit'
        )
        .inputFluids(
            Fluid.of('qilby_core:stellarite', 8000)
        )
        .itemOutputs(
            '8x gtceu:opv_electric_pump'
        )
        .CWUt(256)
        .duration(500)
        .EUt(GTValues.VA[GTValues.OpV])

        event.recipes.gtceu.eliaforge('opv_conveyor_module')
        .itemInputs(
            '64x gtceu:iv_conveyor_module',
            '64x gtceu:styrene_butadiene_rubber_plate',
            '4x gtceu:normal_laser_pipe',
            'qilby_core:infinity_hi_pow_integrated_circuit'
        )
        .inputFluids(
            Fluid.of('qilby_core:stellarite', 8000)
        )
        .itemOutputs(
            '8x gtceu:opv_conveyor_module'
        )
        .CWUt(256)
        .duration(500)
        .EUt(GTValues.VA[GTValues.OpV])

        event.recipes.gtceu.eliaforge('opv_electic_piston')
        .itemInputs(
            '64x gtceu:iv_electric_piston',
            '16x qilby_core:double_stellarite_plate',
            '4x gtceu:normal_laser_pipe',
            'qilby_core:infinity_hi_pow_integrated_circuit'
        )
        .inputFluids(
            Fluid.of('qilby_core:stellarite', 8000)
        )
        .itemOutputs(
            '8x gtceu:opv_electric_piston'
        )
        .CWUt(256)
        .duration(500)
        .EUt(GTValues.VA[GTValues.OpV])

        event.recipes.gtceu.eliaforge('opv_robot_arm')
        .itemInputs(
            '64x gtceu:iv_robot_arm',
            '8x gtceu:luv_electric_motor',
            '4x gtceu:normal_laser_pipe',
            'qilby_core:infinity_hi_pow_integrated_circuit'
        )
        .inputFluids(
            Fluid.of('qilby_core:stellarite', 8000)
        )
        .itemOutputs(
            '8x gtceu:opv_robot_arm'
        )
        .CWUt(256)
        .duration(500)
        .EUt(GTValues.VA[GTValues.OpV])

        event.recipes.gtceu.eliaforge('opv_field_generator')
        .itemInputs(
            '64x gtceu:iv_field_generator',
            '12x gtceu:luv_emitter',
            '4x gtceu:normal_laser_pipe',
            'qilby_core:infinity_hi_pow_integrated_circuit'
        )
        .inputFluids(
            Fluid.of('qilby_core:stellarite', 8000)
        )
        .itemOutputs(
            '8x gtceu:opv_field_generator'
        )
        .CWUt(256)
        .duration(500)
        .EUt(GTValues.VA[GTValues.OpV])

        event.recipes.gtceu.eliaforge('opv_emitter')
        .itemInputs(
            '64x gtceu:iv_emitter',
            '12x gtceu:crystal_soc',
            '4x gtceu:normal_laser_pipe',
            'qilby_core:infinity_hi_pow_integrated_circuit'
        )
        .inputFluids(
            Fluid.of('qilby_core:stellarite', 8000)
        )
        .itemOutputs(
            '8x gtceu:opv_emitter'
        )
        .CWUt(256)
        .duration(500)
        .EUt(GTValues.VA[GTValues.OpV])

        event.recipes.gtceu.eliaforge('opv_sensor')
        .itemInputs(
            '64x gtceu:iv_sensor',
            '16x gtceu:data_orb',
            '4x gtceu:normal_laser_pipe',
            'qilby_core:infinity_hi_pow_integrated_circuit'
        )
        .inputFluids(
            Fluid.of('qilby_core:stellarite', 8000)
        )
        .itemOutputs(
            '8x gtceu:opv_sensor'
        )
        .CWUt(256)
        .duration(500)
        .EUt(GTValues.VA[GTValues.OpV])

        event.recipes.gtceu.eliaforge('eliacube')
        .itemInputs(
            '1x qilby_core:sigma_super_capacitor',
            '8x #gtceu:circuits/opv',
            '16x qilby_core:infinity_hi_pow_integrated_circuit',
            '32x gtceu:normal_laser_pipe',
        )
        .inputFluids(
            Fluid.of('qilby_core:stellarite', 8000)
        )
        .itemOutputs(
            'qilby_core:eliacube_capacitor'
        )
        .CWUt(256)
        .duration(500)
        .EUt(GTValues.VA[GTValues.OpV])

        event.recipes.gtceu.eliaforge('eliasphere')
        .itemInputs(
            '1x qilby_core:eliacube_capacitor',
            '64x qilby_core:infinity_hi_pow_integrated_circuit',
            '8x #gtceu:circuits/max',
            '64x gtceu:normal_laser_pipe',
        )
        .inputFluids(
            Fluid.of('qilby_core:stellarite', 8000)
        )
        .itemOutputs(
            'qilby_core:eliasphere_capacitor'
        )
        .CWUt(256)
        .duration(500)
        .EUt(GTValues.VA[GTValues.MAX])
})