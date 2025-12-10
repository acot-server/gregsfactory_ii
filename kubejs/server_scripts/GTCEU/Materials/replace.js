ServerEvents.recipes((event) => {
    const tiers = [
        "aluminium",
        "stainless_steel",
    ];
    const parts = [
        "rod",
        "plate",
        "long_rod",
        "ring",
        "round",
        "foil",
        "rotor"
    ];


    // Map of tier replacements
    const tierReplacements = {
        aluminium: "terrasteel",
        stainless_steel: "desh"
        // Add more replacements as needed
    };

    tiers.forEach(tier => {
        const replacementTier = tierReplacements[tier] //|| `source_imbued_${tier}`;
        parts.forEach(part => {
            event.replaceInput(
                { id: /^gtceu:(shaped\/)?electric_.*/ },
                `gtceu:${tier}_${part}`,
                `gtceu:${replacementTier}_${part}`
            );

            event.replaceInput(
                { id: /^gtceu:(assembler\/)?electric_.*/ },
                `gtceu:${tier}_${part}`,
                `gtceu:${replacementTier}_${part}`
            );
            event.replaceInput(
                { id: /^gtceu:(shaped\/)?robot_arm_.*/ },
                `gtceu:${tier}_${part}`,
                `gtceu:${replacementTier}_${part}`
            );
            event.replaceInput(
                { id: /^gtceu:(assembler\/)?robot_arm_.*/ },
                `gtceu:${tier}_${part}`,
                `gtceu:${replacementTier}_${part}`
            );
            event.replaceInput(
                { id: /^gtceu:(shaped\/)?sensor_.*/ },-
                `gtceu:${tier}_${part}`,
                `gtceu:${replacementTier}_${part}`
            );
            event.replaceInput(
                { id: /^gtceu:(assembler\/)?sensor_.*/ },
                `gtceu:${tier}_${part}`,
                `gtceu:${replacementTier}_${part}`
            );


        });
    });
})
