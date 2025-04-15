// priority: 3
GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
      .create("optical_assembly_line", "multiblock")
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeType("optical_assembler")
      .appearanceBlock(GTBlocks.ADVANCED_COMPUTER_CASING)
      .recipeModifier(
        GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(
          OverclockingLogic.PERFECT_OVERCLOCK
        )
      )
      .pattern((definition) => 
        FactoryBlockPattern.start()
      .aisle("  AAA  ", "  AGA  ", "  AAA  ", "  AAA  ") 
      .aisle("  AAA  ", "  BCB  ", "  ADA  ", "  EAE  ") 
      .aisle("  AAA  ", "  BCB  ", "  ADA  ", "  EAE  ") 
      .aisle("  AAA  ", "  BCB  ", "  ADA  ", "  EAE  ") 
      .aisle("  AAA  ", "  BCB  ", "  ADA  ", "  EAE  ") 
      .aisle("  AAA  ", "  BCB  ", "  ADA  ", "  EAE  ") 
      .aisle("  AAA  ", "  BCB  ", "  ADA  ", "  EAE  ") 
      .aisle("  AAA  ", "  BCB  ", "  ADA  ", "  EAE  ") 
      .aisle("AAAAAAA", "AAA AAA", "AAA AAA", "AAAAAAA") 
      .aisle("AAAAAAA", "A     A", "A     A", "AFFFFFA") 
      .aisle("AAAAAAA", "G     G", "A     A", "AFFFFFA") 
      .aisle("AAAAAAA", "A     A", "A     A", "AFFFFFA") 
      .aisle("AAAAAAA", "AAA@AAA", "AAAAAAA", "AAAAAAA") 
          .where("@", Predicates.controller(Predicates.blocks(definition.get())))
          .where(
            "A",
            Predicates.blocks("gtnn:field_restriction_casing")
              .setMinGlobalLimited(1)
              .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION)
                    .setExactLimit(1)
                )
              .or(Predicates.autoAbilities(definition.getRecipeTypes()))
          )
          .where("B", Predicates.blocks("gtceu:fusion_glass"))
          .where("C", Predicates.blocks("gtnn:high_speed_pipe_block"))
          .where("D", Predicates.blocks("gtceu:assembly_line_unit"))
          .where("E", Predicates.blocks("gtceu:assembly_line_grating"))
          .where("F", Predicates.blocks("minecraft:tinted_glass"))
          .where("G", Predicates.blocks("gtceu:uhv_256a_laser_source_hatch"))
          .where(" ", Predicates.any())
          .build()
        )
        .workableCasingRenderer(
        "gtceu:block/casings/hpca/advanced_computer_casing/side",
        "gtceu:block/multiblock/hpca",
        true
      )
  });

