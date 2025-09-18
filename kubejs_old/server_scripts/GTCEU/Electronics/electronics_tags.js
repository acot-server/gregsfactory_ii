ServerEvents.tags('item', event => {

    const tags = ['lv', 'mv', 'hv', 'ev', 'iv','luv','zpm','uv','uhv','uev','uiv','uxv','opv','max']
    tags.forEach(tag => {
        event.add(`gtceu:circuits/${tag}`, 'qilby_core:shushu_circuit_max');
    });
    event.add('gtceu:circuits/lv',  'qilby_core:mass_production_lv_circuit');
    
    event.add('gtceu:circuits/ev',  'qilby_core:integrated_mainframe');

    event.add('gtceu:circuits/zpm', 'qilby_core:enigmatic_processor');
    event.add('gtceu:circuits/uv',  'qilby_core:enigmatic_processor_assembly');
    event.add('gtceu:circuits/uhv', 'qilby_core:enigmatic_processor_computer');
    event.add('gtceu:circuits/uev', 'qilby_core:enigmatic_processor_mainframe');
        
    event.add('gtceu:circuits/uv',  'qilby_core:optical_processor');
    event.add('gtceu:circuits/uhv', 'qilby_core:optical_processor_assembly');
    event.add('gtceu:circuits/uev', 'qilby_core:optical_processor_computer');
    event.add('gtceu:circuits/uiv', 'qilby_core:optical_processor_mainframe');
        
    event.add('gtceu:circuits/uhv', 'qilby_core:chronal_processor');
    event.add('gtceu:circuits/uev', 'qilby_core:chronal_processor_assembly');
    event.add('gtceu:circuits/uiv', 'qilby_core:chronal_processor_computer');
    event.add('gtceu:circuits/uxv', 'qilby_core:chronal_processor_mainframe');

    event.add('gtceu:circuits/uev', 'qilby_core:supracausal_processor');
    event.add('gtceu:circuits/uiv', 'qilby_core:supracausal_processor_assembly');
    event.add('gtceu:circuits/uxv', 'qilby_core:supracausal_processor_computer');
    event.add('gtceu:circuits/opv', 'qilby_core:supracausal_processor_mainframe');
    
    event.add('gtceu:circuits/uiv', 'qilby_core:multiversal_processor')
    event.add('gtceu:circuits/uxv', 'qilby_core:multiversal_processor_assembly')
    event.add('gtceu:circuits/opv', 'qilby_core:multiversal_supercomputer')

    event.add('gtceu:circuits/uxv', 'qilby_core:omniversal_processor')
    event.add('gtceu:circuits/opv', 'qilby_core:omniversal_processor_assembly')
    event.add('gtceu:circuits/max', 'qilby_core:omniversal_supercomputer')

});
