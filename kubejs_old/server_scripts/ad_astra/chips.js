ServerEvents.recipes(event => {

    event.remove({id: 'gtceu:assembler/t1_chip'})

    event.recipes.gtceu.assembler('t1_chip')
        .itemInputs(
            'qilby_core:hpca_processor_mk1',
            'gtceu:computer_monitor_cover',
            'gtceu:mv_sensor',
            'gtceu:mv_emitter',
            'gtnn:heavy_plate_t1'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 576)
        )
        .itemOutputs(
            'gtnn:t1_chip'
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.MV])
    });