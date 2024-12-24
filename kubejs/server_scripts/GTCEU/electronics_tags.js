ServerEvents.tags('item', event => {

        const tags = ['lv', 'mv', 'hv','iv','luv','zpm','uv','uhv','uev','uiv','uxv','opv','max']
        tags.foreach(tag => {
            event.add(`gtceu:circuits/${tag}`, 'qilby_core:shushu_circuit_max');
        });
});