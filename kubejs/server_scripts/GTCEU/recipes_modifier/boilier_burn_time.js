ServerEvents.recipes(event => {

    event.forEachRecipe({type:'gtceu:large_boiler'},r => {
        try{
            let duration = r.get('duration');
            r.set('duration',duration * 10);
        }
        catch(_){}
    })

})