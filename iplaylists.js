function playSong(songName) {
  const currentSongElement = document.getElementById('current-song');
  currentSongElement.textContent = `Now playing: ${songName}`;
}

function addSong() {
  const newSongInput = document.getElementById('new-song');
  const songName = newSongInput.value.trim();

  if (songName) {
    const playlistElement = document.getElementById('playlist');
    const newSongElement = document.createElement('li');
    newSongElement.innerHTML = `${songName} <button onclick="playSong('${songName}')">Play</button>`;
    playlistElement.appendChild(newSongElement);

    newSongInput.value = ''; // Clear the input
  } else {
    alert('Please enter a song name.');
  }
}
