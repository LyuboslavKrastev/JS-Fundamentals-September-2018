function findVar(input){
    let regex = /_[a-zA-Z0-9]+/g;
    let matches = input.match(regex);
    let result = [];

    matches.forEach(element => {
        result.push(element.substring(1));
    });

    console.log(result.join(','));
}

findVar('The _id and _age variables are both integers.');