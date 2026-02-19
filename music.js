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

let isRecording = false;
let startTime = 0;
let recordedNotes = [];

const btnRecord = document.getElementById('btn-record');
const btnPlay = document.getElementById('btn-play');

if (btnRecord) {
    btnRecord.addEventListener('click', toggleRecording);
}
if (btnPlay) {
    btnPlay.addEventListener('click', playRecording);
}

function toggleRecording() {
    if (!isRecording) {

        isRecording = true;
        startTime = Date.now();
        recordedNotes = [];
        btnRecord.textContent = 'Stop';
        btnRecord.classList.add('recording');
        btnPlay.disabled = true;
    } else {

        isRecording = false;
        btnRecord.textContent = 'Record';
        btnRecord.classList.remove('recording');
        btnPlay.disabled = recordedNotes.length === 0;
        console.log("Recording finished:", recordedNotes);
    }
}

function playRecording() {
    if (recordedNotes.length === 0 || isRecording) return;

    btnPlay.disabled = true;
    btnRecord.disabled = true;
    btnPlay.textContent = 'Playing...';

    recordedNotes.forEach(note => {
        setTimeout(() => {
            playSound(note.id, true);
        }, note.time);
    });


    const lastTime = recordedNotes[recordedNotes.length - 1].time;
    setTimeout(() => {
        btnPlay.disabled = false;
        btnRecord.disabled = false;
        btnPlay.textContent = 'Play';
    }, lastTime + 500);
}

function playSound(id, isPlayback = false) {
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

        if (isRecording && !isPlayback) {
            recordedNotes.push({
                id: id,
                time: Date.now() - startTime
            });
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

    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const key = e.key.toUpperCase();
    if (sounds[key]) {
        playSound(key);
    }
});
