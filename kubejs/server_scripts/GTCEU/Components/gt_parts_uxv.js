ServerEvents.recipes(event => {

    event.recipes.gtceu.assembly_line('uxv_electric_motor')
        .itemInputs(
            'gtceu:long_magnetic_samarium_rod',
            '2x qilby_core:long_runic_stellarite_rod',
            '4x gtceu:ostrum_ring',
            '8x qilby_core:stasis_round',
            '64x gtceu:fine_naquadria_wire',
            '64x gtceu:fine_naquadria_wire',
            'qilby_core:runic_stellarite_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('qilby_core:dark_matter', 8000)
        )
        .itemOutputs(
            '2x gtceu:uxv_electric_motor'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uiv_electric_motor')).CWUt(512).EUt(GTValues.VA[GTValues.UIV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembly_line('uxv_electic_pump')
        .itemInputs(
            'gtceu:uxv_electric_motor',
            'gtceu:ostrum_rotor',
            '16x gtceu:styrene_butadiene_rubber_ring',
            '4x qilby_core:stasis_screw',
            '2x gtceu:naquadah_large_fluid_pipe',
            'qilby_core:runic_stellarite_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('qilby_core:dark_matter', 8000),
            Fluid.of('gtceu:styrene_butadiene_rubber', 5000)
        )
        .itemOutputs(
            'gtceu:uxv_electric_pump'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uiv_electric_pump')).CWUt(512).EUt(GTValues.VA[GTValues.UIV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV]);


    event.recipes.gtceu.assembly_line('uxv_conveyor_module')
        .itemInputs(
            'gtceu:uxv_electric_motor',
            '2x gtceu:styrene_butadiene_rubber_plate',
            '4x gtceu:small_ostrum_gear',
            '16x gtceu:tritanium_round',
            '4x gtceu:ruridit_screw',
            'qilby_core:dark_energy_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('qilby_core:dark_matter', 8000),
            Fluid.of('gtceu:styrene_butadiene_rubber', 5000)
        )
        .itemOutputs(
            'gtceu:uxv_conveyor_module'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uiv_conveyor_module')).CWUt(512).EUt(GTValues.VA[GTValues.UIV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV]);


    event.recipes.gtceu.assembly_line('uxv_electric_piston')
        .itemInputs(
            'gtceu:uxv_electric_motor',
            '4x #forge:plates/ostrum',
            '4x gtceu:ostrum_ring',
            '16x qilby_core:runic_stellarite_rod',
            '6x gtceu:tritanium_rod',
            'qilby_core:dark_energy_gear',
            '2x qilby_core:small_stasis_gear',
            'qilby_core:runic_stellarite_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('qilby_core:dark_matter', 8000),
            Fluid.of('qilby_core:dark_energy', 16000)
        )
        .itemOutputs(
            'gtceu:uxv_electric_piston'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uiv_electric_piston')).CWUt(512).EUt(GTValues.VA[GTValues.UIV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV]);


    event.recipes.gtceu.assembly_line('uxv_robot_arm')
        .itemInputs(
            '4x qilby_core:long_runic_stellarite_rod',
            'qilby_core:runic_stellarite_gear',
            '3x qilby_core:small_stasis_gear',
            '2x gtceu:uxv_electric_motor',
            'gtceu:uxv_electric_piston',
            '#gtceu:circuits/uxv',
            '2x #gtceu:circuits/uiv',
            '4x #gtceu:circuits/uev',
            '2x qilby_core:runic_stellarite_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('qilby_core:dark_matter', 8000),
            Fluid.of('qilby_core:dark_energy', 16000)
        )
        .itemOutputs(
            'gtceu:uxv_robot_arm'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uiv_robot_arm')).CWUt(512).EUt(GTValues.VA[GTValues.UIV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembly_line('uxv_field_generator')
        .itemInputs(
            'qilby_core:stasis_frame',
            '6x qilby_core:dark_matter_plate',
            'gtceu:gravi_star',
            '2x gtceu:uxv_emitter',
            '2x #gtceu:circuits/uxv',
            '64x qilby_core:fine_runic_stellarite_wire',
            '32x qilby_core:fine_runic_stellarite_wire',
            '4x qilby_core:runic_stellarite_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('qilby_core:dark_matter', 8000),
            Fluid.of('qilby_core:dark_energy', 16000)
        )
        .itemOutputs(
            'gtceu:uxv_field_generator'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uiv_field_generator')).CWUt(512).EUt(GTValues.VA[GTValues.UIV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV]);
    

    event.recipes.gtceu.assembly_line('uxv_emitter')
        .itemInputs(
            'qilby_core:dark_matter_frame',
            'gtceu:uxv_electric_motor',
            '4x qilby_core:long_runic_stellarite_rod',
            'gtceu:gravi_star',
            '2x #gtceu:circuits/uxv',
            '64x qilby_core:fine_runic_stellarite_wire',
            '32x qilby_core:fine_runic_stellarite_wire',
            '2x qilby_core:runic_stellarite_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('qilby_core:dark_matter', 8000),
            Fluid.of('qilby_core:dark_energy', 16000)
        )
        .itemOutputs(
            'gtceu:uxv_emitter'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uiv_emitter')).CWUt(512).EUt(GTValues.VA[GTValues.UIV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV]);


    event.recipes.gtceu.assembly_line('uxv_sensor')
        .itemInputs(
            'qilby_core:dark_matter_frame',
            'gtceu:uxv_electric_motor',
            '6x gtceu:darmstadtium_plate',
            'gtceu:gravi_star',
            '2x #gtceu:circuits/uxv',
            '64x qilby_core:fine_runic_stellarite_wire',
            '32x qilby_core:fine_runic_stellarite_wire',
            '2x qilby_core:runic_stellarite_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('qilby_core:dark_matter', 8000),
            Fluid.of('qilby_core:dark_energy', 16000)
        )
        .itemOutputs(
            'gtceu:uxv_sensor'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uiv_sensor')).CWUt(512).EUt(GTValues.VA[GTValues.UIV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV]);
})