document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playlist = document.getElementById('playlist');
    const songInput = document.getElementById('songInput');
    const addSongButton = document.getElementById('addSong');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const nextButton = document.getElementById('next');

    let songs = [];
    let currentSongIndex = 0;

    addSongButton.addEventListener('click', () => {
        const songUrl = songInput.value.trim();
        if (songUrl) {
            songs.push(songUrl);
            const songItem = document.createElement('li');
            songItem.textContent = songUrl;
            playlist.appendChild(songItem);
            songInput.value = '';
        }
    });

    playButton.addEventListener('click', () => {
        if (songs.length > 0) {
            audioPlayer.src = songs[currentSongIndex];
            audioPlayer.play();
        }
    });

    pauseButton.addEventListener('click', () => {
        audioPlayer.pause();
    });

    nextButton.addEventListener('click', () => {
        if (songs.length > 0) {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            audioPlayer.src = songs[currentSongIndex];
            audioPlayer.play();
        }
    });
});