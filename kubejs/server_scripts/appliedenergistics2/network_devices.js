ServerEvents.recipes(event => {

        event.recipes.gtceu.mixer('skyrium_dust')
        .circuit(4)
        .itemInputs(
            '4x ae2:sky_dust',
            '3x gtceu:stainless_steel_dust',
            '2x gtceu:manasteel_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:terrasteel', 144)
        )
        .itemOutputs(
            '4x qilby_core:skyrium_dust'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

        event.recipes.gtceu.assembler('me_controller')
            .itemInputs(
                '4x qilby_core:skyrium_frame',
                '8x gtceu:ram_chip',
                'gtnn:mv_wrap_circuit',
                '2x gtceu:mpic_chip'
            )
            .inputFluids(
                Fluid.of('qilby_core:wakfu', 288)
            )
            .itemOutputs(
                'ae2:controller'
            )
            .duration(800)
            .EUt(GTValues.VA[GTValues.EV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.wiremill('fluix_cable')
            .itemInputs(
                'gtceu:normal_optical_pipe',

            )
            .itemOutputs(
                '4x ae2:fluix_glass_cable'
            )
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('covered_fluix_cable_rubber')
            .itemInputs(
                'ae2:fluix_glass_cable'
            )
            .inputFluids(
                Fluid.of('gtceu:rubber', 144)
            )
            .itemOutputs(
                'ae2:fluix_covered_cable'
            )
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])

        event.recipes.gtceu.assembler('covered_fluix_cable_silicone_rubber')
            .itemInputs(
                'ae2:fluix_glass_cable'
            )
            .inputFluids(
                Fluid.of('gtceu:silicone_rubber', 72)
            )
            .itemOutputs(
                'ae2:fluix_covered_cable'
            )
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])

        event.recipes.gtceu.assembler('covered_fluix_cable_styrene_butadiene_rubber')
            .itemInputs(
                'ae2:fluix_glass_cable'
            )
            .inputFluids(
                Fluid.of('gtceu:styrene_butadiene_rubber', 36)
            )
            .itemOutputs(
                'ae2:fluix_covered_cable'
            )
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])

        event.recipes.gtceu.assembler('covered_fluix_cable_radon_polymer')
            .itemInputs(
                'ae2:fluix_glass_cable'
            )
            .inputFluids(
                Fluid.of('gtca:radon_polymer', 18)
            )
            .itemOutputs(
                'ae2:fluix_covered_cable'
            )
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])

        event.recipes.gtceu.assembler('covered_to_dense_fluix')
            .itemInputs(
                '4x ae2:fluix_covered_cable'
            )
            .circuit(4)
            .itemOutputs(
                'ae2:fluix_covered_dense_cable'
            )
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('smart_to_dense_dense')
            .itemInputs(
                '4x ae2:fluix_smart_cable'
            )
            .circuit(4)
            .itemOutputs(
                'ae2:fluix_smart_dense_cable'
            )
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('dense_covered_to_dense_smart')
            .itemInputs(
                'ae2:fluix_covered_dense_cable',
                'gtceu:glowstone_plate',
                'gtceu:red_alloy_plate'
            )
            .itemOutputs(
                'ae2:fluix_smart_dense_cable'
            )
            .EUt(GTValues.VA[GTValues.LV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('fluix_covered_to_fluix_smart_cable')
            .itemInputs(
                'ae2:fluix_covered_cable',
                'gtceu:glowstone_plate',
                'gtceu:red_alloy_plate',
            )
            .circuit(1)
            .itemOutputs(
                'ae2:fluix_smart_cable'
            )
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('crafting_unit')
            .itemInputs(
                'qilby_core:skyrium_frame',
                '4x ae2:calculation_processor',
                'ae2:logic_processor',
                '4x gtceu:normal_optical_pipe'
            )
            .itemOutputs(
                'ae2:crafting_unit'
            )
            .duration(200)
            .EUt(GTValues.VA[GTValues.HV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('mega_crafting_unit')
            .itemInputs(
                '4x ae2:crafting_unit',
                '4x ae2:calculation_processor',
                'ae2:logic_processor',
                '4x gtceu:normal_optical_pipe',
                '2x gtceu:data_module'
            )
            .itemOutputs(
                'megacells:mega_crafting_unit'
            )
            .duration(200)
            .EUt(GTValues.VA[GTValues.LuV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('pattern_provider')
            .itemInputs(
                'qilby_core:skyrium_frame',
                '2x gtceu:data_stick',
                'ae2:logic_processor',
                'gtceu:hv_sensor',
                'gtceu:hv_emitter'
            )
            .circuit(1)
            .itemOutputs(
                'ae2:pattern_provider'
            )
            .duration(200)
            .EUt(GTValues.VA[GTValues.HV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('pattern_interface')
            .itemInputs(
                'qilby_core:skyrium_frame',
                '2x gtceu:data_stick',
                'ae2:logic_processor',
                'gtceu:hv_sensor',
                'gtceu:hv_emitter'
            )
            .circuit(2)
            .itemOutputs(
                'ae2:interface'
            )
            .duration(200)
            .EUt(GTValues.VA[GTValues.HV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('molecular_assembler')
            .itemInputs(
                'qilby_core:skyrium_frame',
                '2x gtceu:data_stick',
                'ae2:logic_processor',
                'gtceu:hv_sensor',
                'gtceu:hv_emitter'
            )
            .circuit(3)
            .itemOutputs(
                'ae2:molecular_assembler'
            )
            .duration(200)
            .EUt(GTValues.VA[GTValues.HV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('quantum_ring')
            .itemInputs(
                'qilby_core:skyrium_frame',
                'gtceu:ev_lapotronic_battery',
                'ae2:logic_processor',
                '4x gtceu:quantum_eye',
                'gtceu:quantum_star'
            )
            .itemOutputs(
                'ae2:quantum_ring'
            )
            .duration(200)
            .EUt(GTValues.VA[GTValues.IV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('quantum_link')
            .itemInputs(
                'qilby_core:skyrium_frame',
                'gtceu:ulv_input_bus',
                '4x gtceu:quantum_processor_assembly',
                'gtceu:iv_sensor',
                'gtceu:iv_emitter'
            )
            .itemOutputs(
                'ae2:quantum_link'
            )
            .duration(200)
            .EUt(GTValues.VA[GTValues.IV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('energy_cell')
            .itemInputs(
                'qilby_core:skyrium_frame',
                'gtceu:lv_emitter',
                'gtceu:lv_sensor',
                'gtceu:mv_lithium_battery'
            )
            .itemOutputs(
                'ae2:energy_cell'
            )
            .duration(200)
            .EUt(GTValues.VA[GTValues.MV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('dense_energy_cell')
            .itemInputs(
                '4x ae2:energy_cell',
                'gtceu:mv_emitter',
                'gtceu:mv_sensor',
                'gtceu:hv_lithium_battery'
            )
            .itemOutputs(
                'ae2:dense_energy_cell'
            )
            .duration(200)
            .EUt(GTValues.VA[GTValues.HV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.assembler('me_drive')
            .itemInputs(
                'qilby_core:skyrium_frame',
                'gtceu:hv_input_bus',
                '4x ae2:engineering_processor',
                'gtceu:hv_emitter',
                'gtceu:hv_sensor'
            )
            .itemOutputs(
                'ae2:drive'
            )
            .duration(200)
            .EUt(GTValues.VA[GTValues.HV])
            .cleanroom(CleanroomType.CLEANROOM);
});