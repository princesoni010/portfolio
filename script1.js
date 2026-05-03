document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    const typingElement = document.getElementById('typing');
    const words = ["Web Developer", "Developer", "Web Designer"];

    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let currentWord = words[wordIndex];
    let currentLetters = '';

    function type() {
        
        currentWord = words[wordIndex];

        if (isDeleting) {
            currentLetters = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            currentLetters = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        typingElement.innerHTML = currentLetters;

        let typeSpeed = 200;

        if (isDeleting) {
            typeSpeed /= 2;
        }

        
        if (!isDeleting && letterIndex === currentWord.length) {
            typeSpeed = 2000; 
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex++;
            if (wordIndex === words.length) {
                wordIndex = 0;
            }
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed); }

    type(); 
});