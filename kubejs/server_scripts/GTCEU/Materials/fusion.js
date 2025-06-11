ServerEvents.recipes(event => {   
   event.recipes.gtceu.assembly_line('parallel_fusion_mk1')
        .itemInputs(
            'gtceu:luv_fusion_reactor',
            '8x #gtceu:circuits/zpm',
            '16x gtceu:luv_lapotronic_battery',
            '32x gtceu:indium_tin_barium_titanium_cuprate_octal_wire',
            '16x gtceu:luv_field_generator',
            '32x gtceu:uhpic_chip',
            '16x gtceu:superconducting_coil'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:niobium_titanium', 5760)
        )
        .itemOutputs(
            'gtceu:parallel_fusion_reactor_1'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:superconducting_coil')).CWUt(256).EUt(GTValues.VA[GTValues.ZPM]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.ZPM]);

   event.recipes.gtceu.assembly_line('parallel_fusion_mk2')
        .itemInputs(
            'gtceu:zpm_fusion_reactor',
            '8x #gtceu:circuits/uv',
            '16x gtceu:zpm_lapotronic_battery',
            '32x gtceu:uranium_rhodium_dinaquadide_octal_wire',
            '16x gtceu:zpm_field_generator',
            '16x qilby_core:extreme_hi_pow_integrated_circuit',
            '16x gtceu:fusion_coil'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:vanadium_gallium', 5760)
        )
        .itemOutputs(
            'gtceu:parallel_fusion_reactor_2'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:fusion_coil')).CWUt(1024).EUt(GTValues.VA[GTValues.UV]))
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UV]);

   event.recipes.gtceu.assembly_line('parallel_fusion_mk3')
        .itemInputs(
            'gtceu:uv_fusion_reactor',
            '8x #gtceu:circuits/uhv',
            '16x gtceu:uv_lapotronic_battery',
            '32x gtceu:enriched_naquadah_trinium_europium_duranide_octal_wire',
            '16x gtceu:uv_field_generator',
            '32x qilby_core:extreme_hi_pow_integrated_circuit',
            '16x gtceu:fusion_casing_mk3'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:vanadium_gallium', 5760)
        )
        .itemOutputs(
            'gtceu:parallel_fusion_reactor_3'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:fusion_casing_mk3')).CWUt(4096).EUt(GTValues.VA[GTValues.UHV]))
        .duration(1800)
        .EUt(GTValues.VA[GTValues.UHV]);
});