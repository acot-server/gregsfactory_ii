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
        .aisle("        AAA   AAA        ", "        BBB   BBB        ", "        CCC   CCC        ", "        CCC   CCC        ", "        AAA   AAA        ") 
        .aisle("        AAADDDAAA        ", "        B B   B B        ", "        C C   C C        ", "        C C   C C        ", "        AAADDDAAA        ") 
        .aisle("        AAA D AAA        ", "        BBB   BBB        ", "        CCC   CCC        ", "        CCC   CCC        ", "        AAA D AAA        ") 
        .aisle("            D            ", "                         ", "                         ", "                         ", "            D            ") 
        .aisle("    LLFFGGGGDGGGGFFLL    ", "    LL             LL    ", "    HH             HH    ", "    HH             HH    ", "        GGGGDGGGG        ") 
        .aisle("    LL  GGGGDGGGG  LL    ", "    LL             LL    ", "    HH             HH    ", "    HH             HH    ", "        GGGGDGGGG        ") 
        .aisle("    F   GGGGDGGGG   F    ", "                         ", "                         ", "                         ", "        GGGGDGGGG        ") 
        .aisle("    F   GGGGDGGGG   F    ", "                         ", "                         ", "                         ", "        GGGGDGGGG        ") 
        .aisle("AAA GGGGIIIIDIIIIGGGG AAA", "BBB     FJJJDJJJF     BBB", "CCC     FJJJDJJJF     CCC", "CCC     FJJJDJJJF     CCC", "AAA GGGGIIIIDIIIIGGGG AAA") 
        .aisle("AAA GGGGIFFFFFFFIGGGG AAA", "B B     JKKKKKKKJ     B B", "C C     JKKKKKKKJ     C C", "C C     JKKKKKKKJ     C C", "AAA GGGGIFFFFFFFIGGGG AAA") 
        .aisle("AAA GGGGIFEEEEEFIGGGG AAA", "BBB     JKKKKKKKJ     BBB", "CCC     JKKKKKKKJ     CCC", "CCC     JKKKKKKKJ     CCC", "AAA GGGGIFEEEEEFIGGGG AAA") 
        .aisle(" D  GGGGIFEEEEEFIGGGG  D ", "        JKKKKKKKJ        ", "        JKKKKKKKJ        ", "        JKKKKKKKJ        ", " D  GGGGIFEEEEEFIGGGG  D ") 
        .aisle(" DDDDDDDDFEEEEEFDDDDDDDD ", "        DKKKKKKKD        ", "        DKKKKKKKD        ", "        DKKKKKKKD        ", " DDDDDDDDFEEEEEFDDDDDDDD ") 
        .aisle(" D  GGGGIFEEEEEFIGGGG  D ", "        JKKKKKKKJ        ", "        JKKKKKKKJ        ", "        JKKKKKKKJ        ", " D  GGGGIFEEEEEFIGGGG  D ") 
        .aisle("AAA GGGGIFEEEEEFIGGGG AAA", "BBB     JKKKKKKKJ     BBB", "CCC     JKKKKKKKJ     CCC", "CCC     JKKKKKKKJ     CCC", "AAA GGGGIFEEEEEFIGGGG AAA") 
        .aisle("AAA GGGGIFFFFFFFIGGGG AAA", "B B     JKKKKKKKJ     B B", "C C     JKKKKKKKJ     C C", "C C     JKKKKKKKJ     C C", "AAA GGGGIFFFFFFFIGGGG AAA") 
        .aisle("AAA GGGGIIIIDIIIIGGGG AAA", "BBB     FJJJDJJJF     BBB", "CCC     FJJJDJJJF     CCC", "CCC     FJJJDJJJF     CCC", "AAA GGGGIIIIDIIIIGGGG AAA") 
        .aisle("    F   GGGGDGGGG   F    ", "                         ", "                         ", "                         ", "        GGGGDGGGG        ") 
        .aisle("    F   GGGGDGGGG   F    ", "                         ", "                         ", "                         ", "        GGGGDGGGG        ") 
        .aisle("    LL  GGGGDGGGG  LL    ", "    LL             LL    ", "    HH             HH    ", "    HH             HH    ", "        GGGGDGGGG        ") 
        .aisle("    LLFFGGGGDGGGGFFLL    ", "    LL      @      LL    ", "    HH             HH    ", "    HH             HH    ", "        GGGGDGGGG        ") 
        .aisle("            D            ", "                         ", "                         ", "                         ", "            D            ") 
        .aisle("        AAA D AAA        ", "        BBB   BBB        ", "        CCC   CCC        ", "        CCC   CCC        ", "        AAA D AAA        ") 
        .aisle("        AAADDDAAA        ", "        B B   B B        ", "        C C   C C        ", "        C C   C C        ", "        AAADDDAAA        ") 
        .aisle("        AAA   AAA        ", "        BBB   BBB        ", "        CCC   CCC        ", "        CCC   CCC        ", "        AAA   AAA        ") 
        .where("@", Predicates.controller(Predicates.blocks(definition.get())))
        .where("A", Predicates.blocks("gtceu:heatproof_machine_casing"))
        .where("B", Predicates.blocks("gtceu:heat_vent"))
        .where("C", Predicates.blocks("gtceu:tritanium_coil_block"))
        .where("D", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
        .where("E", Predicates.blocks("gtceu:high_power_casing"))
        .where("F", Predicates.blocks("gtceu:advanced_computer_casing"))
        .where("G", Predicates.blocks("gtceu:computer_casing"))
        .where("H", Predicates.blocks("gtceu:uhv_ultimate_battery"))
        .where("I", Predicates.blocks("gtceu:tungstensteel_gearbox"))
        .where("J", Predicates.blocks("gtceu:fusion_glass"))
        .where("K", Predicates.blocks("minecraft:air"))
        .where(
          "L",
          Predicates.blocks("gtceu:computer_heat_vent")
            .setMinGlobalLimited(1)
            .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION)
                  .setExactLimit(1)
              )
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
        )
        .where(" ", Predicates.any())
        .build()
      )
      .workableCasingRenderer(
      "gtceu:block/casings/hpca/advanced_computer_casing/side",
      "gtceu:block/multiblock/hpca",
      true
    )
});