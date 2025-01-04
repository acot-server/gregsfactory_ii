// priority: 1
GTCEuStartupEvents.registry("gtceu:machine", (event) => {
    event
      .create("shukrute_pump", "multiblock")
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeType("shukrute_pump")
      .appearanceBlock(GTBlocks.PLASTCRETE)
      .recipeModifier(
        GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(
          OverclockingLogic.NON_PERFECT_OVERCLOCK
        )
      )
      .pattern((definition) => 
        FactoryBlockPattern.start()
      .aisle("AAAAAAAAAAAAA ", "ABBBBB BBBBBA ", "ABBBBB BBBBBA ", "ABBBBBBBBBBBA ", "ABBBBBBBBBBBA ", "AAAAAAAAAAAAA ", "              ", "              ", "              ") 
      .aisle("AAAAAAAAAAAAA ", "B           B ", "B           B ", "B           B ", "B           B ", "AAA       AAA ", "   BBBBBBB    ", "              ", "              ") 
      .aisle("AAAAAAAAAAAAA ", "B  C     C  B ", "B           B ", "B           B ", "B           B ", "AA         AA ", "  A       A   ", "   BBBBBBB    ", "              ") 
      .aisle("AAADDDDDDDAAA ", "B CDEEEEEDC B ", "B  DEEEEED  B ", "B  DEEEEED  B ", "B  DDDDDDD  B ", "A           A ", " B         B  ", "  BAA   AAB   ", "     BBB      ") 
      .aisle("AAADDDDDDDAAA ", "B  EF...FE  B ", "B  EF...FE  B ", "B  EF...FE  B ", "B  DDDDDDD  B ", "A           A ", " B         B  ", "  BA     AB   ", "    AAAAA     ") 
      .aisle("AAADDDDDDDAAA ", "B  E.....E  B ", "B  E.....E  B ", "B  E.....E  B ", "B  DDDDDDD  B ", "A           A ", " B         B  ", "  B       B   ", "   BAGGGAB    ") 
      .aisle("AAADDDDDDDAAA ", "   E..H..E    ", "   E.....E    ", "B  E.....E  B ", "B  DDDDDDD  B ", "A           A ", " B         B  ", "  B       B   ", "   BAGGGAB    ") 
      .aisle("AAADDDDDDDAAA ", "B  E.....E  B ", "B  E.....E  B ", "B  E.....E  B ", "B  DDDDDDD  B ", "A           A ", " B         B  ", "  B       B   ", "   BAGGGAB    ") 
      .aisle("AAADDDDDDDAAA ", "B  EF...FE  B ", "B  EF...FE  B ", "B  EF...FE  B ", "B  DDDDDDD  B ", "A           A ", " B         B  ", "  BA     AB   ", "    AAAAA     ") 
      .aisle("AAADDDDDDDAAA ", "B CDEEEEEDC B ", "B  DEEEEED  B ", "B  DEEEEED  B ", "B  DDD@DDD  B ", "A           A ", " B         B  ", "  BAA   AAB   ", "     BBB      ") 
      .aisle("AAAAAAAAAAAAA ", "B  C     C  B ", "B           B ", "B           B ", "B           B ", "AA         AA ", "  A       A   ", "   BBBBBBB    ", "              ") 
      .aisle("AAAAAAAAAAAAA ", "B           B ", "B           B ", "B           B ", "B           B ", "AAA       AAA ", "   BBBBBBB    ", "              ", "              ") 
      .aisle("AAAAAAAAAAAAA ", "ABBBBB BBBBBA ", "ABBBBB BBBBBA ", "ABBBBBBBBBBBA ", "ABBBBBBBBBBBA ", "AAAAAAAAAAAAA ", "              ", "              ", "              ") 
      .aisle("              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ", "              ") 
      .where("@", Predicates.controller(Predicates.blocks(definition.get())))
      .where(
            "A",
            Predicates.blocks("gtceu:plascrete")
              .setMinGlobalLimited(5)
              .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION)
                    .setExactLimit(1)
                )
              .or(Predicates.autoAbilities(definition.getRecipeTypes()))
          )
      .where("B", Predicates.blocks("gtceu:cleanroom_glass"))
      .where("C", Predicates.blocks("botania:fabulous_pool"))
      .where("D", Predicates.blocks("gtceu:stable_machine_casing"))
      .where("E", Predicates.blocks("botania:elf_glass"))
      .where("F", Predicates.blocks("ae2:spatial_pylon"))
      .where("G", Predicates.blocks("gtceu:filter_casing"))
      .where("H", Predicates.blocks("botania:mana_pylon"))
      .where(".", Predicates.blocks("minecraft:air"))
      .where(" ", Predicates.any())
      .build()
      )
      .workableCasingRenderer(
        "gtceu:block/casings/cleanroom/plascrete",
        "gtceu:block/multiblock/cleanroom",
        true
      )
  });
