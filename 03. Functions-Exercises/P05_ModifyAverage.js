function modifyAvg(num){
    let numString = num.toString();

    let sumDigits = function(number){
        let sum = 0;
        for(let i = 0; i < number.length; i++){
            sum += +number[i];
        }
        return sum;
    }
    
    let result = sumDigits(numString);
    let average = result / numString.length;
    while (average <= 5){
        numString += '9';
        result = sumDigits(numString);
        average = result / numString.length;
    }

    return numString;
}

console.log(modifyAvg(5835));
