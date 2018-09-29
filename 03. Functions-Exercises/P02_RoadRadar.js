function solve([speed, area]){
    let getLimit = function(zone){
        switch(zone){
            case 'motorway' : return 130;
            case 'interstate' : return 90;
            case 'city' : return 50;
            case 'residential' : return 20;
        }
    }

    let getInfraction = function(currentSpeed, areaLimit){
        let overSpeed = currentSpeed - areaLimit;
        if(overSpeed > 0){
            if(overSpeed <= 20){
                return 'speeding';
            }
            else if(overSpeed <= 40){
                return 'excessive speeding';
            }
            else{
                return 'reckless driving';
            }
        }
    }

    let limit = getLimit(area);
    let infraction = getInfraction(speed, limit);

    if(infraction){
        console.log(infraction);
    }
}

solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);
