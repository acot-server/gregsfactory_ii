ServerEvents.recipes(event => {
        event.recipes.gtceu.laser_engraver('silicon_print_sw')
            .notConsumable('ae2:silicon_press')
            .itemInputs(
                'gtceu:silicon_wafer'
            )
            .itemOutputs(
                '2x ae2:printed_silicon'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.MV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('silicon_print_pw')
            .notConsumable('ae2:silicon_press')
            .itemInputs(
                'gtceu:phosphorus_wafer'
            )
            .itemOutputs(
                '4x ae2:printed_silicon'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.HV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('silicon_print_nqw')
            .notConsumable('ae2:silicon_press')
            .itemInputs(
                'gtceu:naquadah_wafer'
            )
            .itemOutputs(
                '8x ae2:printed_silicon'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.EV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('silicon_print_wkw')
            .notConsumable('ae2:silicon_press')
            .itemInputs(
                'qilby_core:wakfu_silicon_wafer'
            )
            .itemOutputs(
                '12x ae2:printed_silicon'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.IV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('silicon_print_ntw')
            .notConsumable('ae2:silicon_press')
            .itemInputs(
                'gtceu:neutronium_wafer'
            )
            .itemOutputs(
                '16x ae2:printed_silicon'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.IV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('silicon_print_stsw')
            .notConsumable('ae2:silicon_press')
            .itemInputs(
                'qilby_core:stasis_silicon_wafer'
            )
            .itemOutputs(
                '24x ae2:printed_silicon'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.UV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('silicon_print_krosmozw')
            .notConsumable('ae2:silicon_press')
            .itemInputs(
                'qilby_core:krosmoz_silicon_wafer'
            )
            .itemOutputs(
                '64x ae2:printed_silicon'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.UHV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('calculation_print_sw')
            .notConsumable('ae2:calculation_processor_press')
            .itemInputs(
                'gtceu:silicon_wafer'
            )
            .itemOutputs(
                '2x ae2:printed_calculation_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.MV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('calculation_print_pw')
            .notConsumable('ae2:calculation_processor_press')
            .itemInputs(
                'gtceu:phosphorus_wafer'
            )
            .itemOutputs(
                '4x ae2:printed_calculation_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.HV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('calculation_print_nqw')
            .notConsumable('ae2:calculation_processor_press')
            .itemInputs(
                'gtceu:naquadah_wafer'
            )
            .itemOutputs(
                '8x ae2:printed_calculation_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.EV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('calculation_print_wkw')
            .notConsumable('ae2:calculation_processor_press')
            .itemInputs(
                'qilby_core:wakfu_silicon_wafer'
            )
            .itemOutputs(
                '12x ae2:printed_calculation_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.IV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('calculation_print_ntw')
            .notConsumable('ae2:calculation_processor_press')
            .itemInputs(
                'gtceu:neutronium_wafer'
            )
            .itemOutputs(
                '16x ae2:printed_calculation_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.IV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('calculation_print_stsw')
            .notConsumable('ae2:calculation_processor_press')
            .itemInputs(
                'qilby_core:stasis_silicon_wafer'
            )
            .itemOutputs(
                '24x ae2:printed_calculation_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.UV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('calculation_print_krosmozw')
            .notConsumable('ae2:calculation_processor_press')
            .itemInputs(
                'qilby_core:krosmoz_silicon_wafer'
            )
            .itemOutputs(
                '64x ae2:printed_calculation_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.UHV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('engineering_print_sw')
            .notConsumable('ae2:engineering_processor_press')
            .itemInputs(
                'gtceu:silicon_wafer'
            )
            .itemOutputs(
                '2x ae2:printed_engineering_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.MV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('engineering_print_pw')
            .notConsumable('ae2:engineering_processor_press')
            .itemInputs(
                'gtceu:phosphorus_wafer'
            )
            .itemOutputs(
                '4x ae2:printed_engineering_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.HV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('engineering_print_nqw')
            .notConsumable('ae2:engineering_processor_press')
            .itemInputs(
                'gtceu:naquadah_wafer'
            )
            .itemOutputs(
                '8x ae2:printed_engineering_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.EV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('engineering_print_wkw')
            .notConsumable('ae2:engineering_processor_press')
            .itemInputs(
                'qilby_core:wakfu_silicon_wafer'
            )
            .itemOutputs(
                '12x ae2:printed_engineering_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.IV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('engineering_print_ntw')
            .notConsumable('ae2:engineering_processor_press')
            .itemInputs(
                'gtceu:neutronium_wafer'
            )
            .itemOutputs(
                '16x ae2:printed_engineering_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.IV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('engineering_print_stsw')
            .notConsumable('ae2:engineering_processor_press')
            .itemInputs(
                'qilby_core:stasis_silicon_wafer'
            )
            .itemOutputs(
                '24x ae2:printed_engineering_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.UV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('engineering_print_krosmozw')
            .notConsumable('ae2:engineering_processor_press')
            .itemInputs(
                'qilby_core:krosmoz_silicon_wafer'
            )
            .itemOutputs(
                '64x ae2:printed_engineering_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.UHV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('logic_print_sw')
            .notConsumable('ae2:logic_processor_press')
            .itemInputs(
                'gtceu:silicon_wafer'
            )
            .itemOutputs(
                '2x ae2:printed_logic_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.MV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('logic_print_pw')
            .notConsumable('ae2:logic_processor_press')
            .itemInputs(
                'gtceu:phosphorus_wafer'
            )
            .itemOutputs(
                '4x ae2:printed_logic_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.HV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('logic_print_nqw')
            .notConsumable('ae2:logic_processor_press')
            .itemInputs(
                'gtceu:naquadah_wafer'
            )
            .itemOutputs(
                '8x ae2:printed_logic_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.EV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('logic_print_wkw')
            .notConsumable('ae2:logic_processor_press')
            .itemInputs(
                'qilby_core:wakfu_silicon_wafer'
            )
            .itemOutputs(
                '12x ae2:printed_logic_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.IV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('logic_print_ntw')
            .notConsumable('ae2:logic_processor_press')
            .itemInputs(
                'gtceu:neutronium_wafer'
            )
            .itemOutputs(
                '16x ae2:printed_logic_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.IV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('logic_print_stsw')
            .notConsumable('ae2:logic_processor_press')
            .itemInputs(
                'qilby_core:stasis_silicon_wafer'
            )
            .itemOutputs(
                '24x ae2:printed_logic_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.UV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.laser_engraver('logic_print_krosmozw')
            .notConsumable('ae2:logic_processor_press')
            .itemInputs(
                'qilby_core:krosmoz_silicon_wafer'
            )
            .itemOutputs(
                '64x ae2:printed_logic_processor'
            )
            .duration(1200)
            .EUt(GTValues.VA[GTValues.UHV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.circuit_assembler('logic_processor')
            .itemInputs(
                '8x ae2:printed_logic_processor',
                '8x ae2:printed_silicon',
                '32x gtceu:fine_red_alloy_wire',
                '2x gtceu:plastic_printed_circuit_board',
                'gtnn:warp_ram_chip',
                'gtnn:ulv_wrap_circuit'
            )
            .itemOutputs(
                '32x ae2:logic_processor'
            )
            .inputFluids(
                Fluid.of(
                    'qilby_core:soldering_flux', 144
                )
            )
            .duration(400)
            .EUt(GTValues.VA[GTValues.MV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.circuit_assembler('calculation_processor')
            .itemInputs(
                '8x ae2:printed_calculation_processor',
                '8x ae2:printed_silicon',
                '32x gtceu:fine_silver_wire',
                '2x gtceu:plastic_printed_circuit_board',
                'gtnn:warp_ram_chip',
                'gtnn:ulv_wrap_circuit'
            )
            .itemOutputs(
                '32x ae2:calculation_processor'
            )
            .inputFluids(
                Fluid.of(
                    'qilby_core:soldering_flux', 144
                )
            )
            .duration(400)
            .EUt(GTValues.VA[GTValues.MV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.circuit_assembler('engineering_processor')
            .itemInputs(
                '8x ae2:printed_engineering_processor',
                '8x ae2:printed_silicon',
                '32x gtceu:fine_electrum_wire',
                '2x gtceu:plastic_printed_circuit_board',
                'gtnn:warp_ram_chip',
                'gtnn:ulv_wrap_circuit'
            )
            .itemOutputs(
                '32x ae2:engineering_processor'
            )
            .inputFluids(
                Fluid.of(
                    'qilby_core:soldering_flux', 144
                )
            )
            .duration(400)
            .EUt(GTValues.VA[GTValues.MV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.circuit_assembler('1k_item_storage')
            .itemInputs(
                'ae2:logic_processor',
                '4x gtceu:data_stick',
                '8x gtceu:fine_red_alloy_wire',
                'gtceu:plastic_printed_circuit_board'
            )
            .itemOutputs(
                'ae2:cell_component_1k'
            )
            .inputFluids(
                Fluid.of(
                    'qilby_core:soldering_flux', 144
                )
            )
            .duration(400)
            .EUt(GTValues.VA[GTValues.MV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.circuit_assembler('4k_item_storage')
            .itemInputs(
                'ae2:calculation_processor',
                '3x ae2:cell_component_1k',
                '4x gtceu:data_stick',
                '8x gtceu:fine_gold_wire',
                'gtceu:plastic_printed_circuit_board'
            )
            .itemOutputs(
                'ae2:cell_component_4k'
            )
            .inputFluids(
                Fluid.of(
                    'qilby_core:soldering_flux', 144
                )
            )
            .duration(400)
            .EUt(GTValues.VA[GTValues.HV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.circuit_assembler('16k_item_storage')
            .itemInputs(
                'ae2:calculation_processor',
                '3x ae2:cell_component_4k',
                '4x gtceu:data_stick',
                '8x gtceu:fine_silver_wire',
                'gtceu:epoxy_printed_circuit_board'
            )
            .itemOutputs(
                'ae2:cell_component_16k'
            )
            .inputFluids(
                Fluid.of(
                    'qilby_core:soldering_flux', 144
                )
            )
            .duration(400)
            .EUt(GTValues.VA[GTValues.EV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.circuit_assembler('64k_item_storage')
            .itemInputs(
                'ae2:calculation_processor',
                '3x ae2:cell_component_16k',
                '4x gtceu:data_orb',
                '8x gtceu:fine_electrum_wire',
                'gtceu:epoxy_printed_circuit_board'
            )
            .itemOutputs(
                'ae2:cell_component_64k'
            )
            .inputFluids(
                Fluid.of(
                    'qilby_core:skyrium', 144
                )
            )
            .duration(400)
            .EUt(GTValues.VA[GTValues.IV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.circuit_assembler('256k_item_storage')
            .itemInputs(
                'ae2:calculation_processor',
                '3x ae2:cell_component_64k',
                '4x gtceu:data_orb',
                '8x gtceu:fine_ruridit_wire',
                'gtceu:epoxy_printed_circuit_board'
            )
            .itemOutputs(
                'ae2:cell_component_256k'
            )
            .inputFluids(
                Fluid.of(
                    'qilby_core:skyrium', 144
                )
            )
            .duration(400)
            .EUt(GTValues.VA[GTValues.LuV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.circuit_assembler('1m_item_storage')
            .itemInputs(
                'ae2:calculation_processor',
                '3x ae2:cell_component_256k',
                '4x gtceu:data_orb',
                '8x qilby_core:fine_stasis_wire',
                'gtceu:fiber_reinforced_printed_circuit_board'
            )
            .itemOutputs(
                'megacells:cell_component_1m'
            )
            .inputFluids(
                Fluid.of(
                    'qilby_core:skyrium', 144
                )
            )
            .duration(400)
            .EUt(GTValues.VA[GTValues.ZPM])
            .cleanroom(CleanroomType.CLEANROOM)

        event.recipes.gtceu.circuit_assembler('4m_item_storage')
            .itemInputs(
                'ae2:calculation_processor',
                '3x megacells:cell_component_1m',
                '4x gtceu:data_orb',
                '8x gtceu:fine_uranium_rhodium_dinaquadide_wire',
                'gtceu:fiber_reinforced_printed_circuit_board'
            )
            .itemOutputs(
                'megacells:cell_component_4m'
            )
            .inputFluids(
                Fluid.of(
                    'qilby_core:skyrium', 144
                )
            )
            .duration(400)
            .EUt(GTValues.VA[GTValues.UV])
            .cleanroom(CleanroomType.CLEANROOM)

        event.recipes.gtceu.circuit_assembler('16m_item_storage')
            .itemInputs(
                'ae2:calculation_processor',
                '3x megacells:cell_component_4m',
                '4x gtceu:data_module',
                '8x qilby_core:fine_dark_matter_wire',
                'gtceu:fiber_reinforced_printed_circuit_board'
            )
            .itemOutputs(
                'megacells:cell_component_16m'
            )
            .inputFluids(
                Fluid.of(
                    'qilby_core:skyrium', 144
                )
            )
            .duration(400)
            .EUt(GTValues.VA[GTValues.UHV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.circuit_assembler('64m_item_storage')
            .itemInputs(
                'ae2:calculation_processor',
                '3x megacells:cell_component_16m',
                '4x gtceu:data_module',
                '8x qilby_core:fine_dark_energy_wire',
                'gtceu:wetware_printed_circuit_board'
            )
            .itemOutputs(
                'megacells:cell_component_64m'
            )
            .inputFluids(
                Fluid.of(
                    'qilby_core:transparent_aluminium', 144
                )
            )
            .duration(400)
            .EUt(GTValues.VA[GTValues.UEV])
            .cleanroom(CleanroomType.CLEANROOM);

        event.recipes.gtceu.circuit_assembler('256m_item_storage')
            .itemInputs(
                'ae2:calculation_processor',
                '3x megacells:cell_component_64m',
                '4x gtceu:data_module',
                '8x qilby_core:fine_runic_stellarite_wire',
                'gtceu:wetware_printed_circuit_board'
            )
            .itemOutputs(
                'megacells:cell_component_256m'
            )
            .inputFluids(
                Fluid.of(
                    'qilby_core:transparent_aluminium', 144
                )
            )
            .duration(400)
            .EUt(GTValues.VA[GTValues.UEV])
            .cleanroom(CleanroomType.CLEANROOM);
});