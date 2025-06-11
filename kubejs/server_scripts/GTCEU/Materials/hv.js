ServerEvents.recipes(ev => {
    ev.remove('gtceu:shaped/electric_motor_hv');
    ev.remove('gtceu:assembler/electric_motor_hv');
    ev.shaped(
        'gtceu:hv_electric_motor',
        [ 'CWR'
        , 'WMW'
        , 'RWC' ],
        { C: 'gtceu:silver_double_cable'
        , W: 'gtceu:electrum_double_wire'
        , R: '#forge:rods/desh'
        , M: '#forge:rods/magnetic_steel' });
    ev.recipes.gtceu.assembler('new_hv_motor')
        .itemInputs(
            '2x gtceu:silver_double_cable',
            '4x gtceu:electrum_double_wire',
            '2x #forge:rods/desh',
            '1x #forge:rods/magnetic_steel')
        .itemOutputs('gtceu:hv_electric_motor')
        .EUt(30)
        .duration(100);
});
