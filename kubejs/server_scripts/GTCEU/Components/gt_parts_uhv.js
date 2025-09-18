ServerEvents.recipes(event => {

    event.recipes.gtceu.assembly_line('uhv_electric_motor')
        .itemInputs(
            'gtceu:long_magnetic_samarium_rod',
            '2x qilby_core:long_dark_matter_rod',
            '4x gtceu:desh_ring',
            '8x qilby_core:wakfu_round',
            '64x gtceu:fine_naquadria_wire',
            '64x gtceu:fine_naquadria_wire',
            'gtceu:europium_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:trinium', 8000)
        )
        .itemOutputs(
            '2x gtceu:uhv_electric_motor'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_electric_motor')).CWUt(128).EUt(GTValues.VA[GTValues.UV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.assembly_line('uhv_electic_pump')
        .itemInputs(
            'gtceu:uhv_electric_motor',
            'gtceu:desh_rotor',
            '16x gtceu:styrene_butadiene_rubber_ring',
            '4x qilby_core:stasis_screw',
            '2x gtceu:naquadah_large_fluid_pipe',
            'gtceu:europium_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:trinium', 8000),
            Fluid.of('gtceu:styrene_butadiene_rubber', 5000)
        )
        .itemOutputs(
            'gtceu:uhv_electric_pump'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_electric_pump')).CWUt(128).EUt(GTValues.VA[GTValues.UV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV]);


    event.recipes.gtceu.assembly_line('uhv_conveyor_module')
        .itemInputs(
            'gtceu:uhv_electric_motor',
            '2x gtceu:styrene_butadiene_rubber_plate',
            '4x gtceu:small_desh_gear',
            '16x gtceu:tritanium_round',
            '4x gtceu:ruridit_screw',
            'gtceu:europium_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:trinium', 8000),
            Fluid.of('gtceu:styrene_butadiene_rubber', 5000)
        )
        .itemOutputs(
            'gtceu:uhv_conveyor_module'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_conveyor_module')).CWUt(128).EUt(GTValues.VA[GTValues.UV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV]);


    event.recipes.gtceu.assembly_line('uhv_electric_piston')
        .itemInputs(
            'gtceu:uhv_electric_motor',
            '4x #forge:plates/desh',
            '4x gtceu:desh_ring',
            '16x qilby_core:dark_matter_rod',
            '6x gtceu:tritanium_rod',
            'gtceu:trinium_gear',
            '2x qilby_core:small_stasis_gear',
            'gtceu:europium_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:trinium', 8000),
            Fluid.of('qilby_core:wakfu', 16000)
        )
        .itemOutputs(
            'gtceu:uhv_electric_piston'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_electric_piston')).CWUt(128).EUt(GTValues.VA[GTValues.UV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV]);


    event.recipes.gtceu.assembly_line('uhv_robot_arm')
        .itemInputs(
            '4x qilby_core:long_dark_matter_rod',
            'gtceu:trinium_gear',
            '3x qilby_core:small_stasis_gear',
            '2x gtceu:uhv_electric_motor',
            'gtceu:uhv_electric_piston',
            '#gtceu:circuits/uhv',
            '2x #gtceu:circuits/uv',
            '4x #gtceu:circuits/zpm',
            '2x gtceu:europium_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:trinium', 8000),
            Fluid.of('qilby_core:wakfu', 16000)
        )
        .itemOutputs(
            'gtceu:uhv_robot_arm'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_robot_arm')).CWUt(128).EUt(GTValues.VA[GTValues.UV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.assembly_line('uhv_field_generator')
        .itemInputs(
            'qilby_core:wakfu_frame',
            '6x gtceu:darmstadtium_plate',
            'gtceu:gravi_star',
            '2x gtceu:uhv_emitter',
            '2x #gtceu:circuits/uhv',
            '64x qilby_core:fine_stasis_wire',
            '32x qilby_core:fine_stasis_wire',
            '4x gtceu:europium_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:trinium', 8000),
            Fluid.of('qilby_core:wakfu', 16000)
        )
        .itemOutputs(
            'gtceu:uhv_field_generator'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_field_generator')).CWUt(128).EUt(GTValues.VA[GTValues.UV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV]);
    

    event.recipes.gtceu.assembly_line('uhv_emitter')
        .itemInputs(
            'qilby_core:wakfu_frame',
            'gtceu:uhv_electric_motor',
            '4x qilby_core:long_dark_matter_rod',
            'gtceu:gravi_star',
            '2x #gtceu:circuits/uhv',
            '64x qilby_core:fine_stasis_wire',
            '32x qilby_core:fine_stasis_wire',
            '2x gtceu:europium_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:trinium', 8000),
            Fluid.of('qilby_core:wakfu', 16000)
        )
        .itemOutputs(
            'gtceu:uhv_emitter'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_emitter')).CWUt(128).EUt(GTValues.VA[GTValues.UV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV]);


    event.recipes.gtceu.assembly_line('uhv_sensor')
        .itemInputs(
            'qilby_core:wakfu_frame',
            'gtceu:uhv_electric_motor',
            '6x gtceu:darmstadtium_plate',
            'gtceu:gravi_star',
            '2x #gtceu:circuits/uhv',
            '64x qilby_core:fine_stasis_wire',
            '32x qilby_core:fine_stasis_wire',
            '2x gtceu:europium_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:trinium', 8000),
            Fluid.of('qilby_core:wakfu', 16000)
        )
        .itemOutputs(
            'gtceu:uhv_sensor'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_sensor')).CWUt(128).EUt(GTValues.VA[GTValues.UV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UV]);
})