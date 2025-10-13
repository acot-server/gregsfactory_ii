GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('optical_assembler')
        .category('high_electronic')
        .setEUIO('in')
        .setMaxIOSize(8, 1, 2, 0) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})