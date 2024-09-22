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
            '64x #minecolonies:cook_ingredient'
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
            '64x #minecolonies:cook_ingredient'
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

//Circuit

//LV
event.recipes.gtceu.shukrute_pump('shushu_lv_1')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    '2x gtceu:simple_soc'
)
.circuit(3)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 144)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_lv'
)
.duration(100)
.EUt(30);

event.recipes.gtceu.shukrute_pump('shushu_lv_2')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:soc'
)
.circuit(3)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 144)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_lv'
)
.duration(100)
.EUt(30);

event.recipes.gtceu.shukrute_pump('shushu_lv_3')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:advanced_soc'
)
.circuit(3)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 144)
)
.itemOutputs(
    '4x qilby_core:shushu_circuit_lv'
)
.duration(100)
.EUt(30);

event.recipes.gtceu.shukrute_pump('shushu_lv_4')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(3)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 144)
)
.itemOutputs(
    '8x qilby_core:shushu_circuit_lv'
)
.duration(100)
.EUt(30);

//MV
event.recipes.gtceu.shukrute_pump('shushu_mv_1')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    '2x gtceu:simple_soc'
)
.circuit(4)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 288)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_mv'
)
.duration(100)
.EUt(120);

event.recipes.gtceu.shukrute_pump('shushu_mv_2')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:soc'
)
.circuit(4)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 288)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_mv'
)
.duration(100)
.EUt(120);

event.recipes.gtceu.shukrute_pump('shushu_mv_3')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:advanced_soc'
)
.circuit(4)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 288)
)
.itemOutputs(
    '4x qilby_core:shushu_circuit_mv'
)
.duration(100)
.EUt(120);

event.recipes.gtceu.shukrute_pump('shushu_mv_4')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(4)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 288)
)
.itemOutputs(
    '8x qilby_core:shushu_circuit_mv'
)
.duration(100)
.EUt(120);

//HV

event.recipes.gtceu.shukrute_pump('shushu_hv_1')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:soc'
)
.circuit(5)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 288)
)
.itemOutputs(
    'qilby_core:shushu_circuit_hv'
)
.duration(100)
.EUt(480);

event.recipes.gtceu.shukrute_pump('shushu_hv_2')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:advanced_soc'
)
.circuit(5)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 288)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_hv'
)
.duration(100)
.EUt(480);

event.recipes.gtceu.shukrute_pump('shushu_hv_3')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(5)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 288)
)
.itemOutputs(
    '4x qilby_core:shushu_circuit_hv'
)
.duration(100)
.EUt(480);

//EV

event.recipes.gtceu.shukrute_pump('shushu_ev_1')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:soc'
)
.circuit(6)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 576)
)
.itemOutputs(
    'qilby_core:shushu_circuit_ev'
)
.duration(100)
.EUt(1920);

event.recipes.gtceu.shukrute_pump('shushu_ev_2')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:advanced_soc'
)
.circuit(6)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 576)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_ev'
)
.duration(100)
.EUt(1920);

event.recipes.gtceu.shukrute_pump('shushu_ev_3')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(6)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 576)
)
.itemOutputs(
    '4x qilby_core:shushu_circuit_ev'
)
.duration(100)
.EUt(1920);

//IV
event.recipes.gtceu.shukrute_pump('shushu_iv_1')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:soc'
)
.circuit(7)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 576)
)
.itemOutputs(
    'qilby_core:shushu_circuit_iv'
)
.duration(100)
.EUt(7920);

event.recipes.gtceu.shukrute_pump('shushu_iv_2')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:advanced_soc'
)
.circuit(7)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 576)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_iv'
)
.duration(100)
.EUt(7920);

event.recipes.gtceu.shukrute_pump('shushu_iv_3')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(7)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 576)
)
.itemOutputs(
    '4x qilby_core:shushu_circuit_iv'
)
.duration(100)
.EUt(7920);

//LuV
event.recipes.gtceu.shukrute_pump('shushu_luv_1')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:advanced_soc'
)
.circuit(8)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 1152)
)
.itemOutputs(
    'qilby_core:shushu_circuit_luv'
)
.duration(100)
.CWUt(8)
.EUt(30720);

event.recipes.gtceu.shukrute_pump('shushu_luv_2')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(8)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 1152)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_luv'
)
.duration(100)
.CWUt(8)
.EUt(30720);

//ZPM

event.recipes.gtceu.shukrute_pump('shushu_zpm_1')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:advanced_soc'
)
.circuit(9)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 1152)
)
.itemOutputs(
    'qilby_core:shushu_circuit_luv'
)
.duration(100)
.CWUt(32)
.EUt(122880);

event.recipes.gtceu.shukrute_pump('shushu_zpm_2')
.itemInputs(
    'qilby_core:shukrute_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(9)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 1152)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_zpm'
)
.duration(100)
.CWUt(32)
.EUt(122880);

//UV -- Rushu Time

event.recipes.gtceu.shukrute_pump('rushu_uv_1')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:soc'
)
.circuit(10)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 1152)
)
.itemOutputs(
    'qilby_core:shushu_circuit_uv'
)
.duration(100)
.CWUt(64)
.EUt(491520);

event.recipes.gtceu.shukrute_pump('rushu_uv_2')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:advanced_soc'
)
.circuit(10)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 1152)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_uv'
)
.duration(100)
.CWUt(64)
.EUt(491520);

event.recipes.gtceu.shukrute_pump('shushu_uv_3')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(10)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 1152)
)
.itemOutputs(
    '4x qilby_core:shushu_circuit_uv'
)
.duration(100)
.CWUt(64)
.EUt(491520);

//UHV

event.recipes.gtceu.shukrute_pump('rushu_uhv_1')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:soc'
)
.circuit(11)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 2304)
)
.itemOutputs(
    'qilby_core:shushu_circuit_uhv'
)
.duration(100)
.CWUt(96)
.EUt(1966080);

event.recipes.gtceu.shukrute_pump('rushu_uhv_2')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:advanced_soc'
)
.circuit(11)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 2304)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_uhv'
)
.duration(100)
.CWUt(96)
.EUt(1966080);

event.recipes.gtceu.shukrute_pump('shushu_uhv_3')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(11)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 2304)
)
.itemOutputs(
    '4x qilby_core:shushu_circuit_uhv'
)
.duration(100)
.CWUt(96)
.EUt(1966080);

//UEV

event.recipes.gtceu.shukrute_pump('rushu_uev_1')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:soc'
)
.circuit(12)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 2304)
)
.itemOutputs(
    'qilby_core:shushu_circuit_uev'
)
.duration(100)
.CWUt(128)
.EUt(7864320);

event.recipes.gtceu.shukrute_pump('rushu_uev_2')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:advanced_soc'
)
.circuit(12)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 2304)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_uev'
)
.duration(100)
.CWUt(128)
.EUt(7864320);

event.recipes.gtceu.shukrute_pump('shushu_uev_3')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(12)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 2304)
)
.itemOutputs(
    '4x qilby_core:shushu_circuit_uev'
)
.duration(100)
.CWUt(128)
.EUt(7864320);

//UIV

event.recipes.gtceu.shukrute_pump('rushu_uiv_1')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:advanced_soc'
)
.circuit(13)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 4608)
)
.itemOutputs(
    'qilby_core:shushu_circuit_uiv'
)
.duration(100)
.CWUt(168)
.EUt(31457280);

event.recipes.gtceu.shukrute_pump('shushu_uiv_2')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(13)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 4608)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_uiv'
)
.duration(100)
.CWUt(168)
.EUt(31457280);

//UXV

event.recipes.gtceu.shukrute_pump('rushu_uxv_1')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:advanced_soc'
)
.circuit(14)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 4608)
)
.itemOutputs(
    'qilby_core:shushu_circuit_uxv'
)
.duration(100)
.CWUt(192)
.EUt(125829120);

event.recipes.gtceu.shukrute_pump('shushu_uxv_2')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(14)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 4608)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_uxv'
)
.duration(100)
.CWUt(192)
.EUt(125829120);

//OpV

event.recipes.gtceu.shukrute_pump('rushu_opv_1')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:advanced_soc'
)
.circuit(15)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 9216)
)
.itemOutputs(
    '1x qilby_core:shushu_circuit_opv'
)
.duration(100)
.CWUt(224)
.EUt(503316480);

event.recipes.gtceu.shukrute_pump('shushu_opv_2')
.itemInputs(
    'qilby_core:rushu_printed_circuit_board',
    'gtceu:highly_advanced_soc'
)
.circuit(15)
.inputFluids(
    Fluid.of('qilby_core:wakfu', 9216)
)
.itemOutputs(
    '2x qilby_core:shushu_circuit_opv'
)
.duration(100)
.CWUt(224)
.EUt(503316480);

//MAX

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
