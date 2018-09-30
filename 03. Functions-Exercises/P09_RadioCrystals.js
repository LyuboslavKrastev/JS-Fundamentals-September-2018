function solve(input){

    let desiredThickness = +input[0];

    let cut = (n) => n/4;;
    let lap = (n) => n * 0.8;
    let grind = (n) => n - 20;
    let etch = (n) => n - 2;
    let xRay = (n) => n + 1;
    let transportAndWash = (n) => parseInt(n);
 

    for(let i = 1; i < input.length; i++){
        let currentThickness = input[i];
        let cuts = 0;
        let laps = 0;
        let grinds = 0;
        let etches =0;

        console.log(`Processing chunk ${currentThickness} microns`);

        while(cut(currentThickness) >= desiredThickness - 1){
            currentThickness = cut(currentThickness);
            cuts++;
        }
        if(cuts > 0){
            console.log(`Cut x${cuts}`);
            console.log(`Transporting and washing`);
            currentThickness = transportAndWash(currentThickness);
        }

        while(lap(currentThickness) >= desiredThickness - 1){
            currentThickness = lap(currentThickness);
            laps++;
        }           
        if(laps > 0){
            console.log(`Lap x${laps}`);       
            console.log(`Transporting and washing`);
            currentThickness = transportAndWash(currentThickness);
        }       

        while(grind(currentThickness) >= desiredThickness - 1){
            currentThickness = grind(currentThickness);
            grinds++;
        }
        if(grinds > 0){
            console.log(`Grind x${grinds}`)
            console.log(`Transporting and washing`);
            currentThickness = transportAndWash(currentThickness);
        }

        while(etch(currentThickness) >= desiredThickness - 1){
            currentThickness = etch(currentThickness);
            etches++;
        }
        if(etches > 0){
            console.log(`Etch x${etches}`);
            console.log(`Transporting and washing`);              
            currentThickness = transportAndWash(currentThickness);
        }

        if(xRay(currentThickness) === desiredThickness){
            currentThickness = xRay(currentThickness);
            console.log(`X-ray x1`);  
            console.log(`Finished crystal ${desiredThickness} microns`);
        }
        else{
            console.log(`Finished crystal ${desiredThickness} microns`);
        }       
    }
}

solve([1375, 50000]);
solve([1000, 4000, 8100]);
