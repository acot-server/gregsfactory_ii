ServerEvents.recipes(event => {

    ////// Machine Recipe //////

    event.shaped(
        'gtceu:shukrute_pump',
        ['AWA', 'CSC', 'WCW'],
        {
            A: '#gtceu:circuits/ev',
            W: 'gtceu:mercury_barium_calcium_cuprate_hex_wire',
            C: '#gtceu:circuits/mv',
            S: 'gtceu:stable_machine_casing'
        }
    ).id('gtceu:shaped/shukrute_pump')


    ////// Board //////

    // Shukrute Circuit Board
    event.recipes.gtceu.shukrute_pump('shukrute_circuit_board')
        .itemInputs(
            '2x gtceu:multilayer_fiber_reinforced_circuit_board'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:wakfu', 125)
        )
        .itemOutputs(
            'qilby_core:shukrute_circuit_board'
        )
        .duration(300)
        .EUt(1920);

    event.recipes.gtceu.shukrute_pump('shukrute_circuit_board_4')
        .itemInputs(
            '8x gtceu:multilayer_fiber_reinforced_circuit_board',
            'gtceu:energy_crystal'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:wakfu', 250)
        )
        .itemOutputs(
            '4x qilby_core:shukrute_circuit_board'
        )
        .duration(300)
        .EUt(7680);

    //Printed Shukrute Board

    event.recipes.gtceu.shukrute_pump('printed_shukrute_circuit_board')
        .itemInputs(
            'qilby_core:shukrute_circuit_board',
            '16x gtceu:platinum_foil'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('gtceu:sulfuric_acid', 500)
        )
        .itemOutputs(
            'qilby_core:shukrute_printed_circuit_board'
        )
        .duration(300)
        .EUt(1920);

    event.recipes.gtceu.shukrute_pump('printed_shukrute_circuit_board_4')
        .itemInputs(
            '4x qilby_core:shukrute_circuit_board',
            '64x gtceu:platinum_foil'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('gtceu:sulfuric_acid', 1000)
        )
        .itemOutputs(
            '4x qilby_core:shukrute_printed_circuit_board'
        )
        .duration(300)
        .EUt(7680);

    //Wakfu - Stasis

    event.recipes.gtceu.shukrute_pump('wakfu')
        .itemInputs(
            'botania:terrasteel_block',
            '64x #farmersdelight:cabbage_roll_ingredients'
        )
        .inputFluids(
            Fluid.of('gtceu:hydrofluoric_acid', 500)
        )
        .itemOutputs(
            '4x qilby_core:wakfu_dust'
        )
        .duration(300)
        .EUt(1920);

    event.recipes.gtceu.shukrute_pump('stasis')
        .itemInputs(
            'qilby_core:wakfu_block',
            '64x #farmersdelight:cabbage_roll_ingredients'
        )
        .inputFluids(
            Fluid.of('gtceu:hydrofluoric_acid', 1000)
        )
        .itemOutputs(
            '4x qilby_core:stasis_dust'
        )
        .duration(300)
        .EUt(7680);

//Rushu Board

    // Shukrute Circuit Board
    event.recipes.gtceu.shukrute_pump('rushu_circuit_board')
        .itemInputs(
            '2x qilby_core:shukrute_circuit_board'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('qilby_core:wakfu', 125)
        )
        .itemOutputs(
            'qilby_core:rushu_circuit_board'
        )
        .duration(300)
        .EUt(122880);

        event.recipes.gtceu.shukrute_pump('rushu_circuit_board_4')
        .itemInputs(
            '8x qilby_core:shukrute_circuit_board',
            'gtceu:energy_crystal'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('qilby_core:wakfu', 250)
        )
        .itemOutputs(
            '4x qilby_core:rushu_circuit_board'
        )
        .duration(300)
        .EUt(491520);

    //Printed Shukrute Board

    event.recipes.gtceu.shukrute_pump('printed_rushu_circuit_board')
        .itemInputs(
            'qilby_core:shukrute_circuit_board',
            '16x gtceu:ruridit_foil'
        )
        .circuit(1)
        .inputFluids(
            Fluid.of('gtceu:sulfuric_acid', 500)
        )
        .itemOutputs(
            'qilby_core:rushu_printed_circuit_board'
        )
        .duration(300)
        .EUt(122880);

    event.recipes.gtceu.shukrute_pump('printed_rushu_circuit_board_4')
        .itemInputs(
            '4x qilby_core:shukrute_circuit_board',
            '64x gtceu:ruridit_foil'
        )
        .circuit(2)
        .inputFluids(
            Fluid.of('gtceu:sulfuric_acid', 1000)
        )
        .itemOutputs(
            '4x qilby_core:rushu_printed_circuit_board'
        )
        .duration(300)
        .EUt(491520);

event.recipes.gtceu.shukrute_pump('shushu_max')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(16)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 18432)
)
.itemOutputs(
    '64x qilby_core:shushu_circuit_max'
)
.duration(200)
.CWUt(256)
.EUt(2013265920);
})
