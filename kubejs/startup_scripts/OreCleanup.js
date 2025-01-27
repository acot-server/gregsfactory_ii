// priority: 0

WorldgenEvents.remove( event => {
    console.info('Ore cleanup (Only GT and Ad Astra materials ores should be left)');
    event.removeOres(props => {
        props.blocks = [
            // Create
            'create:zinc_ore',
            'create:deepslate_zinc_ore',
        ];
    });-
    console.info('Ore cleanup DONE');
});
