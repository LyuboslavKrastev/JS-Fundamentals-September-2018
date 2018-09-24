function GradsToDegrees(input){
    let grads = +input;

    grads %= 400;

    if(grads < 0){
        grads += 400;
    }

    let degrees = grads * 0.9;
    console.log(degrees);
}

GradsToDegrees(100);
GradsToDegrees(400);
GradsToDegrees(850);
GradsToDegrees(-50);

