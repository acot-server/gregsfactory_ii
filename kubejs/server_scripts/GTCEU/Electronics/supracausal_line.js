ServerEvents.recipes( event => {    
    
    event.recipes.gtceu.assembler('supracausal_smd_resistor')
        .itemInputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:electrum"}').strongNBT(),
            '2x gtca:quantum_anomaly',
            '4x qilby_core:ultra_stabilized_chroniton',
            'gtceu:ruthenium_trinium_americium_neutronate_single_wire'
        )
        .circuit(12)
        .inputFluids(
            Fluid.of('gtca:adamantium', 288)
        )
        .itemOutputs(
            '64x gtnn:supracausal_smd_resistor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('supracausal_smd_diode')
        .itemInputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:netherite"}').strongNBT(),
            '2x gtca:lafium_compound_plate',
            '4x qilby_core:ultra_stabilized_chroniton',
            'gtceu:ruthenium_trinium_americium_neutronate_single_wire'
        )
        .circuit(12)
        .inputFluids(
            Fluid.of('gtca:adamantium', 288)
        )
        .itemOutputs(
            '64x gtnn:supracausal_smd_diode'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('supracausal_smd_transistor')
        .itemInputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:invar"}').strongNBT(),
            '2x gtca:stellar_alloy_plate',
            '4x qilby_core:ultra_stabilized_chroniton',
            'gtceu:ruthenium_trinium_americium_neutronate_single_wire'
        )
        .circuit(12)
        .inputFluids(
            Fluid.of('gtca:adamantium', 288)
        )
        .itemOutputs(
            '64x gtnn:supracausal_smd_transistor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);

   event.recipes.gtceu.assembler('supracausal_smd_capacitor')
        .itemInputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:diamond"}').strongNBT(),
            '2x gtca:duranium_x_plate',
            '4x qilby_core:ultra_stabilized_chroniton',
            'gtceu:ruthenium_trinium_americium_neutronate_single_wire'
        )
        .circuit(12)
        .inputFluids(
            Fluid.of('gtca:adamantium', 288)
        )
        .itemOutputs(
            '64x gtnn:supracausal_smd_capacitor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);

   event.recipes.gtceu.assembler('supracausal_smd_inductor')
        .itemInputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:uranium"}').strongNBT(),
            '4x qilby_core:ultra_stabilized_chroniton',
            'gtceu:ruthenium_trinium_americium_neutronate_single_wire'
        )
        .circuit(12)
        .inputFluids(
            Fluid.of('gtca:adamantium', 288)
        )
        .itemOutputs(
            '64x gtnn:supracausal_smd_inductor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);

//supracausal Circuit -- circuit assembnler + ass line

    event.recipes.gtceu.circuit_assembler('supracausal_imc_processor')
        .itemInputs(
            'gtnn:intravital_soc',
            '8x gtnn:supracausal_smd_transistor',
            '12x gtnn:supracausal_smd_resistor',
            '4x gtnn:supracausal_smd_capacitor',
            '6x gtnn:supracausal_smd_diode',
            '10x gtnn:supracausal_smd_inductor'
        )
        .itemOutputs(
            '4x gtnn:supracausal_processor'
        )
        .duration(150)
        .EUt(GTValues.VA[GTValues.UXV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.circuit_assembler('supracausal_imc_processor_assembly')
        .itemInputs(
            '2x gtnn:supracausal_processor',
            'gtnn:spintronic_printed_circuit_board',
            '16x gtnn:supracausal_smd_transistor',
            '24x gtnn:supracausal_smd_resistor',
            '12x gtnn:supracausal_smd_diode',
            '8x gtnn:supracausal_smd_capacitor'
        )
        .itemOutputs(
            '2x gtnn:supracausal_assembly'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembly_line('supracausal_imc_processor_supercompter')
        .itemInputs(
            'gtnn:spintronic_printed_circuit_board',
            '2x gtnn:supracausal_assembly',
            '24x gtnn:supracausal_smd_transistor',
            '36x gtnn:supracausal_smd_resistor',
            '18x gtnn:supracausal_smd_diode',
            '12x gtnn:supracausal_smd_capacitor',
            '30x gtnn:supracausal_smd_inductor',
            '12x gtca:radon_polymer_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 1152),
            Fluid.of('qilby_core:transparent_aluminium', 576),
            Fluid.of('qilby_core:stellarite', 1152)
        )
        .itemOutputs(
            '2x gtnn:supracausal_computer'
        )
        .stationResearch(b => b.researchStack(Item.of('gtnn:supracausal_smd_capacitor')).CWUt(3072).EUt(GTValues.VA[GTValues.UEV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembly_line('supracausal_imc_processor_mainframe')
        .itemInputs(
            'gtca:ohriharukon_frame',
            'gtnn:spintronic_printed_circuit_board',
            '2x gtnn:supracausal_computer',
            '24x gtnn:supracausal_smd_transistor',
            '36x gtnn:supracausal_smd_resistor',
            '18x gtnn:supracausal_smd_diode',
            '12x gtnn:supracausal_smd_capacitor',
            '30x gtnn:supracausal_smd_inductor',
            '36x gtca:radon_polymer_plate',
            '20x qilby_core:runic_stellarite_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:transparent_aluminium', 1440),
            Fluid.of('qilby_core:stellarite', 1152)
        )
        .itemOutputs(
            'gtnn:supracausal_mainframe'
        )
        .stationResearch(b => b.researchStack(Item.of('gtnn:supracausal_smd_inductor')).CWUt(6144).EUt(GTValues.VA[GTValues.UEV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV]);
    

//Circvuit Ass Line
    event.recipes.gtceu.circuit_assembly_line('supracausal_imc_circuits_cal')
        .itemInputs(
            '4x gtnn:uev_wrap_circuit',
            '4x gtnn:spintronic_wrap_printed_circuit_board',
            '64x gtnn:supracausal_smd_transistor',
            '64x gtnn:supracausal_smd_resistor',
            '64x gtnn:supracausal_smd_resistor',
            '64x gtnn:supracausal_smd_diode'
        )
        .inputFluids(
            Fluid.of('qilby_core:fabric_of_reality', 72)
        )
        .itemOutputs(
            '64x gtnn:supracausal_processor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:cosmic_mainframe')).EUt(GTValues.VA[GTValues.UEV]).duration(420));

    event.recipes.gtceu.circuit_assembly_line('supracausal_imc_assmbly_cal')
        .itemInputs(
            '16x gtnn:spintronic_wrap_printed_circuit_board',
            '32x gtnn:supracausal_processor',
            '64x gtnn:supracausal_smd_transistor',
            '64x gtnn:supracausal_smd_resistor',
            '64x gtnn:supracausal_smd_resistor',
            '64x gtnn:supracausal_smd_diode'
        )
        .inputFluids(
            Fluid.of('qilby_core:fabric_of_reality', 72)
        )
        .itemOutputs(
            '32x gtnn:supracausal_assembly'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:supracausal_processor')).EUt(GTValues.VA[GTValues.UIV]).duration(420));

    event.recipes.gtceu.circuit_assembly_line('supracausal_imc_supercomputer_cal')
        .itemInputs(
            '8x gtnn:spintronic_wrap_printed_circuit_board',
            '32x gtnn:supracausal_assembly',
            '64x gtnn:supracausal_smd_transistor',
            '64x gtnn:supracausal_smd_resistor',
            '64x gtnn:supracausal_smd_resistor',
            '64x gtnn:supracausal_smd_diode'
        )
        .inputFluids(
            Fluid.of('qilby_core:fabric_of_reality', 72)
        )
        .itemOutputs(
            '32x gtnn:supracausal_computer'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:supracausal_assembly')).EUt(GTValues.VA[GTValues.UEV]).duration(420));


    event.recipes.gtceu.circuit_assembly_line('supracausal_imc_mainframe_cal')
        .itemInputs(
            '8x gtnn:spintronic_wrap_printed_circuit_board',
            '32x gtnn:supracausal_computer',
            '64x gtnn:supracausal_smd_transistor',
            '64x gtnn:supracausal_smd_resistor',
            '64x gtnn:supracausal_smd_resistor',
            '64x gtnn:supracausal_smd_diode'
        )
        .inputFluids(
            Fluid.of('qilby_core:fabric_of_reality', 72)
        )
        .itemOutputs(
            '16x gtnn:supracausal_mainframe'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UIV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:supracausal_computer')).EUt(GTValues.VA[GTValues.UIV]).duration(420));

    })