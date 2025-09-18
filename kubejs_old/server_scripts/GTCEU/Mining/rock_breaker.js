ServerEvents.recipes(event => {
    event.remove({id: 'gtceu:rock_breaker/basalt'})
    event.remove({id: 'gtceu:rock_breaker/blackstone'})
    event.remove({id: 'gtceu:rock_breaker/red_granite'})
    event.remove({id: 'gtceu:rock_breaker/andesite'})
    event.remove({id: 'gtceu:rock_breaker/granite'})
    event.remove({id: 'gtceu:rock_breaker/marble'})
    event.remove({id: 'gtceu:rock_breaker/cobblestone'})
    event.remove({id: 'gtceu:rock_breaker/diorite'})
    event.remove({id: 'gtceu:rock_breaker/obsidian'})
    event.remove({id: 'gtceu:rock_breaker/deepslate'})



    event.recipes.gtceu.rock_breaker('basalt')
        .notConsumable('minecraft:basalt')
        .itemOutputs('minecraft:basalt')
        .addData("fluidA", "minecraft:lava")
        .addData("fluidB", "minecraft:water")
        .duration(16)
        .EUt(8)
        

    event.recipes.gtceu.rock_breaker('blackstone')
        .notConsumable('minecraft:blackstone')
        .itemOutputs('minecraft:blackstone')
        .addData("fluidA", "minecraft:lava")
        .addData("fluidB", "minecraft:water")
        .duration(16)
        .EUt(8)
        

    event.recipes.gtceu.rock_breaker('red_granite')
        .notConsumable('gtceu:red_granite')
        .itemOutputs('gtceu:red_granite')
        .addData("fluidA", "minecraft:lava")
        .addData("fluidB", "minecraft:water")
        .duration(16)
        .EUt(8)
        

    event.recipes.gtceu.rock_breaker('andesite')
        .notConsumable('minecraft:andesite')
        .itemOutputs('minecraft:andesite')
        .addData("fluidA", "minecraft:lava")
        .addData("fluidB", "minecraft:water")
        .duration(16)
        .EUt(8)
        

    event.recipes.gtceu.rock_breaker('granite')
        .notConsumable('minecraft:granite')
        .itemOutputs('minecraft:granite')
        .addData("fluidA", "minecraft:lava")
        .addData("fluidB", "minecraft:water")
        .duration(16)
        .EUt(8)
        

    event.recipes.gtceu.rock_breaker('marble')
        .notConsumable('gtceu:marble')
        .itemOutputs('gtceu:marble')
        .addData("fluidA", "minecraft:lava")
        .addData("fluidB", "minecraft:water")
        .duration(16)
        .EUt(8)
        

    event.recipes.gtceu.rock_breaker('diorite')
        .notConsumable('minecraft:diorite')
        .itemOutputs('minecraft:diorite')
        .addData("fluidA", "minecraft:lava")
        .addData("fluidB", "minecraft:water")
        .duration(16)
        .EUt(8)
        

    event.recipes.gtceu.rock_breaker('obsidian')
        .notConsumable('minecraft:redstone')
        .itemOutputs('minecraft:obsidian')
        .addData("fluidA", "minecraft:lava")
        .addData("fluidB", "minecraft:water")
        .duration(16)
        .EUt(8)
        

    event.recipes.gtceu.rock_breaker('deeplslate')
        .notConsumable('minecraft:deepslate')
        .itemOutputs('minecraft:deepslate')
        .addData("fluidA", "minecraft:lava")
        .addData("fluidB", "minecraft:water")
        .duration(16)
        .EUt(8)
        

    event.recipes.gtceu.rock_breaker('limestone')
        .notConsumable('create:limestone')
        .itemOutputs('create:limestone')
        .addData("fluidA", "minecraft:lava")
        .addData("fluidB", "minecraft:water")
        .duration(16)
        .EUt(8)
        

    event.recipes.gtceu.rock_breaker('tuff')
        .notConsumable('minecraft:tuff')
        .itemOutputs('minecraft:tuff')
        .addData("fluidA", "minecraft:lava")
        .addData("fluidB", "minecraft:water")
        .duration(16)
        .EUt(8)
        

    event.recipes.gtceu.rock_breaker('calcite')
        .notConsumable('minecraft:calcite')
        .itemOutputs('minecraft:calcite')
        .addData("fluidA", "minecraft:lava")
        .addData("fluidB", "minecraft:water")
        .duration(16)
        .EUt(8)
        
})