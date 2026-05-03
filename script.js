document.addEventListener('DOMContentLoaded',() =>{
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('nav')

hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('open');
})

const typingElemetnt = document.getElementById('typing');
const words = ["web Developer", "Developer" , "web Designer"];

let wordIndex = 0;
let LetterIndex = 0;
let currentWord = '';
let currentLatters = '';
let isDeleting = false;


function type(){
    if(isDeleting){
        currentLatters = currentWord.substring(0,LetterIndex-1);
        LatterIndex--;
    }else{
        currentLatters = currentWord.substring(0,LatterIndex+1)
        LatterIndex++;
    }
    typingElemetnt.innerHTML = currentLatters;
    let typeSpeed = 200;
    if(isDeleting){
        typeSpeed /=2;
    }
    if(!isDeleting && LetterIndex === currentWord.length){
        typeSpeed: 2000;
        isDeleting = true;
    }else if(isDeleting && LetterIndex ===0 ){
        isDeleting = false
        wordIndex++;

        if(wordIndex === words.length){
            wordIndex = 0;
        }
        currentword = words[wordIndex];
        typingSpeend = 500;

    }
    setTimeout(Type, typeSpeed);
}

currentWord = word[wordIndex];
type();
});