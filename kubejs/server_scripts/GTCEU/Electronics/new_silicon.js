ServerEvents.recipes(event => {

    //Wakfu
    
    event.recipes.gtceu.electric_blast_furnace('wakfu_silicon_boule')
        .itemInputs(
            '16x qilby_core:wakfu_block',
            '24x gtceu:silicon_block',
            '32x gtceu:gallium_arsenide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:argon', 8000)
        )
        .itemOutputs('qilby_core:wakfu_silicon_boule')
        .blastFurnaceTemp(4200)
        .duration(850)
        .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.cutter('wakfu_silicon_wafer_water')
        .itemInputs(
            'qilby_core:wakfu_silicon_boule'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .itemOutputs('64x qilby_core:wakfu_silicon_wafer')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('wakfu_silicon_wafer_distilled_water')
        .itemInputs(
            'qilby_core:wakfu_silicon_boule'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 750)
        )
        .itemOutputs('64x qilby_core:wakfu_silicon_wafer')
        .duration(3000)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('wakfu_silicon_wafer_lubricant')
        .itemInputs(
            'qilby_core:wakfu_silicon_boule'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 250)
        )
        .itemOutputs('64x qilby_core:wakfu_silicon_wafer')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('wakfu_cpu_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('#forge:lenses/light_blue')
        .itemOutputs('12x gtceu:cpu_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);
    
    event.recipes.gtceu.laser_engraver('wakfu_ram_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('#forge:lenses/green')
        .itemOutputs('12x gtceu:ram_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('wakfu_ilc_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('#forge:lenses/red')
        .itemOutputs('12x gtceu:ilc_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('wakfu_nano_cpu_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('hexcasting:lens')
        .itemOutputs('4x gtceu:nano_cpu_wafer')
        .duration(600)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('wakfu_qbit_cpu_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('gtceu:nether_star_lens')
        .itemOutputs('2x gtceu:qbit_cpu_wafer')
        .duration(600)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('wakfu_simple_soc_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('#forge:lenses/cyan')
        .itemOutputs('12x gtceu:simple_soc_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);
        
    event.recipes.gtceu.laser_engraver('wakfu_soc_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('#forge:lenses/yellow')
        .itemOutputs('6x gtceu:soc_wafer')
        .duration(250)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('wakfu_asoc_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('#forge:lenses/purple')
        .itemOutputs('1x gtceu:advanced_soc_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('wakfu_nand_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('#forge:lenses/gray')
        .itemOutputs('6x gtceu:nand_memory_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('wakfu_nor_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('#forge:lenses/pink')
        .itemOutputs('6x gtceu:nor_memory_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('wakfu_ulpic_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('#forge:lenses/blue')
        .itemOutputs('12x gtceu:ulpic_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('wakfu_lpic_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('#forge:lenses/orange')
        .itemOutputs('12x gtceu:lpic_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('wakfu_mpic_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('#forge:lenses/brown')
        .itemOutputs('6x gtceu:mpic_wafer')
        .duration(250)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('wakfu_hpic_wafer')
        .itemInputs(
            'qilby_core:wakfu_silicon_wafer'
        )
        .notConsumable('#forge:lenses/magenta')
        .itemOutputs('2x gtceu:hpic_wafer')
        .duration(350)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    
    //Stasis
    

    event.recipes.gtceu.electric_blast_furnace('stasis_silicon_boule')
        .itemInputs(
            '16x qilby_core:stasis_block',
            '24x gtceu:silicon_block',
            '32x gtceu:gallium_arsenide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:xenon', 8000)
        )
        .itemOutputs('qilby_core:stasis_silicon_boule')
        .blastFurnaceTemp(5200)
        .duration(850)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.cutter('stasis_silicon_wafer_water')
        .itemInputs(
            'qilby_core:stasis_silicon_boule'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .itemOutputs(
            '64x qilby_core:stasis_silicon_wafer',
            '32x qilby_core:stasis_silicon_wafer'
        )
        .duration(5000)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('stasis_silicon_wafer_distilled_water')
        .itemInputs(
            'qilby_core:stasis_silicon_boule'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 750)
        )
        .itemOutputs(
            '64x qilby_core:stasis_silicon_wafer',
            '32x qilby_core:stasis_silicon_wafer'
        )
        .duration(3750)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('stasis_silicon_wafer_lubricant')
        .itemInputs(
            'qilby_core:stasis_silicon_boule'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 250)
        )
        .itemOutputs(
            '64x qilby_core:stasis_silicon_wafer',
            '32x qilby_core:stasis_silicon_wafer'
        )
        .duration(2500)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_cpu_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/light_blue')
        .itemOutputs('24x gtceu:cpu_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);
    
    event.recipes.gtceu.laser_engraver('stasis_ram_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/green')
        .itemOutputs('24x gtceu:ram_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_ilc_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/red')
        .itemOutputs('24x gtceu:ilc_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_nano_cpu_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('hexcasting:lens')
        .itemOutputs('8x gtceu:nano_cpu_wafer')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_qbit_cpu_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('gtceu:nether_star_lens')
        .itemOutputs('4x gtceu:qbit_cpu_wafer')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_simple_soc_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/cyan')
        .itemOutputs('24x gtceu:simple_soc_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);
        
    event.recipes.gtceu.laser_engraver('stasis_soc_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/yellow')
        .itemOutputs('12x gtceu:soc_wafer')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_asoc_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/purple')
        .itemOutputs('2x gtceu:advanced_soc_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_nand_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/gray')
        .itemOutputs('12x gtceu:nand_memory_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_nor_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/pink')
        .itemOutputs('12x gtceu:nor_memory_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_ulpic_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/blue')
        .itemOutputs('24x gtceu:ulpic_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_lpic_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/orange')
        .itemOutputs('24x gtceu:lpic_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_mpic_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/brown')
        .itemOutputs('12x gtceu:mpic_wafer')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_hpic_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/magenta')
        .itemOutputs('4x gtceu:hpic_wafer')
        .duration(350)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_uhpic_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/lime')
        .itemOutputs('2x gtceu:uhpic_wafer')
        .duration(350)
        .EUt(GTValues.VA[GTValues.ZPM])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_hasoc_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/black')
        .itemOutputs('2x gtceu:highly_advanced_soc_wafer')
        .duration(350)
        .EUt(GTValues.VA[GTValues.ZPM])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('stasis_ehpic_wafer')
        .itemInputs(
            'qilby_core:stasis_silicon_wafer'
        )
        .notConsumable('#forge:lenses/light_gray')
        .itemOutputs('qilby_core:extreme_hi_pow_integrated_circuit_wafer')
        .duration(350)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

       
        //Krosmoz
    

        event.recipes.gtceu.electric_blast_furnace('krosmoz_silicon_boule')
        .itemInputs(
            '64x qilby_core:stasis_block',
            '64x gtceu:silicon_block',
            '64x gtceu:gallium_arsenide_dust'
        )
        .inputFluids(
            Fluid.of('qilby_core:wakfu', 73728)
        )
        .itemOutputs('qilby_core:krosmoz_silicon_boule')
        .blastFurnaceTemp(12500)
        .duration(850)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.cutter('krosmoz_silicon_wafer_water')
        .itemInputs(
            'qilby_core:krosmoz_silicon_boule'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .itemOutputs(
            '64x qilby_core:krosmoz_silicon_wafer',
            '64x qilby_core:krosmoz_silicon_wafer'
        )
        .duration(5000)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('krosmoz_silicon_wafer_distilled_water')
        .itemInputs(
            'qilby_core:krosmoz_silicon_boule'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 750)
        )
        .itemOutputs(
            '64x qilby_core:krosmoz_silicon_wafer',
            '64x qilby_core:krosmoz_silicon_wafer'
        )
        .duration(3750)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('krosmoz_silicon_wafer_lubricant')
        .itemInputs(
            'qilby_core:krosmoz_silicon_boule'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 250)
        )
        .itemOutputs(
            '64x qilby_core:krosmoz_silicon_wafer',
            '64x qilby_core:krosmoz_silicon_wafer'
        )
        .duration(2500)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_cpu_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/light_blue')
        .itemOutputs('64x gtceu:cpu_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);
    
    event.recipes.gtceu.laser_engraver('krosmoz_ram_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/green')
        .itemOutputs('64x gtceu:ram_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_ilc_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/red')
        .itemOutputs('64x gtceu:ilc_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_nano_cpu_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('hexcasting:lens')
        .itemOutputs('64x gtceu:nano_cpu_wafer')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_qbit_cpu_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('gtceu:nether_star_lens')
        .itemOutputs('64x gtceu:qbit_cpu_wafer')
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_simple_soc_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/cyan')
        .itemOutputs('64x gtceu:simple_soc_wafer')
        .duration(150)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);
        
    event.recipes.gtceu.laser_engraver('krosmoz_soc_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/yellow')
        .itemOutputs('64x gtceu:soc_wafer')
        .duration(250)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_asoc_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/purple')
        .itemOutputs('64x gtceu:advanced_soc_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_nand_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/gray')
        .itemOutputs('64x gtceu:nand_memory_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_nor_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/pink')
        .itemOutputs('64x gtceu:nor_memory_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_ulpic_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/blue')
        .itemOutputs('64x gtceu:ulpic_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_lpic_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/orange')
        .itemOutputs('64x gtceu:lpic_wafer')
        .duration(650)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_mpic_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/brown')
        .itemOutputs('64x gtceu:mpic_wafer')
        .duration(250)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_hpic_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/magenta')
        .itemOutputs('64x gtceu:hpic_wafer')
        .duration(350)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_uhpic_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/lime')
        .itemOutputs('64x gtceu:uhpic_wafer')
        .duration(350)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_hasoc_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/black')
        .itemOutputs('64x gtceu:highly_advanced_soc_wafer')
        .duration(350)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_ehpic_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('#forge:lenses/light_gray')
        .itemOutputs('48x qilby_core:extreme_hi_pow_integrated_circuit_wafer')
        .duration(350)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_ulthpic_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('gtceu:uiv_emitter')
        .itemOutputs('48x qilby_core:ultimate_hi_pow_integrated_circuit_wafer')
        .duration(350)
        .EUt(GTValues.VA[GTValues.UIV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.laser_engraver('krosmoz_infpic_wafer')
        .itemInputs(
            'qilby_core:krosmoz_silicon_wafer'
        )
        .notConsumable('gtceu:uxv_emitter')
        .itemOutputs('48x qilby_core:infinity_hi_pow_integrated_circuit_wafer')
        .duration(350)
        .EUt(GTValues.VA[GTValues.UXV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('extreme_hi_pow_ic_water')
        .itemInputs(
            'qilby_core:extreme_hi_pow_integrated_circuit_wafer'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .itemOutputs('32x qilby_core:extreme_hi_pow_integrated_circuit')
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('extreme_hi_pow_ic_water_distill')
        .itemInputs(
            'qilby_core:extreme_hi_pow_integrated_circuit_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 750)
        )
        .itemOutputs('32x qilby_core:extreme_hi_pow_integrated_circuit')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('extreme_hi_pow_ic_water_lubricant')
        .itemInputs(
            'qilby_core:extreme_hi_pow_integrated_circuit_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 250)
        )
        .itemOutputs('32x qilby_core:extreme_hi_pow_integrated_circuit')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('ultimate_hi_pow_ic_water')
        .itemInputs(
            'qilby_core:ultimate_hi_pow_integrated_circuit_wafer'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .itemOutputs('32x qilby_core:ultimate_hi_pow_integrated_circuit')
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('ultimate_hi_pow_ic_water_distill')
        .itemInputs(
            'qilby_core:ultimate_hi_pow_integrated_circuit_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 750)
        )
        .itemOutputs('32x qilby_core:ultimate_hi_pow_integrated_circuit')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('ultimate_hi_pow_ic_water_lubricant')
        .itemInputs(
            'qilby_core:ultimate_hi_pow_integrated_circuit_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 250)
        )
        .itemOutputs('32x qilby_core:ultimate_hi_pow_integrated_circuit')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UHV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('infinity_hi_pow_ic_water')
        .itemInputs(
            'qilby_core:infinity_hi_pow_integrated_circuit_wafer'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .itemOutputs('32x qilby_core:infinity_hi_pow_integrated_circuit')
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('infinity_hi_pow_ic_water_distill')
        .itemInputs(
            'qilby_core:infinity_hi_pow_integrated_circuit_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 750)
        )
        .itemOutputs('32x qilby_core:infinity_hi_pow_integrated_circuit')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.cutter('infinity_hi_pow_ic_water_lubricant')
        .itemInputs(
            'qilby_core:infinity_hi_pow_integrated_circuit_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:lubricant', 250)
        )
        .itemOutputs('32x qilby_core:infinity_hi_pow_integrated_circuit')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UEV])
        .cleanroom(CleanroomType.CLEANROOM);
});