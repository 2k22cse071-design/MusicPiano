const musicFolder = 'Music/';

const sounds = {
    'D': 'freemanstudio-piano-sound-230348.mp3',
    'F': 'freesound_community-1-note-piano-104171.mp3',
    'G': 'freesound_community-b6-82017.mp3',
    'H': 'freesound_community-c3-95007.mp3',
    'I': 'freesound_community-c6-102822.mp3',
    'J': 'freesound_community-c6-82019.mp3',
    'K': 'freesound_community-d6-82020.mp3',
    'L': 'freesound_community-do-35686.mp3',
    'M': 'freesound_community-do-80236.mp3',
    'N': 'freesound_community-e6-82016.mp3',
    'O': 'freesound_community-f6-102819.mp3',
    'P': 'freesound_community-fa-78409.mp3',
    'Q': 'freesound_community-g6-82013.mp3',
    'R': 'freesound_community-la-80237.mp3',
    'S': 'freesound_community-piano-crash-sound-37898.mp3',
    'T': 'freesound_community-piano-g-6200.mp3',
    'U': 'freesound_community-piano125-39616.mp3',
    'V': 'freesound_community-si-80238.mp3',
    'W': 'stu9-drum-roll-2-377459.mp3',
    'X': 'u_0j4ztztsnn-4-piano-notes-377880.mp3',
    'Y': 'u_df365hdxp7-cinematic-piano-note-362716.mp3',
    'Z': 'freesound_community-c3-95007.mp3'
,    'A': 'freesound_community-c3-95007.mp3',
    // 'B': 'freesound_community-c3-95007.mp3',
    'C': 'freesound_community-c3-95007.mp3'

};

function playSound(id) {
    const filename = sounds[id];
    if (filename) {
        const audio = new Audio(musicFolder + filename);
        audio.play().catch(e => console.error("Audio play failed:", e));

        const btn = document.getElementById(id);
        if (btn) {
            btn.classList.add('active');
            setTimeout(() => btn.classList.remove('active'), 100);
        }
    }
}
Object.keys(sounds).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener('click', () => playSound(id));
    }
});
document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    if (sounds[key]) {
        playSound(key);
    }
});
