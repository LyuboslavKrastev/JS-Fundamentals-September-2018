function cooking(input){
    let number = +input[0];
    let chop = () => number / 2;
    let dice = () => Math.sqrt(number);
    let spice = () => number + 1;
    let bake = () => number * 3;
    let fillet = () => number - (number * 0.2);

    for(let i = 1; i < input.length; i++){
        let command = input[i];
        switch(command){
            case 'chop': number = chop(); break;
            case 'dice': number = dice(); break;
            case 'spice': number = spice(); break;
            case 'bake': number = bake(); break;
            case 'fillet': number = fillet(); break;
        }
        console.log(number);
    }
}

cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);