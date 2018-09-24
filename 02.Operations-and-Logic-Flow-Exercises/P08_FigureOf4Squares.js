function DrawFigure(n){
    let rows = n % 2 === 0? n - 1 : n;
    let mid = rows %  2 === 0? parseInt(rows/2) : parseInt((rows + 1) /2);

    for(let row = 1; row <= rows; row++){
        if(row === 1 || row === mid || row === rows){
            console.log("+" + "-".repeat(n-2) + "+" + "-".repeat(n-2) + "+");
        }
        else{
            console.log("|" + " ".repeat(n-2) + "|" + " ".repeat(n-2) + "|");
        }
    }
}

DrawFigure(4);
DrawFigure(5);
DrawFigure(6);
