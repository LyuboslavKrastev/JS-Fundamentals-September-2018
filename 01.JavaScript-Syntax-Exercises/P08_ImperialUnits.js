function CalculateFeetAndInches(numInInches){
    let feet = parseInt(numInInches / 12);
    let inches = parseInt(numInInches % 12);
    
    console.log(feet + "\'" + "-" + inches + "\"");
}

CalculateFeetAndInches(11);

