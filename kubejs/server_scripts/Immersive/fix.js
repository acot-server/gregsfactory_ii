ServerEvents.recipes((event) => {
    event.remove({ output: "gtceu:treated_wood_planks"})
    event.shaped('gtceu:treated_wood_planks', ["CXC", "CCC", "CCC"], {
        C: "#minecraft:planks",
        X: "#qilby:creosote_bucket"
    })
});