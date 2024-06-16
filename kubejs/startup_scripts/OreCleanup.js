// priority: 0

WorldgenEvents.remove( event => {
    console.info('Ore cleanup (Only GT and Ad Astra materials ores should be left)');
    event.removeOres(props => {
        props.blocks = [
            // Immersive Engineering
            'immersiveengineering:ore_lead',
            'immersiveengineering:ore_silver',
            'immersiveengineering:ore_nickel',
            'immersiveengineering:ore_uranium',
            'immersiveengineering:deepslate_ore_lead',
            'immersiveengineering:deepslate_ore_silver',
            'immersiveengineering:deepslate_ore_nickel',
            'immersiveengineering:deepslate_ore_uranium',
            // Create
            'create:zinc_ore',
            'create:deepslate_zinc_ore',
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
            // Ad Astra
            'ad_astra:moon_iron_ore',
            'ad_astra:moon_ice_shard_ore',
            'ad_astra:deepslate_ice_shard_ore',
            'ad_astra:mars_diamond_ore',
            'ad_astra:mars_ice_shard_ore',
            'ad_astra:mars_iron_ore',
            'ad_astra:venus_coal_ore',
            'ad_astra:venus_gold_ore',
            'ad_astra:venus_diamond_ore',
            'ad_astra:mercury_iron_ore',
            'ad_astra:glacio_ice_shard_ore',
            'ad_astra:glacio_coal_ore',
            'ad_astra:glacio_copper_ore',
            'ad_astra:glacio_iron_ore',
            'ad_astra:glacio_lapis_ore',

        ];
    });
    event.removeFeatureById('raw_generation', [
    //FOR SOME REASON ADASTRA GENERATES ORES AT THIS GENERATION STEP
        'ad_astra:moon_iron_ore',
        'ad_astra:moon_ice_shard_ore',
        'ad_astra:deepslate_ice_shard_ore',
        'ad_astra:mars_diamond_ore',
        'ad_astra:mars_ice_shard_ore',
        'ad_astra:mars_iron_ore',
        'ad_astra:venus_coal_ore',
        'ad_astra:venus_gold_ore',
        'ad_astra:venus_diamond_ore',
        'ad_astra:mercury_iron_ore',
        'ad_astra:glacio_ice_shard_ore',
        'ad_astra:glacio_coal_ore',
        'ad_astra:glacio_copper_ore',
        'ad_astra:glacio_iron_ore',
        'ad_astra:glacio_lapis_ore'
    ]);
     event.removeFeatureById('underground_ores', [
     //FOR SOME REASON ADASTRA GENERATES ORES AT THIS GENERATION STEP
        'ad_astra:moon_iron_ore',
        'ad_astra:moon_ice_shard_ore',
        'ad_astra:deepslate_ice_shard_ore',
        'ad_astra:mars_diamond_ore',
        'ad_astra:mars_ice_shard_ore',
        'ad_astra:mars_iron_ore',
        'ad_astra:venus_coal_ore',
        'ad_astra:venus_gold_ore',
        'ad_astra:venus_diamond_ore',
        'ad_astra:mercury_iron_ore',
        'ad_astra:glacio_ice_shard_ore',
        'ad_astra:glacio_coal_ore',
        'ad_astra:glacio_copper_ore',
        'ad_astra:glacio_iron_ore',
        'ad_astra:glacio_lapis_ore'
    ]);
    console.info('Ore cleanup DONE');
});
