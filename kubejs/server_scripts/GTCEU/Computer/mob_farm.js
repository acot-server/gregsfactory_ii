ServerEvents.recipes(event => {
    
        event.shaped(
        'gtceu:monster_farm',
        ['AHA', 
         'CSC', 
         'WCW'
        ],
        {
            A: 'gtceu:data_stick',
            W: 'minecraft:nether_star',
            C: '#gtceu:circuits/mv',
            S: 'gtceu:diamond_buzz_saw_blade',
            H: 'gtceu:mv_machine_hull'
        }
    ).id('gtceu:shaped/monster_farm');


    //Overworld Loot
    event.recipes.gtceu.mob_farm('zombie_loot')
        .itemInputs(
            '8x minecraft:rotten_flesh',
            '16x minecraft:dirt'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 1000),
        )
        .itemOutputs(
            '32x minecraft:rotten_flesh',
            '16x minecraft:rotten_flesh'
        )
        .chancedItemOutputLogic(
            'minecraft:iron_ingot', 3000
        )
        .chancedItemOutputLogic(
            'minecraft:gold_ingot', 1500
        )
        .chancedItemOutputLogic(
            'minecraft:zombie_head', 200
        )
        .duration(400)
        .CWUt(3)
        .EUt(GTValues.V[GTValues.ULV]);

    event.recipes.gtceu.mob_farm('skelet_loot')
        .itemInputs(
            '8x minecraft:bone',
            '16x minecraft:dirt'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 1000),
        )
        .itemOutputs(
            '32x minecraft:bone',
            '16x minecraft:bone',
            '16x minecraft:arrow'
        )
        .chancedItemOutputLogic(
            'minecraft:skeleton_skull', 200
        )
        .duration(400)
        .CWUt(3)
        .EUt(GTValues.V[GTValues.ULV]);

    event.recipes.gtceu.mob_farm('spider_loot')
        .itemInputs(
            '8x minecraft:spider_eye',
            '16x minecraft:dirt'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 1000),
        )
        .itemOutputs(
            '32x minecraft:string',
            '16x minecraft:string',
            '32x minecraft:spider_eye',
            '16x minecraft:spider_eye'
        )
        .duration(400)
        .CWUt(3)
        .EUt(GTValues.V[GTValues.ULV]);

    event.recipes.gtceu.mob_farm('cow_loot')
        .itemInputs(
            '8x minecraft:wheat',
            '16x minecraft:dirt'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 1000),
        )
        .itemOutputs(
            '64x minecraft:beef',
            '32x minecraft:beef',
            '32x minecraft:leather'
        )
        .duration(400)
        .CWUt(3)
        .EUt(GTValues.V[GTValues.ULV]);

    event.recipes.gtceu.mob_farm('pig_loot')
        .itemInputs(
            '8x minecraft:carrot',
            '16x minecraft:dirt'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 1000),
        )
        .itemOutputs(
            '64x minecraft:porkchop',
            '64x minecraft:porkchop',
        )
        .duration(400)
        .CWUt(3)
        .EUt(GTValues.V[GTValues.ULV]);

    event.recipes.gtceu.mob_farm('chicken_loot')
        .itemInputs(
            '8x minecraft:wheat_seeds',
            '16x minecraft:dirt'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 1000),
        )
        .itemOutputs(
            '64x minecraft:chicken',
            '16x minecraft:feather',
        )
        .duration(400)
        .CWUt(3)
        .EUt(GTValues.V[GTValues.ULV]);

    event.recipes.gtceu.mob_farm('sheep_loot')
        .itemInputs(
            '8x minecraft:white_wool',
            '16x minecraft:dirt'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 1000),
        )
        .itemOutputs(
            '32x minecraft:white_wool',
            '32x minecraft:mutton'
        )
        .duration(400)
        .CWUt(3)
        .EUt(GTValues.V[GTValues.ULV]);

    event.recipes.gtceu.mob_farm('fish_loot')
        .itemInputs(
            '8x #minecraft:fishes',
            '16x minecraft:dirt'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 1000),
        )
        .itemOutputs(
            '16x minecraft:cod',
            '16x minecraft:salmon',
            '16x minecraft:tropical_fish',
            '16x minecraft:pufferfish'
        )
        .outputFluids(
            Fluid.of('gtceu:fish_oil', 288)
        )
        .duration(400)
        .CWUt(3)
        .EUt(GTValues.V[GTValues.ULV]);
//Infernal Mobs

    event.recipes.gtceu.mob_farm('blaze_loot')
        .itemInputs(
            '8x minecraft:blaze_rod',
            '16x minecraft:netherrack'
        )
        .inputFluids(
            Fluid.of('gtceu:sulfur_dioxide', 1000),
        )
        .itemOutputs(
            '32x minecraft:blaze_rod',
            '32x gtceu:sulfur_dust',
        )
        .duration(600)
        .CWUt(6)
        .EUt(GTValues.V[GTValues.LV]);

    event.recipes.gtceu.mob_farm('wither_skelet')
        .itemInputs(
            '8x minecraft:bone',
            '16x minecraft:netherrack'
        )
        .inputFluids(
            Fluid.of('gtceu:sulfur_dioxide', 1000),
        )
        .itemOutputs(
            '32x minecraft:bone',
            '8x minecraft:coal'
        )
        .chancedItemOutputLogic(
            'minecraft:wither_skeleton_skull', 200
        )
        .duration(600)
        .CWUt(6)
        .EUt(GTValues.V[GTValues.LV]);

    event.recipes.gtceu.mob_farm('enderman_loot')
        .itemInputs(
            '8x minecraft:ender_pearl',
            '16x minecraft:netherrack'
        )
        .inputFluids(
            Fluid.of('gtceu:sulfur_dioxide', 1000),
        )
        .itemOutputs(
            '16x minecraft:ender_pearl',
            '16x minecraft:ender_pearl'
        )
        .duration(600)
        .CWUt(6)
        .EUt(GTValues.V[GTValues.LV]);

    event.recipes.gtceu.mob_farm('magma_loot')
        .itemInputs(
            '8x minecraft:magma_cream',
            '16x minecraft:netherrack'
        )
        .inputFluids(
            Fluid.of('gtceu:sulfur_dioxide', 1000),
        )
        .itemOutputs(
            '32x minecraft:magma_cream',
            '16x minecraft:slime_ball'
        )
        .outputFluids(
            Fluid.of('minecraft:lava', 2000)
        )
        .duration(600)
        .CWUt(6)
        .EUt(GTValues.V[GTValues.LV]);

    event.recipes.gtceu.mob_farm('pigman_loot')
        .itemInputs(
            '8x minecraft:gold_nugget',
            '16x minecraft:netherrack'
        )
        .inputFluids(
            Fluid.of('gtceu:sulfur_dioxide', 1000),
        )
        .itemOutputs(
            '32x minecraft:gold_nugget',
            '32x minecraft:gold_nugget',
        )
        .duration(600)
        .CWUt(6)
        .EUt(GTValues.V[GTValues.LV]);

});