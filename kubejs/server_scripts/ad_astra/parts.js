ServerEvents.recipes(ev => {
    ev.remove('gtceu:shaped/oxygen_gear');
    ev.shaped(
        'ad_astra:oxygen_gear',
        [ 'DSD'
        , 'CPC'
        , 'DFD' ],
        { D: '#forge:double_plates/steel'
        , S: 'gtceu:mv_sensor'
        , C: 'gtceu:fluid_cell'
        , P: 'gtceu:mv_electric_pump'
        , F: '#forge:rotors/steel' });
});
