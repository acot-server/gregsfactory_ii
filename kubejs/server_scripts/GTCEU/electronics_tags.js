ServerEvents.tags('item', event => {

        const tags = ['lv', 'mv', 'hv','iv','luv','zpm','uv','uhv','uev','uiv','uxv','opv','max']
        tags.forEach(tag => {
            event.add(`gtceu:circuits/${tag}`, 'qilby_core:shushu_circuit_max');
        });
});