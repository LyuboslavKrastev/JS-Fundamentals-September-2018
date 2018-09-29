function wordsToUpper(input){
    let pattern = /[\W]+/;
    let words = input.split(pattern);

    words = words.filter(w => w != '');
    words = words.map((x) => x.toUpperCase());
    
    console.log(words.join(', '));
}

wordsToUpper('Hi, how are you?');