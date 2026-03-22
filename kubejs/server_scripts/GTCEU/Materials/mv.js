ServerEvents.recipes(ev => {
    // MV Casing
    ev.remove('gtceu:shaped/casing_mv');
    ev.remove('gtceu:assembler/casing_mv');
    ev.shaped(
        'gtceu:mv_machine_casing',
        [ 'PPP'
        , 'PWP'
        , 'PPP'],
        {
            P: '#forge:plates/terrasteel',
            W: '#forge:tools/wrench'
        }
    );
    ev.recipes.gtceu.assembler('new_mv_casing')
        .itemInputs('8x #forge:plates/terrasteel')
        .itemOutputs('gtceu:mv_machine_casing')
        .circuit(8)
        .EUt(16)
        .duration(50);
});
