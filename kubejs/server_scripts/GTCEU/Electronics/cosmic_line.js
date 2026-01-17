ServerEvents.recipes( event => {    
    
    event.recipes.gtceu.assembler('cosmic_smd_resistor')
        .itemInputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:steel"}').strongNBT(),
            '2x gtca:flawless_unknown_crystal_gem',
            '4x qilby_core:ultra_stabilized_chroniton',
            'gtceu:enriched_naquadah_trinium_europium_duranide_single_wire'
        )
        .circuit(11)
        .inputFluids(
            Fluid.of('gtca:adamantium', 288)
        )
        .itemOutputs(
            '64x gtnn:cosmic_smd_resistor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('cosmic_smd_diode')
        .itemInputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:emerald"}').strongNBT(),
            '2x gtca:lafium_compound_plate',
            '4x qilby_core:ultra_stabilized_chroniton',
            'gtceu:enriched_naquadah_trinium_europium_duranide_single_wire'
        )
        .circuit(11)
        .inputFluids(
            Fluid.of('gtca:adamantium', 288)
        )
        .itemOutputs(
            '64x gtnn:cosmic_smd_diode'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('cosmic_smd_transistor')
        .itemInputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:platinum"}').strongNBT(),
            '2x gtca:stellar_alloy_plate',
            '4x qilby_core:ultra_stabilized_chroniton',
            'gtceu:enriched_naquadah_trinium_europium_duranide_single_wire'
        )
        .circuit(11)
        .inputFluids(
            Fluid.of('gtca:adamantium', 288)
        )
        .itemOutputs(
            '64x gtnn:cosmic_smd_transistor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

   event.recipes.gtceu.assembler('cosmic_smd_capacitor')
        .itemInputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:bronze"}').strongNBT(),
            '2x gtca:duranium_x_plate',
            '4x qilby_core:ultra_stabilized_chroniton',
            'gtceu:enriched_naquadah_trinium_europium_duranide_single_wire'
        )
        .circuit(11)
        .inputFluids(
            Fluid.of('gtca:adamantium', 288)
        )
        .itemOutputs(
            '64x gtnn:cosmic_smd_capacitor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

   event.recipes.gtceu.assembler('cosmic_smd_inductor')
        .itemInputs(
            Item.of('avaritia:singularity', '{Id:"avaritia:osmium"}').strongNBT(),
            '4x qilby_core:ultra_stabilized_chroniton',
            '8x gtceu:fine_enriched_naquadah_trinium_europium_duranide_wire',
            'gtceu:osmiridium_ring'
        )
        .circuit(11)
        .inputFluids(
            Fluid.of('gtca:adamantium', 288)
        )
        .itemOutputs(
            '64x gtnn:cosmic_smd_inductor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

   event.recipes.gtceu.chroniton_hoursglass('intravital_soc')
        .itemInputs(
            '2x gtnn:spintronic_wrap_printed_circuit_board',
            '2x gtnn:optical_imc_board',
            '2x gtnn:uhv_wrap_circuit',
            '6x qilby_core:ultra_stabilized_chroniton'
        )
        .inputFluids(
            Fluid.of('gtca:titanium_plasma_plasma', 200),
            Fluid.of('gtca:adamantium_alloy', 288)
        )
        .itemOutputs(
            '12x gtnn:intravital_soc'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        .CWUt(1024);

//cosmic Circuit -- circuit assembnler + ass line

    event.recipes.gtceu.circuit_assembler('cosmic_imc_processor')
        .itemInputs(
            'gtnn:intravital_soc',
            '8x gtnn:cosmic_smd_transistor',
            '12x gtnn:cosmic_smd_resistor',
            '4x gtnn:cosmic_smd_capacitor',
            '6x gtnn:cosmic_smd_diode',
            '10x gtnn:cosmic_smd_inductor'
        )
        .itemOutputs(
            '4x gtnn:cosmic_processor'
        )
        .duration(150)
        .EUt(GTValues.VA[GTValues.UXV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.circuit_assembler('cosmic_imc_processor_assembly')
        .itemInputs(
            '2x gtnn:cosmic_processor',
            'gtnn:spintronic_printed_circuit_board',
            '16x gtnn:cosmic_smd_transistor',
            '24x gtnn:cosmic_smd_resistor',
            '12x gtnn:cosmic_smd_diode',
            '8x gtnn:cosmic_smd_capacitor'
        )
        .itemOutputs(
            '2x gtnn:cosmic_assembly'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembly_line('cosmic_imc_processor_supercompter')
        .itemInputs(
            'gtnn:spintronic_printed_circuit_board',
            '2x gtnn:cosmic_assembly',
            '24x gtnn:cosmic_smd_transistor',
            '36x gtnn:cosmic_smd_resistor',
            '18x gtnn:cosmic_smd_diode',
            '12x gtnn:cosmic_smd_capacitor',
            '30x gtnn:cosmic_smd_inductor',
            '12x gtca:radon_polymer_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 1152),
            Fluid.of('qilby_core:transparent_aluminium', 576),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 1152)
        )
        .itemOutputs(
            '2x gtnn:cosmic_computer'
        )
        .stationResearch(b => b.researchStack(Item.of('gtnn:cosmic_smd_capacitor')).CWUt(3072).EUt(GTValues.VA[GTValues.UEV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembly_line('cosmic_imc_processor_mainframe')
        .itemInputs(
            'gtca:ohriharukon_frame',
            'gtnn:spintronic_printed_circuit_board',
            '2x gtnn:cosmic_computer',
            '24x gtnn:cosmic_smd_transistor',
            '36x gtnn:cosmic_smd_resistor',
            '18x gtnn:cosmic_smd_diode',
            '12x gtnn:cosmic_smd_capacitor',
            '30x gtnn:cosmic_smd_inductor',
            '36x gtca:radon_polymer_plate',
            '20x gtca:quantum_alloy_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:transparent_aluminium', 1440),
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 1152)
        )
        .itemOutputs(
            'gtnn:cosmic_mainframe'
        )
        .stationResearch(b => b.researchStack(Item.of('gtnn:cosmic_smd_inductor')).CWUt(6144).EUt(GTValues.VA[GTValues.UEV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UIV]);
    

//Circvuit Ass Line
    event.recipes.gtceu.circuit_assembly_line('cosmic_imc_circuits_cal')
        .itemInputs(
            '16x gtnn:photoelectron_soc',
            '4x gtnn:spintronic_wrap_printed_circuit_board',
            '6x gtnn:wrap_cosmic_smd_transistor',
            '8x gtnn:wrap_cosmic_smd_resistor',
            '4x gtnn:wrap_cosmic_smd_capacitor',
            '6x gtnn:wrap_cosmic_smd_diode'
        )
        .inputFluids(
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 72)
        )
        .itemOutputs(
            '64x gtnn:cosmic_processor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:spintronic_mainframe')).EUt(GTValues.VA[GTValues.UEV]).duration(420));

    event.recipes.gtceu.circuit_assembly_line('cosmic_imc_assmbly_cal')
        .itemInputs(
            '16x gtnn:spintronic_wrap_printed_circuit_board',
            '32x gtnn:cosmic_processor',
            '12x gtnn:wrap_cosmic_smd_transistor',
            '16x gtnn:wrap_cosmic_smd_resistor',
            '8x gtnn:wrap_cosmic_smd_capacitor',
            '12x gtnn:wrap_cosmic_smd_diode'
        )
        .inputFluids(
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 72)
        )
        .itemOutputs(
            '64x gtnn:cosmic_assembly'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:cosmic_processor')).EUt(GTValues.VA[GTValues.UIV]).duration(420));

    event.recipes.gtceu.circuit_assembly_line('cosmic_imc_supercomputer_cal')
        .itemInputs(
            '8x gtnn:spintronic_wrap_printed_circuit_board',
            '32x gtnn:cosmic_assembly',
            '18x gtnn:wrap_cosmic_smd_transistor',
            '24x gtnn:wrap_cosmic_smd_resistor',
            '12x gtnn:wrap_cosmic_smd_capacitor',
            '18x gtnn:wrap_cosmic_smd_diode'
        )
        .inputFluids(
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 72)
        )
        .itemOutputs(
            '64x gtnn:cosmic_computer'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:cosmic_assembly')).EUt(GTValues.VA[GTValues.UEV]).duration(420));


    event.recipes.gtceu.circuit_assembly_line('cosmic_imc_mainframe_cal')
        .itemInputs(
            '8x gtnn:spintronic_wrap_printed_circuit_board',
            '32x gtnn:cosmic_computer',
            '18x gtnn:wrap_cosmic_smd_transistor',
            '24x gtnn:wrap_cosmic_smd_resistor',
            '12x gtnn:wrap_cosmic_smd_capacitor',
            '18x gtnn:wrap_cosmic_smd_diode'
        )
        .inputFluids(
            Fluid.of('gtca:celestial_tungsten_plasma_plasma', 72)
        )
        .itemOutputs(
            '64x gtnn:cosmic_mainframe'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UIV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:cosmic_computer')).EUt(GTValues.VA[GTValues.UIV]).duration(420));

    })