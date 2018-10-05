function extractSequence(arr){
    let biggestElement = -Infinity;
    let result = [];

    arr.forEach((element, index) => {
        result = arr.filter((element, index) => element >biggestElement);
    });

    console.log(result);
    
}

extractSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
