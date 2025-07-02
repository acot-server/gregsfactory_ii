GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('mob_farm')
        .category('monster_spawner')
        .setEUIO('in')
        .setMaxIOSize(2, 6, 2, 2) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})