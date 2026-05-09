ServerEvents.recipes(event => {
    // Remove default upgrade crafts
    for (let type of ['copper', 'gold', 'diamond', 'netherite', 'void']) {
        event.remove({id: `functionalstorage:${type}_upgrade`});
    }
    event.shapeless('functionalstorage:void_upgrade',
        ['#functionalstorage:drawer', 'trashcans:item_trash_can']
    );
    event.shapeless('functionalstorage:copper_upgrade',
        ['#functionalstorage:drawer', 'gtceu:lv_super_chest']
    );

});
