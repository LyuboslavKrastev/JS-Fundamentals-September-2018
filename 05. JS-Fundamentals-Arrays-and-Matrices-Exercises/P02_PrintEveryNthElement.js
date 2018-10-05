function nthElement(arr){
    let step = +arr.pop();

    arr.forEach((element, index) => {
        if(index%step === 0){
            console.log(element);
        }
    })
}
 