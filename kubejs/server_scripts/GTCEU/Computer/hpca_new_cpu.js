ServerEvents.recipes(event => {

    event.remove({id: 'gtceu:assembler/hpca_computation_component'})
    event.remove({id: 'gtceu:assembler/hpca_advanced_computation_component'})

    event.recipes.gtceu.circuit_assembler('HPCA_cpu_mk1')
        .itemInputs(
            '64x gtceu:fine_annealed_copper_wire',
            '64x gtceu:fine_red_alloy_wire',
            'gtceu:mv_machine_casing',
            '64x gtceu:vacuum_tube',
            '64x gtceu:vacuum_tube',
            '64x gtceu:vacuum_tube'
        )
        .itemOutputs('qilby_core:hpca_processor_mk1')
        .duration(4000)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu.circuit_assembler('HPCA_cpu_mk2')
        .itemInputs(
            '64x gtceu:fine_annealed_copper_wire',
            '64x gtceu:fine_red_alloy_wire',
            'qilby_core:hpca_processor_mk1',
            '64x gtceu:vacuum_tube',
            '64x gtceu:vacuum_tube',
            '64x gtceu:vacuum_tube'
        )
        .itemOutputs('qilby_core:hpca_processor_mk2')
        .duration(3500)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.circuit_assembler('HPCA_cpu_mk3')
        .itemInputs(
            '64x gtceu:fine_annealed_copper_wire',
            '64x gtceu:fine_red_alloy_wire',
            'qilby_core:hpca_processor_mk2',
            '64x #gtceu:circuits/mv',
            '64x #gtceu:circuits/mv',
            '64x #gtceu:circuits/mv'
        )
        .itemOutputs('qilby_core:hpca_processor_mk3')
        .duration(3000)
        .EUt(GTValues.VA[GTValues.EV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.circuit_assembler('HPCA_cpu_mk4')
        .itemInputs(
            '64x gtceu:fine_platinum_wire',
            '64x gtceu:fine_silver_wire',
            'gtceu:iv_machine_casing',
            '16x #gtceu:circuits/iv',
            '8x gtceu:uranium_triplatinum_single_wire',
            '64x gtceu:ram_chip'
        )
        .itemOutputs('qilby_core:hpca_processor_mk4')
        .duration(2500)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.circuit_assembler('HPCA_cpu_mk5')
        .itemInputs(
            '64x gtceu:ram_chip',
            '64x gtceu:ram_chip',
            'qilby_core:hpca_processor_mk4',
            '8x #gtceu:circuits/luv',
            '32x gtceu:nano_cpu_chip',
            '16x gtceu:indium_tin_barium_titanium_cuprate_single_wire'
        )
        .itemOutputs('qilby_core:hpca_processor_mk5')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.circuit_assembler('HPCA_cpu_mk6')
        .itemInputs(
            '64x gtceu:ram_chip',
            '16x gtceu:qbit_cpu_chip',
            'qilby_core:hpca_processor_mk5',
            '8x #gtceu:circuits/zpm',
            '32x gtceu:nano_cpu_chip',
            '16x gtceu:uranium_rhodium_dinaquadide_single_wire'
        )
        .itemOutputs('qilby_core:hpca_processor_mk6')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.circuit_assembler('HPCA_cpu_mk7')
        .itemInputs(
            '64x gtceu:ram_chip',
            '16x gtceu:advanced_soc',
            'qilby_core:hpca_processor_mk6',
            '8x #gtceu:circuits/uv',
            '32x gtceu:soc',
            '64x gtceu:simple_soc'
        )
        .itemOutputs('qilby_core:hpca_processor_mk7')
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM);

    event.recipes.gtceu.assembly_line('HPCA_cpu_mk8')
        .itemInputs(
            'gtceu:uhv_machine_hull',
            '32x gtceu:highly_advanced_soc',
            '16x gtceu:advanced_soc',
            '64x gtceu:ram_chip',
            '64x gtceu:ram_chip',
            '32x #gtceu:circuits/uhv',
            '64x #gtceu:circuits/uv',
            '64x #gtceu:circuits/zpm',
            '64x #gtceu:circuits/zpm'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 3000),
            Fluid.of('qilby_core:wakfu', 2000),
            Fluid.of('gtceu:polybenzimidazole', 8000)
        )
        .itemOutputs(
            'qilby_core:hpca_processor_mk8'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:hpca_processor_mk7')).CWUt(600).EUt(GTValues.VA[GTValues.UV]))
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UHV]);

    event.recipes.gtceu.assembly_line('HPCA_cpu_mk9')
        .itemInputs(
            'qilby_core:hpca_processor_mk8',
            '64x gtceu:highly_advanced_soc',
            '32x gtceu:advanced_soc',
            '64x gtceu:ram_chip',
            '64x gtceu:ram_chip',
            '64x gtceu:ram_chip',
            '32x #gtceu:circuits/uev',
            '64x #gtceu:circuits/uhv',
            '64x #gtceu:circuits/uv',
            '64x #gtceu:circuits/zpm'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 6000),
            Fluid.of('qilby_core:wakfu', 4000),
            Fluid.of('gtceu:polybenzimidazole', 16000)
        )
        .itemOutputs(
            'qilby_core:hpca_processor_mk9'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:hpca_processor_mk8')).CWUt(2400).EUt(GTValues.VA[GTValues.UHV]))
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UEV]);

    event.recipes.gtceu.assembly_line('HPCA_cpu_mk10')
        .itemInputs(
            'qilby_core:hpca_processor_mk9',
            '64x gtceu:highly_advanced_soc',
            '32x gtceu:highly_advanced_soc',
            '64x gtceu:advanced_soc',
            '64x gtceu:advanced_soc',
            '64x gtceu:ram_chip',
            '64x gtceu:ram_chip',
            '64x gtceu:ram_chip',
            '32x #gtceu:circuits/uiv',
            '64x #gtceu:circuits/uev',
            '64x #gtceu:circuits/uhv',
            '64x #gtceu:circuits/uv',
            '64x #gtceu:circuits/zpm'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 12000),
            Fluid.of('qilby_core:wakfu', 8000),
            Fluid.of('gtceu:polybenzimidazole', 32000)
        )
        .itemOutputs(
            'qilby_core:hpca_processor_mk10'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:hpca_processor_mk9')).CWUt(12500).EUt(GTValues.VA[GTValues.UEV]))
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UIV]);

    event.recipes.gtceu.assembly_line('HPCA_cpu_mk11')
        .itemInputs(
            'qilby_core:hpca_processor_mk10',
            '64x gtceu:highly_advanced_soc',
            '64x gtceu:highly_advanced_soc',
            '64x gtceu:highly_advanced_soc',
            '64x gtceu:advanced_soc',
            '64x gtceu:advanced_soc',
            '64x gtceu:advanced_soc',
            '64x gtceu:advanced_soc',
            '64x gtceu:ram_chip',
            '64x gtceu:ram_chip',
            '64x gtceu:ram_chip',
            '32x #gtceu:circuits/opv',
            '64x #gtceu:circuits/uxv',
            '64x #gtceu:circuits/uiv',
            '64x #gtceu:circuits/uev',
            '64x #gtceu:circuits/uhv'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 24000),
            Fluid.of('qilby_core:wakfu', 16000),
            Fluid.of('gtceu:polybenzimidazole', 64000)
        )
        .itemOutputs(
            'qilby_core:hpca_processor_mk11'
        )
        .stationResearch(b => b.researchStack(Item.of('qilby_core:hpca_processor_mk10')).CWUt(50000).EUt(GTValues.VA[GTValues.UXV]))
        .duration(1200)
        .EUt(GTValues.VA[GTValues.OpV]);
});