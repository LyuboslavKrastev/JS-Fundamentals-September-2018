function validate([x1, y1, x2, y2]){
    x1 = +x1;
    y1 = +y1;
    x2 = +x2;
    y2 = +y2;
    let getDistanceBetweenTwoPoints = function (x1, y1, x2, y2){
        let distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
        return distance;
    }

    let isValid = (distance) =>  Number.isInteger(distance)? 'valid' : 'invalid';  

    let distanceBetweenFirstPointAndStart = getDistanceBetweenTwoPoints(x1, y1, 0, 0);
    let distanceBetweenSecondPointAndStart = getDistanceBetweenTwoPoints(x2, y2, 0, 0);
    let distanceBetweenThePoints = getDistanceBetweenTwoPoints(x1, y1, x2, y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(distanceBetweenFirstPointAndStart)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid(distanceBetweenSecondPointAndStart)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(distanceBetweenThePoints)}`);
}

validate([3, 0, 0, 4]);
validate([2, 1, 1, 1]);
