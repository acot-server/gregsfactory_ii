GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('wave_solderer')
        .category('soldering')
        .setEUIO('in')
        .setMaxIOSize(4, 2, 1, 1) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMBUSTION)
})