ServerEvents.recipes( event => { 
    
    event.recipes.gtceu.assembler('spintronic_smd_resistor')
        .itemInputs(
            '4x gtceu:elementium_foil',
            '2x qilby_core:runic_stellarite_foil',
            '2x qilby_core:stabilized_chroniton',
            'gtceu:uranium_rhodium_dinaquadide_single_wire'
        )
        .circuit(10)
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '64x gtnn:spintronic_smd_resistor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('spintronic_smd_diode')
        .itemInputs(
            '4x gtceu:trinium_foil',
            '2x gtca:lafium_compound_plate',
            '2x qilby_core:stabilized_chroniton',
            'gtceu:uranium_rhodium_dinaquadide_single_wire'
        )
        .circuit(10)
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '64x gtnn:spintronic_smd_diode'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('spintronic_smd_transistor')
        .itemInputs(
            '4x qilby_core:dark_matter_foil',
            '2x gtca:stellar_alloy_plate',
            '2x qilby_core:stabilized_chroniton',
            'gtceu:uranium_rhodium_dinaquadide_single_wire'
        )
        .circuit(10)
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '64x gtnn:spintronic_smd_transistor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM);

   event.recipes.gtceu.assembler('spintronic_smd_capacitor')
        .itemInputs(
            '4x qilby_core:dark_energy_foil',
            '2x gtca:duranium_x_plate',
            '2x qilby_core:stabilized_chroniton',
            'gtceu:uranium_rhodium_dinaquadide_single_wire'
        )
        .circuit(10)
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '64x gtnn:spintronic_smd_capacitor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM);

   event.recipes.gtceu.assembler('spintronic_smd_inductor')
        .itemInputs(
            '4x qilby_core:dark_energy_foil',
            '2x qilby_core:stabilized_chroniton',
            '8x gtceu:fine_uranium_rhodium_dinaquadide_wire',
            'qilby_core:wakfu_ring'
        )
        .circuit(10)
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '64x gtnn:spintronic_smd_inductor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM);

   event.recipes.gtceu.chroniton_hoursglass('spintronic_circuit_board')
        .itemInputs(
            '32x gtceu:multilayer_fiber_reinforced_circuit_board',
            '32x gtceu:magnetic_samarium_dust',
            '32x gtca:carbon_nanites'
        )
        .inputFluids(
            Fluid.of('gtca:titanium_plasma_plasma', 500),
            Fluid.of('gtca:radon_polymer', 500)
        )
        .itemOutputs(
            '48x gtnn:spintronic_circuit_board'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
        .CWUt(1024);

   event.recipes.gtceu.chroniton_hoursglass('spintronic_printed_circuit_board')
        .itemInputs(
            '16x gtnn:spintronic_circuit_board',
            '16x qilby_core:stabilized_chroniton',
            '48x gtceu:enriched_naquadah_trinium_europium_duranide_foil'
        )
        .inputFluids(
            Fluid.of('gtca:titanium_plasma_plasma', 500),
            Fluid.of('gtca:radon_polymer', 500)
        )
        .itemOutputs(
            '48x gtnn:spintronic_printed_circuit_board'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
        .CWUt(1024);

   event.recipes.gtceu.chroniton_hoursglass('photoelectron_soc')
        .itemInputs(
            'gtnn:spintronic_wrap_printed_circuit_board',
            '2x gtnn:uv_wrap_circuit',
            '6x gtnn:warp_highly_advanced_soc',
            '4x qilby_core:stabilized_chroniton'
        )
        .inputFluids(
            Fluid.of('gtca:titanium_plasma_plasma', 200),
            Fluid.of('gtca:adamantium_alloy', 288)
        )
        .itemOutputs(
            '16x gtnn:photoelectron_soc'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
        .CWUt(512);
        
//spintronic Circuit -- circuit assembnler + ass line

    event.recipes.gtceu.circuit_assembler('spintronic_imc_processor')
        .itemInputs(
            'gtnn:photoelectron_soc',
            '8x gtnn:spintronic_smd_transistor',
            '12x gtnn:spintronic_smd_resistor',
            '4x gtnn:spintronic_smd_capacitor',
            '6x gtnn:spintronic_smd_diode',
            '10x gtnn:spintronic_smd_inductor'
        )
        .itemOutputs(
            '4x gtnn:spintronic_processor'
        )
        .duration(150)
        .EUt(GTValues.VA[GTValues.UIV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.circuit_assembler('spintronic_imc_processor_assembly')
        .itemInputs(
            '2x gtnn:spintronic_processor',
            'gtnn:spintronic_printed_circuit_board',
            '16x gtnn:spintronic_smd_transistor',
            '24x gtnn:spintronic_smd_resistor',
            '12x gtnn:spintronic_smd_diode',
            '8x gtnn:spintronic_smd_capacitor'
        )
        .itemOutputs(
            '2x gtnn:spintronic_assembly'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembly_line('spintronic_imc_processor_supercompter')
        .itemInputs(
            'gtnn:spintronic_printed_circuit_board',
            '2x gtnn:spintronic_assembly',
            '24x gtnn:spintronic_smd_transistor',
            '36x gtnn:spintronic_smd_resistor',
            '18x gtnn:spintronic_smd_diode',
            '12x gtnn:spintronic_smd_capacitor',
            '30x gtnn:spintronic_smd_inductor',
            '12x gtca:radon_polymer_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 1152),
            Fluid.of('qilby_core:transparent_aluminium', 576),
            Fluid.of('qilby_core:pure_glass', 1152)
        )
        .itemOutputs(
            '2x gtnn:spintronic_computer'
        )
        .stationResearch(b => b.researchStack(Item.of('gtnn:spintronic_smd_capacitor')).CWUt(1536).EUt(GTValues.VA[GTValues.UEV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.assembly_line('spintronic_imc_processor_mainframe')
        .itemInputs(
            'gtca:orundum_frame',
            'gtnn:spintronic_printed_circuit_board',
            '2x gtnn:spintronic_computer',
            '24x gtnn:spintronic_smd_transistor',
            '36x gtnn:spintronic_smd_resistor',
            '18x gtnn:spintronic_smd_diode',
            '12x gtnn:spintronic_smd_capacitor',
            '30x gtnn:spintronic_smd_inductor',
            '36x gtca:radon_polymer_plate',
            '20x gtca:quantum_alloy_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:transparent_aluminium', 1440),
            Fluid.of('qilby_core:pure_glass', 1152)
        )
        .itemOutputs(
            'gtnn:spintronic_mainframe'
        )
        .stationResearch(b => b.researchStack(Item.of('gtnn:spintronic_smd_inductor')).CWUt(3072).EUt(GTValues.VA[GTValues.UEV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV]);

//Circvuit Ass Line
    event.recipes.gtceu.circuit_assembly_line('spintronic_imc_circuits_cal')
        .itemInputs(
            '16x gtnn:photoelectron_soc',
            '4x gtnn:spintronic_wrap_printed_circuit_board',
            '6x gtnn:wrap_spintronic_smd_transistor',
            '8x gtnn:wrap_spintronic_smd_resistor',
            '4x gtnn:wrap_spintronic_smd_capacitor',
            '6x gtnn:wrap_spintronic_smd_diode'
        )
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 72)
        )
        .itemOutputs(
            '64x gtnn:spintronic_processor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:optical_mainframe')).EUt(GTValues.VA[GTValues.UEV]).duration(420));

    event.recipes.gtceu.circuit_assembly_line('spintronic_imc_assmbly_cal')
        .itemInputs(
            '16x gtnn:spintronic_wrap_printed_circuit_board',
            '32x gtnn:spintronic_processor',
            '12x gtnn:wrap_spintronic_smd_transistor',
            '16x gtnn:wrap_spintronic_smd_resistor',
            '8x gtnn:wrap_spintronic_smd_capacitor',
            '12x gtnn:wrap_spintronic_smd_diode'
        )
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 72)
        )
        .itemOutputs(
            '64x gtnn:spintronic_assembly'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:spintronic_processor')).EUt(GTValues.VA[GTValues.UIV]).duration(420));

    event.recipes.gtceu.circuit_assembly_line('spintronic_imc_supercomputer_cal')
        .itemInputs(
            '8x gtnn:spintronic_wrap_printed_circuit_board',
            '32x gtnn:spintronic_assembly',
            '18x gtnn:wrap_spintronic_smd_transistor',
            '24x gtnn:wrap_spintronic_smd_resistor',
            '12x gtnn:wrap_spintronic_smd_capacitor',
            '18x gtnn:wrap_spintronic_smd_diode'
        )
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 72)
        )
        .itemOutputs(
            '64x gtnn:spintronic_computer'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:spintronic_assembly')).EUt(GTValues.VA[GTValues.UEV]).duration(420));


    event.recipes.gtceu.circuit_assembly_line('spintronic_imc_mainframe_cal')
        .itemInputs(
            '8x gtnn:spintronic_wrap_printed_circuit_board',
            '32x gtnn:spintronic_computer',
            '18x gtnn:wrap_spintronic_smd_transistor',
            '24x gtnn:wrap_spintronic_smd_resistor',
            '12x gtnn:wrap_spintronic_smd_capacitor',
            '18x gtnn:wrap_spintronic_smd_diode'
        )
        .inputFluids(
            Fluid.of('qilby_core:dark_matter', 72)
        )
        .itemOutputs(
            '64x gtnn:spintronic_mainframe'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UIV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:spintronic_computer')).EUt(GTValues.VA[GTValues.UIV]).duration(420));

    })

