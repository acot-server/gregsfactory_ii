ServerEvents.recipes(event => {
    // So that beacon 
    event.recipes.create.cutting(
        'gtceu:nether_star_lens',
        'gtceu:nether_star_block'
    ).processingTime(600);
})
