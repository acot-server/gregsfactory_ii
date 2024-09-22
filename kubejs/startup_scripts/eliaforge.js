// priority: 3
GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
      .create("eliaforge", "multiblock")
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeType("eliaforge")
      .appearanceBlock(GTBlocks.ADVANCED_COMPUTER_CASING)
      .recipeModifier(
        GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(
          OverclockingLogic.NON_PERFECT_OVERCLOCK
        )
      )
      .pattern((definition) =>
        FactoryBlockPattern.start()
          .aisle("AAAAA", "FCCCF", "FGGGF", "FCCCF","AAAAA")
          .aisle("AHHHA", "CW#WC", "G###G", "CS#SC","AHHHA")
          .aisle("AHHHA", "C#W#C", "G#P#G", "C#S#C","AHHHA")
          .aisle("AHHHA", "CW#WC", "G###G", "CS#SC","AHHHA")
          .aisle("AAEAA", "FCCCF", "FGGGF", "FCCCF","AAAAA")
          .where("E", Predicates.controller(Predicates.blocks(definition.get())))
          .where("H", Predicates.blocks("gtceu:high_power_casing"))
          .where("C", Predicates.blocks("kubejs:runic_stellarite_coil"))
          .where("G", Predicates.blocks("gtceu:fusion_glass"))
          .where("F", Predicates.blocks("gtceu:fusion_casing_mk3"))
          .where("W", Predicates.blocks("qilby_core:wakfu_block"))
          .where("S", Predicates.blocks("qilby_core:stasis_block"))
          .where("P", Predicates.blocks("draconicevolution:reactor_core"))
          .where(
            "A",
            Predicates.blocks("gtceu:advanced_computer_casing")
              .setMinGlobalLimited(5)
              .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION)
                    .setExactLimit(1)
                )
              .or(Predicates.autoAbilities(definition.getRecipeTypes()))
          )
          .where("#", Predicates.air())
          .build()
      )
      .workableCasingRenderer(
        "gtceu:block/casings/hpca/advanced_computer_casing/side",
        "gtceu:block/multiblock/hpca",
        true
      );
  });