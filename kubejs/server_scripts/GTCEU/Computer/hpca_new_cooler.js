ServerEvents.recipes(event => {

    event.remove({id: 'gtceu:assembler/hpca_heat_sink_component'})
    

    //air cooler

    event.recipes.gtceu.assembler('air_cooler_1')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:steel_plate',
            '8x gtceu:aluminium_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:pcb_coolant', 1000)
            )
        .itemOutputs('qilby_core:hpca_cooler_air_i')
        .duration(6000)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.assembler('air_cooler_2')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:aluminium_plate',
            '8x gtceu:stainless_steel_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:pcb_coolant', 1000)
            )
        .itemOutputs('qilby_core:hpca_cooler_air_ii')
        .duration(5500)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.assembler('air_cooler_3')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:stainless_steel_plate',
            '8x gtceu:titanium_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:pcb_coolant', 1000)
            )
        .itemOutputs('qilby_core:hpca_cooler_air_iii')
        .duration(5000)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.assembler('air_cooler_4')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:titanium_plate',
            '8x gtceu:tungsten_steel_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:pcb_coolant', 1000)
            )
        .itemOutputs('qilby_core:hpca_cooler_air_iv')
        .duration(4500)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler('air_cooler_5')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:tungsten_steel_plate',
            '8x gtceu:rhodium_plated_palladium_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:pcb_coolant', 1000)
            )
        .itemOutputs('qilby_core:hpca_cooler_air_v')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.assembler('air_cooler_6')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:rhodium_plated_palladium_plate',
            '8x gtceu:naquadah_alloy_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:pcb_coolant', 1000)
            )
        .itemOutputs('qilby_core:hpca_cooler_air_vi')
        .duration(3500)
        .EUt(GTValues.VA[GTValues.ZPM]);


// Liquid Cooler

    event.recipes.gtceu.assembler('liquid_cooler_1')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:bronze_small_fluid_pipe',
            '6x gtceu:annealed_copper_plate',
            '12x gtceu:aluminium_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:pcb_coolant', 1000)
            )
        .itemOutputs('qilby_core:hpca_cooler_liquid_i')
        .duration(6000)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.assembler('liquid_cooler_2')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:steel_small_fluid_pipe',
            '6x gtceu:aluminium_plate',
            '12x gtceu:stainless_steel_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:pcb_coolant', 2000)
            )
        .itemOutputs('qilby_core:hpca_cooler_liquid_ii')
        .duration(5500)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.assembler('liquid_cooler_3')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:aluminium_small_fluid_pipe',
            '6x gtceu:stainless_steel_plate',
            '12x gtceu:titanium_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:pcb_coolant', 3000)
            )
        .itemOutputs('qilby_core:hpca_cooler_liquid_iii')
        .duration(5000)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.assembler('liquid_cooler_4')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:stainless_steel_small_fluid_pipe',
            '6x gtceu:titanium_plate',
            '12x gtceu:tungsten_steel_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:sodium_potassium', 2000)
            )
        .itemOutputs('qilby_core:hpca_cooler_liquid_iv')
        .duration(4500)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.assembler('liquid_cooler_5')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:titanium_small_fluid_pipe',
            '6x gtceu:tungsten_steel_plate',
            '12x gtceu:rhodium_plated_palladium_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:sodium_potassium', 3000)
            )
        .itemOutputs('qilby_core:hpca_cooler_liquid_v')
        .duration(4500)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.assembler('liquid_cooler_6')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:tungsten_steel_small_fluid_pipe',
            '6x gtceu:rhodium_plated_palladium_plate',
            '12x gtceu:naquadah_alloy_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:sodium_potassium', 4000)
            )
        .itemOutputs('qilby_core:hpca_cooler_liquid_vi')
        .duration(4500)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.assembler('liquid_cooler_7')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:duranium_small_fluid_pipe',
            '6x gtceu:naquadah_alloy_plate',
            '12x gtceu:darmstadtium_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:liquid_helium', 2000)
            )
        .itemOutputs('qilby_core:hpca_cooler_liquid_vii')
        .duration(4500)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembler('liquid_cooler_8')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:naquadah_small_fluid_pipe',
            '6x gtceu:darmstadtium_plate',
            '12x gtceu:neutronium_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:liquid_helium', 3000)
            )
        .itemOutputs('qilby_core:hpca_cooler_liquid_viii')
        .duration(4500)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.assembler('liquid_cooler_9')
        .itemInputs(
            'gtceu:hpca_empty_component',
            '4x gtceu:neutronium_small_fluid_pipe',
            '6x gtceu:tritanium_plate',
            '12x qilby_core:dark_matter_screw'
        )
        .inputFluids(
            Fluid.of('gtceu:liquid_helium', 4000)
            )
        .itemOutputs('qilby_core:hpca_cooler_liquid_ix')
        .duration(4500)
        .EUt(GTValues.VA[GTValues.UIV]);


});
