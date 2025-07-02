GTCEuStartupEvents.registry("gtceu:machine", (event) => {    
    event.create("monster_farm", "multiblock")
            .rotationState(RotationState.ALL)
            .recipeType("mob_farm")
            .langValue("Monster Spawner Simulator")
            .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
            .recipeModifier(
                GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(
                OverclockingLogic.NON_PERFECT_OVERCLOCK
                )
            )
            .pattern((definition) => FactoryBlockPattern.start()
            	.aisle("AAAAAAAAA", "A#######A", "A#######A", "A#######A", "AAAAAAAAA") 
            	.aisle("ABBCDEBBA", "#FFGGGFF#", "#FFGGGFF#", "#FFGGGFF#", "ABBCDEBBA") 
            	.aisle("ABCCDEEBA", "#FHHIHHF#", "#FHHIHHF#", "#FHHIHHF#", "ABCCDEEBA") 
            	.aisle("ACCJJJEEA", "#GHIIIHG#", "#GHIIIHG#", "#GHIIIHG#", "ACCJJJEEA") 
            	.aisle("ADDJKJDDA", "#GIIKIIG#", "#GIIKIIG#", "#GIIKIIG#", "ADDJKJDDA") 
            	.aisle("AEEJJJCCA", "#GHIIIHG#", "#GHIIIHG#", "#GHIIIHG#", "AEEJJJCCA") 
            	.aisle("ABEEDCCBA", "#FHHIHHF#", "#FHHIHHF#", "#FHHIHHF#", "ABEEDCCBA") 
            	.aisle("ABBEDCBBA", "#FFGGGFF#", "#FFGGGFF#", "#FFGGGFF#", "ABBEDCBBA") 
            	.aisle("AAAA@AAAA", "A#######A", "A#######A", "A#######A", "AAAAAAAAA") 
                .where(
                        "A",
                    Predicates.blocks("gtceu:steel_machine_casing")
                    .setMinGlobalLimited(1)
                    .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION)
                    .setExactLimit(1)
                        )
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    )
            	.where("@", Predicates.controller(Predicates.blocks(definition.get())))
            	.where("#", Predicates.any())
            	.where("B", Predicates.blocks("minecraft:end_stone"))
            	.where("C", Predicates.blocks("minecraft:magma_block"))
            	.where("D", Predicates.blocks("minecraft:red_nether_bricks"))
            	.where("E", Predicates.blocks("minecraft:soul_sand"))
            	.where("F", Predicates.blocks("gtceu:cupronickel_coil_block"))
            	.where("G", Predicates.blocks("botania:mana_glass"))
            	.where("H", Predicates.blocks("minecraft:bubble_column"))
            	.where("I", Predicates.blocks("minecraft:water"))
            	.where("J", Predicates.blocks("botania:livingrock"))
            	.where("K", Predicates.blocks("minecraft:amethyst_block"))
                .build()
            )
            .workableCasingRenderer(
                "gtceu:block/casings/solid/machine_casing_solid_steel",
                "gtceu:block/multiblock/electric_blast_furnace",
                true
            )
    });