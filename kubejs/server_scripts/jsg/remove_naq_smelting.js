ServerEvents.recipes(event => {
    for (let machine of ['furnace', 'blastfurnace']) {
        for (let recipe of [
            'ore/naquadah_ore_raw', 'dust/naquadah_raw_dust',
            'blocks/sand_naquadah_ore', 'blocks/netherrack_naquadah_ore',
            'blocks/deepslate_naquadah_ore', 'blocks/endstone_naquadah_ore',
            'blocks/naquadah_ore',
            'dust/naquadah_dust',
            'ore/titanium_ore_raw', 'dust/titanium_dust',
            'blocks/sand_titanium_ore', 'blocks/netherrack_titanium_ore',
            'blocks/deepslate_titanium_ore', 'blocks/endstone_titanium_ore',
            'blocks/titanium_ore',
            'ore/trinium_ore_raw', 'dust/trinium_dust',
            'blocks/sand_trinium_ore', 'blocks/netherrack_trinium_ore',
            'blocks/deepslate_trinium_ore', 'blocks/endstone_trinium_ore',
            'blocks/trinium_ore'
        ]) {
            event.remove({id: `jsg:general/item/ingots/${machine}/${recipe}_to_ingot`});
        }
    }
    event.remove({id: 'jsg:general/tools/jsg_hammer'});
});
