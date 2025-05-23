ServerEvents.recipes(event => {

    
    event.remove({id: 'gtceu:assembler/computation_transmitter_hatch'})
    event.remove({id: 'gtceu:assembler/computation_receiver_hatch'})
    event.remove({id: 'gtceu:assembler/optical_pipe'})

    //T1 Data Computation Hatch

    event.recipes.gtceu.assembler('new_computation_data_transmission_hatch')
        .itemInputs(
            'gtceu:computer_casing',
            '#gtceu:circuits/hv',
            'gtceu:hv_emitter',
            '8x gtceu:fine_annealed_copper_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 288)
        )
        .chancedOutput('gtceu:computation_transmitter_hatch', 6000, 0)
        .duration(4000)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.assembler('new_computation_data_reception')
        .itemInputs(
            'gtceu:computer_casing',
            '#gtceu:circuits/hv',
            'gtceu:hv_sensor',
            '8x gtceu:fine_annealed_copper_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 288)
        )
        .chancedOutput('gtceu:computation_receiver_hatch', 6000, 0)
        .duration(4000)
        .EUt(GTValues.VA[GTValues.HV]);

    //T2 Data Computation Hatch

    event.recipes.gtceu.assembler('new_computation_data_transmission_hatch_2')
        .itemInputs(
            'gtceu:computer_casing',
            '#gtceu:circuits/ev',
            'gtceu:ev_emitter',
            '8x gtceu:fine_silver_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:polytetrafluoroethylene', 288)
        )
        .chancedOutput('gtceu:computation_transmitter_hatch', 8000, 0)
        .duration(3000)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.assembler('new_computation_data_reception_2')
        .itemInputs(
            'gtceu:computer_casing',
            '#gtceu:circuits/ev',
            'gtceu:ev_sensor',
            '8x gtceu:fine_silver_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:polytetrafluoroethylene', 288)
        )
        .chancedOutput('gtceu:computation_receiver_hatch', 8000, 0)
        .duration(3000)
        .EUt(GTValues.VA[GTValues.EV]);

    //T3 Data Computation Hatch

    event.recipes.gtceu.assembler('new_computation_data_transmission_hatch_3')
        .itemInputs(
            'gtceu:computer_casing',
            '#gtceu:circuits/iv',
            'gtceu:iv_emitter',
            '8x gtceu:fine_platinum_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:polytetrafluoroethylene', 288)
        )
        .itemOutputs('gtceu:computation_transmitter_hatch')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('new_computation_data_reception_3')
        .itemInputs(
            'gtceu:computer_casing',
            '#gtceu:circuits/iv',
            'gtceu:iv_sensor',
            '8x gtceu:fine_platinum_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:polytetrafluoroethylene', 288)
        )
        .itemOutputs('gtceu:computation_receiver_hatch')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM);

    //T4 Data Computation Hatch

    event.recipes.gtceu.assembler('new_computation_data_transmission_hatch_4')
        .itemInputs(
            'gtceu:computer_casing',
            '#gtceu:circuits/luv',
            'gtceu:luv_emitter',
            '8x qilby_core:fine_wakfu_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:polybenzimidazole', 288)
        )
        .itemOutputs('2x gtceu:computation_transmitter_hatch')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('new_computation_data_reception_4')
        .itemInputs(
            'gtceu:computer_casing',
            '#gtceu:circuits/luv',
            'gtceu:luv_sensor',
            '8x qilby_core:fine_wakfu_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:polybenzimidazole', 288)
        )
        .itemOutputs('2x gtceu:computation_receiver_hatch')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    //Optical Data Cable
    
    //T1 Cable

    event.recipes.gtceu.assembler('new_optical_fiber')
        .itemInputs(
            '16x gtceu:fine_borosilicate_glass_wire',
            '16x gtceu:aluminium_foil'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 144)
        )
        .chancedOutput('gtceu:normal_optical_pipe', 4000, 0)
        .duration(4000)
        .EUt(GTValues.VA[GTValues.MV]);

    //T2 Cable

        event.recipes.gtceu.assembler('new_optical_fiber_2')
        .itemInputs(
            '16x gtceu:fine_borosilicate_glass_wire',
            '8x gtceu:cobalt_foil'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 144)
        )
        .chancedOutput('gtceu:normal_optical_pipe', 6000, 0)
        .duration(3000)
        .EUt(GTValues.VA[GTValues.HV]);

    //T3 Cable
    
    event.recipes.gtceu.assembler('new_optical_fiber_3')
        .itemInputs(
            '8x gtceu:fine_borosilicate_glass_wire',
            '8x gtceu:silver_foil'
        )
        .inputFluids(
            Fluid.of('gtceu:polytetrafluoroethylene', 144)
        )
        .chancedOutput('gtceu:normal_optical_pipe', 8000, 0)
        .duration(2000)
        .EUt(GTValues.VA[GTValues.EV]);


    //T4 Cable
    
    event.recipes.gtceu.assembler('new_optical_fiber_4')
        .itemInputs(
            '8x gtceu:fine_borosilicate_glass_wire',
            '8x gtceu:platinum_foil'
        )
        .inputFluids(
            Fluid.of('gtceu:polytetrafluoroethylene', 144)
        )
        .itemOutputs('gtceu:normal_optical_pipe')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM);

    //T5 Cable
    
    event.recipes.gtceu.assembler('new_optical_fiber_5')
        .itemInputs(
            '8x gtceu:fine_borosilicate_glass_wire',
            '8x qilby_core:wakfu_foil'
        )
        .inputFluids(
            Fluid.of('gtceu:polytetrafluoroethylene', 144)
        )
        .itemOutputs('2x gtceu:normal_optical_pipe')
        .duration(500)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    //T6 Cable
    
    event.recipes.gtceu.assembler('new_optical_fiber_6')
        .itemInputs(
            '8x qilby_core:fine_wakfu_wire',
            '8x qilby_core:stasis_foil'
        )
        .inputFluids(
            Fluid.of('gtceu:polytetrafluoroethylene', 144)
        )
        .itemOutputs('4x gtceu:normal_optical_pipe')
        .duration(250)
        .EUt(GTValues.VA[GTValues.ZPM])
        .cleanroom(CleanroomType.CLEANROOM);


});
