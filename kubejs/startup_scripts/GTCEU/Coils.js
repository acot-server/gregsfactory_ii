StartupEvents.registry('block', event => {


        event.create('dark_matter_coil_block', 'gtceu:coil')//
        .temperature(12500)
        .level(8)
        .energyDiscount(6) // 
        .tier(5.5)
        .coilMaterial(() => GTMaterials.get('dark_matter'))
        .texture('kubejs:block/casings/coils/machine_coil_dark_matter')
        .hardness(5)
        .requiresTool(true)
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench');

        event.create('dark_energy_coil_block', 'gtceu:coil')
        .temperature(25000)
        .level(12)
        .energyDiscount(8) // 
        .tier(6.5)
        .coilMaterial(() => GTMaterials.get('dark_energy'))
        .texture('kubejs:block/coils/machine_coil_mithril')
        .hardness(5)
        .requiresTool(true)
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench');

        event.create('runic_stelarite_coil_block', 'gtceu:coil')
        .temperature(50000)
        .level(16)
        .energyDiscount(12) // 
        .tier(8.5)
        .coilMaterial(() => GTMaterials.get('runic_stelarite'))
        .texture('kubejs:block/coils/machine_coil_chadium')
        .hardness(5)
        .requiresTool(true)
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench');

        event.create('stellarite_coil_block', 'gtceu:coil')
        .temperature(80000)
        .level(16)
        .energyDiscount(16) // 
        .tier(9)
        .coilMaterial(() => GTMaterials.get('stellarite'))
        .texture('gtceu:block/coils/machine_coil_stellar_matter')
        .hardness(5)
        .requiresTool(true)
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench');

        event.create('fabric_of_reality_coil_block', 'gtceu:coil')
        .temperature(1000000)
        .level(32)
        .energyDiscount(16) // 
        .tier(9.5)
        .coilMaterial(() => GTMaterials.get('fabric_of_reality'))
        .texture('gtceu:block/coils/machine_coil_awakened_draconium')
        .hardness(5)
        .requiresTool(true)
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench');
});