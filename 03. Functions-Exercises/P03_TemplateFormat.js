function templateFormat(input){
    console.log(`<?xml version="1.0" encoding="UTF-8"?>
<quiz>`);

    for (let i = 0; i < input.length; i++){
        if(i % 2 == 0){ // question
            console.log(`  <question>
        ${input[i]}
    </question>`)
        }
        else{ // answer
            console.log(`  <answer>
        ${input[i]}
    </answer>`)
        }
    }
    console.log(`</quiz>`);
}

templateFormat('Dry ice is a frozen form of which gas?');



 


