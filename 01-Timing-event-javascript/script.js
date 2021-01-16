// setTimeOut(fungsi yang akan dijalankan, lama waktu nya) <- ini parameter nya
// contoh 01 - dengan membuat dulu function nya
// setTimeout(tampilkanPesan, 3000) // -> nunggu 3 detik

// function tampilkanPesan() {
//     console.log('Hello World!');
// }

// contoh 02 - dengan langsung membuat function nya di dalam setTimeOut()
// setTimeout(function () {
//     console.log('Hello world!');

// }, 2000) // -> nunggu 2 detik

// contoh 03 - dengan membuat tombol untuk menghentikan lama waktu setTimeOut() 
// jadi ketika lama waktunya 5 detik kita mau hentikan hanya sampai 3 detik/2 detik/4 detik
// const waktu = setTimeout(function () {
//     console.log('Waktu sudah 5 detik'); // -> ketika waktu sudah 5 detik maka ini akan dijalankan

// }, 5000) // -> nunggu 5 detik

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function () {
//     clearTimeout(waktu); // -> menghentikan waktu dari variabel waktu yang memiliki setTimeOut()
//     console.log('waktu selesai'); // -> ketika waktu dihentikan oleh user dengan tombol kurang dari 5 detik maka ini akan dijalankan
// });

// setInterval(fungsi yang akan dijalankan, interval waktunya) <- ini parameter nya
// contoh 01 - ini akan dijalankan setiap 2 detik dan terus-menerus berulang 
// setInterval(function () {
//     console.log('Hello World!');
// }, 2000); > nunggu 2 detik-

// contoh 2 - dengan membuat tombol untuk menghentikan pengulangan waktu Interval nya jadi ketika tombol di klik 
// maka pengulangan nya berhenti
// const waktu = setInterval(function () {
//     console.log('Hello World!');
// }, 2000); // -> nunggu 2 detik

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function () {
//     clearInterval(waktu);
//     console.log('Hello world! dihentikan');
// });



// Membuat program waktu hitung mundur 17 desember 2020
// 01 - menentukan waktu sekarang (menghasilkan milidetik)
// const waktuSekarang = new Date().getTime();

// 02 - menentukan waktu tujuan (menghasilkan milidetik)
const waktuTujuan = new Date('dec 19 2020 12:16:00'); // -> 10 februari 2021 jam 12 menit 0 detik 0

// 03 - menentukan selisih waktu (waktuTujuan - waktuSekarang) (menghasilkan milidetik)
// const selisih = waktuTujuan - waktuSekarang;

// 04 - membuat format untuk mendapatkan hari (dengan dibulatkan angka nya menjadi decimal / tanpa koma)
// const hari = Math.floor(selisih / (1000 * 60 * 60 * 24)); // -> selisih / 1 detik * 60 detik * 60 menit * 24 jam (ini berarti 1 hari) jadi selisih / 1 hari

// 05 - membuat format untuk mendapatkan jam (dengan mendapatkan sisa pembagian hari lalu dibagi dengan jam)
// const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); // -> sisa pembagi hari dibagi dengan waktu jam

// 06 - membuat format untuk mendapatkan menit (dengan mendapatkan sisa pembagi jam lalu dibagi dengan 60 detik / 1 menit)
// const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));

// 07 - membuat format untuk mendapatkan detik (dengan mendapatkan sisa pembagi menit/60detik lalu dibagi dengan 1 detik)
// const detik = Math.floor(selisih % (1000 * 60) / 1000);

// 08 - menampilkan hari jam menit detik di HTML
// const waktu = document.getElementsByClassName('waktu')[0];
// waktu.innerHTML = 'Waktu anda tinggal : ' + hari + ' Hari ' + jam + ' Jam ' + menit + ' menit ' + detik + ' detik ';

// 09 - membuat agar waktu hitung mundur nya berjalan otomatis di HTML (dengan setInterval 1 detik)
const hitungMundur = setInterval(function () {
    const waktuSekarang = new Date().getTime();
    const selisih = waktuTujuan - waktuSekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);

    const waktu = document.getElementsByClassName('waktu')[0];
    waktu.innerHTML = 'Waktu anda tinggal : ' + hari + ' Hari ' + jam + ' Jam ' + menit + ' menit ' + detik + ' detik ';

    // membuat pengulangan berhenti ketika waktu hitung mundur sudah habis / 0
    if (selisih < 0) {
        clearInterval(hitungMundur);
        waktu.innerHTML = 'Waktu telah habis!!';
    }
}, 1000);