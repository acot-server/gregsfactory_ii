ServerEvents.recipes(event => {


    event.recipes.gtceu.alloy_smelter('engineering_alloy_ingot')

    .itemInputs(
        '#forge:dusts/bronze',
        '3x #forge:dusts/wrought_iron'
    )
    .itemOutputs(
        '4x qilby_core:engineering_alloy_ingot'
    )
    .duration(400)
    .EUt(8);

    event.recipes.gtceu.mixer('engineering_alloy_dust')

    .itemInputs(
        '#forge:dusts/bronze',
        '3x #forge:dusts/wrought_iron'
    )
    .itemOutputs(
        '4x qilby_core:engineering_alloy_dust'
    )
    .duration(400)
    .EUt(8);
})