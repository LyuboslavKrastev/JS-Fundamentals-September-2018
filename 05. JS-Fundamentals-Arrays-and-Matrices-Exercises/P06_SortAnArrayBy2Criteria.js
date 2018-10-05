function sortArray(arr){
    function compareLength(a, b) {
        if(a.length > b.length){
            return 1;
        } else if(a.length < b.length){
            return -1;
        } else{
            return 0;
        }
    }
    function compareValue(a, b){
        if(a > b){
            return 1;
        } else if(a < b){
            return -1;
        } else{
            return 0;
        }
    }

    let result = arr.sort((a, b) => compareLength(a, b) || compareValue(a, b));
    console.log(result.join('\n'));
}


sortArray(['alpha', 'beta', 'gamma']);
sortArray(['a', 'beta', 'c']);
