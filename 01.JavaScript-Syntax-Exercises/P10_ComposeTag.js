function ComposeTag(arr){
    let src = arr[0];
    let alt = arr[1];

    console.log(`<img src="${src}" alt="${alt}">`)
}

ComposeTag(['smiley.gif', 'Smiley Face']);
