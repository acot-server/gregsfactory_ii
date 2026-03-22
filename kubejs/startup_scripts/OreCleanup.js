// priority: 0

WorldgenEvents.remove( event => {
    console.info('Ore cleanup (Only GT and Ad Astra materials ores should be left)');
    event.removeOres(props => {
        props.blocks = [
            // Create
            'create:zinc_ore',
            'create:deepslate_zinc_ore',
            // Forestry
            'forestry:tin_ore',
            'forestry:deepslate_tin_ore',
            'forestry:apatite_ore',
            'forestry:deepslate_apatite_ore',
        ];
    });
    console.info('Ore cleanup DONE');
});
