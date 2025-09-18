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
        .CWUt(8)
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
        .CWUt(20)
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
        .CWUt(8)
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
        .CWUt(20)
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
        .CWUt(8)
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
        .CWUt(20)
        .EUt(7680);

//Rushu Board

    event.recipes.gtceu.shukrute_pump('supracausal_circuit_board')
        .itemInputs(
            '64x gtceu:infinity_plate',
            '64x qilby_core:fabric_of_reality_foil',
            '64x qilby_core:runic_stellarite_foil'
        )
        .inputFluids(
            Fluid.of('qilby_core:stellarite', 576)
        )
        .itemOutputs(
            '128x qilby_core:supracausal_circuit_board'
        )
        .duration(400)
        .CWUt(1024)
        .EUt(GTValues.VA[GTValues.UXV]);

    event.recipes.gtceu.shukrute_pump('pcb_rushu_circuit_board')
        .itemInputs(
            '64x qilby_core:stasis_plate',
            '64x gtceu:polybenzimidazole_plate',
            '64x qilby_core:dark_matter_foil'
        )
        .inputFluids(
            Fluid.of('qilby_core:wakfu', 576)
        )
        .itemOutputs(
            '128x qilby_core:rushu_printed_circuit_board'
        )
        .duration(400)
        .CWUt(512)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.shukrute_pump('pcb_shushu_circuit_board')
        .circuit(3)
        .notConsumable('gtca:gold_nanites')
        .itemInputs(
            '64x qilby_core:wakfu_plate',
            '64x gtceu:polybenzimidazole_plate',
            '64x gtceu:terra_steel_foil'
        )
        .inputFluids(
            Fluid.of('qilby_core:tungsten', 576)
        )
        .itemOutputs(
            '128x qilby_core:shukrute_printed_circuit_board'
        )
        .duration(400)
        .CWUt(256)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.shukrute_pump('shushu_max')
        .itemInputs(
            '8x qilby_core:omniversal_supercomputer',
            '8x qilby_core:multiversal_supercomputer',
            '8x qilby_core:supracausal_processor_mainframe'
        )
        .inputFluids(
            Fluid.of('gtceu:infinity', 18432)
        )
        .itemOutputs(
            '64x qilby_core:shushu_circuit_max'
        )
        .duration(400)
        .CWUt(262144)
    .EUt(GTValues.VA[GTValues.MAX]*16);
})
