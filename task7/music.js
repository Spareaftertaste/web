function playMusic() {
    var music = document.getElementById('music');
    var music_btn = document.getElementById('music_btn2');
    if (music.paused){
        music.play();
        music_btn.src='img/play.png'
    }
    else{
        music.pause();
        music_btn.src='img/pause.png'
    }
}