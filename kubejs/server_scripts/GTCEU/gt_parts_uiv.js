ServerEvents.recipes(event => {

    event.recipes.gtceu.assembly_line('uiv_electric_motor')
        .itemInputs(
            'gtceu:long_magnetic_samarium_rod',
            '2x qilby_core:long_dark_energy_rod',
            '4x gtceu:ostrum_ring',
            '8x qilby_core:stasis_round',
            '64x gtceu:fine_naquadria_wire',
            '64x gtceu:fine_naquadria_wire',
            'qilby_core:dark_energy_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:darmstadtium', 8000)
        )
        .itemOutputs(
            '2x gtceu:uiv_electric_motor'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uev_electric_motor')).CWUt(96).EUt(7864320))
        .duration(600)
        .EUt(80000000);

    event.recipes.gtceu.assembly_line('uiv_electic_pump')
        .itemInputs(
            'gtceu:uiv_electric_motor',
            'gtceu:ostrum_rotor',
            '16x gtceu:styrene_butadiene_rubber_ring',
            '4x qilby_core:stasis_screw',
            '2x gtceu:naquadah_large_fluid_pipe',
            'qilby_core:dark_energy_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:darmstadtium', 8000),
            Fluid.of('gtceu:styrene_butadiene_rubber', 5000)
        )
        .itemOutputs(
            'gtceu:uiv_electric_pump'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uev_electric_pump')).CWUt(96).EUt(7864320))
        .duration(600)
        .EUt(8000000);


    event.recipes.gtceu.assembly_line('uiv_conveyor_module')
        .itemInputs(
            'gtceu:uiv_electric_motor',
            '2x gtceu:styrene_butadiene_rubber_plate',
            '4x gtceu:small_ostrum_gear',
            '16x gtceu:tritanium_round',
            '4x gtceu:ruridit_screw',
            'qilby_core:dark_energy_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:darmstadtium', 8000),
            Fluid.of('gtceu:styrene_butadiene_rubber', 5000)
        )
        .itemOutputs(
            'gtceu:uiv_conveyor_module'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uev_conveyor_module')).CWUt(96).EUt(7864320))
        .duration(600)
        .EUt(8000000);


    event.recipes.gtceu.assembly_line('uiv_electric_piston')
        .itemInputs(
            'gtceu:uiv_electric_motor',
            '4x #forge:plates/ostrum',
            '4x gtceu:ostrum_ring',
            '16x qilby_core:dark_energy_rod',
            '6x gtceu:tritanium_rod',
            'qilby_core:dark_matter_gear',
            '2x qilby_core:small_stasis_gear',
            'qilby_core:dark_energy_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:darmstadtium', 8000),
            Fluid.of('qilby_core:dark_matter', 16000)
        )
        .itemOutputs(
            'gtceu:uiv_electric_piston'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uev_electric_piston')).CWUt(96).EUt(7864320))
        .duration(600)
        .EUt(8000000);


    event.recipes.gtceu.assembly_line('uiv_robot_arm')
        .itemInputs(
            '4x qilby_core:long_dark_energy_rod',
            'qilby_core:dark_matter_gear',
            '3x qilby_core:small_stasis_gear',
            '2x gtceu:uiv_electric_motor',
            'gtceu:uiv_electric_piston',
            '#gtceu:circuits/uiv',
            '2x #gtceu:circuits/uev',
            '4x #gtceu:circuits/uhv',
            '2x qilby_core:dark_energy_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:lubricant', 2000),
            Fluid.of('gtceu:darmstadtium', 8000),
            Fluid.of('qilby_core:dark_matter', 16000)
        )
        .itemOutputs(
            'gtceu:uiv_robot_arm'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uev_robot_arm')).CWUt(96).EUt(7864320))
        .duration(600)
        .EUt(8000000);

    event.recipes.gtceu.assembly_line('uiv_field_generator')
        .itemInputs(
            'qilby_core:stasis_frame',
            '6x gtceu:darmstadtium_plate',
            'gtceu:gravi_star',
            '2x gtceu:uiv_emitter',
            '2x #gtceu:circuits/uiv',
            '64x qilby_core:fine_dark_energy_wire',
            '32x qilby_core:fine_dark_energy_wire',
            '4x qilby_core:dark_energy_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:darmstadtium', 8000),
            Fluid.of('qilby_core:dark_matter', 16000)
        )
        .itemOutputs(
            'gtceu:uiv_field_generator'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uev_field_generator')).CWUt(96).EUt(7864320))
        .duration(600)
        .EUt(8000000);
    

    event.recipes.gtceu.assembly_line('uiv_emitter')
        .itemInputs(
            'qilby_core:stasis_frame',
            'gtceu:uiv_electric_motor',
            '4x qilby_core:long_dark_energy_rod',
            'gtceu:gravi_star',
            '2x #gtceu:circuits/uiv',
            '64x qilby_core:fine_dark_energy_wire',
            '32x qilby_core:fine_dark_energy_wire',
            '2x qilby_core:dark_energy_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:darmstadtium', 8000),
            Fluid.of('qilby_core:dark_matter', 16000)
        )
        .itemOutputs(
            'gtceu:uiv_emitter'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uev_emitter')).CWUt(96).EUt(7864320))
        .duration(600)
        .EUt(8000000);


    event.recipes.gtceu.assembly_line('uiv_sensor')
        .itemInputs(
            'qilby_core:stasis_frame',
            'gtceu:uiv_electric_motor',
            '6x gtceu:darmstadtium_plate',
            'gtceu:gravi_star',
            '2x #gtceu:circuits/uiv',
            '64x qilby_core:fine_dark_energy_wire',
            '32x qilby_core:fine_dark_energy_wire',
            '2x qilby_core:dark_energy_single_cable'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('gtceu:darmstadtium', 8000),
            Fluid.of('qilby_core:dark_matter', 16000)
        )
        .itemOutputs(
            'gtceu:uiv_sensor'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:uev_sensor')).CWUt(96).EUt(7864320))
        .duration(600)
        .EUt(8000000);
})