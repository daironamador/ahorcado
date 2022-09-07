'use strict'
const host = 'http://127.0.0.1:5500/';

if(window.location.href == host + 'addword.html' ){
    /* ADD NEW WORD SECTION */
var wordToSave = document.getElementById('addWord');
var btnSaveWord = document.getElementById('btnSaveWord');
var wordsList = ['AMOR', 'PASION', 'CORAZON'];


btnSaveWord.addEventListener('click', ()=>{
    if(wordsList.indexOf(wordToSave.value) !== -1 && typeof (wordToSave.value != 'string') ){
        alert('Aqui hay un maco')
    } else{
        wordsList.push(wordToSave.value);
        localStorage.setItem('palabras', JSON.stringify(wordsList));
        wordToSave.value='';
        location.href='game.html';
    }
    
});
}

/*  GAME SECTION  */