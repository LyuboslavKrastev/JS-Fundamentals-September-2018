
    function getMatrix(rows, cols) {
        let number = 0, maxNumber = rows * cols,  minRow = 0, minCol = 0,  maxRow = rows-1, maxCol = cols-1;
        let matrix = [];
        for (let r = 0; r < rows; r++) matrix[r] = [];
        while (number < maxNumber) {
            for (let col = minCol; col <= maxCol; col++) // go right
            {
                if(number >= maxNumber) break;
                matrix[minRow][col] = ++number;            
            }	
            minRow++;
            for (let row = minRow; row <= maxRow; row++){ //go down
                if(number >= maxNumber) break;
                matrix[row][maxCol] = ++number;
            }	
            maxCol--;
            for (let col = maxCol; col >= minCol; col--){ //go left
                if(number >= maxNumber) break;
                matrix[maxRow][col] = ++number;
            }	
            maxRow--;
            for (let row = maxRow; row >= minRow; row--){ //go up
                if(number >= maxNumber) break;
                matrix[row][minCol] = ++number;
            }
            minCol++;
        }

    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}

getMatrix(3, 3);
