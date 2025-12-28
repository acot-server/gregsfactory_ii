const $ParallelHatchPartMachine = Java.loadClass(
    "com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine"
);

GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
      .create("parallel_hatch", "custom")
      .tiers(GTValues.UHV, GTValues.UIV, GTValues.UEV, GTValues.UXV)
      .machine((holder, tier, tankScaling) => {
        return new $ParallelHatchPartMachine(holder, tier);
      })
      .definition((tier, builder) => {
        let name = "Simple";
        switch (tier) {
          case GTValues.UHV:
            name = "Epic";
            break;
          case GTValues.UIV:
            name = "Legendary";
            break;
          case GTValues.UEV:
            name = "Spectral";
            break;
          case GTValues.UXV:
            name = "Universal";
            break;
        }
        const $RecipeLogic = Java.loadClass(
            "com.gregtechceu.gtceu.api.machine.trait.RecipeLogic"
        );
        builder
            .langValue(name + " Parallel Control Hatch")
            .rotationState(RotationState.ALL)
            .abilities(PartAbility.PARALLEL_HATCH)
            .modelProperty($RecipeLogic.STATUS_PROPERTY, $RecipeLogic.Status.IDLE)
            .model(
                GTMachineModels.createWorkableTieredHullMachineModel(
                    GTCEu.id("block/machines/parallel_hatch_mk4") 
                )[
                    "andThen(com.gregtechceu.gtceu.api.registry.registrate.MachineBuilder$ModelInitializer)"
                    ]((ctx, prov, model) => {
                  model.addReplaceableTextures("bottom", "top", "side");
                })
            )
      }); // 


});