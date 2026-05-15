ServerEvents.recipes(event => {
    event.shaped(
        'create:item_vault',
        [ 'P', 'C', 'P' ],
        {
            P: '#forge:plates/iron',
            C: '#forge:chests',
        },
    );
    event.shaped(
        'create:fluid_tank',
        [ 'P', 'C', 'P' ],
        {
            P: '#forge:plates/copper',
            C: '#forge:chests',
        },
    );
});
