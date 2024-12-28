GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
      .create("wave_solderer", "multiblock")
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeType("wave_solderer")
      .appearanceBlock(GTBlocks.MACHINE_CASING_EV)
      .recipeModifier(
        GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(
          OverclockingLogic.NON_PERFECT_OVERCLOCK
        )
      )
.pattern((definition) => FactoryBlockPattern.start()
	.aisle("AAAA", "ABBA", "AAAA") 
	.aisle("ACCA", "A  A", "ACCA") 
	.aisle("A@AA", "ABBA", "AAAA") 
    .where(
        "A",
        Predicates.blocks("gtceu:heatproof_machine_casing")
          .setMinGlobalLimited(1)
          //.or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION)
          //      .setExactLimit(1)
          //  )
          .or(Predicates.autoAbilities(definition.getRecipeTypes()))
      )
	.where("B", Predicates.blocks("minecraft:glass"))
  .where("C", Predicates.blocks("gtceu:cupronickel_coil_block"))
	.where(" ", Predicates.blocks("minecraft:air"))
	.where("@", Predicates.controller(Predicates.blocks(definition.get())))
    .build()
    )
    .workableCasingRenderer(
        "gtceu:block/casings/solid/machine_casing_heatproof",
        "gtceu:block/multiblock/electric_blast_furnace",
        true
      )
    });
