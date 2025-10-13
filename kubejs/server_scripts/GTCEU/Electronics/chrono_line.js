ServerEvents.recipes(event => {

    ////// Machine Recipe //////
    event.recipes.gtceu.assembly_line('chrono_hoursglass')
        .itemInputs(
            '4x gtceu:dark_matter_attractor',
            '12x #gtceu:circuits/uiv',
            '4x gtca:quantum_anomaly',
            '64x gtceu:ruthenium_trinium_americium_neutronate_octal_wire',
            '64x gtceu:uhv_field_generator',
            '64x qilby_core:ultimate_hi_pow_integrated_circuit',
            '8x gtca:radiant_proof_reinforced_casing'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:dark_energy', 5760)
        )
        .itemOutputs(
            'gtceu:chroniton_hoursglass'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:dark_matter_attractor')).CWUt(8192).EUt(GTValues.VA[GTValues.UIV]))
        .duration(1800)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.chroniton_hoursglass('raw_unstable_chroniton')
        .itemInputs(
            'gtceu:neutronium_nugget',
            '16x gtca:neutron',
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 36),
        )
        .chancedOutput(
            'gtceu:neutronium_nugget', 4000, 0
        )
        .chancedOutput(
            '2x qilby_core:raw_unstable_chroniton', 4000, 0 
        )
        .duration(150)
        .CWUt(2048)
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.chroniton_hoursglass('raw_unstable_chroniton_void')
        .itemInputs(
            'gtceu:neutronium_nugget',
            '16x gtca:neutron',
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 36),
        )
        .itemOutputs(
            '4x qilby_core:raw_unstable_chroniton'
        )
        .chancedOutput(
            '2x qilby_core:raw_unstable_chroniton', 4000, 0
        )
        .duration(150)
        .CWUt(2048)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.chroniton_hoursglass('unstable_chroniton')
        .itemInputs(
            'qilby_core:raw_unstable_chroniton',
            '16x gtca:neutron',
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 36),
        )
        .chancedOutput(
            'qilby_core:raw_unstable_chroniton', 8000, 0
        )
        .chancedOutput(
            'qilby_core:unstable_chroniton', 4000, 0
        )
        .duration(150)
        .CWUt(3072)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.chroniton_hoursglass('unstable_chroniton_void')
        .itemInputs(
            'qilby_core:raw_unstable_chroniton',
            '16x gtca:neutron',
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 36),
        )
        .itemOutputs(
            '4x qilby_core:raw_unstable_chroniton',
            'qilby_core:unstable_chroniton'
        )
        .duration(150)
        .CWUt(3072)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UHV]);


    event.recipes.gtceu.chroniton_hoursglass('poor_stabilized_chroniton')
        .itemInputs(
            'qilby_core:unstable_chroniton',
            '4x qilby_core:dark_matter_nugget',
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:dark_energy', 36),
        )
        .chancedOutput(
            'qilby_core:unstable_chroniton', 8000, 0
        )
        .chancedOutput(
            'qilby_core:poor_stabilized_chroniton', 4000, 0
        )
        .duration(150)
        .CWUt(4096)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.chroniton_hoursglass('poor_stabilized_chroniton_void')
        .itemInputs(
            'qilby_core:unstable_chroniton',
            '4x qilby_core:dark_matter_nugget',
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:dark_energy', 36),
        )
        .itemOutputs(
            '4x qilby_core:unstable_chroniton',
            'qilby_core:poor_stabilized_chroniton'
        )
        .duration(150)
        .CWUt(4096)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.chroniton_hoursglass('stabilized_chroniton')
        .itemInputs(
            'qilby_core:poor_stabilized_chroniton',
            '4x qilby_core:dark_matter_nugget',
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:dark_energy', 72),
        )
        .chancedOutput(
            'qilby_core:poor_stabilized_chroniton', 8000, 0
        )
        .chancedOutput(
            'qilby_core:stabilized_chroniton', 4000, 0
        )
        .duration(150)
        .CWUt(6144)
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('stabilized_chroniton_void')
        .itemInputs(
            'qilby_core:poor_stabilized_chroniton',
            '4x qilby_core:dark_matter_nugget',
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:dark_energy', 72),
        )
        .itemOutputs(
            '4x qilby_core:poor_stabilized_chroniton',
            'qilby_core:stabilized_chroniton'
        )
        .duration(150)
        .CWUt(6144)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('ultra_stabilized_chroniton')
        .itemInputs(
            'qilby_core:stabilized_chroniton',
            '4x qilby_core:dark_energy_nugget',
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:runic_stellarite', 72),
        )
        .chancedOutput(
            'qilby_core:ultra_stabilized_chroniton', 8000, 0
        )
        .chancedOutput(
            'qilby_core:ultra_stabilized_chroniton', 6000, 0
        )
        .duration(50)
        .CWUt(8192)
        .dimension('minecraft:overworld')
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.chroniton_hoursglass('ultra_stabilized_chroniton_void')
        .itemInputs(
            'qilby_core:stabilized_chroniton',
            '4x qilby_core:dark_energy_nugget',
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:runic_stellarite', 72),
        )
        .itemOutputs(
            '4x qilby_core:ultra_stabilized_chroniton'
        )
        .chancedOutput(
            'qilby_core:ultra_stabilized_chroniton', 6000, 0
        )
        .duration(50)
        .CWUt(8192)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UIV]);

        ////Poor Stabilized Chroniton////


        ////Ultra Stabilized CHroniton

})