function AggregateElements(arr){

    let sum = function(input){
        let result = 0;
        for (let n of input){
            result += +n;
        }
        return result;
    }

    let sumInverse = function(input){
        let result = 0;
        for (let n of input){
            result += +1/n;
        }
        return result;  
    }

    let aggregate = function(input){
        let result = '';
        for (let n of input){
            result += n;
        }
        return result;
    }

    console.log(sum(arr));
    console.log(sumInverse(arr));
    console.log(aggregate(arr));
}
AggregateElements([1, 2, 3]);

