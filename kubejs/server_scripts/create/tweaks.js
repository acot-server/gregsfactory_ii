ServerEvents.recipes(event => {

    event.remove({ id: 'create:crafting/kinetics/mechanical_drill'});
    event.shaped(
        Item.of('create:mechanical_drill'),
        [
            ' D ',
            'PCP',
            'GSG'
        ],
        {
            D:'gtceu:steel_drill_head',
            P:'#forge:plates/iron',
            C:'create:andesite_casing',
            G:'qilby_core:engineering_alloy_gear',
            S:'create:shaft'
        }
    );

});