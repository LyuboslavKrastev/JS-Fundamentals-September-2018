function CalculateDistance(arr){
    let v1 = arr[0];
    let v2 = arr[1];
    let t = arr[2] / 3600;

    let s1 = v1 * t * 1000;
    let s2 = v2 * t * 1000;

    let delta = Math.abs(s1 - s2);

    console.log(delta);
}

CalculateDistance([5, -5, 40]);

