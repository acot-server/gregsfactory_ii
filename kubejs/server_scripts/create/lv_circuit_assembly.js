ServerEvents.recipes(ev => {
    let inter = 'kubejs:incomplete_lv_circuit_assembly'
    ev.recipes.create.sequenced_assembly(
        ['qilby_core:unsoldered_lv_circuit_assembly'], // need to create this item
        'gtceu:resin_printed_circuit_board',
        [
          ev.recipes.createDeploying(inter, [inter, 'gtceu:vacuum_tube']),
          ev.recipes.createDeploying(inter, [inter, 'gtceu:resistor']),
          ev.recipes.createDeploying(inter, [inter, 'gtceu:fine_red_alloy_wire']),
          ev.recipes.createPressing(inter, inter)
        ]
    ).transitionalItem(inter).loops(3);

    ev.recipes.create.cutting('16x qilby_core:mass_production_lv_circuit', 'qilby_core:lv_circuit_assembly');
  });
