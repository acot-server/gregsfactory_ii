ServerEvents.recipes(event => {

    event.remove({ id: 'gtceu:shaped/lv_1a_energy_converter'});
    event.remove({ id: 'gtceu:shaped/lv_4a_energy_converter'});
    event.remove({ id: 'gtceu:shaped/lv_8a_energy_converter'});
    event.remove({ id: 'gtceu:shaped/lv_16a_energy_converter'});
    event.remove({ id: 'gtceu:shaped/vacuum_tube'});
    event.recipes.create.mechanical_crafting('gtceu:lv_1a_energy_converter', [
        '  C  ',
        '  I  ',
        'SRHRS',
        '  T  '
    ], {
        C: 'ad_astra:etrionic_capacitor',
        I: '#gtceu:circuits/lv',
        S: 'ad_astra:steel_cable',
        H: 'gtceu:lv_machine_hull',
        R: 'gtceu:fine_red_alloy_wire',
        T: 'gtceu:tin_single_cable'
    });
    event.recipes.create.mechanical_crafting('gtceu:lv_4a_energy_converter', [
        '  C  ',
        '  I  ',
        'SIHIS',
        '  T  '
    ], {
        C: 'gtceu:lv_lithium_battery',
        I: 'gtceu:lv_1a_energy_converter',
        S: 'gtceu:lv_voltage_coil',
        H: 'gtceu:lv_transformer_1a',
        T: 'gtceu:tin_quadruple_cable'
    });
    event.recipes.create.mechanical_crafting('gtceu:lv_8a_energy_converter', [
        '  C  ',
        '  I  ',
        'SIHIS',
        '  T  '
    ], {
        C: 'gtceu:lv_lithium_battery',
        I: 'gtceu:lv_4a_energy_converter',
        S: '#gtceu:circuits/lv',
        H: 'gtceu:lv_transformer_2a',
        T: 'gtceu:tin_octal_cable'
    });
    event.recipes.create.mechanical_crafting('gtceu:lv_16a_energy_converter', [
        '  C  ',
        '  I  ',
        'SIHIS',
        '  T  '
    ], {
        C: 'gtceu:lv_lithium_battery',
        I: 'gtceu:lv_8a_energy_converter',
        S: '#gtceu:circuits/lv',
        H: 'gtceu:lv_transformer_4a',
        T: 'gtceu:tin_hex_cable'
    });

    //Vaccum Tube
    event.recipes.create.mechanical_crafting('gtceu:vacuum_tube', [
        'STS',
        'RRR'
    ], {
        S: 'gtceu:steel_bolt',
        T: 'create:electron_tube',
        R: 'gtceu:red_alloy_single_wire'
    });
});