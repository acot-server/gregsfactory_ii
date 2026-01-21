ServerEvents.recipes(event => {

    ////// Machine Recipe //////
       event.recipes.gtceu.assembly_line('transmutator')
        .itemInputs(
            '10x gtceu:chroniton_hoursglass',
            '64x gtnn:uxv_wrap_circuit',
            '64x gtnn:wrap_cosmic_smd_inductor',
            '64x gtnn:wrap_cosmic_smd_diode',
            '64x gtnn:wrap_cosmic_smd_capacitor',
            '64x gtnn:wrap_cosmic_smd_resistor',
            '64x gtnn:wrap_cosmic_smd_transistor'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 2880),
            Fluid.of('gtceu:primal_matter', 5760),
            Fluid.of('gtceu:charged_matter', 5760),
            Fluid.of('gtceu:neutral_matter', 5760)
        )
        .itemOutputs(
            'gtceu:transmutator'
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:chroniton_hoursglass')).CWUt(6144).EUt(GTValues.VA[GTValues.MAX]))
        .duration(1800)
        .EUt(GTValues.VA[GTValues.MAX]);


//Eletric Motor
    event.recipes.gtceu.transmutator('luv_motor_64')
        .itemInputs(
            '64x gtceu:lv_electric_motor',
            '8x gtnn:luv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:luv_electric_motor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.transmutator('zpm_motor_64')
        .itemInputs(
            '64x gtceu:mv_electric_motor',
            '8x gtnn:zpm_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:zpm_electric_motor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.transmutator('uv_motor_64')
        .itemInputs(
            '64x gtceu:hv_electric_motor',
            '8x gtnn:uv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uv_electric_motor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.transmutator('uhv_motor_64')
        .itemInputs(
            '64x gtceu:ev_electric_motor',
            '8x gtnn:uhv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uhv_electric_motor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.transmutator('uev_motor_64')
        .itemInputs(
            '64x gtceu:iv_electric_motor',
            '8x gtnn:uev_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uev_electric_motor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UXV]);

    event.recipes.gtceu.transmutator('uiv_motor_64')
        .itemInputs(
            '64x gtceu:luv_electric_motor',
            '8x gtnn:uiv_wwrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uiv_electric_motor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.OpV]);

    event.recipes.gtceu.transmutator('uxv_motor_64')
        .itemInputs(
            '64x gtceu:zpm_electric_motor',
            '8x gtnn:uxv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uxv_electric_motor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.MAX]);

//Electric Pump
    event.recipes.gtceu.transmutator('luv_pump_64')
        .itemInputs(
            '64x gtceu:lv_electric_pump',
            '8x gtnn:luv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:luv_electric_pump'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.transmutator('zpm_pump_64')
        .itemInputs(
            '64x gtceu:mv_electric_pump',
            '8x gtnn:zpm_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:zpm_electric_pump'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.transmutator('uv_pump_64')
        .itemInputs(
            '64x gtceu:hv_electric_pump',
            '8x gtnn:uv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uv_electric_pump'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.transmutator('uhv_pump_64')
        .itemInputs(
            '64x gtceu:ev_electric_pump',
            '8x gtnn:uhv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uhv_electric_pump'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.transmutator('uev_pump_64')
        .itemInputs(
            '64x gtceu:iv_electric_pump',
            '8x gtnn:uev_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uev_electric_pump'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UXV]);

    event.recipes.gtceu.transmutator('uiv_pump_64')
        .itemInputs(
            '64x gtceu:luv_electric_pump',
            '8x gtnn:uiv_wwrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uiv_electric_pump'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.OpV]);

    event.recipes.gtceu.transmutator('uxv_pump_64')
        .itemInputs(
            '64x gtceu:zpm_electric_pump',
            '8x gtnn:uxv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uxv_electric_pump'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.MAX]);

//Conveyor Module

    event.recipes.gtceu.transmutator('luv_conveyor_64')
        .itemInputs(
            '64x gtceu:lv_conveyor_module',
            '8x gtnn:luv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:luv_conveyor_module'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.transmutator('zpm_conveyor_64')
        .itemInputs(
            '64x gtceu:mv_conveyor_module',
            '8x gtnn:zpm_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:zpm_conveyor_module'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.transmutator('uv_conveyor_64')
        .itemInputs(
            '64x gtceu:hv_conveyor_module',
            '8x gtnn:uv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uv_conveyor_module'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.transmutator('uhv_conveyor_64')
        .itemInputs(
            '64x gtceu:ev_conveyor_module',
            '8x gtnn:uhv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uhv_conveyor_module'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.transmutator('uev_conveyor_64')
        .itemInputs(
            '64x gtceu:iv_conveyor_module',
            '8x gtnn:uev_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uev_conveyor_module'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UXV]);

    event.recipes.gtceu.transmutator('uiv_conveyor_64')
        .itemInputs(
            '64x gtceu:luv_conveyor_module',
            '8x gtnn:uiv_wwrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uiv_conveyor_module'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.OpV]);

    event.recipes.gtceu.transmutator('uxv_conveyor_64')
        .itemInputs(
            '64x gtceu:zpm_conveyor_module',
            '8x gtnn:uxv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uxv_conveyor_module'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.MAX]);

//Piston

    event.recipes.gtceu.transmutator('luv_piston_64')
        .itemInputs(
            '64x gtceu:lv_electric_piston',
            '8x gtnn:luv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:luv_electric_piston'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.transmutator('zpm_piston_64')
        .itemInputs(
            '64x gtceu:mv_electric_piston',
            '8x gtnn:zpm_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:zpm_electric_piston'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.transmutator('uv_piston_64')
        .itemInputs(
            '64x gtceu:hv_electric_piston',
            '8x gtnn:uv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uv_electric_piston'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.transmutator('uhv_piston_64')
        .itemInputs(
            '64x gtceu:ev_electric_piston',
            '8x gtnn:uhv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uhv_electric_piston'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.transmutator('uev_piston_64')
        .itemInputs(
            '64x gtceu:iv_electric_piston',
            '8x gtnn:uev_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uev_electric_piston'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UXV]);

    event.recipes.gtceu.transmutator('uiv_piston_64')
        .itemInputs(
            '64x gtceu:luv_electric_piston',
            '8x gtnn:uiv_wwrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uiv_electric_piston'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.OpV]);

    event.recipes.gtceu.transmutator('uxv_piston_64')
        .itemInputs(
            '64x gtceu:zpm_electric_piston',
            '8x gtnn:uxv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uxv_electric_piston'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.MAX]);

//Robot Arm

    event.recipes.gtceu.transmutator('luv_arm_64')
        .itemInputs(
            '64x gtceu:lv_robot_arm',
            '8x gtnn:luv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:luv_robot_arm'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.transmutator('zpm_arm_64')
        .itemInputs(
            '64x gtceu:mv_robot_arm',
            '8x gtnn:zpm_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:zpm_robot_arm'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.transmutator('uv_arm_64')
        .itemInputs(
            '64x gtceu:hv_robot_arm',
            '8x gtnn:uv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uv_robot_arm'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.transmutator('uhv_arm_64')
        .itemInputs(
            '64x gtceu:ev_robot_arm',
            '8x gtnn:uhv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uhv_robot_arm'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.transmutator('uev_arm_64')
        .itemInputs(
            '64x gtceu:iv_robot_arm',
            '8x gtnn:uev_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uev_robot_arm'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UXV]);

    event.recipes.gtceu.transmutator('uiv_arm_64')
        .itemInputs(
            '64x gtceu:luv_robot_arm',
            '8x gtnn:uiv_wwrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uiv_robot_arm'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.OpV]);

    event.recipes.gtceu.transmutator('uxv_arm_64')
        .itemInputs(
            '64x gtceu:zpm_robot_arm',
            '8x gtnn:uxv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uxv_robot_arm'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.MAX]);

//Field Generator

    event.recipes.gtceu.transmutator('luv_field_64')
        .itemInputs(
            '64x gtceu:lv_field_generator',
            '8x gtnn:luv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:luv_field_generator'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.transmutator('zpm_field_64')
        .itemInputs(
            '64x gtceu:mv_field_generator',
            '8x gtnn:zpm_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:zpm_field_generator'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.transmutator('uv_field_64')
        .itemInputs(
            '64x gtceu:hv_field_generator',
            '8x gtnn:uv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uv_field_generator'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.transmutator('uhv_field_64')
        .itemInputs(
            '64x gtceu:ev_field_generator',
            '8x gtnn:uhv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uhv_field_generator'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.transmutator('uev_field_64')
        .itemInputs(
            '64x gtceu:iv_field_generator',
            '8x gtnn:uev_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uev_field_generator'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UXV]);

    event.recipes.gtceu.transmutator('uiv_field_64')
        .itemInputs(
            '64x gtceu:luv_field_generator',
            '8x gtnn:uiv_wwrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uiv_field_generator'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.OpV]);

    event.recipes.gtceu.transmutator('uxv_field_64')
        .itemInputs(
            '64x gtceu:zpm_field_generator',
            '8x gtnn:uxv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uxv_field_generator'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.MAX]);

//Emitter

    event.recipes.gtceu.transmutator('luv_emitter_64')
        .itemInputs(
            '64x gtceu:lv_emitter',
            '8x gtnn:luv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:luv_emitter'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.transmutator('zpm_emitter_64')
        .itemInputs(
            '64x gtceu:mv_emitter',
            '8x gtnn:zpm_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:zpm_emitter'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.transmutator('uv_emitter_64')
        .itemInputs(
            '64x gtceu:hv_emitter',
            '8x gtnn:uv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uv_emitter'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.transmutator('uhv_emitter_64')
        .itemInputs(
            '64x gtceu:ev_emitter',
            '8x gtnn:uhv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uhv_emitter'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.transmutator('uev_emitter_64')
        .itemInputs(
            '64x gtceu:iv_emitter',
            '8x gtnn:uev_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uev_emitter'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UXV]);

    event.recipes.gtceu.transmutator('uiv_emitter_64')
        .itemInputs(
            '64x gtceu:luv_emitter',
            '8x gtnn:uiv_wwrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uiv_emitter'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.OpV]);

    event.recipes.gtceu.transmutator('uxv_emitter_64')
        .itemInputs(
            '64x gtceu:zpm_emitter',
            '8x gtnn:uxv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uxv_emitter'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.MAX]);

//Sensor

    event.recipes.gtceu.transmutator('luv_sensor_64')
        .itemInputs(
            '64x gtceu:lv_sensor',
            '8x gtnn:luv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:luv_sensor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.transmutator('zpm_sensor_64')
        .itemInputs(
            '64x gtceu:mv_sensor',
            '8x gtnn:zpm_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:zpm_sensor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.transmutator('uv_sensor_64')
        .itemInputs(
            '64x gtceu:hv_sensor',
            '8x gtnn:uv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uv_sensor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.transmutator('uhv_sensor_64')
        .itemInputs(
            '64x gtceu:ev_sensor',
            '8x gtnn:uhv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uhv_sensor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.transmutator('uev_sensor_64')
        .itemInputs(
            '64x gtceu:iv_sensor',
            '8x gtnn:uev_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uev_sensor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UXV]);

    event.recipes.gtceu.transmutator('uiv_sensor_64')
        .itemInputs(
            '64x gtceu:luv_sensor',
            '8x gtnn:uiv_wwrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uiv_sensor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.OpV]);

    event.recipes.gtceu.transmutator('uxv_sensor_64')
        .itemInputs(
            '64x gtceu:zpm_sensor',
            '8x gtnn:uxv_wrap_circuit'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 64),
            Fluid.of('gtceu:neutral_matter', 256),
            Fluid.of('gtceu:charged_matter', 256)
        )
        .itemOutputs(
            '64x gtceu:uxv_sensor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.MAX]);

//Capacitor

    event.recipes.gtceu.transmutator('luv_capacitor_64')
        .itemInputs(
            '64x gtceu:energy_crystal',
            '8x gtnn:luv_wrap_circuit',
            '16x gtnn:wrap_advanced_smd_capacitor',
            '64x gtceu:fine_electrum_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 128),
            Fluid.of('gtceu:neutral_matter', 512),
            Fluid.of('gtceu:charged_matter', 512)
        )
        .itemOutputs(
            '64x gtceu:lapotronic_energy_orb_cluster'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.ZPM]);

    event.recipes.gtceu.transmutator('zpm_capacitor_64')
        .itemInputs(
            '64x gtceu:lapotron_crystal',
            '8x gtnn:zpm_wrap_circuit',
            '32x gtnn:wrap_advanced_smd_capacitor',
            '64x gtceu:fine_platinum_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 128),
            Fluid.of('gtceu:neutral_matter', 512),
            Fluid.of('gtceu:charged_matter', 512)
        )
        .itemOutputs(
            '64x gtceu:energy_module'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UV]);

    event.recipes.gtceu.transmutator('uv_capacitor_64')
        .itemInputs(
            '64x gtceu:lapotronic_energy_orb',
            '8x gtnn:uv_wrap_circuit',
            '8x gtnn:wrap_optical_smd_capacitor',
            '64x gtceu:fine_naquadria_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 128),
            Fluid.of('gtceu:neutral_matter', 512),
            Fluid.of('gtceu:charged_matter', 512)
        )
        .itemOutputs(
            '64x gtceu:energy_cluster'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UHV]);

    event.recipes.gtceu.transmutator('uhv_capacitor_64')
        .itemInputs(
            '64x gtceu:lapotronic_energy_orb_cluster',
            '8x gtnn:uhv_wrap_circuit',
            '16x gtnn:wrap_optical_smd_capacitor',
            '64x gtceu:fine_americium_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 128),
            Fluid.of('gtceu:neutral_matter', 512),
            Fluid.of('gtceu:charged_matter', 512)
        )
        .itemOutputs(
            '64x qilby_core:dark_matter_capacitor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UEV]);

    event.recipes.gtceu.transmutator('uev_capacitor_64')
        .itemInputs(
            '64x gtceu:energy_module',
            '8x gtnn:uev_wrap_circuit',
            '12x gtnn:wrap_spintronic_smd_capacitor',
            '64x qilby_core:fine_stasis_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 128),
            Fluid.of('gtceu:neutral_matter', 512),
            Fluid.of('gtceu:charged_matter', 512)
        )
        .itemOutputs(
            '64x qilby_core:dark_energy_capacitor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UIV]);

    event.recipes.gtceu.transmutator('uiv_capacitor_64')
        .itemInputs(
            '64x gtceu:energy_cluster',
            '8x gtnn:uiv_wwrap_circuit',
            '24x gtnn:wrap_spintronic_smd_capacitor',
            '64x qilby_core:fine_dark_energy_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 128),
            Fluid.of('gtceu:neutral_matter', 512),
            Fluid.of('gtceu:charged_matter', 512)
        )
        .itemOutputs(
            '64x qilby_core:runic_energy_capacitor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.UXV]);

    event.recipes.gtceu.transmutator('uxv_capacitor_64')
        .itemInputs(
            '64x qilby_core:dark_matter_capacitor',
            '8x gtnn:uxv_wrap_circuit',
            '16x gtnn:wrap_cosmic_smd_capacitor',
            '64x qilby_core:fine_runic_stellarite_wire'
        )
        .inputFluids(
            Fluid.of('gtceu:uu_matter', 128),
            Fluid.of('gtceu:neutral_matter', 512),
            Fluid.of('gtceu:charged_matter', 512)
        )
        .itemOutputs(
            '64x qilby_core:stellar_energy_capacitor'
        )
        .duration(100)
        .CWUt(1536)
        .EUt(GTValues.V[GTValues.OpV]);
})


