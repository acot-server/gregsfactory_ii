// priority: 0
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('shukrute_pump')
        .category('rushu')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
})