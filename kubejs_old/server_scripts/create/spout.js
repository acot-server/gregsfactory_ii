ServerEvents.recipes(event => {
    //Tin Cable
    event.recipes.create.filling('gtceu:tin_single_cable', [Fluid.of('gtceu:rubber', 180), 'gtceu:tin_single_wire']);
    event.recipes.create.filling('gtceu:tin_double_cable', [Fluid.of('gtceu:rubber', 180), 'gtceu:tin_double_wire']);
    event.recipes.create.filling('gtceu:tin_quadruple_cable', [Fluid.of('gtceu:rubber', 360), 'gtceu:tin_quadruple_wire']);
    event.recipes.create.filling('gtceu:tin_octal_cable', [Fluid.of('gtceu:rubber', 540), 'gtceu:tin_octal_wire']);
    event.recipes.create.filling('gtceu:tin_hex_cable', [Fluid.of('gtceu:rubber', 900), 'gtceu:tin_hex_wire']);
    //Copper Cable
    event.recipes.create.filling('gtceu:copper_single_cable', [Fluid.of('gtceu:rubber', 180), 'gtceu:copper_single_wire']);
    event.recipes.create.filling('gtceu:copper_double_cable', [Fluid.of('gtceu:rubber', 180), 'gtceu:copper_double_wire']);
    event.recipes.create.filling('gtceu:copper_quadruple_cable', [Fluid.of('gtceu:rubber', 360), 'gtceu:copper_quadruple_wire']);
    event.recipes.create.filling('gtceu:copper_octal_cable', [Fluid.of('gtceu:rubber', 540), 'gtceu:copper_octal_wire']);
    event.recipes.create.filling('gtceu:copper_hex_cable', [Fluid.of('gtceu:rubber', 900), 'gtceu:copper_hex_wire']);
    //Red Alloy Cable
    event.recipes.create.filling('gtceu:red_alloy_single_cable', [Fluid.of('gtceu:rubber', 180), 'gtceu:red_alloy_single_wire']);
    event.recipes.create.filling('gtceu:red_alloy_double_cable', [Fluid.of('gtceu:rubber', 180), 'gtceu:red_alloy_double_wire']);
    event.recipes.create.filling('gtceu:red_alloy_quadruple_cable', [Fluid.of('gtceu:rubber', 360), 'gtceu:red_alloy_quadruple_wire']);
    event.recipes.create.filling('gtceu:red_alloy_octal_cable', [Fluid.of('gtceu:rubber', 540), 'gtceu:red_alloy_octal_wire']);
    event.recipes.create.filling('gtceu:red_alloy_hex_cable', [Fluid.of('gtceu:rubber', 900), 'gtceu:red_alloy_hex_wire']);

})