ServerEvents.recipes(event => {

    ////// Machine Recipe //////
       event.recipes.gtceu.assembly_line('dm_attractor')
        .itemInputs(
            '4x gtceu:parallel_fusion_reactor_3',
            '12x #gtceu:circuits/uev',
            '64x gtca:electron_cell',
            '64x gtceu:ruthenium_trinium_americium_neutronate_octal_wire',
            '64x gtceu:uv_field_generator',
            '64x qilby_core:extreme_hi_pow_integrated_circuit',
            '16x gtca:rnac_casing'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('gtceu:neutronium', 5760)
        )
        .itemOutputs(
            'gtceu:dark_matter_attractor'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:parallel_fusion_reactor_3')).CWUt(6144).EUt(GTValues.VA[GTValues.UEV]))
        .duration(1800)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.dark_matter_attractor('dark_matter')
        .itemInputs(
            '16x gtceu:tritanium_dust',
            '2x gtca:small_adamantium_dust',
            '6x gtca:unknown_particle'
        )
        .inputFluids(
            Fluid.of('gtca:quantum_alloy', 144),
            Fluid.of('gtceu:neutronium', 1296),
            Fluid.of('gtceu:elementium', 12960)
        )
        .itemOutputs(
            '16x qilby_core:dark_matter_dust',
        )
        .chancedOutput(
            '4x qilby_core:small_dark_energy_dust', 500, 100
        )
        .duration(200)
        .CWUt(1024)
        .EUt(GTValues.V[GTValues.ZPM]);

   event.recipes.gtceu.dark_matter_attractor('dark_energgy')
        .itemInputs(
            '16x gtca:small_adamantium_dust',
            '4x qilby_core:dark_matter_dust',
            '2x ae2:singularity'
        )
        .inputFluids(
            Fluid.of('gtca:quantum_alloy', 288),
            Fluid.of('gtceu:ruthenium_trinium_americium_neutronate', 1296),
            Fluid.of('qilby_core:stasis', 12960)
        )
        .itemOutputs(
            '16x qilby_core:dark_energy_dust',
        )
        .chancedOutput(
            '2x qilby_core:tiny_runic_stelarite_dust', 250, 50
        )
        .duration(100)
        .CWUt(4096)
        .EUt(GTValues.V[GTValues.UHV]);
})
