ServerEvents.recipes(ev => {
    ev.remove('gtceu:shaped/casing_mv');
    ev.remove('gtceu:assembler/casing_mv');

    ev.shaped(
        'gtceu:mv_machine_casing',
        [ 'PPP'
        , 'PWP'
        , 'PPP'],
        {
            P: '#forge:plates/terra_steel',
            W: '#forge:tools/wrench'
        }
    );
    ev.recipes.gtceu.assembler('new_mv_casing')
        .itemInputs('8x #forge:plates/terra_steel')
        .circuit(8)
        .EUt(16)
        .duration(50)
        .itemOutputs('gtceu:mv_machine_casing');
});

ServerEvents.tags('item', ev => {
    ev.add('forge:ingots/terra_steel', '#forge:ingots/terrasteel');
    ev.add('forge:nuggets/terra_steel', '#forge:nuggets/terrasteel');
    ev.add('forge:storage_blocks/terra_steel', '#forge:storage_blocks/terrasteel');
});
