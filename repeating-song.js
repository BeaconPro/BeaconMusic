const audioElement = document.getElementById('song');
const loopButton = document.getElementById('toggle-loop');

// Toggle the loop property
loopButton.addEventListener('click', () => {
    audioElement.loop = !audioElement.loop; // Toggle loop between true and false
    const loopStatus = audioElement.loop ? 'ON' : 'OFF';
    alert(`Loop is now ${loopStatus}`);
});