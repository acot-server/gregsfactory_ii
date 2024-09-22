ServerEvents.recipes((event) => {
  event.shaped("gtceu:greenhouse", ["GGG", "CHC", "PUP"], {
    G: "gtceu:tempered_glass",
    C: "#gtceu:circuits/mv",
    H: "gtceu:mv_machine_hull",
    P: "gtceu:mv_electric_piston",
    U: "gtceu:mv_electric_pump",
  });
});
