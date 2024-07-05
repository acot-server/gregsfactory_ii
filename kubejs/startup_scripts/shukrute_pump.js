// priority: 1
GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
      .create("shukrute_pump", "multiblock")
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeType("shukrute_pump")
      .appearanceBlock(GTBlocks.MACHINE_CASING_EV)
      .recipeModifier(
        GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(
          OverclockingLogic.NON_PERFECT_OVERCLOCK
        )
      )
      .pattern((definition) =>
        FactoryBlockPattern.start()
          .aisle("0BBB0", "0BBB0", "0BBB0", "0BBB0")
          .aisle("BBBBB", "BDDDB", "B###B", "BGGGB")
          .aisle("BBBBB", "BDDDB", "B###B", "BGGGB")
          .aisle("BBBBB", "BDDDB", "B###B", "BGGGB")
          .aisle("0BBB0", "0BEB0", "0BBB0", "0BBB0")
          .where("E", Predicates.controller(Predicates.blocks(definition.get())))
          .where("D", Predicates.blocks("botania:gaia_pylon"))
          .where("G", Predicates.blocks("botania:elf_glass"))
          .where(
            "B",
            Predicates.blocks("gtceu:ev_machine_casing")
              .setMinGlobalLimited(5)
              .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION)
                    .setExactLimit(1)
                )
              .or(Predicates.autoAbilities(definition.getRecipeTypes()))
          )
          .where("#", Predicates.air())
          .where("0", Predicates.any())
          .build()
      )
      .workableCasingRenderer(
        "gtceu:block/casings/voltage/ev/side",
        "gtceu:block/multiblock/vacuum_freezer",
        true
      );
  });
