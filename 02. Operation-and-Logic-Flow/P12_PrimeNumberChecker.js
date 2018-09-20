function CheckIfPrime(num){
    if(num <= 1)
    {
     return false;
    }
    let prime = true;
    //if a number is not prime, then it must be divisible by at least one number, less or equal to its sqrt
    //thats why we use Math.sqrt(num) to optimize the loop
    for(let divider = 2; divider <= Math.sqrt(num); divider++){ 
        if(num % divider === 0){
            prime = false;
            break;
        }
    }
    return prime;
}

console.log(CheckIfPrime(7));
console.log(CheckIfPrime(8));
console.log(CheckIfPrime(81));
