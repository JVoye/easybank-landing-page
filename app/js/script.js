// const btnMenu = document.querySelector('#btnMenu'); // Originally targeted btnMenu itself
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

// const fade = document.querySelector('.fade');

const fadeElements = document.querySelectorAll('.fade');

btnMenu.addEventListener('click', function() {
    // console.log('burger has been opened!');

    if(header.classList.contains('open')) { // Close Burger Menu
        header.classList.remove('open');
        // overlay.classList.remove('fade-in');
        // overlay.classList.add('fade-out');

        // fade.classList.remove('fade-in');
        // fade.classList.add('fade-out');

         fadeElements.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    


    }
    else { // Open Burger Menu                               
        header.classList.add('open');
        // overlay.classList.remove('fade-out');
        // overlay.classList.add('fade-in');
        

        // fade.classList.remove('fade-out');
        // fade.classList.add('fade-in');

        fadeElements.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});