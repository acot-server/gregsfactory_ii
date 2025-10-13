GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('dark_matter_attractor')
        .category('dark_matter')
        .setEUIO('in')
        .setMaxIOSize(4, 2, 4, 2) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})