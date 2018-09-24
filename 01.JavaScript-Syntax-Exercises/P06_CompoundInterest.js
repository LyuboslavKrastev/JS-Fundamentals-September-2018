function CalculateTotalAccumulatedValue([principalSum, interestRate, compoundingPeriod, timespan]){
    let compoundingFrequency = 12/compoundingPeriod;
    let compoundInterest = principalSum * Math.pow(1 + interestRate/100/compoundingFrequency, compoundingFrequency * timespan);
    console.log(compoundInterest)
}

CalculateTotalAccumulatedValue([1500, 4.3, 3, 6]);


