function buildDna(num){
    let rows = +num;
    let letterSequence = 'ATCGTTAGGG';
    let currentIndex = 0;
    let currentRow = 0;
    
    for(let i = 0; i < rows; i++){
        currentRow = currentRow === 4? 0 : currentRow;
        currentIndex = currentIndex === letterSequence.length? 0: currentIndex;

        if(currentRow === 0){
            console.log(`**${letterSequence[currentIndex++]}${letterSequence[currentIndex++]}**`);
        }
        else if(currentRow === 1 || currentRow === 3){
            console.log(`*${letterSequence[currentIndex++]}--${letterSequence[currentIndex++]}*`);
        }
        else{
            console.log(`${letterSequence[currentIndex++]}----${letterSequence[currentIndex++]}`);
        }
        currentRow++;
    }
}

buildDna(10);
