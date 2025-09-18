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
            'draconicevolution:end_draconium_ore',
            // Railcraft
            'railcraft:sulfur_ore',
            'railcraft:deepslate_sulfur_ore',
            'railcraft:salpeter_ore',
            'railcraft:lead_ore',
            'railcraft:deepslate_lead_ore',
            'railcraft:nickel_ore',
            'railcraft:deepslate_nickel_ore',
            'railcraft:silver_ore',
            'railcraft:deepslate_silver_ore',
            'railcraft:tin_ore',
            'railcraft:deepslate_tin_ore',
            'railcraft:zinc_ore',
            'railcraft:deepslate_zinc_ore',
        ];
    });
    console.info('Ore cleanup DONE');
});
