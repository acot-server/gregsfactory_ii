ServerEvents.recipes( event => { 
    
    event.recipes.gtceu.assembler('optical_smd_resistor')
        .itemInputs(
            '4x gtceu:naquadria_foil',
            '2x gtca:pikyonium_64_y_plate',
            'gtca:enriched_holmium_foil',
            'gtceu:indium_tin_barium_titanium_cuprate_single_wire'
        )
        .circuit(9)
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '128x gtnn:optical_smd_resistor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('optical_smd_diode')
        .itemInputs(
            '4x gtceu:tritanium_foil',
            '2x gtca:lafium_compound_plate',
            'gtca:enriched_holmium_foil',
            'gtceu:indium_tin_barium_titanium_cuprate_single_wire'
        )
        .circuit(9)
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '128x gtnn:optical_smd_diode'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('optical_smd_transistor')
        .itemInputs(
            '4x qilby_core:stasis_foil',
            '2x gtca:stellar_alloy_plate',
            'gtca:enriched_holmium_foil',
            'gtceu:indium_tin_barium_titanium_cuprate_single_wire'
        )
        .circuit(9)
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '128x gtnn:optical_smd_transistor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])
        .cleanroom(CleanroomType.CLEANROOM);

   event.recipes.gtceu.assembler('optical_smd_capacitor')
        .itemInputs(
            '4x qilby_core:dark_energy_foil',
            '2x gtca:tm_20_mn_alloy_plate',
            'gtca:enriched_holmium_foil',
            'gtceu:indium_tin_barium_titanium_cuprate_single_wire'
        )
        .circuit(9)
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '128x gtnn:optical_smd_capacitor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])
        .cleanroom(CleanroomType.CLEANROOM);

   event.recipes.gtceu.assembler('optical_smd_inductor')
        .itemInputs(
            '4x qilby_core:dark_energy_foil',
            '2x gtca:artherium_sn_plate',
            'gtceu:indium_tin_barium_titanium_cuprate_single_wire'
        )
        .circuit(9)
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '128x gtnn:optical_smd_inductor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])
        .cleanroom(CleanroomType.CLEANROOM);

   event.recipes.gtceu.optical_assembler('optical_circuit_board')
        .itemInputs(
            'qilby_core:optical_circuit_board',
            '4x gtceu:normal_optical_pipe',
            '8x gtceu:iridium_foil'
        )
        .circuit(9)
        .inputFluids(
            Fluid.of('gtca:hydrogen_plasma_plasma', 200)
        )
        .itemOutputs(
            '16x gtnn:optical_circuit_board'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])
        .CWUt(256);

   event.recipes.gtceu.optical_assembler('optical_printed_circuit_board')
        .itemInputs(
            '16x gtnn:optical_circuit_board',
            '16x gtceu:normal_optical_pipe',
            '48x gtceu:uranium_rhodium_dinaquadide_foil'
        )
        .circuit(10)
        .inputFluids(
            Fluid.of('gtca:hydrogen_plasma_plasma', 200),
            Fluid.of('qilby_core:pure_glass', 288)
        )
        .itemOutputs(
            '64x gtnn:optical_printed_circuit_board'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])
        .CWUt(512);

   event.recipes.gtceu.optical_assembler('optical_imc_board')
        .itemInputs(
            'gtnn:optical_wrap_printed_circuit_board',
            '3x gtnn:warp_ram_chip',
            '8x qilby_core:extreme_hi_pow_integrated_circuit',
            '2x gtnn:zpm_wrap_circuit',
            '2x gtnn:warp_highly_advanced_soc',
            '8x gtceu:normal_optical_pipe'
        )
        .circuit(10)
        .inputFluids(
            Fluid.of('gtca:hydrogen_plasma_plasma', 200),
            Fluid.of('qilby_core:pure_glass', 288)
        )
        .itemOutputs(
            '32x gtnn:optical_imc_board'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])
        .CWUt(512);

//Optical Circuit -- circuit assembnler + ass line

    event.recipes.gtceu.circuit_assembler('optical_imc_processor')
        .itemInputs(
            'gtnn:optical_imc_board',
            '8x gtnn:optical_smd_transistor',
            '12x gtnn:optical_smd_resistor',
            '4x gtnn:optical_smd_capacitor',
            '6x gtnn:optical_smd_diode',
            '10x gtnn:optical_smd_inductor'
        )
        .itemOutputs(
            '4x gtnn:optical_processor'
        )
        .duration(150)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.circuit_assembler('optical_imc_processor_assembly')
        .itemInputs(
            '2x gtnn:optical_processor',
            'gtnn:optical_printed_circuit_board',
            '16x gtnn:optical_smd_transistor',
            '24x gtnn:optical_smd_resistor',
            '12x gtnn:optical_smd_diode',
            '8x gtnn:optical_smd_capacitor'
        )
        .itemOutputs(
            '2x gtnn:optical_assembly'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembly_line('optical_imc_processor_supercompter')
        .itemInputs(
            'gtnn:optical_printed_circuit_board',
            '2x gtnn:optical_assembly',
            '24x gtnn:optical_smd_transistor',
            '36x gtnn:optical_smd_resistor',
            '18x gtnn:optical_smd_diode',
            '12x gtnn:optical_smd_capacitor',
            '30x gtnn:optical_smd_inductor',
            '12x gtca:radon_polymer_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 1152),
            Fluid.of('qilby_core:transparent_aluminium', 576),
            Fluid.of('qilby_core:pure_glass', 1152)
        )
        .itemOutputs(
            '2x gtnn:optical_computer'
        )
        .stationResearch(b => b.researchStack(Item.of('gtnn:optical_smd_inductor')).CWUt(1536).EUt(GTValues.VA[GTValues.UHV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line('optical_imc_processor_mainframe')
        .itemInputs(
            'gtca:adamantium_frame',
            'gtnn:optical_printed_circuit_board',
            '2x gtnn:optical_computer',
            '24x gtnn:optical_smd_transistor',
            '36x gtnn:optical_smd_resistor',
            '18x gtnn:optical_smd_diode',
            '12x gtnn:optical_smd_capacitor',
            '30x gtnn:optical_smd_inductor',
            '36x gtca:radon_polymer_plate',
            '20x gtca:silamid_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 2880),
            Fluid.of('qilby_core:transparent_aluminium', 1440),
            Fluid.of('qilby_core:pure_glass', 1152)
        )
        .itemOutputs(
            'gtnn:optical_mainframe'
        )
        .stationResearch(b => b.researchStack(Item.of('gtnn:optical_smd_transistor')).CWUt(3072).EUt(GTValues.VA[GTValues.UHV]))
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV]);

//Circvuit Ass Line
    event.recipes.gtceu.circuit_assembly_line('optical_imc_circuits_cal')
        .itemInputs(
            '16x gtnn:optical_imc_board',
            '4x gtnn:optical_wrap_printed_circuit_board',
            '6x gtnn:wrap_optical_smd_transistor',
            '8x gtnn:wrap_optical_smd_resistor',
            '4x gtnn:wrap_optical_smd_capacitor',
            '6x gtnn:wrap_optical_smd_diode'
        )
        .inputFluids(
            Fluid.of('qilby_core:stasis', 72)
        )
        .itemOutputs(
            '64x gtnn:optical_processor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:gooware_mainframe')).EUt(GTValues.VA[GTValues.UEV]).duration(420));

    event.recipes.gtceu.circuit_assembly_line('optical_imc_assmbly_cal')
        .itemInputs(
            '16x gtnn:optical_wrap_printed_circuit_board',
            '32x gtnn:optical_processor',
            '12x gtnn:wrap_optical_smd_transistor',
            '16x gtnn:wrap_optical_smd_resistor',
            '8x gtnn:wrap_optical_smd_capacitor',
            '12x gtnn:wrap_optical_smd_diode'
        )
        .inputFluids(
            Fluid.of('qilby_core:stasis', 72)
        )
        .itemOutputs(
            '64x gtnn:optical_assembly'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:optical_processor')).EUt(GTValues.VA[GTValues.UIV]).duration(420));

    event.recipes.gtceu.circuit_assembly_line('optical_imc_supercomputer_cal')
        .itemInputs(
            '8x gtnn:optical_wrap_printed_circuit_board',
            '32x gtnn:optical_assembly',
            '18x gtnn:wrap_optical_smd_transistor',
            '24x gtnn:wrap_optical_smd_resistor',
            '12x gtnn:wrap_optical_smd_capacitor',
            '18x gtnn:wrap_optical_smd_diode'
        )
        .inputFluids(
            Fluid.of('qilby_core:stasis', 72)
        )
        .itemOutputs(
            '364 gtnn:optical_computer'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UEV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:optical_assembly')).EUt(GTValues.VA[GTValues.UEV]).duration(420));


    event.recipes.gtceu.circuit_assembly_line('optical_imc_mainframe_cal')
        .itemInputs(
            '8x gtnn:optical_wrap_printed_circuit_board',
            '32x gtnn:optical_computer',
            '18x gtnn:wrap_optical_smd_transistor',
            '24x gtnn:wrap_optical_smd_resistor',
            '12x gtnn:wrap_optical_smd_capacitor',
            '18x gtnn:wrap_optical_smd_diode'
        )
        .inputFluids(
            Fluid.of('qilby_core:stasis', 72)
        )
        .itemOutputs(
            '64x gtnn:optical_mainframe'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UIV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtnn:optical_computer')).EUt(GTValues.VA[GTValues.UIV]).duration(420));



    })