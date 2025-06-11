GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('deep_core_miner')
        .category('mining')
        .setEUIO('in')
        .setMaxIOSize(4, 32, 1, 0) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER)
})