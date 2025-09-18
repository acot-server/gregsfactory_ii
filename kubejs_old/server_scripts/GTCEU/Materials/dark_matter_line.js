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
            '32x qilby_core:dark_matter_dust',
        )
        .chancedOutput(
            '4x qilby_core:small_dark_energy_dust', 1000, 0 
        )
        .duration(100)
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
            '32x qilby_core:dark_energy_dust',
        )
        .chancedOutput(
            '2x qilby_core:tiny_runic_stelarite_dust', 500, 0
        )
        .duration(100)
        .CWUt(4096)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.dark_matter_attractor('runic_stellarite')
        .itemInputs(
            '64x gtca:proton',
            '2x gtca:small_adamantium_dust',
            '4x qilby_core:dark_energy_dust'
        )
        .inputFluids(
            Fluid.of('gtca:radon_polymer', 576),
            Fluid.of('gtceu:neutronium', 1296),
            Fluid.of('gtca:stellite_79', 12960)
        )
        .itemOutputs(
            '32x qilby_core:runic_stelarite_dust',
        )
        .chancedOutput(
            '4x qilby_core:tiny_stellarite_dust', 1000, 0
        )
        .duration(100)
        .CWUt(16384)
        .EUt(GTValues.V[GTValues.UIV]);

   event.recipes.gtceu.dark_matter_attractor('stellarite')
        .itemInputs(
            '64x qilby_core:ultra_stabilized_chroniton',
            '4x qilby_core:runic_stelarite_dust',
            '64x gtca:unknown_particle'
        )
        .inputFluids(
            Fluid.of('gtca:quantum_alloy', 576),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 2000),
            Fluid.of('qilby_core:dark_matter', 12960)
        )
        .itemOutputs(
            '32x qilby_core:stellarite_dust'
        )
        .chancedOutput(
            '2x qilby_core:tiny_fabric_of_reality_dust', 500, 0
        )
        .duration(100)
        .CWUt(65536)
        .EUt(GTValues.V[GTValues.UXV]);

   event.recipes.gtceu.dark_matter_attractor('fabric_of_reality')
        .itemInputs(
            '64x qilby_core:ultra_stabilized_chroniton',
            '4x gtceu:infinity_catalyst_dust',
            '64x gtca:unknown_particle'
        )
        .inputFluids(
            Fluid.of('qilby_core:stellarite', 576),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 2000),
            Fluid.of('qilby_core:runic_stelarite', 1440)
        )
        .itemOutputs(
            '32x qilby_core:fabric_of_reality_dust'
        )
        .chancedOutput(
            'gtceu:tiny_infinity_dust', 500, 0
        )
        .duration(100)
        .CWUt(262144)
        .EUt(GTValues.V[GTValues.OpV]);

   event.recipes.gtceu.dark_matter_attractor('infinity')
        .itemInputs(
            '64x qilby_core:ultra_stabilized_chroniton',
            '4x qilby_core:fabric_of_reality_dust',
            '32x qilby_core:supracausal_processor'
        )
        .inputFluids(
            Fluid.of('qilby_core:stellarite', 576),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 2000),
            Fluid.of('qilby_core:runic_stelarite', 1440)
        )
        .itemOutputs(
            '32x gtceu:infinity_dust'
        )
        .duration(100)
        .CWUt(16777216)
        .EUt(GTValues.V[GTValues.MAX]);
})
