ServerEvents.recipes(event => {
    event.remove({id: 'gtceu:assembly_line/ultimate_battery'})
    event.remove({id: 'gtceu:research_station/ultimate_battery'})

    //new recipes
    event.recipes.gtceu.assembly_line('dm_capacitor')
        .itemInputs(
            'qilby_core:shukrute_printed_circuit_board',
            '16x #forge:plates/dark_matter',
            '4x #gtceu:circuits/uhv',
            'gtceu:energy_cluster',
            'gtceu:uv_field_generator',
            '16x qilby_core:extreme_hi_pow_integrated_circuit',
            '24x gtceu:advanced_smd_diode',
            '24x gtceu:advanced_smd_inductor',
            '64x qilby_core:fine_dark_matter_wire',
            '16x gtceu:tritanium_bolt'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:polybenzimidazole', 576),
            Fluid.of('gtceu:trinium', 288)
        )
        .itemOutputs(
            'qilby_core:dark_matter_capacitor'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:energy_cluster')).CWUt(256).EUt(GTValues.VA[GTValues.UV]))
        .duration(2000)
        .EUt(GTValues.VHA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line('de_capacitor')
        .itemInputs(
            '4x qilby_core:shukrute_printed_circuit_board',
            '16x #forge:plates/dark_energy',
            '4x #gtceu:circuits/uev',
            'qilby_core:dark_matter_capacitor',
            'gtceu:uhv_field_generator',
            '32x qilby_core:extreme_hi_pow_integrated_circuit',
            '24x gtceu:advanced_smd_diode',
            '24x gtceu:advanced_smd_inductor',
            '64x qilby_core:fine_dark_energy_wire',
            '16x gtceu:neutronium_bolt'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:polybenzimidazole', 576),
            Fluid.of('gtceu:neutronium', 288)
        )
        .itemOutputs(
            'qilby_core:dark_energy_capacitor'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:dark_matter_capacitor')).CWUt(512).EUt(GTValues.VA[GTValues.UHV]))
        .duration(2000)
        .EUt(GTValues.VHA[GTValues.UEV]);

    event.recipes.gtceu.assembly_line('runic_energy_capacitor')
        .itemInputs(
            '8x qilby_core:shukrute_printed_circuit_board',
            '16x #forge:plates/runic_stellarite',
            '4x #gtceu:circuits/uiv',
            'qilby_core:dark_energy_capacitor',
            'gtceu:uev_field_generator',
            '32x qilby_core:ultimate_hi_pow_integrated_circuit',
            '24x gtceu:advanced_smd_diode',
            '24x gtceu:advanced_smd_inductor',
            '64x qilby_core:fine_runic_stellarite_wire',
            '16x qilby_core:dark_matter_bolt'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:polybenzimidazole', 576),
            Fluid.of('qilby_core:dark_matter', 288)
        )
        .itemOutputs(
            'qilby_core:runic_energy_capacitor'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:dark_energy_capacitor')).CWUt(1024).EUt(GTValues.VA[GTValues.UEV]))
        .duration(2000)
        .EUt(GTValues.VHA[GTValues.UIV]);

    event.recipes.gtceu.assembly_line('stellarite_energy_capacitor')
        .itemInputs(
            '16x qilby_core:shukrute_printed_circuit_board',
            '16x #forge:plates/stellarite',
            '4x #gtceu:circuits/uiv',
            'qilby_core:runic_energy_capacitor',
            'gtceu:uiv_field_generator',
            '48x qilby_core:ultimate_hi_pow_integrated_circuit',
            '24x gtceu:advanced_smd_diode',
            '24x gtceu:advanced_smd_inductor',
            '64x qilby_core:fine_stellarite_wire',
            '16x qilby_core:dark_energy_bolt'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:polybenzimidazole', 576),
            Fluid.of('qilby_core:dark_energy', 288)
        )
        .itemOutputs(
            'qilby_core:stellar_energy_capacitor'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:runic_energy_capacitor')).CWUt(2048).EUt(GTValues.VA[GTValues.UIV]))
        .duration(2000)
        .EUt(GTValues.VHA[GTValues.UXV]);
})