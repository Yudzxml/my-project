const sound = document.getElementById('sound');
const beatAnimation = document.getElementById('beat-animation');

// Event listener untuk elemen audio
sound.addEventListener('play', () => {
    beatAnimation.classList.add('active'); // Mulai animasi
});

sound.addEventListener('pause', () => {
    beatAnimation.classList.remove('active'); // Hentikan animasi
});

sound.addEventListener('ended', () => {
    beatAnimation.classList.remove('active'); // Hentikan animasi saat audio selesai
});
