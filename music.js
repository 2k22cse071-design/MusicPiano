const musicFolder = 'Music/24-piano-keys/';

const sounds = {
    'D': 'key01.mp3',
    'F': 'key02.mp3',
    'G': 'key03.mp3',
    'H': 'key04.mp3',
    'I': 'key05.mp3',
    'J': 'key06.mp3',
    'K': 'key07.mp3',
    'L': 'key08.mp3',
    'M': 'key09.mp3',
    'N': 'key10.mp3',
    'O': 'key11.mp3',
    'P': 'key12.mp3',
    'Q': 'key13.mp3',
    'R': 'key14.mp3',
    'S': 'key15.mp3',
    'T': 'key16.mp3',
    'U': 'key17.mp3',
    'V': 'key18.mp3',
    'W': 'key19.mp3',
    'X': 'key20.mp3',
    'Y': 'key21.mp3',
    'Z': 'key22.mp3',
    'A': 'key23.mp3',
    'C': 'key24.mp3'
};

function playSound(id) {
    const filename = sounds[id];
    if (filename) {
        const audio = new Audio(musicFolder + filename);
        audio.currentTime = 0;
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
