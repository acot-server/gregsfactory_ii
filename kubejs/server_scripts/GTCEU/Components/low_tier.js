ServerEvents.recipes(event => {

    event.remove('curvy_pipes:fluid_base')
    event.remove('curvy_pipes:item_base')
    event.remove('curvy_pipes:energy_base')


    event.recipes.gtceu.alloy_smelter('engineering_alloy_ingot')
        .itemInputs(
            '#forge:dusts/bronze',
            '3x #forge:dusts/wrought_iron'
        )
        .itemOutputs(
            '4x qilby_core:engineering_alloy_ingot'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV]);

    event.recipes.gtceu.mixer('engineering_alloy_dust')
        .itemInputs(
            '#forge:dusts/bronze',
            '3x #forge:dusts/wrought_iron'
        )
        .itemOutputs(
            '4x qilby_core:engineering_alloy_dust'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV]);

    event.recipes.gtceu.assembler('curvy_fluid_pipe')
        .itemInputs(
            '3x gtceu:lapis_plate',
            '3x gtceu:aluminium_ring',
            'gtceu:mv_electric_pump'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 288)
        )
        .itemOutputs(
            '4x curvy_pipes:medium_fluid_pipe'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.assembler('curvy_item_pipe')
        .itemInputs(
            '3x gtceu:redstone_plate',
            '3x gtceu:aluminium_spring',
            'gtceu:mv_conveyor_module'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 288)
        )
        .itemOutputs(
            '4x curvy_pipes:medium_item_pipe'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.MV])
})