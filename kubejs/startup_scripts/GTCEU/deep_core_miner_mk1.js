GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
      .create("deep_core_miner", "multiblock")
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeType("deep_core_miner")
      .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
      .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
    .pattern((definition) => FactoryBlockPattern.start()
	    .aisle("AAAAAAAAA", "B       B", "B       B", "B       B", "B       B", "BBBBBBBBB", "CCC   CCC", "CCC   CCC", "         ") 
	    .aisle("AAAAAAAAA", " D     D ", " D     D ", " D     D ", " D     D ", "BAAB BAAB", "CCC   CCC", "CEC   CEC", " E     E ") 
	    .aisle("AAAAAAAAA", "         ", "         ", "         ", "    F    ", "BAAABAAAB", "CCC   CCC", "CCC   CCC", " E     E ") 
	    .aisle("AAAAAAAAA", "         ", "         ", "         ", "         ", "BBAAGAABB", "         ", "         ", " E     E ") 
	    .aisle("AAAA.AAAA", "    H    ", "    H    ", "    H    ", "  F H F  ", "BBBGHGB B", "    H    ", "    H    ", " EEEHEEE ") 
	    .aisle("AAAAAAAAA", "         ", "         ", "         ", "         ", "BBAAGAABB", "         ", "         ", " E     E ") 
	    .aisle("AAAAAAAAA", "         ", "         ", "         ", "    F    ", "BAAABAAAB", "CCC   CCC", "CCC   CCC", " E     E ") 
	    .aisle("AAAAAAAAA", " D     D ", " D     D ", " D     D ", " D     D ", "BAAB BAAB", "CCC   CCC", "CEC   CEC", " E     E ") 
	    .aisle("AAAAAAAAA", "B       B", "B       B", "B       B", "B       B", "BBBBBBBBB", "CCC @ CCC", "CCC   CCC", "         ") 
	    .where("A", Predicates.blocks("gtceu:solid_machine_casing"))
	    .where("B", Predicates.blocks("gtceu:hsla_steel_frame"))
	    .where(" ", Predicates.any())
        .where(".", Predicates.blocks("minecraft:air"))
        .where(
            "C",
            Predicates.blocks("gtceu:stable_machine_casing")
              .setMinGlobalLimited(1)
              .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1))
              .or(Predicates.autoAbilities(definition.getRecipeTypes()))
          )
	    .where("D", Predicates.blocks("gtceu:iv_lapotronic_battery"))
	    .where("E", Predicates.blocks("gtceu:nichrome_coil_block"))
	    .where("F", Predicates.blocks("gtceu:iv_256a_laser_source_hatch"))
	    .where("G", Predicates.blocks("gtceu:titanium_gearbox"))
	    .where("H", Predicates.blocks("gtceu:titanium_pipe_casing"))
	    .where("@", Predicates.controller(Predicates.blocks(definition.get())))
        .build()
    )
    .workableCasingRenderer(
        "gtceu:block/casings/solid/machine_casing_inert_ptfe",
        "gtceu:block/multiblock/large_chemical_reactor",
        true
      )
});