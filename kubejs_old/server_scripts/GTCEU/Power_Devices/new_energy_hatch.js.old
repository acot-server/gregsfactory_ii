ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler('4a_lv_energy_hatch')
        .itemInputs(
            'gtceu:lv_energy_input_hatch',
            '4x gtceu:manganese_phosphide_double_wire',
            '2x #gtceu:circuits/lv'
        )
        .itemOutputs(
            'gtceu:lv_energy_input_hatch_4a'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('4a_mv_energy_hatch')
        .itemInputs(
            'gtceu:mv_energy_input_hatch',
            '4x gtceu:magnesium_diboride_double_wire',
            '2x #gtceu:circuits/mv'
        )
        .itemOutputs(
            'gtceu:mv_energy_input_hatch_4a'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.assembler('4a_hv_energy_hatch')
        .itemInputs(
            'gtceu:hv_energy_input_hatch',
            '4x gtceu:mercury_barium_calcium_cuprate_double_wire',
            '2x #gtceu:circuits/hv'
        )
        .itemOutputs(
            'gtceu:hv_energy_input_hatch_4a'
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);
});