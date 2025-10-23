ServerEvents.recipes(event => {

    event.shaped(
        'qilby_core:large_steam_engine',
        ['AWA', 'CSC', 'WPW'],
        {
            A: '#gtceu:circuits/lv',
            W: 'gtceu:annealed_copper_octal_cable',
            C: 'gtceu:lv_steam_turbine',
            S: 'gtceu:bronze_drum',
            P: 'gtceu:lv_electric_pump'
        }
    ).id('qilby_core:shaped/steam_engine');

    event.recipes.gtceu.large_steam_engine('steam_01')
        .circuit(1)
        .inputFluids(
            Fluid.of('gtceu:steam', 1280)
        )
        .outputFluids(
            Fluid.of('gtceu:distilled_water', 160)
        )
        .duration(10)
        .EUt(-32)

    event.recipes.gtceu.large_steam_engine('steam_02')
        .circuit(2)
        .inputFluids(
            Fluid.of('gtceu:steam', 1280),
            Fluid.of('gtceu:lubricant', 20)
        )
        .outputFluids(
            Fluid.of('gtceu:distilled_water', 160)
        )
        .duration(15)
        .EUt(-32)

    event.recipes.gtceu.large_steam_engine('dense_steam_01')
        .circuit(1)
        .inputFluids(
            Fluid.of('gtca:high_pressure_steam', 128)
        )
        .outputFluids(
            Fluid.of('gtceu:steam', 640)
        )
        .duration(20)
        .EUt(-32)

    event.recipes.gtceu.large_steam_engine('dense_steam_02')
        .circuit(2)
        .inputFluids(
            Fluid.of('gtca:high_pressure_steam', 128),
            Fluid.of('gtceu:lubricant', 20)
        )
        .outputFluids(
            Fluid.of('gtceu:steam', 640)
        )
        .duration(30)
        .EUt(-32)

})