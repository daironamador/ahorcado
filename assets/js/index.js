'use strict'


// BOTONES
const btnStartGame = document.getElementById('startGame');
const btnToAddWord = document.getElementById('addWord');
const btnNewGame = document.getElementById('newGame');
const btnCancelGame = document.getElementById('gameCancel');
const btnSaveWord = document.getElementById('btnSaveWord');


// VARIABLES PARA GUARDAR PALABRAS
var wordsList = ['AMOR', 'PASION', 'CORAZON'];
var wordToSave = document.getElementById('addWord');




// FUNCIONES DE LOS BOTONES
btnStartGame.addEventListener('click', ()=>{
    document.getElementById('start-section').style.display ='none';
    document.getElementById('game-section').style.display = 'contents';
});

btnToAddWord.addEventListener('click', ()=>{
    document.getElementById('start-section').style.display ='none';
    document.getElementById('addword-section').style.display = 'contents';
});

btnCancelGame.addEventListener('click', ()=>{
    document.getElementById('start-section').style.display ='contents';
    document.getElementById('game-section').style.display = 'none';
});





/* ADD NEW WORD SECTION */
btnSaveWord.addEventListener('click', ()=>{
    if(wordsList.indexOf(wordToSave.value)=== -1 && typeof (wordToSave.value != 'string') ){
        alert('Aqui hay un maco')
    } else{
        wordsList.push(wordToSave.value);
        localStorage.setItem('palabras', JSON.stringify(wordsList));
        wordToSave.value='';
        document.getElementById('game-section').style.display ='contents';
        document.getElementById('addword-section').style.display = 'none';
    }
    
});

/*  GAME SECTION  */