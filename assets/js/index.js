'use strict'
//test palabra
let palabraShow;


// BOTONES
const btnStartGame = document.getElementById('startGame');
const btnToAddWord = document.getElementById('addWord');
const btnNewGame = document.getElementById('newGame');
const btnCancelGame = document.getElementById('gameCancel');
const btnSaveWord = document.getElementById('btnSaveWord');



//Keyboard
let keyboard = document.getElementById('correct-words');
let wrongWords = document.getElementById('wrong-words');

// VARIABLES PARA GUARDAR PALABRAS
var wordsList = ['AMOR', 'PASION', 'CORAZON'];
var wordToSave = document.getElementById('addWordTa');


// FUNCIONES DE LOS BOTONES
btnStartGame.addEventListener('click', ()=>{
    document.getElementById('start-section').style.display ='none';
    document.getElementById('game-section').style.display = 'contents';
    showLetters();
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
    if(typeof (wordToSave.value === 'string')){
        
        alert('Aqui hay un maco');
        console.log(wordsList);
        console.log(wordToSave.value);
        console.log(typeof (wordToSave.value));


    } else{
        wordsList.push(wordToSave.value);
        localStorage.setItem('palabras', JSON.stringify(wordsList));
        wordToSave.value='';
        document.getElementById('game-section').style.display ='contents';
        document.getElementById('addword-section').style.display = 'none';
    }
    
});

const muneco =['base','mastil','rope','head','body','left-hand','right-hand','left-leg','right-leg']
var attempts=0;
var hits=0;
var wrongs=0;



/*  GAME SECTION  */

document.addEventListener('keydown', (a)=>{
    // let randomItem = random[Math.floor(Math.random() * random.length)];
    var regex = /[^A-Z]/;
    if(a.key < 65 || a.key > 90){
        
    }else{
        if(palabraShow.includes(a.key) ){
            // alert('Acertaste, la opcion si era: '+randomItem);
        for(let i =0; i < palabraShow.length; i++){
            document.getElementsByClassName('text-'+a.key)[i].style.display='block';
    
            hits+= 1;
            console.log(hits, palabraShow.length);
    
    
                if(hits == palabraShow.length){
                    document.querySelector('#win').style.display='block';
                }
        }
        
        }else{
            attempts += 1;
            // alert('Perdiste la opcion era: '+randomItem+' Intento: '+attempts);
            document.getElementById(muneco[attempts-1]).style.display='block';
    
            let ww = document.createElement('span');
            ww.innerHTML = a.key;
            wrongWords.appendChild(ww);
    
            wrongs = attempts;
    
            if(wrongs == 9){
                document.querySelector('#lose').style.display='block';
            
            }
        }
    }
    
    
});


function showLetters(){

    var secuence = [Math.floor(Math.random() * wordsList.length)];


    for(let i = 0; i<wordsList[secuence].length; i++){
    let letters = document.createElement('h2');
    let cw = document.createElement('div');
    let line = document.createElement('div');
    
    var wordstoshow=[];

        wordstoshow.push(wordsList[secuence].split('')[i]);
        console.log();
        letters.innerHTML = wordstoshow;

        line.classList.add('linea');
        cw.classList.add('cw');
        cw.appendChild(letters);
        letters.classList.add('textHide', 'text-'+wordstoshow);
        // letters.setAttribute('id','text-'+wordstoshow);
        keyboard.appendChild(cw);
        cw.appendChild(line);
    }

    return palabraShow = wordsList[secuence];
}

function newGame(){
    hits = 0;
    wrongs = 0;
    keyboard.innerHTML="";
    wrongWords.innerHTML="";
    document.querySelector('#win').style.display='none';
    document.querySelector('#lose').style.display='none';
    showLetters();
}