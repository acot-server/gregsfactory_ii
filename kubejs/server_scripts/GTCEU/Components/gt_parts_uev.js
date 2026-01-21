ServerEvents.recipes(event => {

    event.recipes.gtceu.assembly_line('uev_electric_motor')
        .itemInputs(
            'gtceu:long_magnetic_samarium_rod',
            '2x qilby_core:long_dark_matter_rod',
            '4x gtceu:desh_ring',
            '8x qilby_core:stasis_round',
            '64x gtceu:fine_naquadria_wire',
            '64x gtceu:fine_naquadria_wire',
            'qilby_core:dark_matter_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:neutronium', 8000)
        )
        .itemOutputs(
            '2x gtceu:uev_electric_motor'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_electric_motor')).CWUt(256).EUt(GTValues.VA[GTValues.UHV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line('uev_electic_pump')
        .itemInputs(
            'gtceu:uev_electric_motor',
            'gtceu:desh_rotor',
            '16x gtceu:styrene_butadiene_rubber_ring',
            '4x qilby_core:stasis_screw',
            '2x gtceu:naquadah_large_fluid_pipe',
            'qilby_core:dark_matter_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:neutronium', 8000),
            Fluid.of('gtceu:styrene_butadiene_rubber', 5000)
        )
        .itemOutputs(
            '2x gtceu:uev_electric_pump'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_electric_pump')).CWUt(256).EUt(GTValues.VA[GTValues.UHV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV]);


    event.recipes.gtceu.assembly_line('uev_conveyor_module')
        .itemInputs(
            'gtceu:uev_electric_motor',
            '2x gtceu:styrene_butadiene_rubber_plate',
            '4x gtceu:small_desh_gear',
            '16x gtceu:tritanium_round',
            '4x gtceu:ruridit_screw',
            'qilby_core:dark_matter_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:neutronium', 8000),
            Fluid.of('gtceu:styrene_butadiene_rubber', 5000)
        )
        .itemOutputs(
            '2x gtceu:uev_conveyor_module'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_conveyor_module')).CWUt(256).EUt(GTValues.VA[GTValues.UHV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV]);


    event.recipes.gtceu.assembly_line('uev_electric_piston')
        .itemInputs(
            'gtceu:uev_electric_motor',
            '4x #forge:plates/desh',
            '4x gtceu:desh_ring',
            '16x qilby_core:dark_matter_rod',
            '6x gtceu:tritanium_rod',
            'gtceu:neutronium_gear',
            '2x qilby_core:small_stasis_gear',
            'qilby_core:dark_matter_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:neutronium', 8000),
            Fluid.of('qilby_core:wakfu', 16000)
        )
        .itemOutputs(
            '2x gtceu:uev_electric_piston'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_electric_piston')).CWUt(256).EUt(GTValues.VA[GTValues.UHV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV]);


    event.recipes.gtceu.assembly_line('uev_robot_arm')
        .itemInputs(
            '4x qilby_core:long_dark_matter_rod',
            'gtceu:neutronium_gear',
            '3x qilby_core:small_stasis_gear',
            '2x gtceu:uev_electric_motor',
            'gtceu:uev_electric_piston',
            '#gtceu:circuits/uev',
            '2x #gtceu:circuits/uhv',
            '4x #gtceu:circuits/uv',
            '2x qilby_core:dark_matter_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:neutronium', 8000),
            Fluid.of('qilby_core:wakfu', 16000)
        )
        .itemOutputs(
            '2x gtceu:uev_robot_arm'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_robot_arm')).CWUt(256).EUt(GTValues.VA[GTValues.UHV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line('uev_field_generator')
        .itemInputs(
            'qilby_core:stasis_frame',
            '6x gtceu:darmstadtium_plate',
            'gtceu:gravi_star',
            '2x gtceu:uev_emitter',
            '2x #gtceu:circuits/uev',
            '64x qilby_core:fine_dark_matter_wire',
            '32x qilby_core:dark_matter_foil',
            '4x qilby_core:dark_matter_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:neutronium', 8000),
            Fluid.of('qilby_core:wakfu', 16000)
        )
        .itemOutputs(
            '2x gtceu:uev_field_generator'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_field_generator')).CWUt(256).EUt(GTValues.VA[GTValues.UHV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV]);
    

    event.recipes.gtceu.assembly_line('uev_emitter')
        .itemInputs(
            'qilby_core:stasis_frame',
            'gtceu:uev_electric_motor',
            '4x qilby_core:long_dark_matter_rod',
            'gtceu:gravi_star',
            '2x #gtceu:circuits/uev',
            '64x qilby_core:fine_dark_matter_wire',
            '32x qilby_core:dark_matter_foil',
            '2x qilby_core:dark_matter_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:neutronium', 8000),
            Fluid.of('qilby_core:wakfu', 16000)
        )
        .itemOutputs(
            '2x gtceu:uev_emitter'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_emitter')).CWUt(256).EUt(GTValues.VA[GTValues.UHV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV]);


    event.recipes.gtceu.assembly_line('uev_sensor')
        .itemInputs(
            'qilby_core:stasis_frame',
            'gtceu:uev_electric_motor',
            '6x gtceu:darmstadtium_plate',
            'gtceu:gravi_star',
            '2x #gtceu:circuits/uev',
            '64x qilby_core:fine_dark_matter_wire',
            '32x qilby_core:dark_matter_foil',
            '2x qilby_core:dark_matter_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:neutronium', 8000),
            Fluid.of('qilby_core:wakfu', 16000)
        )
        .itemOutputs(
            '2x gtceu:uev_sensor'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_sensor')).CWUt(256).EUt(GTValues.VA[GTValues.UHV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV]);
})