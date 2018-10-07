function getOrbit([width, height,x ,y]){
    let matrix = [];

    for(let row=0; row<height; row++){
        let rowDistance = Math.abs(row - x);
        if(!matrix[row]) matrix[row] = [];
        for(let col=0; col<width; col++){

            if(row === x && col === y){
                matrix[row][col] = 1;
                continue;
            }
            let colDistance = Math.abs(col-y);
            let number = Math.max(colDistance, rowDistance);

                matrix[row][col] = ++number;
        }
    }

    matrix.forEach(arr => {
        console.log(arr.join(' '));
    })
}

getOrbit([4, 4, 0, 0]);
getOrbit([5, 5, 2, 2]);
