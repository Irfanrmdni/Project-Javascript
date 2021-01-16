//membuat gambar thumb agar bisa di klik dan muncul full size nya

// tangkap class container nya
const container = document.querySelector('.container');

// tangkap class jumbo nya
const jumbo = document.querySelector('.jumbo');

// tangkap class thumb
const thumbs = document.querySelectorAll('.thumb');

// kasih event
container.addEventListener('click', function (e) {
    // cek apakah yang diklik adalah thumb nya
    if (e.target.className = 'thumb') {
        // maka ganti attribute src jumbo dengan elemen (e) yang di target src nya
        jumbo.src = e.target.src;

        // menambahkan class animasi fade
        jumbo.classList.add('fade');

        // menghapus class animasi fade
        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500);

        // looping thumbs jadi setiap elemen baru dari class thumb akan di representasikan menjadi thumb
        thumbs.forEach(function (thumb) {
            // cek ada gak yang class nya thumb punya active gak kalau ada hilangkan
            if (thumb.classList.contains('active')) {
                // kalau ada hapus class active nya
                thumb.classList.remove('active');
            }

            // thumb.className = 'thumb'; //cara 02
        });

        // menambahkan class active
        e.target.classList.add('active');
    }

});

