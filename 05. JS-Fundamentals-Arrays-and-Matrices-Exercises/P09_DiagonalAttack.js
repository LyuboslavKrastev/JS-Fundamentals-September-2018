function diagonalAttack(input){
    //convert the strings to string arrays and after that convert the strings to numbers
    let matrix = input
        .map(row => row.split(' ')
        .map(n => +n)); 

    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for(let row=0; row < matrix.length; row++){
        primaryDiagonal += matrix[row][row];
        secondaryDiagonal += matrix[row][matrix[row].length - row - 1];
    }

    if(primaryDiagonal === secondaryDiagonal){
        for(let row = 0; row < matrix.length; row++){
            for(let col = 0; col < matrix[row].length; col++){
                // if the element is a part of the primary or the secondary diagonal, skip it
                if(row === col || col === matrix[row].length - row - 1){ 
                    continue;
                }
                matrix[row][col] = primaryDiagonal;
            }
        }
    }

    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}

diagonalAttack(['5 3 12 3 1',
                '11 4 23 2 5',
                '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']);
