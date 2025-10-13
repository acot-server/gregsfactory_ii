// priority: 0

WorldgenEvents.remove( event => {
    console.info('Ore cleanup (Only GT and Ad Astra materials ores should be left)');
    event.removeOres(props => {
        props.blocks = [
            // Create
            'create:zinc_ore',
            'create:deepslate_zinc_ore',
            // Draconic
            'draconicevolution:overworld_draconium_ore',
            'draconicevolution:deepslate_draconium_ore',
            'draconicevolution:nether_draconium_ore',
            'draconicevolution:end_draconium_ore'
        ];
    });
    console.info('Ore cleanup DONE');
});
