// Track Data
const tracks = [
    {
        title: "Track Title 1",
        audio: "music/track1.mp3",
        cover: "images/album1.jpg"
    },
    {
        title: "Track Title 2",
        audio: "music/track2.mp3",
        cover: "images/album2.jpg"
    },
    {
        title: "Track Title 3",
        audio: "music/track3.mp3",
        cover: "images/album3.jpg"
    }
];

// Load track based on query parameter
function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    document.getElementById('track-title').innerText = track.title;
    document.getElementById('audio-source').src = track.audio;
    document.getElementById('album-cover').src = track.cover;
    document.getElementById('audio').load(); // Reload audio element
}

// Handle next and previous buttons
let currentTrackIndex = 0;

document.getElementById('prev').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
});

// Check URL for track parameter
const urlParams = new URLSearchParams(window.location.search);
const trackParam = parseInt(urlParams.get('track')) - 1; // URL is 1-based
if (!isNaN(trackParam) && trackParam >= 0 && trackParam < tracks.length) {
    currentTrackIndex = trackParam;
}

loadTrack(currentTrackIndex);
