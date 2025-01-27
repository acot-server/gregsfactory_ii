GTCEuStartupEvents.craftingComponents(event => {
    //PLATE
    event.modifyUnificationEntry(CraftingComponent.PLATE, GTValues.UHV, new UnificationEntry('plate', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.PLATE, GTValues.UEV, new UnificationEntry('plate', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.PLATE, GTValues.UIV, new UnificationEntry('plate', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.PLATE, GTValues.UXV, new UnificationEntry('plate', 'qilby_core:stellarite'))
    event.modifyUnificationEntry(CraftingComponent.PLATE, GTValues.OpV, new UnificationEntry('plate', 'qilby_core:fabric_of_reality'))

    //CABLE - 1x
    event.modifyUnificationEntry(CraftingComponent.CABLE, GTValues.UHV, new UnificationEntry('cableGtSingle', 'gtceu:europium'))
    event.modifyUnificationEntry(CraftingComponent.CABLE, GTValues.UEV, new UnificationEntry('cableGtSingle', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.CABLE, GTValues.UIV, new UnificationEntry('cableGtSingle', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.CABLE, GTValues.UXV, new UnificationEntry('cableGtSingle', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE, GTValues.OpV, new UnificationEntry('cableGtSingle', 'qilby_core:stellarite'))

    //CABLE - 2x
    event.modifyUnificationEntry(CraftingComponent.CABLE_DOUBLE, GTValues.UHV, new UnificationEntry('cableGtDouble', 'gtceu:europium'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_DOUBLE, GTValues.UEV, new UnificationEntry('cableGtDouble', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_DOUBLE, GTValues.UIV, new UnificationEntry('cableGtDouble', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_DOUBLE, GTValues.UXV, new UnificationEntry('cableGtDouble', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_DOUBLE, GTValues.OpV, new UnificationEntry('cableGtDouble', 'qilby_core:stellarite'))

    //CABLE - 4x
    event.modifyUnificationEntry(CraftingComponent.CABLE_QUAD, GTValues.UHV, new UnificationEntry('cableGtQuadruple', 'gtceu:europium'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_QUAD, GTValues.UEV, new UnificationEntry('cableGtQuadruple', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_QUAD, GTValues.UIV, new UnificationEntry('cableGtQuadruple', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_QUAD, GTValues.UXV, new UnificationEntry('cableGtQuadruple', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_QUAD, GTValues.OpV, new UnificationEntry('cableGtQuadruple', 'qilby_core:stellarite'))

    //CABLE - 8x
    event.modifyUnificationEntry(CraftingComponent.CABLE_OCT, GTValues.UHV, new UnificationEntry('cableGtOctal', 'gtceu:europium'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_OCT, GTValues.UEV, new UnificationEntry('cableGtOctal', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_OCT, GTValues.UIV, new UnificationEntry('cableGtOctal', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_OCT, GTValues.UXV, new UnificationEntry('cableGtOctal', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_OCT, GTValues.OpV, new UnificationEntry('cableGtOctal', 'qilby_core:stellarite'))

    //CABLE - 16x
    event.modifyUnificationEntry(CraftingComponent.CABLE_HEX, GTValues.UHV, new UnificationEntry('cableGtHex', 'gtceu:europium'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_HEX, GTValues.UEV, new UnificationEntry('cableGtHex', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_HEX, GTValues.UIV, new UnificationEntry('cableGtHex', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_HEX, GTValues.UXV, new UnificationEntry('cableGtHex', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_HEX, GTValues.OpV, new UnificationEntry('cableGtHex', 'qilby_core:stellarite'))

    //CABLE TIER UP - 1x
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP, GTValues.UHV, new UnificationEntry('cableGtSingle', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP, GTValues.UEV, new UnificationEntry('cableGtSingle', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP, GTValues.UIV, new UnificationEntry('cableGtSingle', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP, GTValues.UXV, new UnificationEntry('cableGtSingle', 'qilby_core:stellarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP, GTValues.OpV, new UnificationEntry('cableGtSingle', 'qilby_core:fabric_of_reality'))
    
    //CABLE TIER UP - 2x
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_DOUBLE, GTValues.UHV, new UnificationEntry('cableGtDouble', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_DOUBLE, GTValues.UEV, new UnificationEntry('cableGtDouble', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_DOUBLE, GTValues.UIV, new UnificationEntry('cableGtDouble', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_DOUBLE, GTValues.UXV, new UnificationEntry('cableGtDouble', 'qilby_core:stellarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_DOUBLE, GTValues.OpV, new UnificationEntry('cableGtDouble', 'qilby_core:fabric_of_reality'))

    //CABLE TIER UP - 4x
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_QUAD, GTValues.UHV, new UnificationEntry('cableGtQuadruple', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_QUAD, GTValues.UEV, new UnificationEntry('cableGtQuadruple', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_QUAD, GTValues.UIV, new UnificationEntry('cableGtQuadruple', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_QUAD, GTValues.UXV, new UnificationEntry('cableGtQuadruple', 'qilby_core:stellarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_QUAD, GTValues.OpV, new UnificationEntry('cableGtQuadruple', 'qilby_core:fabric_of_reality'))

    //CABLE TIER UP - 8x
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_OCT, GTValues.UHV, new UnificationEntry('cableGtOctal', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_OCT, GTValues.UEV, new UnificationEntry('cableGtOctal', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_OCT, GTValues.UIV, new UnificationEntry('cableGtOctal', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_OCT, GTValues.UXV, new UnificationEntry('cableGtOctal', 'qilby_core:stellarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_OCT, GTValues.OpV, new UnificationEntry('cableGtOctal', 'qilby_core:fabric_of_reality'))

    //CABLE TIER UP - 16x
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_HEX, GTValues.UHV, new UnificationEntry('cableGtHex', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_HEX, GTValues.UEV, new UnificationEntry('cableGtHex', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_HEX, GTValues.UIV, new UnificationEntry('cableGtHex', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_HEX, GTValues.UXV, new UnificationEntry('cableGtHex', 'qilby_core:stellarite'))
    event.modifyUnificationEntry(CraftingComponent.CABLE_TIER_UP_HEX, GTValues.OpV, new UnificationEntry('cableGtHex', 'qilby_core:fabric_of_reality'))

    //WIRE - 1x
    event.modifyUnificationEntry(CraftingComponent.WIRE_ELECTRIC, GTValues.UHV, new UnificationEntry('wireGtSingle', 'gtceu:europium'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_ELECTRIC, GTValues.UEV, new UnificationEntry('wireGtSingle', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_ELECTRIC, GTValues.UIV, new UnificationEntry('wireGtSingle', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_ELECTRIC, GTValues.UXV, new UnificationEntry('wireGtSingle', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_ELECTRIC, GTValues.OpV, new UnificationEntry('wireGtSingle', 'qilby_core:stellarite'))

    //WIRE - 4x
    event.modifyUnificationEntry(CraftingComponent.WIRE_QUAD, GTValues.UHV, new UnificationEntry('wireGtQuadruple', 'gtceu:europium'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_QUAD, GTValues.UEV, new UnificationEntry('wireGtQuadruple', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_QUAD, GTValues.UIV, new UnificationEntry('wireGtQuadruple', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_QUAD, GTValues.UXV, new UnificationEntry('wireGtQuadruple', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_QUAD, GTValues.OpV, new UnificationEntry('wireGtQuadruple', 'qilby_core:stellarite'))

    //WIRE - 8x
    event.modifyUnificationEntry(CraftingComponent.WIRE_OCT, GTValues.UHV, new UnificationEntry('wireGtOctal', 'gtceu:europium'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_OCT, GTValues.UEV, new UnificationEntry('wireGtOctal', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_OCT, GTValues.UIV, new UnificationEntry('wireGtOctal', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_OCT, GTValues.UXV, new UnificationEntry('wireGtOctal', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_OCT, GTValues.OpV, new UnificationEntry('wireGtOctal', 'qilby_core:stellarite'))

    //WIRE - 16x
    event.modifyUnificationEntry(CraftingComponent.WIRE_HEX, GTValues.UHV, new UnificationEntry('wireGtHex', 'gtceu:europium'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_HEX, GTValues.UEV, new UnificationEntry('wireGtHex', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_HEX, GTValues.UIV, new UnificationEntry('wireGtHex', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_HEX, GTValues.UXV, new UnificationEntry('wireGtHex', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.WIRE_HEX, GTValues.OpV, new UnificationEntry('wireGtHex', 'qilby_core:stellarite'))

    //GLASS
    event.modifyItem(CraftingComponent.GLASS, GTValues.UHV, 'gtceu:fusion_glass')
    event.modifyItem(CraftingComponent.GLASS, GTValues.UEV, 'gtceu:fusion_glass')
    event.modifyItem(CraftingComponent.GLASS, GTValues.UIV, 'gtceu:fusion_glass')
    event.modifyItem(CraftingComponent.GLASS, GTValues.UXV, 'gtceu:fusion_glass')
    event.modifyItem(CraftingComponent.GLASS, GTValues.OpV, 'gtceu:fusion_glass')
    event.modifyItem(CraftingComponent.GLASS, GTValues.MAX, 'gtceu:fusion_glass')

    //ROTOR
    event.modifyUnificationEntry(CraftingComponent.ROTOR, GTValues.UHV, new UnificationEntry('rotor', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.ROTOR, GTValues.UEV, new UnificationEntry('rotor', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.ROTOR, GTValues.UIV, new UnificationEntry('rotor', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.ROTOR, GTValues.UXV, new UnificationEntry('rotor', 'qilby_core:stellarite'))
    event.modifyUnificationEntry(CraftingComponent.ROTOR, GTValues.OpV, new UnificationEntry('rotor', 'qilby_core:fabric_of_reality'))

    //BUZZSAW


    //COIL HEATING
    event.modifyUnificationEntry(CraftingComponent.COIL_HEATING, GTValues.UHV, new UnificationEntry('wireGtDouble', 'gtceu:europium'))
    event.modifyUnificationEntry(CraftingComponent.COIL_HEATING, GTValues.UEV, new UnificationEntry('wireGtDouble', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.COIL_HEATING, GTValues.UIV, new UnificationEntry('wireGtDouble', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.COIL_HEATING, GTValues.UXV, new UnificationEntry('wireGtDouble', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.COIL_HEATING, GTValues.OpV, new UnificationEntry('wireGtDouble', 'qilby_core:stellarite'))

    //COIL HEATING DOUBLE
    event.modifyUnificationEntry(CraftingComponent.COIL_HEATING_DOUBLE, GTValues.UHV, new UnificationEntry('wireGtQuadruple', 'gtceu:europium'))
    event.modifyUnificationEntry(CraftingComponent.COIL_HEATING_DOUBLE, GTValues.UEV, new UnificationEntry('wireGtQuadruple', 'qilby_core:dark_matter'))
    event.modifyUnificationEntry(CraftingComponent.COIL_HEATING_DOUBLE, GTValues.UIV, new UnificationEntry('wireGtQuadruple', 'qilby_core:dark_energy'))
    event.modifyUnificationEntry(CraftingComponent.COIL_HEATING_DOUBLE, GTValues.UXV, new UnificationEntry('wireGtQuadruple', 'qilby_core:runic_stelarite'))
    event.modifyUnificationEntry(CraftingComponent.COIL_HEATING_DOUBLE, GTValues.OpV, new UnificationEntry('wireGtQuadruple', 'qilby_core:stellarite'))
})