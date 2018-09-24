function NowPlaying(arr){
    let song = arr[0];
    let singer = arr[1];
    let duration = arr[2];

    console.log(`Now Playing: ${singer} – ${song} [${duration}]`);
}

NowPlaying(['Number One', 'Nelly', '4:09']);

