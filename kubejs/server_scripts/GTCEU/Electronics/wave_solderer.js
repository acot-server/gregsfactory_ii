ServerEvents.recipes(event => {

    ////// Machine Recipe //////

    event.shaped(
        'gtceu:wave_solderer',
        ['AWA', 'CSC', 'WPW'],
        {
            A: '#gtceu:circuits/lv',
            W: 'gtceu:tin_octal_cable',
            C: 'gtceu:lv_conveyor_module',
            S: 'gtceu:lv_machine_hull',
            P: 'gtceu:lv_electric_pump'
        }
    ).id('gtceu:shaped/wave_solderer');

    event.recipes.gtceu.wave_solderer('lv_mass_assembly')
    .itemInputs(
        'qilby_core:unsoldered_lv_circuit_assembly'
    )
    .inputFluids(
        Fluid.of('gtceu:soldering_alloy', 144)
    )
    .itemOutputs(
        'qilby_core:lv_circuit_assembly'
    )
    .duration(200)
    .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.distillery('soldering_flux')
    .circuit(1)
    .inputFluids(
        Fluid.of('integrateddynamics:menril_resin', 1000)
    )
    .outputFluids(
        Fluid.of('qilby_core:soldering_flux', 72)
    )
    .EUt(GTValues.VA[GTValues.MV])
    .duration(600);
});
