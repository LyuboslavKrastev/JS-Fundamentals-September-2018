function CalculateDistance(x1, y1, x2, y2){
    let firstPoint = {x1, y1};
    let secondPoint = {x2, y2};
    let a = firstPoint.x1 - secondPoint.x2;
    let b = firstPoint.y1 - secondPoint.y2;

    let distance = Math.sqrt(a * a + b * b)
    console.log(distance);
}

CalculateDistance(2.34, 15.66, -13.55, -2.9985);