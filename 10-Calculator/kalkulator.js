/*

    calculator 1
function tambah() {
    let angka2 = parseFloat(document.calculator.angka2.value);
    let angka1 = parseFloat(document.calculator.angka1.value);
    let hasilAngka = angka1 + angka2;
    document.calculator.hasil.value = hasilAngka;
}
function kurang() {
    let angka2 = parseFloat(document.calculator.angka2.value);
    let angka1 = parseFloat(document.calculator.angka1.value);
    let hasilAngka = angka1 - angka2;
    document.calculator.hasil.value = hasilAngka;
}
function kali() {
    let angka2 = parseFloat(document.calculator.angka2.value);
    let angka1 = parseFloat(document.calculator.angka1.value);
    let hasilAngka = angka1 * angka2;
    document.calculator.hasil.value = hasilAngka;
}
function bagi() {
    let angka2 = parseFloat(document.calculator.angka2.value);
    let angka1 = parseFloat(document.calculator.angka1.value);
    let hasilAngka = angka1 / angka2;
    document.calculator.hasil.value = hasilAngka;
} */



// calculator 2

// tangkap tampil
let tampil = document.formAngka.isiText;

function ins(num) {
    tampil.value = tampil.value + num;
}

function clear() {
    tampil.value = '';
}

function bckps() {
    tampil.value = tampil.value.substr(0, tampil.value.length - 1);
}

function samaDengan() {
    tampil.value = eval(tampil.value);
}