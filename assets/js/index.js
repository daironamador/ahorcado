'use strict'

var btnStartGame = document.getElementById('startGame');
var btnAddWord = document.getElementById('addWord')

btnStartGame.addEventListener('click', ()=>{
    location.href='game.html';
});

btnAddWord.addEventListener('click', ()=>{
    location.href='addword.html';
});