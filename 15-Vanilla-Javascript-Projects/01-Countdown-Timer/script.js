// waktu tujuan
const waktu = '1 jan 2022';

const hariEl = document.getElementById('hari');
const menitEl = document.getElementById('menit');
const detikEl = document.getElementById('detik');
const jamEl = document.getElementById('jam');

function countDown() {
    const waktuSekarang = new Date();
    const waktuTujuan = new Date(waktu);
    const totalDetik = (waktuTujuan - waktuSekarang) / 1000;

    const hari = Math.floor((totalDetik / 3600 / 24));
    const jam = Math.floor(totalDetik / 3600) % 24;
    const menit = Math.floor(totalDetik / 60) % 60;
    const detik = Math.floor(totalDetik) % 60;

    hariEl.innerHTML = hari;
    menitEl.innerHTML = menit;
    detikEl.innerHTML = detik;
    jamEl.innerHTML = jam;

    if (totalDetik < 0) {
        clearInterval(countDown);
        hariEl.innerHTML = '0';
        menitEl.innerHTML = '0';
        detikEl.innerHTML = '0';
        jamEl.innerHTML = '0';
    }

    setInterval(countDown, 1000);

}

countDown();


