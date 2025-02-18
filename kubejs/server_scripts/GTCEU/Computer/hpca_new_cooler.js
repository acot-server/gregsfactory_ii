ServerEvents.recipes(event => {

    event.remove({id: 'gtceu:assembler/hpca_heat_sink_component'})
    

    //air cooler

    event.recipes.gtceu.assembler('new_hpca_heat_sink')
        .itemInputs(
            'gtceu:hpca_empty_component',
            'gtceu:aluminium_plate',
            'gtceu:stainless_steel_screw'
        )
    .inputFluids(
        Fluid.of('gtceu:pcb_coolant', 1000)
        )
    .itemOutputs('gtceu:hpca_heat_sink_component')
    .duration(4000)
    .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.assembler('air_cooler_1')
        .itemInputs(
            'gtceu:hpca_heat_sink_component',
            '4x gtceu:aluminium_rotor',
            '8x gtceu:copper_plate',
            '2x gtceu:stainless_steel_screw'
        )
    .inputFluids(
        Fluid.of('gtceu:pcb_coolant', 2000)
        )
    .itemOutputs('qilby_core:hpca_cooler_air_iv')
    .duration(3500)
    .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.assembler('air_cooler_2')
        .itemInputs(
            'qilby_core:hpca_cooler_air_zpm',
            '4x gtceu:titanium_rotor',
            '8x gtceu:double_copper_plate',
            '4x gtceu:stainless_steel_screw'
        )
    .inputFluids(
        Fluid.of('gtceu:pcb_coolant', 4000)
        )
    .itemOutputs('qilby_core:hpca_cooler_air_zpm')
    .duration(3000)
    .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler('air_cooler_3')
        .itemInputs(
            'qilby_core:hpca_cooler_air_zpm',
            '4x gtceu:naquadah_alloy_rotor',
            '16x gtceu:naquadah_plate',
            '4x gtceu:rhodium_screw'
        )
    .inputFluids(
        Fluid.of('gtceu:pcb_coolant', 6000)
        )
    .itemOutputs('qilby_core:hpca_cooler_air_uhv')
    .duration(2500)
    .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.assembler('air_cooler_4')
        .itemInputs(
            'qilby_core:hpca_cooler_air_uhv',
            '4x gtceu:hsss_rotor',
            '16x gtceu:neutronium_plate',
            '4x gtceu:rhodium_screw'
        )
    .inputFluids(
        Fluid.of('gtceu:pcb_coolant', 8000)
        )
    .itemOutputs('qilby_core:hpca_cooler_air_uev')
    .duration(2000)
    .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.assembler('air_cooler_5')
        .itemInputs(
            'qilby_core:hpca_cooler_air_uev',
            '4x qilby_core:stasis_rotor',
            '16x qilby_core:dark_matter_plate',
            '4x qilby_core:wakfu_screw'
        )
    .inputFluids(
        Fluid.of('gtceu:pcb_coolant', 10000)
        )
    .itemOutputs('qilby_core:hpca_cooler_air_uiv')
    .duration(1500)
    .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.assembler('air_cooler_6')
        .itemInputs(
            'qilby_core:hpca_cooler_air_uiv',
            '4x qilby_core:stasis_rotor',
            '16x qilby_core:dark_energy_plate',
            '4x qilby_core:dark_matter_screw'
        )
    .inputFluids(
        Fluid.of('gtceu:pcb_coolant', 12000)
        )
    .itemOutputs('qilby_core:hpca_cooler_air_uxv')
    .duration(1000)
    .EUt(GTValues.VA[GTValues.UHV]);

    //Liquid Cooler

    event.recipes.gtceu.assembler('fluid_cooler_1')
        .itemInputs(
            'gtceu:hv_input_hatch',
            'gtceu:iv_electric_pump',
            '8x gtceu:stainless_steel_tiny_fluid_pipe',
            '64x gtceu:copper_plate'
        )
    .inputFluids(
        Fluid.of('gtceu:liquid_helium', 3000)
        )
    .itemOutputs('qilby_core:hpca_cooler_fluid_zpm')
    .duration(500)
    .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler('fluid_cooler_2')
        .itemInputs(
            'gtceu:ev_input_hatch',
            'gtceu:luv_electric_pump',
            '8x gtceu:naquadah_tiny_fluid_pipe',
            '32x gtceu:double_copper_plate',
            '32x gtceu:double_copper_plate'
        )
    .inputFluids(
        Fluid.of('gtceu:liquid_helium', 6000)
        )
    .itemOutputs('qilby_core:hpca_cooler_fluid_uv')
    .duration(500)
    .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.assembler('fluid_cooler_3')
        .itemInputs(
            'gtceu:iv_input_hatch',
            'gtceu:zpm_electric_pump',
            '8x gtceu:naquadah_small_fluid_pipe',
            '16x gtceu:double_trinium_plate',
        )
    .inputFluids(
        Fluid.of('gtceu:liquid_helium', 9000)
        )
    .itemOutputs('qilby_core:hpca_cooler_fluid_uhv')
    .duration(500)
    .EUt(GTValues.VA[GTValues.ZPM]);
    
    event.recipes.gtceu.assembler('fluid_cooler_4')
        .itemInputs(
            'gtceu:luv_input_hatch',
            'gtceu:uv_electric_pump',
            '8x gtceu:neutronium_small_fluid_pipe',
            '16x gtceu:double_tritanium_plate',
        )
        .inputFluids(
            Fluid.of('gtceu:liquid_helium', 12000)
            )
        .itemOutputs('qilby_core:hpca_cooler_fluid_uev')
        .duration(500)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.assembler('fluid_cooler_5')
        .itemInputs(
            'gtceu:zpm_input_hatch',
            'gtceu:uhv_electric_pump',
            '8x gtceu:neutronium_normal_fluid_pipe',
            '16x qilby_core:double_wakfu_plate',
            '3x gtceu:uv_field_generator'
        )
        .inputFluids(
            Fluid.of('gtceu:liquid_helium', 15000)
            )
        .itemOutputs('qilby_core:hpca_cooler_fluid_uiv')
        .duration(500)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembler('fluid_cooler_6')
        .itemInputs(
            'gtceu:uv_input_hatch',
            'gtceu:uev_electric_pump',
            '16x gtceu:neutronium_normal_fluid_pipe',
            '16x qilby_core:double_stasis_plate',
            '3x gtceu:uhv_field_generator'
        )
        .inputFluids(
            Fluid.of('gtceu:liquid_helium', 16000)
            )
        .itemOutputs('qilby_core:hpca_cooler_fluid_uxv')
        .duration(500)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.assembler('fluid_cooler_7')
        .itemInputs(
            'gtceu:uhv_input_hatch',
            'gtceu:uiv_electric_pump',
            '16x gtceu:neutronium_normal_fluid_pipe',
            '16x qilby_core:double_dark_matter_plate',
            '3x gtceu:uev_field_generator'
        )
        .inputFluids(
            Fluid.of('gtceu:liquid_helium', 32000)
            )
        .itemOutputs('qilby_core:hpca_cooler_fluid_opv')
        .duration(500)
        .EUt(GTValues.VA[GTValues.UIV]);


    event.recipes.gtceu.assembler('fluid_cooler_8')
        .itemInputs(
            'gtceu:uev_input_hatch',
            '64x gtceu:uxv_electric_pump',
            '64x qilby_core:fabric_of_reality_normal_fluid_pipe',
            '32x qilby_core:double_fabric_of_reality_plate',
            '64x gtceu:opv_field_generator'
        )
        .inputFluids(
            Fluid.of('gtceu:liquid_helium', 32000)
            )
        .itemOutputs('qilby_core:hpca_cooler_fluid_max')
        .duration(500)
        .EUt(GTValues.VA[GTValues.MAX]);

});
