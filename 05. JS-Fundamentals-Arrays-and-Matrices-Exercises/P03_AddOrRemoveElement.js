function addOrRemove(arr){
    let newArr = [];
    let initialNumber = 1;

    for (let i = 0; i < arr.length; i++){
        if(arr[i] === 'add'){
            newArr.push(initialNumber);
        } else if(arr[i] === 'remove'){
            newArr.pop();
        }
        initialNumber++;
    }

    if(newArr.length === 0){
        console.log('Empty');
    }else{
        newArr.forEach(i =>console.log(i));
    }
}