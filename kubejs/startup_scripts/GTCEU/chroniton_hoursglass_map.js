GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('chroniton_hoursglass')
        .category('time_manipulation')
        .setEUIO('in')
        .setMaxIOSize(4, 2, 4, 2) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})