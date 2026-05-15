ServerEvents.recipes(event => {
    for (let type of ['brass', 'copper', 'railway', 'shadow_steel', 'refined_radiance', 'creative', 'industrial_iron', 'weathered_iron']) {
        event.remove({id: `createcasing:crafting/drill/${type}`});
    }
});
