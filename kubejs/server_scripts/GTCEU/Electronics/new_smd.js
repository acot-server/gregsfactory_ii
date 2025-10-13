ServerEvents.recipes( event => {

    event.recipes.gtceu.assembler('quantum_smd_resistor')
        .itemInputs(
            '4x gtceu:quantum_star',
            'gtceu:graphene_dust',
            '8x qilby_core:fine_stasis_wire'
        )
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '32x qilby_core:quantum_smd_resistor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM]/2)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('quantum_smd_diode')
        .itemInputs(
            '4x gtceu:quantum_star',
            'gtceu:vanadium_gallium_dust',
            '16x gtceu:fine_naquadah_wire'
        )
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '32x qilby_core:quantum_smd_diode'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM]/2)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('quantum_smd_transistor')
        .itemInputs(
            '4x gtceu:quantum_star',
            'gtceu:indium_tin_barium_titanium_cuprate_foil',
            '8x gtceu:fine_rhodium_wire'
        )
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '32x qilby_core:quantum_smd_transistor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM]/2)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('quantum_smd_capacitor')
        .itemInputs(
            '4x gtceu:quantum_star',
            '2x qilby_core:transparent_aluminium_foil',
            'gtceu:naquadria_foil'
        )
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '32x qilby_core:quantum_smd_capacitor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM]/2)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('quantum_smd_inductor')
        .itemInputs(
            '4x gtceu:quantum_star',
            'gtceu:stellite_100_ring',
            '8x qilby_core:fine_wakfu_wire'
        )
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 288)
        )
        .itemOutputs(
            '32x qilby_core:quantum_smd_inductor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM]/2)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('wetware_smd_resistor')
        .itemInputs(
            'gtceu:neuro_processing_unit',
            'gtceu:graphene_dust',
            '8x qilby_core:fine_dark_matter_wire'
        )
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 576)
        )
        .itemOutputs(
            '32x qilby_core:wetware_smd_resistor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV]/2)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('wetware_smd_diode')
        .itemInputs(
            'gtceu:neuro_processing_unit',
            'gtceu:vanadium_gallium_dust',
            '16x gtceu:fine_tritanium_wire'
        )
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 576)
        )
        .itemOutputs(
            '32x qilby_core:wetware_smd_diode'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV]/2)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('wetware_smd_transistor')
        .itemInputs(
            'gtceu:neuro_processing_unit',
            'gtceu:duranium_foil',
            '8x gtceu:fine_platinum_wire'
        )
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 576)
        )
        .itemOutputs(
            '32x qilby_core:wetware_smd_transistor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV]/2)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('wetware_smd_capacitor')
        .itemInputs(
            'gtceu:neuro_processing_unit',
            '2x gtca:radon_polymer_plate',
            'gtceu:trinium_foil'
        )
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 576)
        )
        .itemOutputs(
            '32x qilby_core:wetware_smd_capacitor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV]/2)
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembler('wetware_smd_inductor')
        .itemInputs(
            'gtceu:neuro_processing_unit',
            'gtceu:calorite_ring',
            '8x qilby_core:fine_dark_energy_wire'
        )
        .inputFluids(
            Fluid.of('qilby_core:transparent_aluminium', 576)
        )
        .itemOutputs(
            '32x qilby_core:wetware_smd_inductor'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV]/2)
        .cleanroom(CleanroomType.CLEANROOM);
});