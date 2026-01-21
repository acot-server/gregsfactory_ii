GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('transmutator')
        .category('transmutation')
        .setEUIO('in')
        .setMaxIOSize(10, 10, 10, 10) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})