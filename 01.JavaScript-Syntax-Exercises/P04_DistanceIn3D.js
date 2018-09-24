function CalculateDistanceIn3D(arr){
    let firstPoint = {x:arr[0], y:arr[1], z:arr[2]};
    let secondPoint = {x:arr[3], y:arr[4], z:arr[5]};

    let x = Math.abs(firstPoint.x - secondPoint.x);
    let y = Math.abs(firstPoint.y - secondPoint.y);
    let z = Math.abs(firstPoint.z - secondPoint.z);

    let testX = Math.pow(x, 2);
    let testY = Math.pow(y, 2);
    let testZ = Math.pow(z, 2);
    let d = Math.sqrt(testX + testY + testZ);

    console.log(d);
}

CalculateDistanceIn3D([3.5, 0, 1, 0, 2, -1]);

