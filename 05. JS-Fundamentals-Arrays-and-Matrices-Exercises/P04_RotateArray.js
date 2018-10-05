function rotateArray(arr){
    let rotations = +arr.pop();

    let optimizedRotations = rotations % arr.length;

    for(let i = 0; i < optimizedRotations; i++){
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '25']);
