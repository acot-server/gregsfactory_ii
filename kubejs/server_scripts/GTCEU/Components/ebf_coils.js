ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler('dark_matter_coil')
        .itemInputs(
            '8x qilby_core:dark_matter_double_wire',
            '8x gtceu:tritanium_foil'
        )
        .inputFluids(
            Fluid.of('gtceu:darmstadtium', 144),
        )
        .itemOutputs(
            'kubejs:dark_matter_coil_block'
        )
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembler('dark_energy_coil')
        .itemInputs(
            '8x qilby_core:dark_energy_double_wire',
            '8x qilby_core:dark_matter_foil'
        )
        .inputFluids(
            Fluid.of('gtceu:neutronium', 144),
        )
        .itemOutputs(
            'kubejs:dark_energy_coil_block'
        )
        .duration(1100)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.assembler('runic_coil')
        .itemInputs(
            '8x qilby_core:runic_stelarite_double_wire',
            '8x qilby_core:dark_energy_foil'
        )
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 144),
        )
        .itemOutputs(
            'kubejs:runic_stelarite_coil_block'
        )
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembler('stellarite_coil')
        .itemInputs(
            '8x qilby_core:stellarite_double_wire',
            '8x qilby_core:runic_stelarite_foil'
        )
        .inputFluids(
            Fluid.of('qilby_core:dark_energy', 144),
        )
        .itemOutputs(
            'kubejs:stellarite_coil_block'
        )
        .duration(1300)
        .EUt(GTValues.VA[GTValues.UXV]);

    event.recipes.gtceu.assembler('fabric_coil')
        .itemInputs(
            '8x qilby_core:fabric_of_reality_double_wire',
            '8x qilby_core:stellarite_foil'
        )
        .inputFluids(
            Fluid.of('qilby_core:runic_stelarite', 144),
        )
        .itemOutputs(
            'kubejs:fabric_of_reality_coil_block'
        )
        .duration(1400)
        .EUt(GTValues.VA[GTValues.OpV]);
});