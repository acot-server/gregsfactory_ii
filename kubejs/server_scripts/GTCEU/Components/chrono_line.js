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
        .stationResearch(b => b.researchStack(Item.of('gtceu:dark_matter_attractor')).CWUt(16384).EUt(GTValues.VA[GTValues.UIV]))
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
            'gtceu:neutronium_nugget', 5000, 0
        )
        .chancedOutput(
            '2x qilby_core:raw_unstable_chroniton', 1000, 500
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
            '2x qilby_core:raw_unstable_chroniton', 1000, 500
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
            'qilby_core:raw_unstable_chroniton', 3000, 0
        )
        .chancedOutput(
            'qilby_core:unstable_chroniton', 5000, 1000
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
            '4x qilby_core:raw_unstable_chroniton'
        )
        .chancedOutput(
            'qilby_core:unstable_chroniton', 5000, 1000
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
            'qilby_core:unstable_chroniton', 3000, 0
        )
        .chancedOutput(
            'qilby_core:poor_stabilized_chroniton', 5000, 1000
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
            '4x qilby_core:unstable_chroniton'
        )
        .chancedOutput(
            'qilby_core:poor_stabilized_chroniton', 5000, 1000
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
            'qilby_core:poor_stabilized_chroniton', 7000, 0
        )
        .chancedOutput(
            'qilby_core:stabilized_chroniton', 2000, 1000
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
            '4x qilby_core:poor_stabilized_chroniton'
        )
        .chancedOutput(
            'qilby_core:stabilized_chroniton', 5000, 1000
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
            Fluid.of('qilby_core:runic_stelarite', 72),
        )
        .chancedOutput(
            'qilby_core:ultra_stabilized_chroniton', 1000, 1000
        )
        .chancedOutput(
            'qilby_core:ultra_stabilized_chroniton', 500, 500
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
            Fluid.of('qilby_core:runic_stelarite', 72),
        )
        .itemOutputs(
            '4x qilby_core:ultra_stabilized_chroniton'
        )
        .chancedOutput(
            'qilby_core:ultra_stabilized_chroniton', 5000, 1000
        )
        .duration(50)
        .CWUt(8192)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UIV]);

        ////Poop Stabilized Chroniton////
    event.recipes.gtceu.chroniton_hoursglass('chronal_processor_earth')
        .itemInputs(
            'qilby_core:rushu_printed_circuit_board',
            '12x qilby_core:optical_coputation_circuit',
            '24x qilby_core:poor_stabilized_chroniton'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 144),
        )
        .itemOutputs(
            '2x qilby_core:chronal_processor'
        )
        .chancedOutput(
            'qilby_core:chronal_processor', 2000, 500
        )
        .duration(300)
        .CWUt(12288)
        .dimension('minecraft:overworld')
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.chroniton_hoursglass('chronal_processor_void')
        .itemInputs(
            'qilby_core:rushu_printed_circuit_board',
            '12x qilby_core:optical_coputation_circuit',
            '24x qilby_core:poor_stabilized_chroniton'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 144),
        )
        .itemOutputs(
            '8x qilby_core:chronal_processor'
        )
        .chancedOutput(
            '2x qilby_core:chronal_processor', 5000, 1000
        )
        .duration(300)
        .CWUt(12288)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.chroniton_hoursglass('chronal_processor_assembly_earth')
        .itemInputs(
            'qilby_core:chronal_processor',
            '18x qilby_core:optical_coputation_circuit',
            '32x qilby_core:poor_stabilized_chroniton'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 576),
        )
        .itemOutputs(
            '2x qilby_core:chronal_processor_assembly'
        )
        .chancedOutput(
            'qilby_core:chronal_processor', 2000, 500
        )
        .duration(450)
        .CWUt(16384)
        .dimension('minecraft:overworld')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('chronal_processor_assembly_void')
        .itemInputs(
            'qilby_core:chronal_processor',
            '18x qilby_core:optical_coputation_circuit',
            '32x qilby_core:poor_stabilized_chroniton'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 576),
        )
        .itemOutputs(
            '8x qilby_core:chronal_processor_assembly'
        )
        .chancedOutput(
            '2x qilby_core:chronal_processor', 5000, 1000
        )
        .duration(450)
        .CWUt(16384)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('chronal_supercomputer_earth')
        .itemInputs(
            'qilby_core:chronal_processor_assembly',
            '24x qilby_core:optical_coputation_circuit',
            '40x qilby_core:poor_stabilized_chroniton'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:runic_stelarite', 144),
        )
        .itemOutputs(
            '2x qilby_core:chronal_processor_computer'
        )
        .chancedOutput(
            'qilby_core:chronal_processor_assembly', 2000, 500
        )
        .duration(450)
        .CWUt(24572)
        .dimension('minecraft:overworld')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('chronal_supercomputer_void')
        .itemInputs(
            'qilby_core:chronal_processor_assembly',
            '24x qilby_core:optical_coputation_circuit',
            '40x qilby_core:poor_stabilized_chroniton'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:runic_stelarite', 144),
        )
        .itemOutputs(
            '8x qilby_core:chronal_processor_computer'
        )
        .chancedOutput(
            '2x qilby_core:chronal_processor_assembly', 5000, 1000
        )
        .duration(450)
        .CWUt(24572)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('chronal_mainframe_earth')
        .itemInputs(
            'qilby_core:chronal_processor_computer',
            '32x qilby_core:optical_coputation_circuit',
            '48x qilby_core:poor_stabilized_chroniton'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:runic_stelarite', 576),
        )
        .itemOutputs(
            '2x qilby_core:chronal_processor_mainframe'
        )
        .chancedOutput(
            'qilby_core:chronal_processor_computer', 2000, 500
        )
        .duration(450)
        .CWUt(32768)
        .dimension('minecraft:overworld')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('chronal_mainframe_void')
        .itemInputs(
            'qilby_core:chronal_processor_computer',
            '32x qilby_core:optical_coputation_circuit',
            '48x qilby_core:poor_stabilized_chroniton'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:runic_stelarite', 576),
        )
        .itemOutputs(
            '8x qilby_core:chronal_processor_mainframe'
        )
        .chancedOutput(
            '2x qilby_core:chronal_processor_computer', 5000, 1000
        )
        .duration(450)
        .CWUt(32768)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UEV]);

        ////Stabilized Chroniton

    event.recipes.gtceu.chroniton_hoursglass('stb_chronal_processor_earth')
        .itemInputs(
            'qilby_core:rushu_printed_circuit_board',
            '12x qilby_core:optical_coputation_circuit',
            '24x qilby_core:stabilized_chroniton'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 144),
        )
        .itemOutputs(
            '4x qilby_core:chronal_processor'
        )
        .chancedOutput(
            '2x qilby_core:chronal_processor', 2000, 500
        )
        .duration(300)
        .CWUt(12288)
        .dimension('minecraft:overworld')
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.chroniton_hoursglass('stb_chronal_processor_void')
        .itemInputs(
            'qilby_core:rushu_printed_circuit_board',
            '12x qilby_core:optical_coputation_circuit',
            '24x qilby_core:stabilized_chroniton'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 144),
        )
        .itemOutputs(
            '16x qilby_core:chronal_processor'
        )
        .chancedOutput(
            '4x qilby_core:chronal_processor', 5000, 1000
        )
        .duration(300)
        .CWUt(12288)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.chroniton_hoursglass('stb_chronal_processor_assembly_earth')
        .itemInputs(
            'qilby_core:chronal_processor',
            '18x qilby_core:optical_coputation_circuit',
            '32x qilby_core:stabilized_chroniton'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 576),
        )
        .itemOutputs(
            '4x qilby_core:chronal_processor_assembly'
        )
        .chancedOutput(
            '2x qilby_core:chronal_processor', 2000, 500
        )
        .duration(450)
        .CWUt(16384)
        .dimension('minecraft:overworld')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('stb_chronal_processor_assembly_void')
        .itemInputs(
            'qilby_core:chronal_processor',
            '18x qilby_core:optical_coputation_circuit',
            '32x qilby_core:stabilized_chroniton'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 576),
        )
        .itemOutputs(
            '16x qilby_core:chronal_processor_assembly'
        )
        .chancedOutput(
            '4x qilby_core:chronal_processor', 5000, 1000
        )
        .duration(450)
        .CWUt(16384)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('stb_chronal_supercomputer_earth')
        .itemInputs(
            'qilby_core:chronal_processor_assembly',
            '24x qilby_core:optical_coputation_circuit',
            '40x qilby_core:stabilized_chroniton'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:runic_stelarite', 144),
        )
        .itemOutputs(
            '4x qilby_core:chronal_processor_computer'
        )
        .chancedOutput(
            '2x qilby_core:chronal_processor_assembly', 2000, 500
        )
        .duration(450)
        .CWUt(24572)
        .dimension('minecraft:overworld')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('stb_chronal_supercomputer_void')
        .itemInputs(
            'qilby_core:chronal_processor_assembly',
            '24x qilby_core:optical_coputation_circuit',
            '40x qilby_core:stabilized_chroniton'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:runic_stelarite', 144),
        )
        .itemOutputs(
            '16x qilby_core:chronal_processor_computer'
        )
        .chancedOutput(
            '4x qilby_core:chronal_processor_assembly', 5000, 1000
        )
        .duration(450)
        .CWUt(24572)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('stb_chronal_mainframe_earth')
        .itemInputs(
            'qilby_core:chronal_processor_computer',
            '32x qilby_core:optical_coputation_circuit',
            '48x qilby_core:stabilized_chroniton'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:runic_stelarite', 576),
        )
        .itemOutputs(
            '4x qilby_core:chronal_processor_mainframe'
        )
        .chancedOutput(
            '2x qilby_core:chronal_processor_computer', 2000, 500
        )
        .duration(450)
        .CWUt(32768)
        .dimension('minecraft:overworld')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('stb_chronal_mainframe_void')
        .itemInputs(
            'qilby_core:chronal_processor_computer',
            '32x qilby_core:optical_coputation_circuit',
            '48x qilby_core:stabilized_chroniton'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:runic_stelarite', 576),
        )
        .itemOutputs(
            '16x qilby_core:chronal_processor_mainframe'
        )
        .chancedOutput(
            '4x qilby_core:chronal_processor_computer', 5000, 1000
        )
        .duration(450)
        .CWUt(32768)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UEV]);

        ////Ultra Stabilized CHroniton

    event.recipes.gtceu.chroniton_hoursglass('ult_stb_chronal_processor_earth')
        .itemInputs(
            'qilby_core:rushu_printed_circuit_board',
            '12x qilby_core:optical_coputation_circuit',
            '24x qilby_core:ultra_stabilized_chroniton'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 144),
        )
        .itemOutputs(
            '8x qilby_core:chronal_processor'
        )
        .chancedOutput(
            '4x qilby_core:chronal_processor', 2000, 500
        )
        .duration(300)
        .CWUt(12288)
        .dimension('minecraft:overworld')
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.chroniton_hoursglass('ult_stb_chronal_processor_void')
        .itemInputs(
            'qilby_core:rushu_printed_circuit_board',
            '12x qilby_core:optical_coputation_circuit',
            '24x qilby_core:ultra_stabilized_chroniton'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 144),
        )
        .itemOutputs(
            '32x qilby_core:chronal_processor'
        )
        .chancedOutput(
            '8x qilby_core:chronal_processor', 5000, 1000
        )
        .duration(300)
        .CWUt(12288)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.chroniton_hoursglass('ult_stb_chronal_processor_assembly_earth')
        .itemInputs(
            'qilby_core:chronal_processor',
            '18x qilby_core:optical_coputation_circuit',
            '32x qilby_core:ultra_stabilized_chroniton'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 576),
        )
        .itemOutputs(
            '8x qilby_core:chronal_processor_assembly'
        )
        .chancedOutput(
            '4x qilby_core:chronal_processor', 2000, 500
        )
        .duration(450)
        .CWUt(16384)
        .dimension('minecraft:overworld')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('ult_stb_chronal_processor_assembly_void')
        .itemInputs(
            'qilby_core:chronal_processor',
            '18x qilby_core:optical_coputation_circuit',
            '32x qilby_core:ultra_stabilized_chroniton'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 576),
        )
        .itemOutputs(
            '32x qilby_core:chronal_processor_assembly'
        )
        .chancedOutput(
            '8x qilby_core:chronal_processor', 5000, 1000
        )
        .duration(450)
        .CWUt(16384)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('ult_stb_chronal_supercomputer_earth')
        .itemInputs(
            'qilby_core:chronal_processor_assembly',
            '24x qilby_core:optical_coputation_circuit',
            '40x qilby_core:ultra_stabilized_chroniton'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:runic_stelarite', 144),
        )
        .itemOutputs(
            '8x qilby_core:chronal_processor_computer'
        )
        .chancedOutput(
            '4x qilby_core:chronal_processor_assembly', 2000, 500
        )
        .duration(450)
        .CWUt(24572)
        .dimension('minecraft:overworld')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('ult_stb_chronal_supercomputer_void')
        .itemInputs(
            'qilby_core:chronal_processor_assembly',
            '24x qilby_core:optical_coputation_circuit',
            '40x qilby_core:ultra_stabilized_chroniton'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:runic_stelarite', 144),
        )
        .itemOutputs(
            '32x qilby_core:chronal_processor_computer'
        )
        .chancedOutput(
            '8x qilby_core:chronal_processor_assembly', 5000, 1000
        )
        .duration(450)
        .CWUt(24572)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('ult_stb_chronal_mainframe_earth')
        .itemInputs(
            'qilby_core:chronal_processor_computer',
            '32x qilby_core:optical_coputation_circuit',
            '48x qilby_core:ultra_stabilized_chroniton'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:runic_stelarite', 576),
        )
        .itemOutputs(
            '8x qilby_core:chronal_processor_mainframe'
        )
        .chancedOutput(
            '4x qilby_core:chronal_processor_computer', 2000, 500
        )
        .duration(450)
        .CWUt(32768)
        .dimension('minecraft:overworld')
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.chroniton_hoursglass('ult_stb_chronal_mainframe_void')
        .itemInputs(
            'qilby_core:chronal_processor_computer',
            '32x qilby_core:optical_coputation_circuit',
            '48x qilby_core:ultra_stabilized_chroniton'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:runic_stelarite', 576),
        )
        .itemOutputs(
            '32x qilby_core:chronal_processor_mainframe'
        )
        .chancedOutput(
            '8x qilby_core:chronal_processor_computer', 5000, 1000
        )
        .duration(450)
        .CWUt(32768)
        .dimension('ad_astra:earth_orbit')
        .EUt(GTValues.V[GTValues.UEV]);

})