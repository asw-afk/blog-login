// const username = document.querySelector('#');
// const submitButton = document.querySelector('#submit');

// Access toggle switch HTML element 
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
        mode = 'light'; 
        container.setAttribute('class', 'light');
    }
    // If mode is light, apply dark background
    else {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
});

themeSwitcher.addEventListener('click', function() {

});


//testing
$("#button1").click(function() {
    location.replace("/page2.html");
});







// submitButton.addEventListener('click', function (event) {
//     event.preventDefault();

//     const user = {

//     }
// })