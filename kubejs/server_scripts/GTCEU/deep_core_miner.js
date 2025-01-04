ServerEvents.recipes(event => {

    event.shaped(
        'gtceu:deep_core_miner',
        ['AHA', 
         'CSC', 
         'WCW'
        ],
        {
            A: 'gtceu:titanium_normal_fluid_pipe',
            W: 'gtceu:tungsten_gear',
            C: '#gtceu:circuits/iv',
            S: 'gtceu:diamond_drill_head',
            H: 'gtceu:iv_machine_hull'
        }
    ).id('gtceu:shaped/deep_core_miner');
    
    event.recipes.gtceu.deep_core_miner('mining_map_1')
        .notConsumable('ad_astra:earth_globe')
        .inputFluids(
            Fluid.of('gtceu:drilling_fluid', 128000)
        )
        .itemOutputs(
            '16x gtceu:raw_tantalite_block',
            '16x gtceu:raw_hematite_block',
            '16x gtceu:raw_cassiterite_block',
            '16x gtceu:raw_chalcopyrite_block',
            '16x gtceu:raw_chromite_block',
            '16x gtceu:raw_cinnabar_block',
            '16x gtceu:raw_coal_block',
            '16x gtceu:raw_cobaltite_block',
            '16x gtceu:raw_cooperite_block',
            '16x gtceu:raw_diamond_block',
            '32x gtceu:obsidian_dust',
            '16x gtceu:raw_galena_block',
            '8x gtceu:raw_oilsands_block',
            '32x gtceu:raw_saltpeter_block',
            '16x gtceu:raw_grossular_block',
            '16x gtceu:raw_ilmenite_block',
            '16x gtceu:raw_rutile_block',
            '16x gtceu:raw_bauxite_block',
            '32x gtceu:raw_rock_salt_block',
            '16x gtceu:raw_pyrope_block',
            '16x gtceu:raw_pyrolusite_block',
            '16x gtceu:raw_pyrite_block',
            '16x gtceu:raw_powellite_block',
            '16x gtceu:raw_molybdenite_block',
            '16x gtceu:raw_magnetite_block',
            '16x gtceu:raw_magnesite_block',
            '16x gtceu:raw_lazurite_block',
            '16x gtceu:raw_ruby_block',
            '16x gtceu:raw_salt_block',
            '64x gtceu:deepslate_dust',
            '16x gtceu:raw_redstone_block',
            '64x gtceu:stone_dust'
        )
        .duration(18000)
        .EUt(GTValues.VA[GTValues.IV]);
});