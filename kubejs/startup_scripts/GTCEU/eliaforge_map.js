// priority: 2
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('eliaforge')
        .category('eliatrope')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 1, 0) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
})