function extractNumbers(arr){
    let str = arr.join(' ');
    let result = str.split(/\D+/);

    console.log(result.filter(d => d !=="").join(' '));
}

extractNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);
