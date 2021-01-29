// data pertanyaan quiz
const quizData = [
   {
      pertanyaan: 'Indonesia merdeka pada tahun.... ?',

      a: '1970',
      b: '1928',
      c: '1970',
      d: '1945',

      jawabanQuizData: 'd'
   },
   {
      pertanyaan: 'Allah memiliki sifat Al Karim, artinya Allah Maha.... ?',

      a: 'Adil',
      b: 'Mulia',
      c: 'Akhir',
      d: 'Kokoh',

      jawabanQuizData: 'b'
   },
   {
      pertanyaan: 'Allah memiki sifat Al Karim, yang tercantum dalam surah.... ?',

      a: 'Al Hadid ayat 3',
      b: 'Al A’raf ayat 180',
      c: 'An Naml ayt 40',
      d: 'Taha ayat 8',

      jawabanQuizData: 'c'
   },
   {
      pertanyaan: 'Allah Maha Mengumpulkan merupakan arti dari.... ?',

      a: 'Al Jami',
      b: 'Al Adl',
      c: 'Al Akhir',
      d: 'Al Azim',

      jawabanQuizData: 'a'
   }
];

// elemen HTML
const quizEl = document.getElementById('quiz');
const pertanyaanEl = document.getElementById('pertanyaan');
const submitBtn = document.getElementById('submit');
const jawabanEl = document.querySelectorAll('.jawaban');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

// pertanyaan quiz sekarang
let currentQuiz = 0;
// Score sekarang
let score = 0;

// membuat pertanyaan quiz
function loadQuiz() {

   const currentQuizData = quizData[currentQuiz];

   pertanyaanEl.innerText = currentQuizData.pertanyaan;
   a_text.innerText = currentQuizData.a;
   b_text.innerText = currentQuizData.b;
   c_text.innerText = currentQuizData.c;
   d_text.innerText = currentQuizData.d;

   deselectAnswers();
}

loadQuiz();

// pilihan jawaban dari pertanyaan quiz
function getSelected() {
   let pilihanQuiz = undefined;

   jawabanEl.forEach(jawabEl => {
      if (jawabEl.checked) {
         pilihanQuiz = jawabEl.id;
      };
   });
   return pilihanQuiz;
}

// mengembalikan select ke semula 
function deselectAnswers() {
   jawabanEl.forEach(jawabEl => {
      jawabEl.checked = false;
   });
}

// button submit quiz
submitBtn.addEventListener('click', function () {
   // pilihan jawaban dari pertanyaan quiz   
   const jawab = getSelected();

   if (jawab) {
      if (jawab === quizData[currentQuiz].jawabanQuizData) {
         score++;
      }

      currentQuiz++;

      if (currentQuiz < quizData.length) {
         loadQuiz();
      } else {
         quizEl.innerHTML = `<h3>Selamat anda berhasil mendapatkan SCORE : <span class="scoreQuiz">${score}</span> / ${quizData.length} <button onclick="location.reload()" class="btnQuizEnd">Kembali</button></h3>`;
      }
   }

});