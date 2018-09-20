function OddEvenOrInvalid(num){
    if(!Number.isInteger(num))
    {
        console.log("invalid");
    }
    else if(num % 2 === 0){
        console.log("even")
    }
    else{
        console.log("odd");
    }
}

OddEvenOrInvalid(5);
OddEvenOrInvalid(8)
OddEvenOrInvalid(1.5);
