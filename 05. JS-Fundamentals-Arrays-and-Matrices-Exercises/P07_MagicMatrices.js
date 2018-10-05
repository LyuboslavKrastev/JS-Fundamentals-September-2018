function checkMatrix(input){
    let rowSums = [];
    let colSums = [];

    for(let row=0; row <input.length; row++){
        for(let col=0; col <input[row].length; col++){
            rowSums[row] = (rowSums[row] || 0) + input[row][col];
            colSums[col] = (colSums[col] || 0) + input[row][col];
        }
        if(row > 0){
            if(rowSums[row] !== rowSums[0]){
                return false;
            }
        }
    }

    return colSums.every(value => value === rowSums[0]);
}

checkMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );

   checkMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );

